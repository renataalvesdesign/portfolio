import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
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

const usage = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function LanguageSwitch() {
  return (
    <ToggleGroup type="single" defaultValue="pt" size="sm" aria-label="Idioma">
      <ToggleGroupItem value="pt" aria-label="Português">PT</ToggleGroupItem>
      <ToggleGroupItem value="en" aria-label="English">EN</ToggleGroupItem>
    </ToggleGroup>
  )
}`

const props: PropRow[] = [
  {
    name: "ToggleGroup · type",
    type: '"single" | "multiple"',
    description:
      "single allows one active item (a segmented control) and slides an indicator under it; multiple allows any number.",
  },
  {
    name: "ToggleGroup · value / defaultValue",
    type: "string | string[]",
    description:
      "Controls or presets the active item(s). A string for single, an array for multiple.",
  },
  {
    name: "ToggleGroup · onValueChange",
    type: "(value) => void",
    description:
      'Called when the selection changes. In single mode it receives "" when the active item is pressed again.',
  },
  {
    name: "ToggleGroup · size",
    type: '"default" | "sm"',
    defaultValue: '"default"',
    description: "Height and text size of every item in the group.",
  },
  {
    name: "ToggleGroup · aria-label",
    type: "string",
    description: "Names the group for screen readers. Always set it.",
  },
  {
    name: "ToggleGroupItem · value",
    type: "string",
    description: "Unique value of the item.",
  },
  {
    name: "ToggleGroupItem · disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Prevents the item from being selected.",
  },
]

export default function ToggleGroupShowcase() {
  return (
    <ShowcasePage
      title="Toggle Group"
      description="A segmented control for switching between a few related options, such as the site language."
    >
      <Section
        title="Variants"
        description="Two sizes. In single mode a primary-colored indicator slides to the active item (instantly with reduced motion); items can hold text or icons."
      >
        <Preview className="flex flex-wrap gap-10">
          <Example label="Default">
            <ToggleGroup type="single" defaultValue="week" aria-label="Period">
              <ToggleGroupItem value="day">Day</ToggleGroupItem>
              <ToggleGroupItem value="week">Week</ToggleGroupItem>
              <ToggleGroupItem value="month">Month</ToggleGroupItem>
            </ToggleGroup>
          </Example>

          <Example label="Small">
            <ToggleGroup
              type="single"
              defaultValue="pt"
              size="sm"
              aria-label="Idioma"
            >
              <ToggleGroupItem value="pt" aria-label="Português">
                PT
              </ToggleGroupItem>
              <ToggleGroupItem value="en" aria-label="English">
                EN
              </ToggleGroupItem>
            </ToggleGroup>
          </Example>

          <Example label="Icons">
            <ToggleGroup
              type="single"
              defaultValue="left"
              aria-label="Text alignment"
            >
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeftIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenterIcon />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRightIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </Example>
        </Preview>
      </Section>

      <Section
        title="States"
        description="Items react to hover and keyboard focus (arrow keys move between them). Multiple mode keeps several items active."
      >
        <Preview className="flex flex-wrap gap-10">
          <Example label="Multiple">
            <ToggleGroup
              type="multiple"
              defaultValue={["research", "ui"]}
              aria-label="Skills"
            >
              <ToggleGroupItem value="research">Research</ToggleGroupItem>
              <ToggleGroupItem value="ui">UI</ToggleGroupItem>
              <ToggleGroupItem value="data">Data</ToggleGroupItem>
            </ToggleGroup>
          </Example>

          <Example label="Disabled item">
            <ToggleGroup type="single" defaultValue="pt" aria-label="Idioma">
              <ToggleGroupItem value="pt">PT</ToggleGroupItem>
              <ToggleGroupItem value="en">EN</ToggleGroupItem>
              <ToggleGroupItem value="es" disabled>
                ES
              </ToggleGroupItem>
            </ToggleGroup>
          </Example>
        </Preview>
      </Section>

      <Section
        title="On cream surface"
        description="On cream the track and the active item swap to the navy tokens automatically."
      >
        <LightPreview className="flex flex-wrap gap-10">
          <ToggleGroup
            type="single"
            defaultValue="pt"
            size="sm"
            aria-label="Idioma"
          >
            <ToggleGroupItem value="pt">PT</ToggleGroupItem>
            <ToggleGroupItem value="en">EN</ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" defaultValue="week" aria-label="Period">
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
          </ToggleGroup>
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
