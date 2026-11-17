import type { Locale } from "@/lib/i18n"

// Data that does not change between languages.
// TODO: replace the "#" placeholders once the final links are available
// (caseUrls → Case pages, resumeUrl → résumé file).
export const site = {
  email: "renaataa.alves@hotmail.com",
  linkedinUrl: "https://www.linkedin.com/in/renaataalves/",
  resumeUrl: "#",
  caseUrls: ["#", "#", "#"],
  // Projects page groups (projects.groups), by case number; "#" if missing
  projectUrls: {} as Partial<Record<string, string>>,
  cookiePreferencesUrl: "#",
}

export const isPending = (url: string) => url === "#"

// Page routes. Link them with next/link, which adds the base path.
export const paths = {
  home: (locale: Locale) => `/${locale}`,
  about: (locale: Locale) => `/${locale}/sobre`,
  projects: (locale: Locale) => `/${locale}/projetos`,
}

export type Page = keyof typeof paths
