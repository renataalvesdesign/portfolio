import type { Metadata } from "next"
import { cn } from "cn"

import "../globals.css"
import { TooltipProvider } from "@ds/components/ui/tooltip"
// Fonts come from the Design System, so both projects load the same ones
import { fontHeading, fontSans } from "@ds/lib/fonts"
import { locales } from "@/lib/i18n"
import { site } from "@/lib/site"
import { getDictionary, getLocale } from "./dictionaries"

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary()
  return {
    // Makes relative share-image URLs (e.g. case covers) absolute
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
  }
}

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <html
      lang={await getLocale()}
      className={cn("antialiased", fontSans.variable, fontHeading.variable)}
    >
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
