import { defaultLocale, localeFromLanguage } from "@/lib/i18n"

// Sends / to the visitor's locale. A static export has no server or proxy, so
// the choice happens in the browser: an inline script reads navigator.language
// on first load (pt-* -> /pt, anything else -> /en) and replaces the URL, so
// the back button doesn't return to this blank page. The URL is relative, so it
// also works under the GitHub Pages base path (/portfolio/ -> /portfolio/en).
// Without JavaScript, the meta refresh falls back to the default locale.
// Only / detects; /pt and /en links and the language toggle are left alone.
const redirectScript = `(function(){var detect=${localeFromLanguage.toString()};location.replace(detect(navigator.language)+location.search+location.hash)})()`

export default function Page() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${defaultLocale}`} />
      </noscript>
    </>
  )
}
