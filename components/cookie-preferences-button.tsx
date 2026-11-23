"use client"

import { Button } from "@ds/components/ui/button"
import { reopenBanner } from "@/lib/consent"

// Footer "Cookie preferences": an action, so a button styled as a link. It
// shows the consent banner again, where the visitor can change the choice.
export function CookiePreferencesButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Button
      type="button"
      variant="link"
      className="h-auto px-0"
      onClick={(event) => reopenBanner(event.currentTarget)}
    >
      {children}
    </Button>
  )
}
