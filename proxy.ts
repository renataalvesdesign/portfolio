import { NextResponse, type NextRequest } from "next/server"

import { defaultLocale, locales } from "@/lib/i18n"

// Sends any path without a locale prefix to the default locale (/ -> /pt).
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (hasLocalePrefix) return

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Skip Next.js internals and files with an extension (images, favicon…)
  matcher: ["/((?!_next|.*\\..*).*)"],
}
