import type { Locale } from "@/lib/i18n"

// Data that does not change between languages.
// TODO: replace the "#" placeholders once the final links are available
// (resumeUrl → résumé file). Case links come from content/projects.
export const site = {
  // Public origin, for absolute URLs in share metadata (the base path is
  // added by Next to static asset URLs)
  url: "https://renataalvesdesign.github.io",
  email: "renaataa.alves@hotmail.com",
  linkedinUrl: "https://www.linkedin.com/in/renaataalves/",
  resumeUrl: "#",
  cookiePreferencesUrl: "#",
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
