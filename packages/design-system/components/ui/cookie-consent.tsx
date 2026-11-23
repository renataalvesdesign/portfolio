"use client"

import * as React from "react"
import { cn } from "cn"

/*
 * Cookie Consent: a non-modal notice pinned to the bottom center of the
 * viewport, with Decline and Accept. Presentational only: it stores nothing
 * and has no built-in copy, so the site owns the consent state and passes the
 * text in each language.
 */

const CookieConsentContext = React.createContext<{ titleId?: string }>({})

function CookieConsent({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  const titleId = React.useId()
  const labelled = props["aria-label"] !== undefined

  return (
    <CookieConsentContext.Provider value={{ titleId }}>
      {/* A labelled section is a region landmark: screen reader users can
          jump to it, and it is not announced over the page like role=alert */}
      <section
        data-slot="cookie-consent"
        aria-labelledby={labelled ? undefined : titleId}
        className={cn(
          "@container/cookie-consent fixed inset-x-4 bottom-4 z-50 mx-auto max-w-220 rounded-xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-300 animate-in fade-in slide-in-from-bottom-4 motion-reduce:animate-none md:bottom-6 @xl/cookie-consent:px-6 @xl/cookie-consent:py-5",
          className
        )}
        {...props}
      >
        {/* Stacked while narrow, one row from 36rem of its own width up, so
            the layout follows the banner, not the viewport */}
        <div className="flex flex-col gap-4 @xl/cookie-consent:flex-row @xl/cookie-consent:items-center @xl/cookie-consent:gap-8">
          {children}
        </div>
      </section>
    </CookieConsentContext.Provider>
  )
}

/** Inline bold lead, placed at the start of the description. Names the region. */
function CookieConsentTitle({
  className,
  ...props
}: React.ComponentProps<"strong">) {
  const { titleId } = React.useContext(CookieConsentContext)

  return (
    <strong
      data-slot="cookie-consent-title"
      id={titleId}
      className={cn("font-semibold text-popover-foreground", className)}
      {...props}
    />
  )
}

function CookieConsentDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="cookie-consent-description"
      className={cn(
        "flex-1 text-pretty text-muted-foreground [&_a]:text-popover-foreground [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

/** Holds the buttons: full width while stacked, natural width in a row. */
function CookieConsentActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="cookie-consent-actions"
      className={cn(
        "flex shrink-0 gap-2 *:min-w-24 *:flex-1 @xl/cookie-consent:*:flex-none",
        className
      )}
      {...props}
    />
  )
}

export {
  CookieConsent,
  CookieConsentTitle,
  CookieConsentDescription,
  CookieConsentActions,
}
