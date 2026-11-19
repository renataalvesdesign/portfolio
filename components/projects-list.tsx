import { cn } from "cn"

import { Container } from "@ds/components/ui/container"
import { CaseCard } from "@/components/cases"
import { PageHeading } from "@/components/page-heading"
import type { Dictionary } from "@/dictionaries/pt"
import type { ProjectView } from "@/lib/projects"
import { projectGroups } from "@/lib/projects/schema"

// Projects page: the page heading, then every project of content/projects
// grouped by project.group, each group under its own section title, in the
// same grid. The "selected" group (the Home cases) comes first, with its
// title read by screen readers only.
export function ProjectsList({
  dict,
  projects,
  viewCase,
}: {
  dict: Pick<Dictionary["projects"], "eyebrow" | "title" | "groupTitles">
  projects: ProjectView[]
  viewCase: string
}) {
  const groups = projectGroups
    .map((group) => ({
      group,
      items: projects.filter((project) => project.group === group),
    }))
    .filter(({ items }) => items.length > 0)

  return (
    <section id="top">
      <Container className="pt-20 pb-32">
        <PageHeading eyebrow={dict.eyebrow} title={dict.title} />

        {groups.map(({ group, items }, groupIndex) => {
          const titleId = `projetos-grupo-${groupIndex}`
          const hiddenTitle = group === "selected"
          return (
            <section
              key={group}
              aria-labelledby={titleId}
              className={groupIndex === 0 ? "mt-16" : "mt-28"}
            >
              {/* The Home cases have no visible title; the hidden h2 keeps
                  the heading levels in order (h1 → h2 → card h3). The others
                  use the size of the section titles of the other pages. */}
              <h2
                id={titleId}
                className={hiddenTitle ? "sr-only" : "text-section-title"}
              >
                {dict.groupTitles[group]}
              </h2>
              <CaseGrid
                viewCase={viewCase}
                items={items}
                className={hiddenTitle ? undefined : "mt-10"}
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
  items,
  viewCase,
  className,
}: {
  items: ProjectView[]
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
      {items.map((item) => (
        <li
          key={item.slug}
          className="md:row-span-7 md:grid md:grid-rows-subgrid md:nth-[n+3]:mt-14 lg:nth-[n+3]:mt-18"
        >
          <CaseCard
            item={item}
            viewCase={viewCase}
            subgridFrom="md"
            imageClassName="aspect-auto h-85 md:h-75 lg:h-85"
          />
        </li>
      ))}
    </ul>
  )
}
