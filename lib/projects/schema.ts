import type { StaticImageData } from "next/image"

import type { Locale } from "@/lib/i18n"

// Shapes of the project data in content/projects. TypeScript checks every
// project and case file during `next build`, so a missing required field fails
// the build; defineProject and defineCase add the checks types cannot express.
// See content/projects/README.md for how to add a case.

/** Where a project is listed. "selected" is the Home and the first group of
 *  the Projects page; group titles live in the dictionaries
 *  (projects.groupTitles). */
export const projectGroups = ["selected", "ecommerce"] as const
export type ProjectGroup = (typeof projectGroups)[number]

/** Text that may use **bold** and *italic*. Nothing else is parsed. */
export type RichText = string

// ---------------------------------------------------------------------------
// Case body: sections made of blocks
// ---------------------------------------------------------------------------

/** One image. Without `image` the page shows an "Imagem a inserir" placeholder
 *  labelled with `label`, in the same frame. */
export type FigureImage = {
  /** Static import from the case's images/ folder (gives width and height) */
  image?: StaticImageData
  /** Describes the image for screen readers. Required, even for placeholders */
  alt: string
  /** Short name shown on the placeholder while the image is missing */
  label: string
  /** Frame ratio while the image is missing, e.g. "16/9" (default) or "4/3" */
  ratio?: `${number}/${number}`
}

export type Block =
  /** Paragraph */
  | { type: "p"; text: RichText }
  /** Subheading inside a section (h3). Not listed in the side index */
  | { type: "h3"; text: string }
  /** Bulleted list, or numbered with ordered: true */
  | { type: "list"; items: RichText[]; ordered?: boolean }
  /** One image, full text width, with an optional caption */
  | { type: "figure"; figure: FigureImage; caption?: RichText }
  /** Two images side by side (stacked on mobile), one shared caption */
  | {
      type: "figurePair"
      figures: [FigureImage, FigureImage]
      caption?: RichText
    }
  /** Pull quote: one key sentence in large type */
  | { type: "quote"; text: string }
  /** Before/after figures: 2 to 4 large values with a short label each */
  | { type: "stats"; items: { value: string; label: string }[] }
  /** Comparison table. The first cell of each row is the row header; the
   *  footnote explains any "*" in the cells */
  | {
      type: "comparison"
      columns: string[]
      rows: string[][]
      footnote?: RichText
    }

export type Section = {
  /** Section title (h2); it is also the entry in the side index */
  title: string
  /** Anchor; generated from the title when omitted (e.g. "visao-geral") */
  id?: string
  blocks: Block[]
}

type CaseCommon = {
  /** Language the body is written in; marked on the page for screen readers */
  lang: Locale
}

export type CaseBody =
  | (CaseCommon & { status: "published"; sections: [Section, ...Section[]] })
  /** Body still to be written: the page shows the hero and a "content
   *  pending" notice, is kept out of search engines and warns on build */
  | (CaseCommon & { status: "pending"; sections?: Section[] })

// ---------------------------------------------------------------------------
// Project metadata
// ---------------------------------------------------------------------------

/** Texts in one language */
export type ProjectText = {
  title: string
  /** Card description (Home and Projects page); also the case hero subtitle
   *  and the page description */
  summary: string
  /** Card line about my role, e.g. "Designer responsável pela entrega, …";
   *  also the case hero "Papel" */
  roleSummary: string
  /** Card tags (3); also the first, always visible chips of the case hero */
  tags: string[]
  /** More skills, shown only on the case page behind a "+N" chip. Tags and
   *  skills together are at most maxSkills; missing ones show placeholders */
  skills?: string[]
  coverAlt: string
}

/** Chips in a case hero: the tags plus the skills */
export const maxSkills = 10

export type Project = {
  /** URL segment: /[lang]/projetos/<slug>. Lowercase, digits and hyphens */
  slug: string
  /** Position across all projects (1, 2, 3…); the card number ("01") comes
   *  from it, and so do the "next case" links */
  order: number
  group: ProjectGroup
  company: string
  year: string
  /** Static import of images/capa.png; a placeholder shows while missing */
  cover?: StaticImageData
  text: Record<Locale, ProjectText>
  /** The case page. Without it the page shows "content pending" */
  body?: CaseBody
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

/** Plain-text id from a title: "Visão geral" → "visao-geral" */
export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function fail(where: string, message: string): never {
  throw new Error(`[projetos] ${where}: ${message}`)
}

/** Identity function that type-checks a project file and validates it */
export function defineProject(project: Project): Project {
  const where = `content/projects/${project.slug}`
  if (!slugPattern.test(project.slug))
    fail(where, `slug "${project.slug}" must be lowercase-with-hyphens`)
  if (!Number.isInteger(project.order) || project.order < 1)
    fail(where, "order must be a whole number from 1")

  for (const [locale, text] of Object.entries(project.text)) {
    for (const field of [
      "title",
      "summary",
      "roleSummary",
      "coverAlt",
    ] as const)
      if (!text[field]?.trim()) fail(where, `text.${locale}.${field} is empty`)
    if (text.tags.length + (text.skills?.length ?? 0) > maxSkills)
      fail(where, `text.${locale}: tags + skills must be ${maxSkills} at most`)
  }
  return project
}

/** Identity function that type-checks a case body and validates it */
export function defineCase(body: CaseBody): CaseBody {
  const ids = new Set<string>()
  for (const section of body.sections ?? []) {
    const id = section.id ?? slugify(section.title)
    const where = `section "${section.title}"`
    if (!id) fail(where, "needs a title or an id")
    if (ids.has(id)) fail(where, `duplicate anchor "#${id}"`)
    ids.add(id)
    if (section.blocks.length === 0) fail(where, "has no blocks")

    for (const block of section.blocks) {
      if (
        block.type === "stats" &&
        (block.items.length < 2 || block.items.length > 4)
      )
        fail(where, "stats needs 2 to 4 items")
      if (block.type === "comparison") {
        const width = block.columns.length
        if (block.rows.some((row) => row.length !== width))
          fail(where, `every comparison row needs ${width} cells`)
      }
    }
  }
  return body
}
