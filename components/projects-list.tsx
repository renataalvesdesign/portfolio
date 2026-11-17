import type { StaticImageData } from "next/image"
import { cn } from "cn"

import { Container } from "@ds/components/ui/container"
import { CaseCard } from "@/components/cases"
import { PageHeading } from "@/components/page-heading"
import type { Dictionary } from "@/dictionaries/pt"
import { caseCovers, projectCovers } from "@/lib/cases"
import { site } from "@/lib/site"

type Card = {
  item: Dictionary["cases"]["items"][number]
  href: string
  cover?: StaticImageData
}

// Projects page: the page heading over the Home cases, then each group of
// projects.groups under its own section title, in the same grid.
export function ProjectsList({
  dict,
  cases,
}: {
  dict: Pick<
    Dictionary["projects"],
    "eyebrow" | "title" | "casesTitle" | "groups"
  >
  cases: Dictionary["cases"]
}) {
  // Placeholders are temporary: flag them on every build and dev render
  const placeholders = dict.groups
    .flatMap((group) => group.items)
    .filter((item) => item.placeholder)
  if (placeholders.length > 0) {
    console.warn(
      `[projetos] ${placeholders.length} case(s) still marked placeholder: true in projects.groups. Replace them before publishing.`
    )
  }

  return (
    <section id="top">
      <Container className="pt-20 pb-32">
        <PageHeading eyebrow={dict.eyebrow} title={dict.title} />

        {/* The Home cases have no visible title; the hidden h2 keeps the
            heading levels in order (h1 → h2 → card h3) for screen readers */}
        <section aria-labelledby="projetos-grupo-0" className="mt-16">
          <h2 id="projetos-grupo-0" className="sr-only">
            {dict.casesTitle}
          </h2>
          <CaseGrid
            viewCase={cases.viewCase}
            cards={cases.items.map((item, index) => ({
              item,
              href: site.caseUrls[index] ?? "#",
              cover: caseCovers[index],
            }))}
          />
        </section>

        {dict.groups.map((group, groupIndex) => {
          const titleId = `projetos-grupo-${groupIndex + 1}`
          return (
            <section
              key={group.title}
              aria-labelledby={titleId}
              className="mt-28"
            >
              {/* Same size as the section titles of the other pages */}
              <h2
                id={titleId}
                className="text-4xl font-bold tracking-tight md:text-5xl"
              >
                {group.title}
              </h2>
              <CaseGrid
                viewCase={cases.viewCase}
                className="mt-10"
                cards={group.items.map((item) => ({
                  item,
                  href: site.projectUrls[item.number] ?? "#",
                  cover: projectCovers[item.number],
                }))}
              />
            </section>
          )
        })}
      </Container>
    </section>
  )
}

// The cards are the Home's CaseCard. From md up the grid has 2 columns and
// each card spans 7 rows as a subgrid, so meta, title, tags and "Ver case"
// line up across a row whatever the text length. Mobile: 1 column, 56px
// apart. Tablet: 56px between rows, 32px between columns, 300px covers.
// Desktop: 72px both ways.
function CaseGrid({
  cards,
  viewCase,
  className,
}: {
  cards: Card[]
  viewCase: string
  className?: string
}) {
  return (
    // A row gap would also open between the 7 rows the cards share, so from
    // md up the rows of cards are spaced by a top margin on every card after
    // the first row
    <ul
      className={cn(
        "grid gap-y-14 md:grid-cols-2 md:gap-x-8 md:gap-y-0 lg:gap-x-18",
        className
      )}
    >
      {cards.map(({ item, href, cover }) => (
        <li
          key={item.number}
          className="md:row-span-7 md:grid md:grid-rows-subgrid md:nth-[n+3]:mt-14 lg:nth-[n+3]:mt-18"
        >
          <CaseCard
            item={item}
            href={href}
            cover={cover}
            viewCase={viewCase}
            subgridFrom="md"
            imageClassName="aspect-auto h-85 md:h-75 lg:h-85"
          />
        </li>
      ))}
    </ul>
  )
}
