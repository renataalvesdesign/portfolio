"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  CookieConsent,
  CookieConsentActions,
  CookieConsentDescription,
  CookieConsentTitle,
} from "@/components/ui/cookie-consent"
import { cn } from "@/lib/utils"

/**
 * A mock browser viewport for the styleguide. Its transform makes it the
 * containing block of position: fixed children, so the banner pins to the
 * bottom of this box instead of the real window.
 */
export function Viewport({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "relative h-52 w-full transform-gpu overflow-hidden rounded-lg border bg-background p-6",
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * The whole flow with in-memory state only: nothing is stored and no script
 * is loaded. The site that uses the component owns the real consent logic.
 */
export function CookieConsentDemo() {
  const [choice, setChoice] = React.useState<"accepted" | "declined" | null>(
    null
  )

  return (
    <Viewport className="h-64">
      <div className="flex flex-col items-start gap-3 text-sm">
        <p className="text-muted-foreground">
          {choice
            ? `Choice: ${choice}.`
            : "No choice yet: the banner waits for one."}
        </p>
        {choice && (
          <Button variant="outline" size="sm" onClick={() => setChoice(null)}>
            Show the banner again
          </Button>
        )}
      </div>

      {!choice && (
        <CookieConsent>
          <CookieConsentDescription>
            <CookieConsentTitle>Cookies, your call.</CookieConsentTitle> I use
            analytics to see how people use this portfolio. It sets cookies and
            only loads if you accept.
          </CookieConsentDescription>
          <CookieConsentActions>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setChoice("declined")}
            >
              Decline
            </Button>
            <Button size="lg" onClick={() => setChoice("accepted")}>
              Accept
            </Button>
          </CookieConsentActions>
        </CookieConsent>
      )}
    </Viewport>
  )
}
