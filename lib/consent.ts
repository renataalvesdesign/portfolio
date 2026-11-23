/*
 * Cookie consent for Google Analytics, in Basic consent mode: no Google script
 * loads until the visitor accepts. Google Tag Manager (which holds the GA4
 * Google tag) is the only thing gated; the container is requested only after
 * analytics_storage is granted, so nothing reaches Google while the choice is
 * pending or declined.
 *
 * Order on every page (consentScript, inline in <head>):
 *   1. dataLayer and gtag
 *   2. consent default: everything denied
 *   3. a stored "granted" choice: consent update, then load GTM
 * The banner (React) comes after and calls grantConsent / denyConsent.
 *
 * The choice lives in localStorage for 12 months. Without storage (blocked or
 * private mode) it lasts until the page is reloaded, and the banner asks again.
 */

export const GTM_ID = "GTM-M3NJ7FKM"
export const GA_MEASUREMENT_ID = "G-C5Z96KLVZ7"

const STORAGE_KEY = "cookie-consent"
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000
// Official GA opt-out flag: the tag checks it before setting cookies or sending
const GA_DISABLE_KEY = `ga-disable-${GA_MEASUREMENT_ID}`
// GA4 cookies: the client id and the session cookie of this property
const GA_COOKIES = ["_ga", `_ga_${GA_MEASUREMENT_ID.replace(/^G-/, "")}`]

// No advertising on this site: ads stay denied whatever the choice
const DEFAULT_CONSENT = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
}

export type ConsentChoice = "granted" | "denied"

declare global {
  interface Window {
    dataLayer: unknown[]
    __gtmStarted?: boolean
  }
}

// --- Shared with the inline <head> script ------------------------------------
// These two are serialized with toString() into consentScript, so they must be
// self-contained: only their arguments and browser globals, no imports.

/** Stored choice, or null when there is none, it expired or storage is blocked. */
function readStoredChoice(key: string, maxAgeMs: number): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return null
    const stored = JSON.parse(raw)
    const valid =
      (stored.choice === "granted" || stored.choice === "denied") &&
      typeof stored.savedAt === "number" &&
      Date.now() - stored.savedAt < maxAgeMs
    if (!valid) {
      window.localStorage.removeItem(key)
      return null
    }
    return stored.choice
  } catch {
    return null
  }
}

/** GTM install code from the GTM panel, run once and only after consent. */
function startGoogleTagManager(id: string) {
  if (window.__gtmStarted) return
  window.__gtmStarted = true
  window.dataLayer = window.dataLayer || []
  // gtag commands must be pushed as an arguments object
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  gtag("js", new Date())
  const script = document.createElement("script")
  script.async = true
  script.src = "https://www.googletagmanager.com/gtm.js?id=" + id
  document.head.appendChild(script)
}

/**
 * Inline <head> script, before any other script on the page. Pushing to
 * dataLayer sends nothing: it is a plain array until gtm.js loads and reads it.
 */
export const consentScript = `(function(){
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',${JSON.stringify(DEFAULT_CONSENT)});
var choice=(${readStoredChoice.toString()})(${JSON.stringify(STORAGE_KEY)},${MAX_AGE_MS});
if(choice==='granted'){
gtag('consent','update',{analytics_storage:'granted'});
(${startGoogleTagManager.toString()})(${JSON.stringify(GTM_ID)});
}else{window[${JSON.stringify(GA_DISABLE_KEY)}]=true;}
})()`

// --- Client side ---------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments)
}

function setGaDisabled(disabled: boolean) {
  ;(window as unknown as Record<string, unknown>)[GA_DISABLE_KEY] = disabled
}

function saveChoice(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ choice, savedAt: Date.now() })
    )
  } catch {
    // Storage blocked: the choice holds until the page reloads
  }
}

/** Expires the GA4 cookies on the host and each parent domain that accepts them. */
function deleteAnalyticsCookies() {
  const parts = window.location.hostname.split(".")
  const domains = [""]
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(`; domain=${parts.slice(i).join(".")}`)
  }
  for (const name of GA_COOKIES) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}`
    }
  }
}

// Banner state, read with useSyncExternalStore. Starts from the stored choice
// on first read (in the browser only; the server snapshot is always closed).
type BannerState = { open: boolean; reopened: boolean }
let choice: ConsentChoice | null | undefined
let banner: BannerState | undefined
let returnFocusTo: HTMLElement | null = null
const listeners = new Set<() => void>()

function currentChoice() {
  if (choice === undefined) choice = readStoredChoice(STORAGE_KEY, MAX_AGE_MS)
  return choice
}

function setBanner(next: BannerState) {
  banner = next
  listeners.forEach((listener) => listener())
}

export function subscribeBanner(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function getBannerState(): BannerState {
  if (!banner) banner = { open: currentChoice() === null, reopened: false }
  return banner
}

const closedBanner: BannerState = { open: false, reopened: false }
export function getServerBannerState(): BannerState {
  return closedBanner
}

/** Footer link: shows the banner again so the visitor can change the choice. */
export function reopenBanner(trigger: HTMLElement | null = null) {
  // Focus goes back to the trigger after the choice. Passed in, because
  // Safari does not focus a button on click
  returnFocusTo = trigger
  setBanner({ open: true, reopened: true })
}

/** Closes the banner and puts focus somewhere sensible, not on <body>. */
function closeBanner() {
  setBanner({ open: false, reopened: false })
  const target = returnFocusTo ?? document.querySelector("main")
  returnFocusTo = null
  if (!target) return
  if (target.tagName === "MAIN" && !target.hasAttribute("tabindex")) {
    target.setAttribute("tabindex", "-1")
  }
  target.focus({ preventScroll: true })
}

export function grantConsent() {
  const alreadyRunning = currentChoice() === "granted" && window.__gtmStarted
  choice = "granted"
  saveChoice("granted")
  if (!alreadyRunning) {
    setGaDisabled(false)
    // Before the container loads: GTM reads default -> update -> js in order,
    // so the Initialization trigger already sees analytics_storage granted
    gtag("consent", "update", { analytics_storage: "granted" })
    startGoogleTagManager(GTM_ID)
  }
  closeBanner()
}

export function denyConsent() {
  // Stop GA first, before anything else can trigger a hit
  setGaDisabled(true)
  choice = "denied"
  saveChoice("denied")
  gtag("consent", "update", { analytics_storage: "denied" })
  deleteAnalyticsCookies()
  if (window.__gtmStarted) {
    // GTM and the Google tag are already in memory. Reloading drops them: the
    // new page reads "denied" and never loads GTM
    window.location.reload()
    return
  }
  closeBanner()
}
