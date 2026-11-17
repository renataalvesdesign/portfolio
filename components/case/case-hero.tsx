import Image from "next/image"
import { ClockIcon } from "lucide-react"
import { cn } from "cn"

import { Container } from "@ds/components/ui/container"
import { ImagePlaceholder } from "@ds/components/ui/image-placeholder"
import { CaseSkills } from "@/components/case/case-skills"
import type { Dictionary } from "@/dictionaries/pt"
import type { ProjectView } from "@/lib/projects"
import { enter } from "@/lib/motion"

const label =
  "text-xs font-semibold tracking-wider text-muted-foreground uppercase"

// Opening of a case page, with the same data as the project card: eyebrow
// (case · company · year), title, summary, role line and reading time beside
// the cover. The reading time is a placeholder for now.
export function CaseHero({
  project,
  dict,
}: {
  project: ProjectView
  dict: Dictionary["caseStudy"]
}) {
  return (
    <Container className="pt-14 pb-16 md:pt-16 lg:pb-24">
      <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="flex flex-col lg:col-span-6">
          <p className={cn(enter, label)}>
            {dict.eyebrow} · {project.company} · {project.year}
          </p>
          <h1
            className={cn(
              enter,
              "mt-4 text-4xl leading-tight font-bold tracking-tight delay-60 md:text-5xl lg:text-6xl"
            )}
          >
            {project.title}
          </h1>
          <p
            className={cn(
              enter,
              "mt-6 max-w-150 text-lg text-muted-foreground delay-120 md:text-xl"
            )}
          >
            {project.summary}
          </p>

          {/* mb-10: minimum gap above the facts, which sit at the bottom of
              the column (mt-auto) when the cover is taller */}
          <CaseSkills
            tags={project.tags}
            skills={project.skills}
            dict={dict.skills}
            className={cn(enter, "mt-6 mb-10 delay-150")}
          />

          <dl
            className={cn(
              enter,
              "grid gap-x-10 gap-y-5 border-t pt-6 delay-180 sm:grid-cols-[1fr_auto] lg:mt-auto"
            )}
          >
            <div>
              <dt className={label}>{dict.role}</dt>
              <dd className="mt-1.5">{project.roleSummary}</dd>
            </div>
            <div>
              <dt className={label}>{dict.reading}</dt>
              <dd className="mt-1.5 flex items-center gap-2 whitespace-nowrap">
                <ClockIcon aria-hidden className="size-4 shrink-0" />
                {dict.readingPlaceholder}
              </dd>
            </div>
          </dl>
        </div>

        <div
          className={cn(
            enter,
            "overflow-hidden rounded-xl delay-120 lg:col-span-6"
          )}
        >
          {/* The cover is the largest element above the fold: load it first */}
          {project.cover ? (
            <Image
              src={project.cover}
              alt={project.coverAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="eager"
              fetchPriority="high"
              className="aspect-16/9 w-full object-cover"
            />
          ) : (
            <ImagePlaceholder
              alt={project.coverAlt}
              className="aspect-16/9 w-full"
            />
          )}
        </div>
      </div>
    </Container>
  )
}
