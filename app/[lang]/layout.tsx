import type { Metadata } from "next"
import { cn } from "cn"

import "../globals.css"
import { TooltipProvider } from "@ds/components/ui/tooltip"
// Fonts come from the Design System, so both projects load the same ones
import { fontHeading, fontSans } from "@ds/lib/fonts"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { consentScript } from "@/lib/consent"
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
  const dict = await getDictionary()

  return (
    <html
      lang={await getLocale()}
      className={cn("antialiased", fontSans.variable, fontHeading.variable)}
    >
      <head>
        {/* Consent first, then Google Tag Manager only if analytics was
            accepted (Basic consent mode, see lib/consent). The GA4 Google tag
            lives in the container, and Enhanced Measurement turns client-side
            navigations into page_view events. This layout only: "/" just
            redirects. */}
        <script dangerouslySetInnerHTML={{ __html: consentScript }} />
      </head>
      <body>
        {/* First in the DOM so keyboard and screen reader users reach it
            first; it shows at the bottom of the viewport */}
        <CookieConsentBanner dict={dict.cookieConsent} />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
