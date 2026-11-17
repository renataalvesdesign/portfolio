import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import type { Dictionary } from "@/dictionaries/pt"

export function Experience({
  dict,
  historyHref,
}: {
  dict: Dictionary["experience"]
  historyHref: string
}) {
  return (
    <section className="bg-card text-card-foreground">
      <Container className="py-26">
        <div className="grid items-baseline gap-x-6 gap-y-4 lg:grid-cols-12">
          <h2 className="text-section-title lg:col-span-5">{dict.title}</h2>
          {/* From lg up the lead is set flush right, to the page margin */}
          <p className="text-section-lead lg:col-span-7 lg:col-start-6 lg:text-right">
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
                {/* Role and company in one heading, so each entry is distinct
                    in a screen reader's heading list; the company keeps the
                    look of the line below the role */}
                <h3 className="font-sans text-lg font-semibold">
                  {job.role}
                  <span className="sr-only">, </span>
                  <span className="mt-0.5 block text-sm font-normal text-muted-foreground">
                    {job.company}
                  </span>
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{job.period}</p>
            </li>
          ))}
        </ol>

        <Button
          asChild
          variant="link"
          className="mt-8 h-auto px-0 text-base font-semibold"
        >
          <Link href={historyHref}>
            {dict.fullHistory}
            <ArrowRightIcon
              data-icon="inline-end"
              aria-hidden
              className="transition-transform group-hover/button:translate-x-[3px] group-focus-visible/button:translate-x-[3px] motion-reduce:transition-none"
            />
          </Link>
        </Button>
      </Container>
    </section>
  )
}
