"use client"

import * as React from "react"

import { Card } from "@ds/components/ui/card"
import type { Dictionary } from "@/dictionaries/pt"

// When each circle fills, in sync with the 1.5s line; each text brightens right after
const CIRCLE_DELAYS = [200, 745, 1290]
const CIRCLE_FILL = 300
// Show the finished state if the observer never reports back
const FALLBACK_TIMEOUT = 4000

// "complete" is the server/no-JS/reduced-motion state; "idle" is the reset
// (applied without transitions) and "playing" runs the sequence.
type StepsState = "complete" | "idle" | "playing"

export function ProcessSteps({
  steps,
}: {
  steps: Dictionary["process"]["steps"]
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [state, setState] = React.useState<StepsState>("complete")

  React.useEffect(() => {
    const node = ref.current
    if (
      !node ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return

    let current: StepsState = "complete"
    let frame = 0
    const update = (next: StepsState) => {
      current = next
      setState(next)
    }

    const fallback = setTimeout(() => update("complete"), FALLBACK_TIMEOUT)
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(fallback)
        if (!entry.isIntersecting) {
          cancelAnimationFrame(frame)
          update("idle")
        } else if (entry.intersectionRatio >= 0.25 && current !== "playing") {
          if (current === "idle") return update("playing")
          // Coming from "complete": paint the reset first, then play
          update("idle")
          frame = requestAnimationFrame(() => {
            frame = requestAnimationFrame(() => update("playing"))
          })
        }
      },
      { threshold: [0, 0.25] }
    )
    observer.observe(node)

    return () => {
      clearTimeout(fallback)
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])

  return (
    <Card
      ref={ref}
      data-state={state}
      className="group/steps relative mt-18 gap-0 pt-11 pb-12 text-base shadow-none"
    >
      {/* Line connecting the step numbers (centered on the 44px circles) */}
      <span
        aria-hidden
        className="absolute top-16 right-9 left-9 hidden h-0.5 overflow-hidden bg-foreground/16 md:block"
      >
        <span className="absolute inset-0 origin-left bg-foreground group-data-[state=idle]/steps:scale-x-0 group-data-[state=playing]/steps:transition-transform group-data-[state=playing]/steps:duration-1500 group-data-[state=playing]/steps:ease-linear" />
      </span>
      <ol className="grid gap-y-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="px-9"
            style={
              {
                "--circle-delay": `${CIRCLE_DELAYS[index]}ms`,
                "--text-delay": `${CIRCLE_DELAYS[index] + CIRCLE_FILL}ms`,
              } as React.CSSProperties
            }
          >
            <span
              aria-hidden
              className="relative flex size-11 items-center justify-center rounded-full border border-primary bg-primary font-heading text-xl font-bold text-primary-foreground group-data-[state=idle]/steps:border-foreground group-data-[state=idle]/steps:bg-card group-data-[state=idle]/steps:text-foreground group-data-[state=playing]/steps:transition-colors group-data-[state=playing]/steps:delay-(--circle-delay) group-data-[state=playing]/steps:duration-300"
            >
              {index + 1}
            </span>
            <div className="group-data-[state=idle]/steps:opacity-70 group-data-[state=playing]/steps:transition-opacity group-data-[state=playing]/steps:delay-(--text-delay) group-data-[state=playing]/steps:duration-500">
              <h3 className="mt-8 text-3xl font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  )
}
