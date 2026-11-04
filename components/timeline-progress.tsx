"use client"

import * as React from "react"
import { cn } from "cn"

// Where the progress line's tip sits, as a fraction of the viewport height.
// Matches the trigger of RevealOnScroll (rootMargin -10% at the bottom), so a
// marker fills about when its entry rises into view.
const REFERENCE = 0.9

// Scroll-driven progress for a vertical timeline. Children mark their dots
// with [data-marker]; the line runs from the first dot's center to the last.
// Until the effect enables it (data-timeline="on") the children show their
// static, complete state, so without JavaScript or with reduced motion the
// timeline stays whole. Positions are measured on resize only; scrolling
// just scales the line and flips dot states.
export function TimelineProgress({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const trackRef = React.useRef<HTMLSpanElement>(null)
  const lineRef = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    const root = ref.current
    const track = trackRef.current
    const line = lineRef.current
    if (
      !root ||
      !track ||
      !line ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return

    const markers = Array.from(
      root.querySelectorAll<HTMLElement>("[data-marker]")
    )
    if (markers.length < 2) return

    // Cached layout: dot centers relative to the root, the root's offset in
    // the document and the viewport height
    let centers: number[] = []
    let rootTop = 0
    let viewport = 0
    let frame = 0

    // offsetTop ignores transforms, so entries mid-reveal measure correctly
    const centerOf = (marker: HTMLElement) => {
      let y = marker.offsetTop + marker.offsetHeight / 2
      for (
        let node = marker.offsetParent as HTMLElement | null;
        node && node !== root;
        node = node.offsetParent as HTMLElement | null
      )
        y += node.offsetTop
      return y
    }

    const measure = () => {
      centers = markers.map(centerOf)
      rootTop = root.getBoundingClientRect().top + window.scrollY
      viewport = window.innerHeight
      const length = centers[centers.length - 1] - centers[0]
      for (const element of [track, line]) {
        element.style.top = `${centers[0]}px`
        element.style.height = `${length}px`
      }
    }

    const update = () => {
      frame = 0
      const length = centers[centers.length - 1] - centers[0]
      const reference = window.scrollY + viewport * REFERENCE
      const progress = Math.min(
        Math.max(reference - rootTop - centers[0], 0),
        length
      )
      line.style.transform = `scaleY(${length ? progress / length : 0})`
      markers.forEach((marker, index) => {
        const state =
          index === 0 || progress >= centers[index] - centers[0]
            ? "filled"
            : "outline"
        if (marker.dataset.state !== state) marker.dataset.state = state
      })
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const remeasure = () => {
      measure()
      schedule()
    }

    // First paint in the right state for the current scroll, without
    // transitions, then let the dots animate
    root.dataset.instant = ""
    measure()
    update()
    root.dataset.timeline = "on"
    const settle = requestAnimationFrame(() =>
      requestAnimationFrame(() => delete root.dataset.instant)
    )

    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", remeasure)
    // Content above or inside the timeline changing height (fonts, layout)
    const observer = new ResizeObserver(remeasure)
    observer.observe(root)
    observer.observe(document.body)
    document.fonts?.ready.then(remeasure)

    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(settle)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", remeasure)
      observer.disconnect()
      delete root.dataset.timeline
      delete root.dataset.instant
      for (const marker of markers) delete marker.dataset.state
    }
  }, [])

  return (
    <div ref={ref} className={cn("group/timeline relative", className)}>
      {/* Track and progress line, shown once the effect has measured them */}
      <span
        ref={trackRef}
        aria-hidden
        className="absolute left-1.5 hidden w-px bg-border group-data-[timeline=on]/timeline:block"
      />
      <span
        ref={lineRef}
        aria-hidden
        className="absolute left-[5.5px] hidden w-0.5 origin-top bg-foreground group-data-[timeline=on]/timeline:block"
      />
      {children}
    </div>
  )
}
