import { DownloadIcon } from "lucide-react"
import { cn } from "cn"

import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import { PageHeading } from "@/components/page-heading"
import type { Dictionary } from "@/dictionaries/pt"
import type { Locale } from "@/lib/i18n"
import { enter } from "@/lib/motion"
import { resume } from "@/lib/site"

export function AboutHero({
  dict,
  profile,
  locale,
}: {
  dict: Dictionary["about"]["hero"]
  profile: Pick<Dictionary["hero"], "name" | "role">
  locale: Locale
}) {
  const file = resume[locale]

  return (
    <section id="top">
      <Container className="pt-20 pb-16">
        <PageHeading eyebrow={dict.eyebrow} title={dict.title} />
        <p className={cn(enter, "mt-6 max-w-180 text-lg delay-100 md:text-xl")}>
          {dict.lead}
        </p>

        <div
          className={cn(
            enter,
            "mt-16 grid items-end gap-x-6 gap-y-8 border-t-2 border-foreground pt-7 delay-140 md:grid-cols-2"
          )}
        >
          <div>
            <p className="font-heading text-xl font-bold">{profile.name}</p>
            <p className="mt-1 text-lg font-medium">{profile.role}</p>
          </div>
          <div className="md:justify-self-end">
            <Button asChild size="xl">
              <a href={file.url} download={file.file} type="application/pdf">
                {dict.resume}
                <DownloadIcon
                  data-icon="inline-end"
                  aria-hidden
                  className="transition-transform group-hover/button:translate-y-0.5 group-focus-visible/button:translate-y-0.5 motion-reduce:transition-none"
                />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
