"use client"

import * as React from "react"
import { cn } from "cn"

import { ScrollLink } from "@/components/scroll-link"

// Side index of a case, built from its sections. Marks the section being read
// (the last one whose title has passed the upper third of the screen) with
// aria-current. Without JavaScript it is a plain list of anchors.
export function CaseToc({
  label,
  sections,
}: {
  label: string
  sections: { id: string; title: string }[]
}) {
  const [current, setCurrent] = React.useState<string>()

  React.useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((target): target is HTMLElement => target !== null)
    if (targets.length === 0) return

    let frame = 0
    function update() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const line = window.innerHeight / 3
        const passed = targets.filter(
          (target) => target.getBoundingClientRect().top <= line
        )
        setCurrent(passed.at(-1)?.id)
      })
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [sections])

  return (
    <nav aria-labelledby="case-toc-title">
      <p
        id="case-toc-title"
        className="text-xs font-semibold tracking-wider text-muted-foreground uppercase"
      >
        {label}
      </p>
      <ol className="mt-4 border-l">
        {sections.map((section) => {
          const active = section.id === current
          return (
            <li key={section.id}>
              <ScrollLink
                href={`#${section.id}`}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:text-foreground focus-visible:underline motion-reduce:transition-none",
                  active && "border-foreground font-semibold text-foreground"
                )}
              >
                {section.title}
              </ScrollLink>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
