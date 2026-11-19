export const locales = ["pt", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "pt"

// Maps a browser language tag (navigator.language, e.g. "pt-BR", "en-US") to a
// site locale: any Portuguese variant gets "pt", everything else gets "en".
export function localeFromLanguage(language: string | undefined): Locale {
  return language?.toLowerCase().startsWith("pt") ? "pt" : "en"
}

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
