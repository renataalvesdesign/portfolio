"use client"

import * as React from "react"

// Makes [data-reveal] elements rise into view as they enter the viewport.
// Content stays visible without JavaScript, without IntersectionObserver and
// with reduced motion; elements already on screen at load are left alone.
export function RevealOnScroll() {
  React.useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    )
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute("data-reveal", "shown")
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    )

    for (const element of elements) {
      if (element.getBoundingClientRect().top < window.innerHeight) continue
      element.dataset.reveal = "hidden"
      observer.observe(element)
    }

    return () => {
      observer.disconnect()
      for (const element of elements) element.dataset.reveal = ""
    }
  }, [])

  return null
}
