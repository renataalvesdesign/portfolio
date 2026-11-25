import type { NextConfig } from "next"

// Published on GitHub Pages at https://renataalvesdesign.github.io/portfolio/,
// so production builds live under /portfolio. `next dev` stays at the root.
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : ""

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  // Plain <a href> to files in public/ (e.g. the résumé) need the prefix too
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // GitHub Pages has no image optimization server
  images: { unoptimized: true },
}

export default nextConfig
