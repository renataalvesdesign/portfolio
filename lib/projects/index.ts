import type { StaticImageData } from "next/image"

import { allProjects } from "@/content/projects"
import type { Locale } from "@/lib/i18n"
import {
  slugify,
  type Block,
  type CaseBody,
  type Project,
  type ProjectGroup,
  type ProjectText,
} from "@/lib/projects/schema"
import { paths } from "@/lib/site"

// Single source for the projects: Home, Projects page, About page and the case
// pages all read from here. Everything below is derived from content/projects.

function checkRegistry(list: Project[]) {
  const seen = {
    slug: new Map<string, string>(),
    order: new Map<number, string>(),
  }
  for (const project of list) {
    const other = seen.slug.get(project.slug) ?? seen.order.get(project.order)
    if (other)
      throw new Error(
        `[projetos] "${project.slug}" repeats the slug or order of "${other}"`
      )
    seen.slug.set(project.slug, project.slug)
    seen.order.set(project.order, project.slug)
  }

  // Unfinished content is allowed but flagged on every build
  const pending = list.filter(
    (project) => caseBody(project).status === "pending"
  )
  if (pending.length > 0)
    console.warn(
      `[projetos] Case(s) with content pending: ${pending.map((p) => p.slug).join(", ")}`
    )
  const missing = list.flatMap((project) =>
    Object.values(project.body ?? {})
      .flatMap(figuresOf)
      .some((figure) => !figure.image)
      ? [project.slug]
      : []
  )
  if (missing.length > 0)
    console.warn(
      `[projetos] Case(s) with images still to insert: ${missing.join(", ")}`
    )
}

checkRegistry(allProjects)

/** All projects, by `order` */
export const projects = [...allProjects].sort((a, b) => a.order - b.order)

/** Body of a project's case page in `locale`, else the Portuguese one.
 *  Every project has a page; without a case.ts it is a "content pending"
 *  page */
export function caseBody(project: Project, locale: Locale = "pt"): CaseBody {
  return (
    project.body?.[locale] ??
    project.body?.pt ?? { status: "pending", lang: "pt" }
  )
}

/** Card number: order 2 → "02" */
export const projectNumber = (project: Project) =>
  String(project.order).padStart(2, "0")

/** A project in one language, ready for cards and pages */
export type ProjectView = ProjectText & {
  slug: string
  number: string
  company: string
  year: string
  group: ProjectGroup
  cover?: StaticImageData
  /** Case page */
  href: string
}

export function localize(project: Project, locale: Locale): ProjectView {
  return {
    ...project.text[locale],
    slug: project.slug,
    number: projectNumber(project),
    company: project.company,
    year: project.year,
    group: project.group,
    cover: project.cover,
    href: paths.case(locale, project.slug),
  }
}

export function getProjects(locale: Locale, group?: ProjectGroup) {
  return projects
    .filter((project) => !group || project.group === group)
    .map((project) => localize(project, locale))
}

/** Throws on an unknown slug, so a broken reference fails the build */
export function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug)
  if (!project) throw new Error(`[projetos] Unknown project slug "${slug}"`)
  return project
}

/** Previous and next projects across the whole Projects page, in order (both
 *  wrap around). Empty when there is a single project */
export function caseNeighbors(slug: string): {
  previous?: Project
  next?: Project
} {
  const index = projects.findIndex((project) => project.slug === slug)
  const total = projects.length
  if (total < 2) return {}
  return {
    previous: projects[(index - 1 + total) % total],
    next: projects[(index + 1) % total],
  }
}

/** Sections with their anchor resolved; they also build the side index */
export function caseSections(body: CaseBody) {
  return (body.sections ?? []).map((section) => ({
    ...section,
    id: section.id ?? slugify(section.title),
  }))
}

function figuresOf(body?: CaseBody) {
  return (body?.sections ?? []).flatMap((section) =>
    section.blocks.flatMap((block) =>
      block.type === "figure"
        ? [block.figure]
        : block.type === "figurePair"
          ? block.figures
          : []
    )
  )
}

function blockText(block: Block): string[] {
  switch (block.type) {
    case "p":
    case "h3":
    case "quote":
      return [block.text]
    case "list":
      return block.items
    case "figure":
      return [block.caption ?? ""]
    case "figurePair":
      return [block.caption ?? ""]
    case "stats":
      return block.items.flatMap((item) => [item.value, item.label])
    case "comparison":
      return [...block.columns, ...block.rows.flat(), block.footnote ?? ""]
  }
}

// Silent reading speed for non-fiction, words per minute. The same average
// serves Portuguese and English, the two languages of the site
const wordsPerMinute = 200

/** Whole minutes to read a case, shown in its hero. Counts only the case
 *  body: section titles, text, lists, captions, figures and tables. Page
 *  chrome (header, side index, hero, "next case" links, footer) is left out,
 *  and so are image alt texts, which are not read on screen. Undefined while
 *  the body is pending. Computed at build time; no library is needed, since
 *  the body is already structured text (no markdown or HTML to parse) */
export function readingMinutes(body: CaseBody) {
  if (body.status === "pending") return undefined
  const text = (body.sections ?? [])
    .flatMap((section) => [section.title, ...section.blocks.flatMap(blockText)])
    .join(" ")
  // A word has at least one letter or digit, so "·", "—" or a lone "*"
  // footnote mark do not count; **bold** and *italic* marks are dropped
  const words = text
    .replace(/\*/g, "")
    .split(/\s+/)
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length
  return Math.max(1, Math.round(words / wordsPerMinute))
}
