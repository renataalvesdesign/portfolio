import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
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

const variants = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
] as const

const usage = `import { Badge } from "@/components/ui/badge"

export function IssueStatus() {
  return <Badge variant="secondary">Published</Badge>
}`

const props: PropRow[] = [
  {
    name: "variant",
    type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"',
    defaultValue: '"default"',
    description: "Visual style of the badge.",
  },
  {
    name: "size",
    type: '"default" | "lg"',
    defaultValue: '"default"',
    description:
      "default is a compact pill for status and counts. lg is a larger, rounded-rectangle label for tags and keyword lists.",
  },
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description:
      "Applies the badge styles to the child element, for example a link.",
  },
  {
    name: "className",
    type: "string",
    description:
      "Extends or overrides the styles, for example bg-success text-success-foreground.",
  },
]

export default function BadgeShowcase() {
  return (
    <ShowcasePage
      title="Badge"
      description="A small label for status, category or count."
    >
      <Section title="Variants">
        <Preview className="flex flex-wrap gap-10">
          {variants.map((variant) => (
            <Example key={variant} label={variant}>
              <Badge variant={variant}>Published</Badge>
            </Example>
          ))}
        </Preview>
      </Section>

      <Section
        title="Sizes"
        description="default is a compact pill for status and counts; lg is for tags and keyword lists. Icons placed inside are scaled to match."
      >
        <Preview className="flex flex-wrap gap-10">
          <Example label="Text only">
            <Badge>Published</Badge>
          </Example>
          <Example label="With icon">
            <Badge variant="secondary">
              <Check data-icon="inline-start" />
              Verified
            </Badge>
          </Example>
          <Example label="Count">
            <Badge variant="outline">24</Badge>
          </Example>
          <Example label="lg">
            <Badge size="lg" variant="secondary">
              User interviews
            </Badge>
          </Example>
          <Example label="lg outline">
            <Badge size="lg" variant="outline">
              Prototyping
            </Badge>
          </Example>
        </Preview>
      </Section>

      <Section
        title="States"
        description="A badge is static unless it is rendered as a link, which adds hover and focus. Both are pinned here. There is no disabled state."
      >
        <Preview className="flex flex-wrap gap-10">
          <Example label="Default">
            <Badge>Essays</Badge>
          </Example>
          <Example label="Hover (as link)">
            <Badge className="bg-primary/80">Essays</Badge>
          </Example>
          <Example label="Focus (as link)">
            <Badge className="border-ring ring-[3px] ring-ring/50">
              Essays
            </Badge>
          </Example>
        </Preview>
      </Section>

      <Section title="On cream surface" description="Inside .surface-light the same component switches to the cream tokens.">
        <LightPreview className="flex flex-wrap items-center gap-4">
          {variants.map((variant) => (
            <Badge key={variant} variant={variant} className="capitalize">
              {variant}
            </Badge>
          ))}
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
