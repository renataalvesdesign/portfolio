import { Separator } from "@/components/ui/separator"
import {
  CodeBlock,
  LightPreview,
  Example,
  Preview,
  PropsTable,
  Section,
  ShowcasePage,
  type PropRow,
} from "../showcase"

const usage = `import { Separator } from "@/components/ui/separator"

export function ArticleMeta() {
  return (
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>Essays</span>
      <Separator orientation="vertical" />
      <span>8 min read</span>
    </div>
  )
}`

const props: PropRow[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description:
      "Direction of the line. A vertical separator stretches to its flex parent's height.",
  },
  {
    name: "decorative",
    type: "boolean",
    defaultValue: "true",
    description:
      "When true the line is hidden from screen readers. Set to false when it separates content semantically.",
  },
  {
    name: "className",
    type: "string",
    description: "Extends the styles, for example thickness or color.",
  },
]

function Meta() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="font-medium">The Sunday Edition</p>
        <p className="text-sm text-muted-foreground">
          Long reads, delivered weekly.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Essays</span>
        <Separator orientation="vertical" />
        <span>Interviews</span>
        <Separator orientation="vertical" />
        <span>Recipes</span>
      </div>
    </div>
  )
}

export default function SeparatorShowcase() {
  return (
    <ShowcasePage
      title="Separator"
      description="A thin line that divides content, horizontally between blocks or vertically between inline items."
    >
      <Section title="Variants">
        <Preview className="grid gap-10 md:grid-cols-2">
          <Example label="Horizontal" className="flex-col items-stretch gap-4">
            <span className="text-sm">Above the line</span>
            <Separator />
            <span className="text-sm">Below the line</span>
          </Example>

          <Example label="Vertical" className="h-5 gap-4 text-sm">
            <span>Essays</span>
            <Separator orientation="vertical" />
            <span>Interviews</span>
            <Separator orientation="vertical" />
            <span>Recipes</span>
          </Example>
        </Preview>
      </Section>

      <Section
        title="Sizes"
        description="There is no size prop. Thickness and tone are set with className."
      >
        <Preview className="grid gap-10 md:grid-cols-3">
          <Example label="Default (1px)" className="h-5">
            <Separator />
          </Example>
          <Example label="Thick (2px)" className="h-5">
            <Separator className="data-horizontal:h-0.5" />
          </Example>
          <Example label="Accent" className="h-5">
            <Separator className="bg-accent-500 data-horizontal:h-0.5" />
          </Example>
        </Preview>
      </Section>

      <Section
        title="States"
        description="The separator is not interactive, so it has no hover, focus or disabled state. Its only behavioural switch is decorative: true hides it from assistive technology, false exposes it as a separator."
      >
        <Preview className="grid gap-10 md:grid-cols-2">
          <Example label="Decorative (default)" className="h-5">
            <Separator />
          </Example>
          <Example label="Semantic" className="h-5">
            <Separator decorative={false} />
          </Example>
        </Preview>
      </Section>

      <Section title="On cream surface" description="Inside .surface-light the same component switches to the cream tokens.">
        <LightPreview>
          <Meta />
        </LightPreview>
      </Section>

      <Section title="Usage">
        <CodeBlock code={usage} />
      </Section>

      <Section title="Props">
        <PropsTable rows={props} />
      </Section>
    </ShowcasePage>
  )
}
