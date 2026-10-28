import Image from "next/image"
import { ArrowDownIcon } from "lucide-react"
import { cn } from "cn"

import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import { Highlight } from "@/components/highlight"
import profilePhoto from "@/public/images/home/image-profile-ra.jpg"
import { ScrollLink } from "@/components/scroll-link"
import type { Dictionary } from "@/dictionaries/pt"
import type { Locale } from "@/lib/i18n"

// Entrance: rise and fade in over 420ms; delays are set per element
const enter =
  "animate-in fade-in slide-in-from-bottom-4 animation-duration-420 ease-out fill-mode-both motion-reduce:animate-none"

export function Hero({
  dict,
  titleLang,
}: {
  dict: Dictionary["hero"]
  titleLang: Locale
}) {
  return (
    <section id="top">
      <Container className="pt-12 pb-14">
        <h1
          lang={titleLang}
          className={cn(
            enter,
            "text-5xl leading-[1.04] font-bold tracking-tight md:text-6xl lg:text-7xl"
          )}
        >
          {dict.titleStart}{" "}
          <Highlight draw="load">{dict.titleHighlight}</Highlight>{" "}
          <br className="hidden md:block" />
          {dict.titleEnd}
        </h1>

        <div className="mt-9 grid items-end gap-x-6 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p
              className={cn(
                enter,
                "max-w-170 text-lg text-muted-foreground delay-60 md:text-xl md:leading-8"
              )}
            >
              {dict.subtitle}
            </p>
            {/* Informative only: not a link */}
            <div
              className={cn(enter, "mt-7 flex items-center gap-4 delay-140")}
            >
              {/* Above the fold, so it loads right away. The crop sits a
                  little above center to keep the face in the circle. */}
              <Image
                src={profilePhoto}
                alt={dict.photoAlt}
                sizes="56px"
                preload
                className="size-14 shrink-0 rounded-full object-cover object-[50%_35%] ring-2 ring-foreground/40"
              />
              <div>
                <p className="font-heading text-lg font-bold">{dict.name}</p>
                <p className="text-sm text-muted-foreground">{dict.role}</p>
              </div>
            </div>
          </div>

          {/* The two buttons always share one row (they need ~371px). Below sm
              they split the row, with 14px text and tighter padding; below
              360px the decorative arrow goes too, so both labels still fit. */}
          <div
            className={cn(
              enter,
              "flex gap-2 delay-60 sm:gap-3 lg:col-span-5 lg:col-start-8 lg:justify-end"
            )}
          >
            <Button
              asChild
              size="xl"
              className="max-sm:flex-auto max-sm:px-3 max-sm:text-sm max-sm:has-data-[icon=inline-end]:pr-3"
            >
              <ScrollLink href="#projetos">
                {dict.ctaProjects}
                <ArrowDownIcon
                  data-icon="inline-end"
                  aria-hidden
                  className="transition-transform group-hover/button:translate-y-0.5 group-focus-visible/button:translate-y-0.5 motion-reduce:transition-none max-[22.5rem]:hidden"
                />
              </ScrollLink>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="max-sm:flex-auto max-sm:px-3 max-sm:text-sm"
            >
              <a href="#contato">{dict.ctaContact}</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
