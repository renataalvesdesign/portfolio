import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { cn } from "cn"

import { Badge } from "@ds/components/ui/badge"
import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import { TimelineProgress } from "@/components/timeline-progress"
import type { Dictionary } from "@/dictionaries/pt"
import type { Locale } from "@/lib/i18n"
import { getProject, localize } from "@/lib/projects"

const label =
  "text-xs font-semibold tracking-wider text-muted-foreground uppercase"

// Full career history: one entry per role on a vertical line, newest first.
// Each entry rises into view (RevealOnScroll). The last one, from before
// product design, closes the line. TimelineProgress draws a line that grows
// with the scroll and fills each marker as it reaches it. The home "full
// history" link lands on the id.
export function CareerTimeline({
  dict,
  locale,
}: {
  dict: Dictionary["about"]["experience"]
  locale: Locale
}) {
  const plural = new Intl.PluralRules(locale)
  // Related cases are project slugs; an unknown slug fails the build
  const project = (slug: string) => localize(getProject(slug), locale)

  return (
    <section id="experiencia" aria-labelledby="experiencia-title">
      <Container className="pt-26 pb-14">
        <h2 id="experiencia-title" className="text-section-title">
          {dict.title}
        </h2>

        <TimelineProgress className="mt-14">
          <ol>
            {dict.items.map((job, jobIndex) => (
              <li
                key={`${job.role}-${job.company}`}
                data-reveal=""
                className="group/job relative pb-16 pl-8 last:pb-0 md:pl-11"
              >
                {/* Static, complete line for no JS and reduced motion;
                  TimelineProgress replaces it once enabled */}
                <span
                  aria-hidden
                  className="absolute top-4 -bottom-3 left-[5.5px] w-0.5 bg-foreground group-last/job:hidden group-data-[timeline=on]/timeline:hidden"
                />
                <span
                  aria-hidden
                  data-marker=""
                  className="absolute top-2 left-0 size-3.25 rounded-full border-2 border-primary bg-primary transition-colors duration-250 group-data-instant/timeline:transition-none data-[state=outline]:bg-background motion-reduce:transition-none"
                />

                <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase tabular-nums">
                  {job.period}
                </p>
                {/* Role and company in one heading, so each entry is distinct
                  in a screen reader's heading list */}
                <h3 className="mt-2.5">
                  <span className="block text-xl font-bold tracking-tight">
                    {job.role}
                  </span>
                  <span className="sr-only">, </span>
                  <span className="mt-1.5 block font-sans text-base font-medium">
                    {job.company}
                  </span>
                </h3>

                <div className="mt-6 grid items-start gap-x-6 gap-y-8 lg:grid-cols-11">
                  <div className="lg:col-span-7">
                    {job.summary && (
                      <p className="mb-4 max-w-170 text-lg">{job.summary}</p>
                    )}
                    <div className="max-w-150 space-y-3 text-muted-foreground">
                      {job.description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {job.cases.length > 0 && (
                      <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                        <p
                          id={`casos-${jobIndex}`}
                          className="text-base text-muted-foreground"
                        >
                          {plural.select(job.cases.length) === "one"
                            ? dict.relatedCases.one
                            : dict.relatedCases.other}
                        </p>
                        <ul
                          aria-labelledby={`casos-${jobIndex}`}
                          className="flex flex-wrap items-baseline gap-x-6 gap-y-2"
                        >
                          {job.cases.map((slug) => (
                            <li key={slug}>
                              <Button
                                asChild
                                variant="link"
                                className="h-auto px-0 text-base font-semibold focus-visible:underline"
                              >
                                <Link href={project(slug).href}>
                                  {project(slug).title}
                                  <ArrowRightIcon
                                    data-icon="inline-end"
                                    aria-hidden
                                    className="transition-transform group-hover/button:translate-x-[3px] group-focus-visible/button:translate-x-[3px] motion-reduce:transition-none"
                                  />
                                </Link>
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-3 lg:col-start-9">
                    <p className={label}>{dict.focusLabel}</p>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {job.focus.map((item) => (
                        <li key={item}>
                          <Badge size="lg" variant="secondary">
                            {item}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                    {job.tools.length > 0 && (
                      <>
                        <p className={cn("mt-6", label)}>{dict.toolsLabel}</p>
                        <ul className="mt-2.5 flex flex-wrap gap-x-4.5 gap-y-1.5 text-sm font-semibold">
                          {job.tools.map((tool) => (
                            <li
                              key={tool}
                              className="relative pl-3 before:absolute before:top-[0.6em] before:left-0 before:size-1.25 before:rounded-full before:bg-current"
                            >
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </TimelineProgress>
      </Container>
    </section>
  )
}
