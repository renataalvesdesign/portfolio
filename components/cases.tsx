import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { cn } from "cn"

import { Badge } from "@ds/components/ui/badge"
import { Button } from "@ds/components/ui/button"
import { Container } from "@ds/components/ui/container"
import { ImagePlaceholder } from "@ds/components/ui/image-placeholder"
import { CaseCarousel } from "@/components/case-carousel"
import type { Dictionary } from "@/dictionaries/pt"
import type { ProjectView } from "@/lib/projects"

// Classes that line a card's 7 rows up with its neighbour's through subgrid.
// The parent grid spans each card over 7 rows from the same breakpoint: lg on
// the Home (CaseCarousel), md on the Projects page (ProjectsList).
const subgridClasses = {
  lg: {
    card: "lg:row-span-7 lg:grid lg:grid-rows-subgrid lg:items-start",
    text: "lg:contents",
    meta: "lg:mt-6",
    link: "lg:justify-self-start",
  },
  md: {
    card: "md:row-span-7 md:grid md:grid-rows-subgrid md:items-start",
    text: "md:contents",
    meta: "md:mt-6",
    link: "md:justify-self-start",
  },
}

// Home: the "selected" projects of content/projects, in their order
export function Cases({
  dict,
  projects,
}: {
  dict: Dictionary["cases"]
  projects: ProjectView[]
}) {
  return (
    <section id="projetos" className="border-t">
      <Container className="pt-16 pb-32">
        <h2 id="projetos-title" className="text-section-title">
          {dict.title}
        </h2>

        <CaseCarousel
          labelledBy="projetos-title"
          labels={dict.carousel}
          className="mt-10"
        >
          {projects.map((project, index) => (
            <CaseCard
              key={project.slug}
              item={project}
              featured={index === 0}
              viewCase={dict.viewCase}
            />
          ))}
        </CaseCarousel>
      </Container>
    </section>
  )
}

export function CaseCard({
  item,
  viewCase,
  featured = false,
  subgridFrom = "lg",
  imageClassName,
  className,
}: {
  /** A project without a cover yet shows a placeholder */
  item: ProjectView
  viewCase: string
  featured?: boolean
  /** Breakpoint from which a non-featured card is a 7-row subgrid */
  subgridFrom?: keyof typeof subgridClasses
  /** Overrides the cover frame, e.g. a fixed height instead of the ratio */
  imageClassName?: string
  className?: string
}) {
  const subgrid = subgridClasses[subgridFrom]
  const coverClassName = cn(
    "aspect-660/340 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-103 group-has-focus-visible:scale-103 motion-reduce:transition-none",
    featured && "lg:aspect-660/420",
    imageClassName
  )

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
        featured ? "grid items-center gap-6 lg:grid-cols-12" : subgrid.card,
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
            660/340 frame, so the featured image is a little lower there.
            Without a cover yet, the Design System placeholder fills the
            same frame. */}
        {item.cover ? (
          <Image
            src={item.cover}
            alt={item.coverAlt}
            sizes={
              featured
                ? "(min-width: 1024px) 50vw, 100vw"
                : "(min-width: 1024px) 33vw, 100vw"
            }
            className={coverClassName}
          />
        ) : (
          <ImagePlaceholder alt={item.coverAlt} className={coverClassName} />
        )}
      </div>

      <div className={cn(featured ? "lg:col-span-6" : ["mt-6", subgrid.text])}>
        <p
          className={cn(
            "flex flex-wrap items-baseline gap-x-2.5 text-sm text-muted-foreground",
            // The wrapper's mt-6, which display: contents drops
            !featured && subgrid.meta
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
        <p className="text-muted-foreground">{item.summary}</p>
        <p className="mt-4.5 text-sm text-muted-foreground">
          {item.roleSummary}
        </p>
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
            // No press offset. Any translate, even 0px (Tailwind's
            // translate-none), makes the link the containing block of its
            // ::after: the hit area shrank to the link mid-click, so a press
            // anywhere else on the card never completed. "none" is literal.
            "active:not-aria-[haspopup]:[translate:none]!",
            // Keeps its own width in the card's grid row
            !featured && subgrid.link
          )}
        >
          <Link href={item.href}>
            {viewCase}
            <span className="sr-only">: {item.title}</span>
            <ArrowRightIcon
              data-icon="inline-end"
              aria-hidden
              className="transition-transform group-hover:translate-x-[3px] group-has-focus-visible:translate-x-[3px] motion-reduce:transition-none"
            />
          </Link>
        </Button>
      </div>
    </article>
  )
}
