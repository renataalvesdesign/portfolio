"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@ds/components/ui/button"
import type { Dictionary } from "@/dictionaries/pt"

// Below lg (1024px); the exact complement of the lg: classes, where the cases
// sit side by side
const carouselQuery = "(width < 64rem)"

// Shortest horizontal swipe, in px, that moves one card
const swipeThreshold = 40
// Movement, in px, after which a touch is read as horizontal or vertical
const axisLock = 8

function subscribe(onChange: () => void) {
  const query = window.matchMedia(carouselQuery)
  query.addEventListener("change", onChange)
  return () => query.removeEventListener("change", onChange)
}

// Below 1024px the cases are a carousel: one card per view, with
// previous/next arrows and a "1 de 3" position centered under it. A swipe,
// an arrow or the ←/→ keys move exactly one card and wrap around at either
// end. Nothing advances on its own.
// The carousel moves the cards itself (translate) instead of scrolling: the
// card follows the finger and, on release, goes one card on or back, with no
// native momentum to carry it further. Vertical swipes still scroll the page.
// From 1024px up it is the regular grid, with the first (featured) case across
// both columns.
export function CaseCarousel({
  children,
  labels,
  labelledBy,
  className,
}: {
  children: React.ReactNode
  labels: Dictionary["cases"]["carousel"]
  labelledBy: string
  className?: string
}) {
  const slides = React.Children.toArray(children)
  const count = slides.length
  const [index, setIndex] = React.useState(0)
  // Finger offset while dragging horizontally, null otherwise
  const [drag, setDrag] = React.useState<number | null>(null)
  const railRef = React.useRef<HTMLDivElement>(null)
  const gesture = React.useRef<{ x: number; y: number; axis?: "x" | "y" }>(null)
  // Set when the keyboard moves the carousel from inside a card, so focus
  // follows to the new card once it stops being inert
  const focusSlide = React.useRef(false)
  const trackId = React.useId()
  const isCarousel = React.useSyncExternalStore(
    subscribe,
    () => window.matchMedia(carouselQuery).matches,
    () => false
  )

  React.useEffect(() => {
    if (!focusSlide.current) return
    focusSlide.current = false
    railRef.current?.children[index]
      ?.querySelector<HTMLElement>("a")
      ?.focus({ preventScroll: true })
  }, [index])

  const position = (current: number) =>
    labels.position
      .replace("{current}", String(current + 1))
      .replace("{total}", String(count))

  const goTo = (next: number) => setIndex((next + count) % count)

  function handleTouchStart(event: React.TouchEvent) {
    const touch = event.touches[0]
    gesture.current = { x: touch.clientX, y: touch.clientY }
  }

  function handleTouchMove(event: React.TouchEvent) {
    const start = gesture.current
    const touch = event.touches[0]
    if (!start || !touch) return
    const dx = touch.clientX - start.x
    const dy = touch.clientY - start.y
    if (!start.axis) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) < axisLock) return
      start.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y"
    }
    if (start.axis === "x") setDrag(dx)
  }

  // One card on or back from where the swipe started; shorter swipes settle
  // back on the same card
  function handleTouchEnd(event: React.TouchEvent) {
    const start = gesture.current
    const touch = event.changedTouches[0]
    gesture.current = null
    setDrag(null)
    if (start?.axis !== "x" || !touch) return
    const dx = touch.clientX - start.x
    if (Math.abs(dx) >= swipeThreshold) goTo(index + (dx < 0 ? 1 : -1))
  }

  function handleTouchCancel() {
    gesture.current = null
    setDrag(null)
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (!isCarousel) return
    const step = { ArrowLeft: -1, ArrowRight: 1 }[event.key]
    if (!step) return
    event.preventDefault()
    // The card being left becomes inert, which would drop its focus
    focusSlide.current = !!railRef.current?.contains(event.target as Node)
    goTo(index + step)
  }

  return (
    <div
      {...(isCarousel && {
        role: "region",
        "aria-roledescription": labels.label,
        "aria-labelledby": labelledBy,
        onKeyDown: handleKeyDown,
      })}
      className={className}
    >
      {/* The track bleeds into the page gutters so the card's hover/focus
          frame (16px outside it) is not clipped; the neighbouring cards sit
          one gap (48px) beyond it. pan-y: horizontal swipes come to us. */}
      <div
        id={trackId}
        onTouchStart={isCarousel ? handleTouchStart : undefined}
        onTouchMove={isCarousel ? handleTouchMove : undefined}
        onTouchEnd={isCarousel ? handleTouchEnd : undefined}
        onTouchCancel={isCarousel ? handleTouchCancel : undefined}
        className="-mx-6 -my-4 touch-pan-y overflow-hidden px-6 py-4 lg:m-0 lg:touch-auto lg:overflow-visible lg:p-0"
      >
        {/* Each step is one card plus the gap (gap-12 = 3rem). Same duration
            and curve as the rest of the page's motion; none while dragging
            or with reduced motion. */}
        <div
          ref={railRef}
          data-dragging={drag !== null || undefined}
          style={
            isCarousel
              ? {
                  translate: `calc(${-index} * (100% + 3rem) + ${drag ?? 0}px)`,
                }
              : undefined
          }
          className="flex gap-12 transition-[translate] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] data-dragging:transition-none motion-reduce:transition-none lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-0"
        >
          {slides.map((slide, slideIndex) => (
            // Slides out of view are inert in the carousel, so Tab goes from
            // the card on screen straight to the arrows.
            // In the grid the featured case spans both columns, 112px above
            // the others (a margin: a row gap would also open between the
            // rows the other cards share). Those span the 7 rows of a
            // CaseCard and pass them down as a subgrid, so their items line
            // up row by row.
            <div
              key={slideIndex}
              {...(isCarousel && {
                role: "group",
                "aria-label": position(slideIndex),
                inert: slideIndex !== index,
              })}
              className="w-full shrink-0 lg:w-auto lg:not-first:row-span-7 lg:not-first:grid lg:not-first:grid-rows-subgrid lg:first:col-span-2 lg:first:mb-28"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 lg:hidden">
        <Button
          variant="outline"
          size="icon-xl"
          aria-label={labels.previous}
          aria-controls={trackId}
          onClick={() => goTo(index - 1)}
        >
          <ChevronLeftIcon aria-hidden />
        </Button>
        <p
          aria-live="polite"
          aria-atomic
          className="min-w-16 text-center text-sm font-medium tabular-nums"
        >
          {position(index)}
        </p>
        <Button
          variant="outline"
          size="icon-xl"
          aria-label={labels.next}
          aria-controls={trackId}
          onClick={() => goTo(index + 1)}
        >
          <ChevronRightIcon aria-hidden />
        </Button>
      </div>
    </div>
  )
}
