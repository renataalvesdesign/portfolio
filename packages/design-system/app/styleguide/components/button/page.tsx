import { ArrowRight, Mail, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
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
  "outline",
  "secondary",
  "ghost",
  "destructive",
  "link",
] as const

const sizes = ["xs", "sm", "default", "lg", "xl"] as const

const iconSizes = ["icon-xs", "icon-sm", "icon", "icon-lg", "icon-xl"] as const

const usage = `import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SubscribeButton() {
  return (
    <Button size="lg">
      Subscribe
      <ArrowRight data-icon="inline-end" />
    </Button>
  )
}`

const props: PropRow[] = [
  {
    name: "variant",
    type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"',
    defaultValue: '"default"',
    description: "Visual style of the button.",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "default" | "lg" | "xl" | "icon-xs" | "icon-sm" | "icon" | "icon-lg" | "icon-xl"',
    defaultValue: '"default"',
    description:
      "Height and padding. The icon sizes are square. xl and icon-xl are for the main calls to action of a page.",
  },
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description:
      "Applies the button styles to the child element, for example a link.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Dims the button and blocks pointer events.",
  },
  {
    name: "className",
    type: "string",
    description: "Extends or overrides the styles.",
  },
]

export default function ButtonShowcase() {
  return (
    <ShowcasePage
      title="Button"
      description="Triggers an action. Six variants and ten sizes, all driven by the design tokens."
    >
      <Section title="Variants">
        <Preview className="flex flex-wrap gap-10">
          {variants.map((variant) => (
            <Example key={variant} label={variant}>
              <Button variant={variant}>Subscribe</Button>
            </Example>
          ))}
        </Preview>
      </Section>

      <Section
        title="Sizes"
        description="Text sizes, icon-only sizes, and icons placed inline with data-icon."
      >
        <Preview className="flex flex-col gap-10">
          <div className="flex flex-wrap items-end gap-10">
            {sizes.map((size) => (
              <Example key={size} label={size}>
                <Button size={size}>Subscribe</Button>
              </Example>
            ))}
          </div>
          <div className="flex flex-wrap items-end gap-10">
            {iconSizes.map((size) => (
              <Example key={size} label={size}>
                <Button size={size} variant="outline" aria-label="Add">
                  <Plus />
                </Button>
              </Example>
            ))}
            <Example label="Icon start">
              <Button variant="outline">
                <Mail data-icon="inline-start" />
                Email us
              </Button>
            </Example>
            <Example label="Icon end">
              <Button>
                Subscribe
                <ArrowRight data-icon="inline-end" />
              </Button>
            </Example>
          </div>
        </Preview>
      </Section>

      <Section
        title="States"
        description="Hover and focus are pinned here so they can be compared."
      >
        <Preview className="flex flex-col gap-10">
          <div className="flex flex-wrap gap-10">
            <Example label="Default">
              <Button>Subscribe</Button>
            </Example>
            <Example label="Hover">
              <Button className="bg-primary/80">Subscribe</Button>
            </Example>
            <Example label="Focus">
              <Button className="border-ring ring-3 ring-ring/50">
                Subscribe
              </Button>
            </Example>
            <Example label="Disabled">
              <Button disabled>Subscribe</Button>
            </Example>
          </div>
          <div className="flex flex-wrap gap-10">
            <Example label="Default">
              <Button variant="outline">Read more</Button>
            </Example>
            <Example label="Hover">
              <Button variant="outline" className="bg-muted">
                Read more
              </Button>
            </Example>
            <Example label="Focus">
              <Button
                variant="outline"
                className="border-ring ring-3 ring-ring/50"
              >
                Read more
              </Button>
            </Example>
            <Example label="Disabled">
              <Button variant="outline" disabled>
                Read more
              </Button>
            </Example>
          </div>
        </Preview>
      </Section>

      <Section title="On cream surface" description="Inside .surface-light the same component switches to the cream tokens.">
        <LightPreview className="flex flex-wrap items-center gap-4">
          {variants.map((variant) => (
            <Button key={variant} variant={variant} className="capitalize">
              {variant}
            </Button>
          ))}
          <Button disabled>Disabled</Button>
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
