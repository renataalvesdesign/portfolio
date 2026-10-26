import { ArrowUpIcon } from "lucide-react"

import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import { ProcessSteps } from "@/components/process-steps"
import { ScrollLink } from "@/components/scroll-link"
import type { Dictionary } from "@/dictionaries/pt"

export function Process({ dict }: { dict: Dictionary["process"] }) {
  return (
    <section id="sobre" className="surface-light">
      <Container className="py-28">
        <div className="grid items-start gap-x-6 gap-y-6 lg:grid-cols-12">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:col-span-5">
            {dict.title}
          </h2>
          <p className="font-heading text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:col-span-7 lg:col-start-6">
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
            <ScrollLink href="#projetos">
              {dict.seeInProjects}
              <ArrowUpIcon
                data-icon="inline-end"
                aria-hidden
                className="transition-transform group-hover/button:-translate-y-[3px] group-focus-visible/button:-translate-y-[3px] motion-reduce:transition-none"
              />
            </ScrollLink>
          </Button>
        </div>
      </Container>
    </section>
  )
}
