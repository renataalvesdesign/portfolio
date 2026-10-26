import { notFound } from "next/navigation"
import { lang } from "next/root-params"

import type { Dictionary } from "@/dictionaries/pt"
import { hasLocale, type Locale } from "@/lib/i18n"

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  pt: () => import("@/dictionaries/pt").then((module) => module.default),
  en: () => import("@/dictionaries/en").then((module) => module.default),
}

export async function getLocale(): Promise<Locale> {
  const locale = await lang()
  if (!hasLocale(locale)) notFound()
  return locale
}

export async function getDictionary() {
  return dictionaries[await getLocale()]()
}
