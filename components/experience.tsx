import { ArrowRightIcon } from "lucide-react"

import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import type { Dictionary } from "@/dictionaries/pt"
import { site } from "@/lib/site"

export function Experience({ dict }: { dict: Dictionary["experience"] }) {
  return (
    <section className="bg-card text-card-foreground">
      <Container className="py-26">
        <div className="grid items-center gap-x-6 gap-y-4 lg:grid-cols-12">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:col-span-5">
            {dict.title}
          </h2>
          <p className="font-heading text-2xl font-semibold tracking-tight lg:col-span-7 lg:col-start-6 lg:text-right">
            {dict.lead}
          </p>
        </div>

        <ol className="mt-10 border-b">
          {dict.items.map((job) => (
            <li
              key={`${job.role}-${job.company}`}
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-t py-4"
            >
              <div>
                <h3 className="font-sans text-lg font-semibold">{job.role}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {job.company}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {job.period}
              </p>
            </li>
          ))}
        </ol>

        <Button
          asChild
          variant="link"
          className="mt-8 h-auto px-0 text-base font-semibold"
        >
          <a href={site.aboutUrl}>
            {dict.fullHistory}
            <ArrowRightIcon
              data-icon="inline-end"
              aria-hidden
              className="transition-transform group-hover/button:translate-x-[3px] group-focus-visible/button:translate-x-[3px] motion-reduce:transition-none"
            />
          </a>
        </Button>
      </Container>
    </section>
  )
}
