import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { cn } from "cn"

import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import type { Dictionary } from "@/dictionaries/pt"
import type { ProjectView } from "@/lib/projects"

// End of a case page: links to the previous and next cases, in project order
// (both wrap around). Hidden when there is a single case page.
export function CaseNav({
  previous,
  next,
  dict,
}: {
  previous?: ProjectView
  next?: ProjectView
  dict: Dictionary["caseStudy"]
}) {
  if (!previous || !next) return null

  return (
    // The top and bottom lines span the full page width; the links stay in
    // the content grid
    <nav aria-label={dict.otherCases} className="border-y">
      <Container className="grid sm:grid-cols-2">
        <CaseLink
          project={previous}
          label={dict.previous}
          direction="previous"
        />
        <CaseLink project={next} label={dict.next} direction="next" />
      </Container>
    </nav>
  )
}

function CaseLink({
  project,
  label,
  direction,
}: {
  project: ProjectView
  label: string
  direction: "previous" | "next"
}) {
  const isNext = direction === "next"
  const Icon = isNext ? ArrowRightIcon : ArrowLeftIcon

  return (
    // The Design System link (same as "Ver case" on the cards) stretches over
    // its whole half (its ::after), so the half is a single link target
    <div
      className={cn(
        "group relative flex flex-col py-6",
        isNext
          ? "border-t sm:items-end sm:border-t-0 sm:border-l sm:pl-6"
          : "items-start sm:pr-6"
      )}
    >
      <span
        aria-hidden
        className="text-xs font-semibold tracking-wider text-muted-foreground uppercase"
      >
        {label} · <span className="tabular-nums">{project.number}</span>
      </span>
      <Button
        asChild
        variant="link"
        className={cn(
          "mt-1.5 h-auto px-0 text-base font-semibold group-hover:underline after:absolute after:inset-0",
          // Flush with the label above: drops the padding the button adds on
          // the icon side
          "has-data-[icon=inline-end]:pr-0 has-data-[icon=inline-start]:pl-0",
          // No press offset: any translate makes the link the containing
          // block of its ::after and the press on the rest of the half is lost
          "active:not-aria-[haspopup]:[translate:none]!"
        )}
      >
        <Link href={project.href} rel={isNext ? "next" : "prev"}>
          {!isNext && (
            <Icon
              data-icon="inline-start"
              aria-hidden
              className="transition-transform group-hover:-translate-x-[3px] group-has-focus-visible:-translate-x-[3px] motion-reduce:transition-none"
            />
          )}
          <span className="sr-only">{label}: </span>
          {project.title}
          {isNext && (
            <Icon
              data-icon="inline-end"
              aria-hidden
              className="transition-transform group-hover:translate-x-[3px] group-has-focus-visible:translate-x-[3px] motion-reduce:transition-none"
            />
          )}
        </Link>
      </Button>
    </div>
  )
}
