"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"

import { ToggleGroup, ToggleGroupItem } from "@ds/components/ui/toggle-group"
import type { Dictionary } from "@/dictionaries/pt"
import { hasLocale, locales, type Locale } from "@/lib/i18n"

// Design System ToggleGroup wired to the /[lang] routes.
export function LanguageToggle({
  locale,
  labels,
}: {
  locale: Locale
  labels: Dictionary["language"]
}) {
  const router = useRouter()
  const pathname = usePathname()
  // Moves the selection on the click itself (an urgent update, not part of the
  // navigation transition). The header remounts when the route changes, so
  // this always starts from the current locale.
  const [selected, setSelected] = React.useState<Locale>(locale)

  function changeLocale(next: string) {
    // Radix sends "" when the active item is pressed again
    if (!hasLocale(next) || next === selected) return
    setSelected(next)
    const rest = pathname.replace(/^\/[^/]+/, "")
    router.replace(`/${next}${rest}${window.location.hash}`, { scroll: false })
  }

  return (
    <ToggleGroup
      type="single"
      size="sm"
      value={selected}
      onValueChange={changeLocale}
      aria-label={labels.label}
    >
      {locales.map((item) => (
        <ToggleGroupItem
          key={item}
          value={item}
          lang={item}
          aria-label={labels[item]}
          className="uppercase"
        >
          {item}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}
