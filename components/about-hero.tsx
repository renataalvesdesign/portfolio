import { DownloadIcon } from "lucide-react"
import { cn } from "cn"

import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@ds/components/ui/tooltip"
import type { Dictionary } from "@/dictionaries/pt"
import { enter } from "@/lib/motion"
import { isPending, site } from "@/lib/site"

export function AboutHero({
  dict,
  profile,
  resumePending,
}: {
  dict: Dictionary["about"]["hero"]
  profile: Pick<Dictionary["hero"], "name" | "role">
  resumePending: string
}) {
  const pending = isPending(site.resumeUrl)

  const resume = (
    <Button asChild size="xl">
      <a href={site.resumeUrl} download={pending ? undefined : true}>
        {dict.resume}
        <DownloadIcon
          data-icon="inline-end"
          aria-hidden
          className="transition-transform group-hover/button:translate-y-0.5 group-focus-visible/button:translate-y-0.5 motion-reduce:transition-none"
        />
      </a>
    </Button>
  )

  return (
    <section id="top">
      <Container className="pt-20 pb-16">
        <p
          className={cn(
            enter,
            "text-xs font-semibold tracking-wider text-muted-foreground uppercase"
          )}
        >
          {dict.eyebrow}
        </p>
        <h1
          className={cn(
            enter,
            "mt-5 max-w-270 text-4xl leading-tight font-bold tracking-tight delay-60 md:text-5xl"
          )}
        >
          {dict.title}
        </h1>
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
            {pending ? (
              // Same hint as the pending LinkedIn link: on hover and keyboard
              // focus, announced as the link's description
              <Tooltip>
                <TooltipTrigger asChild>{resume}</TooltipTrigger>
                <TooltipContent sideOffset={6}>{resumePending}</TooltipContent>
              </Tooltip>
            ) : (
              resume
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
