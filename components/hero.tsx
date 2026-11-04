import { ArrowDownIcon } from "lucide-react"
import { cn } from "cn"
import { preload } from "react-dom"

import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import { Highlight } from "@/components/highlight"
import photo136 from "@/public/images/home/image-profile-ra-136.jpg"
import photo204 from "@/public/images/home/image-profile-ra-204.jpg"
import photo272 from "@/public/images/home/image-profile-ra-272.jpg"
import photo408 from "@/public/images/home/image-profile-ra-408.jpg"
import { ScrollLink } from "@/components/scroll-link"
import type { Dictionary } from "@/dictionaries/pt"
import type { Locale } from "@/lib/i18n"
import { enter } from "@/lib/motion"

export function Hero({
  dict,
  titleLang,
}: {
  dict: Dictionary["hero"]
  titleLang: Locale
}) {
  // Square crops of image-profile-ra.jpg (face a little above center) for the
  // 68px avatar. Each screen density gets about twice its own pixels: Chrome
  // paints a photo this small softer at its exact size than when it shrinks
  // it 2:1. The static export has no image optimizer, so next/image would
  // send the full photo instead, shrunk ~30x in one step, which aliases.
  const photoSrcSet = `${photo136.src} 1x, ${photo204.src} 1.5x, ${photo272.src} 2x, ${photo408.src} 3x`
  // Above the fold, so it loads right away
  preload(photo136.src, { as: "image", imageSrcSet: photoSrcSet })

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
              className={cn(
                enter,
                // No fill after the entrance: a leftover transform puts the
                // row on its own layer at a fractional offset, blurring the photo
                "mt-7 flex items-center gap-4 delay-140 fill-mode-backwards!"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- next/image cannot emit a srcset without the optimizer */}
              <img
                src={photo136.src}
                srcSet={photoSrcSet}
                alt={dict.photoAlt}
                width={68}
                height={68}
                fetchPriority="high"
                decoding="async"
                className="size-17 shrink-0 rounded-full object-cover ring-2 ring-foreground/40"
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
