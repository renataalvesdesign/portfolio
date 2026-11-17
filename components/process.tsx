import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import { ProcessSteps } from "@/components/process-steps"
import type { Dictionary } from "@/dictionaries/pt"

export function Process({
  dict,
  projectsHref,
}: {
  dict: Dictionary["process"]
  projectsHref: string
}) {
  return (
    <section id="sobre" className="surface-light">
      <Container className="py-28">
        <div className="grid items-baseline gap-x-6 gap-y-6 lg:grid-cols-12">
          <h2 className="text-section-title lg:col-span-5">{dict.title}</h2>
          <p className="text-section-lead lg:col-span-7 lg:col-start-6">
            {dict.lead}
          </p>
        </div>

        <ProcessSteps steps={dict.steps} />

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
          <p className="text-lg">{dict.note}</p>
          <Button
            asChild
            variant="link"
            className="h-auto px-0 text-base font-semibold"
          >
            <Link href={projectsHref}>
              {dict.seeInProjects}
              <ArrowRightIcon
                data-icon="inline-end"
                aria-hidden
                className="transition-transform group-hover/button:translate-x-[3px] group-focus-visible/button:translate-x-[3px] motion-reduce:transition-none"
              />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
