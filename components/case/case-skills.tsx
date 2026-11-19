"use client"

import { useRef, useState } from "react"
import { ChevronUpIcon } from "lucide-react"
import { cn } from "cn"

import { Badge } from "@ds/components/ui/badge"
import { Button } from "@ds/components/ui/button"
import type { Dictionary } from "@/dictionaries/pt"

// Skill chips of a case hero. The card's tags come first and stay visible;
// a "+N" chip reveals the other skills (N is exactly how many), and
// "Recolher" folds them back. Without skills there is no toggle.
export function CaseSkills({
  tags,
  skills = [],
  dict,
  className,
}: {
  tags: string[]
  skills?: string[]
  dict: Dictionary["caseStudy"]["skills"]
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const listRef = useRef<HTMLUListElement>(null)
  const moreRef = useRef<HTMLButtonElement>(null)

  const extra = skills
  const listId = "case-skills"

  function expand() {
    setOpen(true)
    // The "+N" chip goes away: move focus to the first revealed chip
    requestAnimationFrame(() =>
      listRef.current
        ?.querySelector<HTMLElement>(`li:nth-child(${tags.length + 1})`)
        ?.focus()
    )
  }

  function collapse() {
    setOpen(false)
    requestAnimationFrame(() => moreRef.current?.focus())
  }

  return (
    <ul
      ref={listRef}
      id={listId}
      aria-label={dict.label}
      className={cn("flex flex-wrap items-center gap-2", className)}
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge size="lg" variant="secondary">
            {tag}
          </Badge>
        </li>
      ))}

      {open &&
        extra.map((skill) => (
          // Focus target after expanding (not in the tab order)
          <li key={skill} tabIndex={-1} className="rounded-lg outline-none">
            <Badge size="lg" variant="secondary">
              {skill}
            </Badge>
          </li>
        ))}

      {/* The toggle is an action, so it is the Design System Button (a Badge
          is a static label); sm is as tall as the lg chips */}
      {extra.length > 0 && (
        <li>
          {open ? (
            <Button
              variant="outline"
              size="sm"
              onClick={collapse}
              aria-controls={listId}
              aria-expanded
            >
              {dict.collapse}
              <ChevronUpIcon data-icon="inline-end" aria-hidden />
            </Button>
          ) : (
            <Button
              ref={moreRef}
              variant="outline"
              size="sm"
              onClick={expand}
              aria-controls={listId}
              aria-expanded={false}
              aria-label={dict.more.replace("{n}", String(extra.length))}
              className="tabular-nums"
            >
              +{extra.length}
            </Button>
          )}
        </li>
      )}
    </ul>
  )
}
