import { ArrowRightIcon } from "lucide-react"
import { cn } from "cn"

import { Badge } from "@ds/components/ui/badge"
import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import { ImagePlaceholder } from "@ds/components/ui/image-placeholder"
import { CaseCarousel } from "@/components/case-carousel"
import type { Dictionary } from "@/dictionaries/pt"
import { site } from "@/lib/site"

type CaseItem = Dictionary["cases"]["items"][number]

export function Cases({
  dict,
  placeholderLabel,
}: {
  dict: Dictionary["cases"]
  placeholderLabel: string
}) {
  return (
    <section id="projetos" className="border-t">
      <Container className="pt-16 pb-32">
        <h2
          id="projetos-title"
          className="text-4xl font-bold tracking-tight md:text-5xl"
        >
          {dict.title}
        </h2>

        <CaseCarousel
          labelledBy="projetos-title"
          labels={dict.carousel}
          className="mt-10"
        >
          {dict.items.map((item, index) => (
            <CaseCard
              key={item.number}
              item={item}
              href={site.caseUrls[index] ?? "#"}
              featured={index === 0}
              viewCase={dict.viewCase}
              placeholderLabel={placeholderLabel}
            />
          ))}
        </CaseCarousel>
      </Container>
    </section>
  )
}

function CaseCard({
  item,
  href,
  viewCase,
  placeholderLabel,
  featured = false,
  className,
}: {
  item: CaseItem
  href: string
  viewCase: string
  placeholderLabel: string
  featured?: boolean
  className?: string
}) {
  return (
    // The "Ver case" link stretches over the whole card (its ::after), so the
    // card is a single link target. The frame shows on hover (pointer devices
    // only), keyboard focus and press.
    // Side by side (lg), the cards share their 7 rows through subgrid
    // (CaseCarousel): image, meta, title, description, responsibilities,
    // tags and "Ver case". Each row is as tall as the taller card's item, so
    // every item starts at the same height in both cards whatever their text
    // length, and the spare space sits below the shorter item (usually the
    // description). The text wrapper is display: contents there so its
    // children are the rows.
    <article
      data-reveal=""
      className={cn(
        "group relative isolate before:absolute before:-inset-4 before:-z-10 before:rounded-2xl before:bg-card before:opacity-0 before:transition-opacity hover:before:opacity-100 active:before:opacity-100 has-focus-visible:before:opacity-100 motion-reduce:before:transition-none",
        featured
          ? "grid items-center gap-6 lg:grid-cols-12"
          : "lg:row-span-7 lg:grid lg:grid-rows-subgrid lg:items-start",
        className
      )}
    >
      <div
        className={cn(
          "overflow-hidden rounded-xl",
          featured && "lg:col-span-6"
        )}
      >
        {/* In the carousel (below 1024px) every case uses the shorter
            660/340 frame, so the featured image is a little lower there */}
        <ImagePlaceholder
          alt={item.imageAlt}
          label={placeholderLabel}
          className={cn(
            "aspect-660/340 transition-transform duration-500 ease-out group-hover:scale-103 group-has-focus-visible:scale-103 motion-reduce:transition-none",
            featured && "lg:aspect-660/420"
          )}
        />
      </div>

      <div className={cn(featured ? "lg:col-span-6" : "mt-6 lg:contents")}>
        <p
          className={cn(
            "flex flex-wrap items-baseline gap-x-2.5 text-sm text-muted-foreground",
            // The wrapper's mt-6, which display: contents drops
            !featured && "lg:mt-6"
          )}
        >
          <span className="font-semibold text-foreground">{item.number}</span>
          {item.company} · {item.year}
        </p>
        <h3
          className={cn(
            "mt-2.5 mb-3.5 font-bold tracking-tight",
            featured ? "text-4xl" : "text-3xl"
          )}
        >
          {item.title}
        </h3>
        <p className="text-muted-foreground">{item.description}</p>
        <p className="mt-4.5 text-sm text-muted-foreground">{item.role}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li key={tag}>
              <Badge size="lg" variant="secondary">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
        <Button
          asChild
          variant="link"
          className={cn(
            "mt-5.5 h-auto px-0 text-base font-semibold group-hover:underline after:absolute after:-inset-4 after:rounded-2xl",
            // Keeps its own width in the card's grid row
            !featured && "lg:justify-self-start"
          )}
        >
          <a href={href}>
            {viewCase}
            <span className="sr-only">: {item.title}</span>
            <ArrowRightIcon
              data-icon="inline-end"
              aria-hidden
              className="transition-transform group-hover:translate-x-[3px] group-has-focus-visible:translate-x-[3px] motion-reduce:transition-none"
            />
          </a>
        </Button>
      </div>
    </article>
  )
}
