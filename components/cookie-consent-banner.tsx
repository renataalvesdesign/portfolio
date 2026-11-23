"use client"

import * as React from "react"

import { Button } from "@ds/components/ui/button"
import {
  CookieConsent,
  CookieConsentActions,
  CookieConsentDescription,
  CookieConsentTitle,
} from "@ds/components/ui/cookie-consent"
import type { Dictionary } from "@/dictionaries/pt"
import {
  denyConsent,
  getBannerState,
  getServerBannerState,
  grantConsent,
  subscribeBanner,
} from "@/lib/consent"

// Design System Cookie Consent wired to lib/consent. Renders nothing on the
// server and during hydration; the stored choice is read in the browser only.
export function CookieConsentBanner({
  dict,
}: {
  dict: Dictionary["cookieConsent"]
}) {
  const { open, reopened } = React.useSyncExternalStore(
    subscribeBanner,
    getBannerState,
    getServerBannerState
  )
  const ref = React.useRef<HTMLElement>(null)

  // Opened from the footer link: move focus to the banner. On a first visit it
  // shows without taking focus
  React.useEffect(() => {
    if (open && reopened) ref.current?.focus()
  }, [open, reopened])

  if (!open) return null

  return (
    <CookieConsent
      ref={ref}
      tabIndex={-1}
      className="surface-light outline-none"
    >
      <CookieConsentDescription>
        <CookieConsentTitle>{dict.title}</CookieConsentTitle>{" "}
        {dict.description}
      </CookieConsentDescription>
      <CookieConsentActions>
        <Button variant="outline" size="lg" onClick={denyConsent}>
          {dict.decline}
        </Button>
        <Button size="lg" onClick={grantConsent}>
          {dict.accept}
        </Button>
      </CookieConsentActions>
    </CookieConsent>
  )
}
