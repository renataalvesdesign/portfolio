import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { CodeBlock } from "./components/showcase"

const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const brand = [
  {
    name: "Navy",
    hex: "#0E1E3D",
    token: "--primary-800",
    role: "Main background",
    usage:
      "The page itself, and the text, primary buttons and details placed on cream.",
    surface: "surface-dark",
  },
  {
    name: "Cream",
    hex: "#F0DFAD",
    token: "--grey-100",
    role: "Secondary background",
    usage:
      "Alternate sections and highlighted blocks, and the text, primary buttons and details placed on navy.",
    surface: "surface-light",
  },
]

const surfaces = [
  {
    name: "Navy surface",
    className: "surface-dark",
    note: "Default. Also .surface-dark, to return to navy inside a cream block.",
  },
  {
    name: "Cream surface",
    className: "surface-light",
    note: "Any block with .surface-light.",
  },
]

const surfaceUsage = `<main>                                   {/* navy: the default */}
  <section className="surface-light">    {/* cream block */}
    <Card>...</Card>                     {/* cream card, navy text */}
    <div className="surface-dark">...</div>  {/* back to navy */}
  </section>
</main>`

/** How each element looks on each surface. Ratios are WCAG contrast against the surface or the element's own fill. */
const overlays = [
  {
    element: "Background",
    token: "--background",
    navy: "#0E1E3D",
    cream: "#F0DFAD",
  },
  {
    element: "Text",
    token: "--foreground",
    navy: "#F0DFAD",
    cream: "#0E1E3D",
    contrast: ["12.5:1", "12.5:1"],
  },
  {
    element: "Muted text",
    token: "--muted-foreground",
    navy: "#C1B79B",
    cream: "#464238",
    contrast: ["8.3:1", "7.6:1"],
  },
  {
    element: "Highlight text",
    token: "--highlight",
    navy: "#EDA88D",
    cream: "#834227",
    contrast: ["8.3:1", "5.7:1"],
  },
  {
    element: "Card and popover",
    token: "--card",
    navy: "#162A50",
    cream: "#FBF3DC",
    contrast: ["10.7:1", "15.0:1"],
  },
  {
    element: "Primary button",
    token: "--primary",
    navy: "#F0DFAD",
    cream: "#0E1E3D",
    contrast: ["12.5:1", "12.5:1"],
  },
  {
    element: "Secondary and muted fill",
    token: "--secondary",
    navy: "#1C3361",
    cream: "#DACDA9",
    contrast: ["9.3:1", "10.5:1"],
  },
  {
    element: "Border",
    token: "--border",
    navy: "cream 16%",
    cream: "#C1B79B",
  },
  {
    element: "Input border",
    token: "--input",
    navy: "cream 28%",
    cream: "#7D7766",
  },
  {
    element: "Focus ring",
    token: "--ring",
    navy: "#90ABDE",
    cream: "#2E4B83",
    contrast: ["7.2:1", "6.5:1"],
  },
]

const scales = [
  {
    id: "primary-scale",
    title: "Primary scale",
    description:
      "Deep navy. 800 is the brand navy and the main background. The lighter steps are for focus rings and charts on navy.",
    name: "primary",
    brandStep: 800,
    hex: [
      "#EDF3FC",
      "#D9E4F9",
      "#B7CBEF",
      "#90ABDE",
      "#6889C6",
      "#4567A8",
      "#2E4B83",
      "#1C3361",
      "#0E1E3D",
      "#051029",
    ],
  },
  {
    id: "grey-scale",
    title: "Grey scale",
    description:
      "Warm sand built from the cream. 100 is the brand cream and the secondary background. 50 lifts cards on cream; 600 and darker are for text on cream.",
    name: "grey",
    brandStep: 100,
    hex: [
      "#FBF3DC",
      "#F0DFAD",
      "#DACDA9",
      "#C1B79B",
      "#9F9882",
      "#7D7766",
      "#5C584B",
      "#464238",
      "#302E25",
      "#1D1A14",
    ],
  },
  {
    id: "accent-scale",
    title: "Accent scale",
    description:
      "Terracotta, for small highlights only. For text use 700 or darker on cream and 400 or lighter on navy.",
    name: "accent",
    hex: [
      "#FEEFE9",
      "#FCDFD4",
      "#F7C6B3",
      "#EDA88D",
      "#DB8867",
      "#C26B48",
      "#A35433",
      "#834227",
      "#63311D",
      "#462314",
    ],
  },
]

const palette = [
  { name: "background", fg: "foreground" },
  { name: "card", fg: "card-foreground" },
  { name: "popover", fg: "popover-foreground" },
  { name: "primary", fg: "primary-foreground" },
  { name: "secondary", fg: "secondary-foreground" },
  { name: "muted", fg: "muted-foreground" },
  { name: "accent", fg: "accent-foreground" },
  { name: "sidebar", fg: "sidebar-foreground" },
]

const lines = ["border", "input", "ring"]

const charts = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]

const semantic = [
  { name: "success", fg: "success-foreground", label: "Success" },
  { name: "warning", fg: "warning-foreground", label: "Warning" },
  { name: "destructive", fg: "destructive-foreground", label: "Error" },
  { name: "info", fg: "info-foreground", label: "Info" },
]

const radii = [
  { name: "rounded-sm", className: "rounded-sm", value: "0.3rem" },
  { name: "rounded-md", className: "rounded-md", value: "0.4rem" },
  { name: "rounded-lg", className: "rounded-lg", value: "0.5rem" },
  { name: "rounded-xl", className: "rounded-xl", value: "0.7rem" },
  { name: "rounded-2xl", className: "rounded-2xl", value: "0.9rem" },
  { name: "rounded-full", className: "rounded-full", value: "pill" },
]

const shadows = [
  { name: "shadow-xs", className: "shadow-xs" },
  { name: "shadow-sm", className: "shadow-sm" },
  { name: "shadow-md", className: "shadow-md" },
  { name: "shadow-lg", className: "shadow-lg" },
  { name: "shadow-xl", className: "shadow-xl" },
]

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="flex flex-col gap-8 border-t pt-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl">{title}</h2>
        {description && (
          <p className="max-w-2xl text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}

function TokenName({ children }: { children: React.ReactNode }) {
  return <code className="font-mono text-xs">{children}</code>
}

/** Renders its children once per surface, side by side, so both overlays are compared at a glance. */
function OnBothSurfaces({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {surfaces.map((surface) => (
        <div
          key={surface.className}
          className={cn(
            surface.className,
            "flex flex-col gap-6 rounded-xl border p-6",
            className
          )}
        >
          <div className="flex flex-col gap-1">
            <p className="font-sans text-xs tracking-widest text-highlight uppercase">
              {surface.name}
            </p>
            <TokenName>.{surface.className}</TokenName>
          </div>
          {children}
        </div>
      ))}
    </div>
  )
}

function SurfaceSample() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl">Heading on this surface</h3>
        <p>Body text uses the foreground token.</p>
        <p className="text-sm text-muted-foreground">
          Muted text for supporting information.
        </p>
        <p className="text-sm font-medium text-highlight">
          Highlight text in terracotta.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Card</CardTitle>
          <CardDescription>
            Raised from the surface, with its own foreground.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          Cards follow the surface they sit on.
        </CardContent>
      </Card>
    </>
  )
}

function Swatch({ hex }: { hex: string }) {
  if (!hex.startsWith("#")) {
    return <span className="font-mono text-xs">{hex}</span>
  }

  return (
    <span className="flex items-center gap-2 font-mono text-xs">
      <span
        className="size-4 shrink-0 rounded-sm border"
        style={{ background: hex }}
      />
      {hex}
    </span>
  )
}

export default function StyleguidePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-10 py-16">
      <header className="flex flex-col gap-4">
        <p className="font-sans text-xs tracking-widest text-highlight uppercase">
          Foundation
        </p>
        <h1 className="text-5xl tracking-tight">Design Tokens</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          One theme built on two brand colors: deep navy as the main background
          and warm cream as the secondary background. Each one is the text and
          detail color of the other, with terracotta as a small accent.
        </p>
      </header>

      <Section
        id="brand"
        title="Brand colors"
        description="Two colors carry the whole system. Cream on navy and navy on cream both reach 12.5:1, well above the WCAG AAA threshold of 7:1."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {brand.map((color) => (
            <div
              key={color.name}
              className={cn(
                color.surface,
                "flex min-h-64 flex-col justify-between gap-8 rounded-xl border p-8"
              )}
            >
              <div className="flex flex-col gap-1">
                <p className="font-sans text-xs tracking-widest text-highlight uppercase">
                  {color.role}
                </p>
                <h3 className="text-4xl tracking-tight">{color.name}</h3>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm">{color.usage}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs">
                  <span>{color.hex}</span>
                  <span>{color.token}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="surfaces"
        title="Surfaces"
        description="There is no light or dark mode. The page is navy; .surface-light puts any block on cream and .surface-dark returns to navy inside it. Every semantic token is redefined per surface, so components need no extra classes."
      >
        <OnBothSurfaces>
          <SurfaceSample />
        </OnBothSurfaces>
        <CodeBlock code={surfaceUsage} />
      </Section>

      <Section
        id="overlays"
        title="Overlay rules"
        description="What each element becomes on each surface. Contrast is measured against the surface, or against the element's own fill for buttons and cards."
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Element</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>On navy</TableHead>
              <TableHead>On cream</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {overlays.map((row) => (
              <TableRow key={row.element}>
                <TableCell className="font-medium">{row.element}</TableCell>
                <TableCell className="font-mono text-xs">{row.token}</TableCell>
                {[row.navy, row.cream].map((value, i) => (
                  <TableCell key={i}>
                    <div className="flex flex-col gap-1">
                      <Swatch hex={value} />
                      {row.contrast && (
                        <span className="font-mono text-xs text-muted-foreground">
                          {row.contrast[i]}
                        </span>
                      )}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Section>

      <Section
        id="colors"
        title="Semantic tokens"
        description="The tokens every component uses. Each swatch shows a fill with its paired foreground, rendered on both surfaces."
      >
        <OnBothSurfaces>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {palette.map((token) => (
              <div key={token.name} className="flex flex-col gap-2">
                <div
                  className="flex h-20 items-end rounded-lg border p-3"
                  style={{
                    background: `var(--${token.name})`,
                    color: `var(--${token.fg})`,
                  }}
                >
                  <span className="font-heading text-2xl font-semibold">
                    Aa
                  </span>
                </div>
                <TokenName>--{token.name}</TokenName>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {lines.map((name) => (
              <div key={name} className="flex flex-col gap-2">
                <div
                  className="h-12 rounded-lg border-2"
                  style={{ borderColor: `var(--${name})` }}
                />
                <TokenName>--{name}</TokenName>
              </div>
            ))}
          </div>
        </OnBothSurfaces>
      </Section>

      <Section
        id="semantic"
        title="Status colors"
        description="Muted on purpose so status messages sit quietly in the palette. Light tints on navy, deep tones on cream."
      >
        <OnBothSurfaces>
          <div className="grid grid-cols-2 gap-4">
            {semantic.map((token) => (
              <div key={token.name} className="flex flex-col gap-2">
                <div
                  className="flex h-20 items-end rounded-lg p-3"
                  style={{
                    background: `var(--${token.name})`,
                    color: `var(--${token.fg})`,
                  }}
                >
                  <span className="font-sans text-lg font-medium">
                    {token.label}
                  </span>
                </div>
                <TokenName>--{token.name}</TokenName>
              </div>
            ))}
          </div>
        </OnBothSurfaces>
      </Section>

      <Section
        id="charts"
        title="Chart colors"
        description="Five series colors per surface, matched in lightness so no series dominates."
      >
        <OnBothSurfaces>
          <div className="grid grid-cols-5 gap-3">
            {charts.map((name) => (
              <div key={name} className="flex flex-col gap-2">
                <div
                  className="h-14 rounded-lg"
                  style={{ background: `var(--${name})` }}
                />
                <TokenName>--{name}</TokenName>
              </div>
            ))}
          </div>
        </OnBothSurfaces>
      </Section>

      {scales.map((scale) => (
        <Section
          key={scale.id}
          id={scale.id}
          title={scale.title}
          description={scale.description}
        >
          <div className="grid grid-cols-5 gap-4 lg:grid-cols-10">
            {steps.map((step, i) => (
              <div key={step} className="flex flex-col gap-1.5">
                <div
                  className={cn(
                    "h-16 rounded-lg border",
                    step === scale.brandStep &&
                      "ring-2 ring-ring ring-offset-2 ring-offset-background"
                  )}
                  style={{ background: `var(--${scale.name}-${step})` }}
                />
                <span className="flex items-center gap-2 font-sans text-sm font-medium">
                  {step}
                  {step === scale.brandStep && (
                    <span className="text-xs text-highlight">Brand</span>
                  )}
                </span>
                <TokenName>
                  --{scale.name}-{step}
                </TokenName>
                <span className="font-mono text-xs text-muted-foreground">
                  {scale.hex[i]}
                </span>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section
        id="typography"
        title="Typography"
        description="Space Grotesk for headings: 600 by default, 700 (font-bold) for extra emphasis. Poppins for labels, eyebrows and body text."
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <TokenName>font-heading · Space Grotesk 600, 700</TokenName>
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-6xl tracking-tight">Heading 1</h1>
                <TokenName>text-6xl tracking-tight</TokenName>
              </div>
              <div>
                <h2 className="text-4xl tracking-tight">Heading 2</h2>
                <TokenName>text-4xl tracking-tight</TokenName>
              </div>
              <div>
                <h3 className="text-3xl">Heading 3</h3>
                <TokenName>text-3xl</TokenName>
              </div>
              <div>
                <h4 className="text-2xl">Heading 4</h4>
                <TokenName>text-2xl</TokenName>
              </div>
              <div>
                <h5 className="text-xl">Heading 5</h5>
                <TokenName>text-xl</TokenName>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <TokenName>font-sans · Poppins 400, 500, 600, 700</TokenName>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase">
                  Label / Eyebrow
                </p>
                <TokenName>
                  font-sans text-xs tracking-widest uppercase
                </TokenName>
              </div>
              <div>
                <p className="text-lg">
                  Lead paragraph. Good typography makes a page feel considered
                  before a single word is read.
                </p>
                <TokenName>text-lg</TokenName>
              </div>
              <div>
                <p>
                  Body text. Poppins is a geometric sans-serif, clean and
                  comfortable at reading sizes, with medium, semibold and{" "}
                  <strong>bold weights</strong> for emphasis.
                </p>
                <TokenName>text-base leading-relaxed</TokenName>
              </div>
              <div>
                <p className="text-sm">
                  Small text for captions, helper text and dense interface copy.
                </p>
                <TokenName>text-sm</TokenName>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Muted text for secondary information.
                </p>
                <TokenName>text-sm text-muted-foreground</TokenName>
              </div>
              <div>
                <p className="font-mono text-sm">
                  const mono = &quot;ui-monospace&quot;
                </p>
                <TokenName>font-mono text-sm</TokenName>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="radius"
        title="Border radius"
        description="Softly rounded. The base --radius is 0.5rem and every size derives from it."
      >
        <div className="grid grid-cols-3 gap-6 md:grid-cols-6">
          {radii.map((radius) => (
            <div key={radius.name} className="flex flex-col gap-2">
              <div
                className={`h-20 border border-primary/30 bg-secondary ${radius.className}`}
              />
              <TokenName>{radius.name}</TokenName>
              <span className="font-mono text-xs text-muted-foreground">
                {radius.value}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="shadows"
        title="Shadows"
        description="Subtle, navy-tinted shadows that lift surfaces without shouting."
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {shadows.map((shadow) => (
            <div key={shadow.name} className="flex flex-col gap-3">
              <div className={`h-24 rounded-lg bg-card ${shadow.className}`} />
              <TokenName>{shadow.name}</TokenName>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
