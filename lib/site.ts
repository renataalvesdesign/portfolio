import type { Locale } from "@/lib/i18n"

// Data that does not change between languages.
// Case links come from content/projects.
export const site = {
  // Public origin, for absolute URLs in share metadata (the base path is
  // added by Next to static asset URLs)
  url: "https://renataalvesdesign.github.io",
  email: "renaataa.alves@hotmail.com",
  linkedinUrl: "https://www.linkedin.com/in/renaataalves/",
}

// Résumé PDFs in public/files, one per language. `file` is the name the
// browser saves the download as.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
export const resume: Record<Locale, { url: string; file: string }> = {
  pt: {
    url: `${basePath}/files/renata-alves-curriculo.pdf`,
    file: "Curriculo - Renata Alves - Product Designer Senior.pdf",
  },
  en: {
    url: `${basePath}/files/renata-alves-resume.pdf`,
    file: "Resume - Renata Alves - Senior Product Designer.pdf",
  },
}

export const isPending = (url: string) => url === "#"

// Page routes. Link them with next/link, which adds the base path.
export const paths = {
  home: (locale: Locale) => `/${locale}`,
  about: (locale: Locale) => `/${locale}/sobre`,
  projects: (locale: Locale) => `/${locale}/projetos`,
  case: (locale: Locale, slug: string) => `/${locale}/projetos/${slug}`,
}

export type Page = Exclude<keyof typeof paths, "case">
