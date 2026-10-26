import path from "node:path"
import type { NextConfig } from "next"

// The Design System lives next to this project (../meu-design-system) and is
// imported straight from source through the `@ds/*` alias. Turbopack only
// resolves files inside its root, so the root is the shared Portfolio folder.
const portfolioRoot = path.resolve(process.cwd(), "..")

const nextConfig: NextConfig = {
  turbopack: {
    root: portfolioRoot,
  },
  outputFileTracingRoot: portfolioRoot,
}

export default nextConfig
