"use client"

import * as React from "react"
import { ArrowUpRightIcon, MenuIcon, XIcon } from "lucide-react"

import { Button } from "@ds/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@ds/components/ui/navigation-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@ds/components/ui/tooltip"
import type { Dictionary } from "@/dictionaries/pt"

const panelLink =
  "min-h-12 px-3 text-base font-medium active:bg-muted [&_svg:not([class*='size-'])]:size-3.5"

// Small screens only: a disclosure button that shows the desktop links in a
// panel under the bar. It closes from the button, on Escape, when a link is
// chosen, and when a tap or keyboard focus leaves it.
export function MobileNav({
  links,
  linkedinUrl,
  linkedinPending,
  labels,
}: {
  links: { href: string; label: string }[]
  linkedinUrl: string
  linkedinPending: boolean
  labels: Pick<Dictionary, "nav" | "links">
}) {
  const [open, setOpen] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const panelId = React.useId()

  React.useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return
      setOpen(false)
      buttonRef.current?.focus()
    }
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    // The panel is hidden from md up; don't leave it open behind the scenes
    const desktop = window.matchMedia("(min-width: 48rem)")
    function handleResize() {
      if (desktop.matches) setOpen(false)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handlePointerDown)
    desktop.addEventListener("change", handleResize)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("pointerdown", handlePointerDown)
      desktop.removeEventListener("change", handleResize)
    }
  }, [open])

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    // Tabbing past the last link closes the panel
    const next = event.relatedTarget
    if (next && !event.currentTarget.contains(next)) setOpen(false)
  }

  const close = () => setOpen(false)

  const linkedin = (
    <NavigationMenuLink
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={close}
      className={panelLink}
    >
      {labels.nav.linkedin}
      <ArrowUpRightIcon aria-hidden />
      <span className="sr-only">{labels.links.newTab}</span>
    </NavigationMenuLink>
  )

  return (
    <div ref={rootRef} onBlur={handleBlur} className="md:hidden">
      <Button
        ref={buttonRef}
        variant="ghost"
        size="icon-lg"
        aria-label={labels.nav.menu}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <XIcon aria-hidden className="size-5" />
        ) : (
          <MenuIcon aria-hidden className="size-5" />
        )}
      </Button>

      {/* Exactly as wide as the bar: edge to edge with the full bar and
          border on border with the compact pill (-1px reaches past its
          border). Its edges move with the same timing as the bar. */}
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full mt-2 animate-in rounded-md border bg-card p-2 shadow-lg transition-[left,right] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] animation-duration-200 fade-in slide-in-from-top-2 in-data-[compact=true]:-inset-x-px motion-reduce:animate-none motion-reduce:transition-none"
      >
        <NavigationMenu
          viewport={false}
          orientation="vertical"
          aria-label={labels.nav.label}
          className="block max-w-none"
        >
          <NavigationMenuList className="flex-col items-stretch gap-1">
            {links.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink
                  href={link.href}
                  onClick={close}
                  className={panelLink}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              {linkedinPending ? (
                <Tooltip>
                  <TooltipTrigger asChild>{linkedin}</TooltipTrigger>
                  <TooltipContent sideOffset={6}>
                    {labels.links.linkedinPending}
                  </TooltipContent>
                </Tooltip>
              ) : (
                linkedin
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}
