import { defaultLocale } from "@/lib/i18n"

// Sends / to the default locale (/ -> /pt). A static export has no proxy, so
// the browser follows a meta refresh. The URL is relative, so it also works
// under the GitHub Pages base path (/portfolio/ -> /portfolio/pt).
export default function Page() {
  return <meta httpEquiv="refresh" content={`0; url=${defaultLocale}`} />
}
