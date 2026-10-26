"use client"

import * as React from "react"

// In-page link that scrolls programmatically: smooth, or instant with reduced
// motion. Without JavaScript it is a regular anchor.
export function ScrollLink({
  href,
  onClick,
  ...props
}: React.ComponentProps<"a"> & { href: `#${string}` }) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    // Let modified clicks (new tab, etc.) behave natively
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return

    const target = document.getElementById(href.slice(1))
    if (!target) return
    event.preventDefault()

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    target.scrollIntoView({
      behavior: reduceMotion ? "instant" : "smooth",
      block: "start",
    })
    history.pushState(null, "", href)

    // Move keyboard focus along with the scroll, as a native anchor would
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1")
    target.focus({ preventScroll: true })
  }

  return <a href={href} onClick={handleClick} {...props} />
}
