"use client"

import * as React from "react"

// Scroll (px) past which the navigation turns compact, and back under which
// it expands again; the gap keeps it from flickering around one position
const COMPACT_AFTER = 72
const EXPAND_BEFORE = 24

// Marks the sticky navigation as compact once the page has scrolled, so it
// eases into the floating pill (see globals.css). With reduced motion, and
// without JavaScript, it stays the full bar.
export function CompactNavOnScroll() {
  // Layout effect: the header remounts when the language changes, and the new
  // bar must already be compact in its first painted frame
  React.useLayoutEffect(() => {
    const nav = document.querySelector<HTMLElement>('[data-slot="site-nav"]')
    if (!nav || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return

    let compact = false
    function update() {
      const next = window.scrollY > (compact ? EXPAND_BEFORE : COMPACT_AFTER)
      if (next === compact || !nav) return
      compact = next
      nav.dataset.compact = String(compact)
    }

    // The state on mount (page load, language change) is applied without the
    // transition; only scrolling animates it
    nav.dataset.instant = ""
    update()
    void nav.offsetHeight
    delete nav.dataset.instant
    window.addEventListener("scroll", update, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      delete nav.dataset.compact
    }
  }, [])

  return null
}
