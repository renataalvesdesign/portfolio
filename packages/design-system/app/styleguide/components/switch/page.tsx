import { Switch } from "@/components/ui/switch"
import {
  CodeBlock,
  Example,
  LightPreview,
  Preview,
  PropsTable,
  Section,
  ShowcasePage,
  type PropRow,
} from "../showcase"

const usage = `import { Switch } from "@/components/ui/switch"

export function AnalyticsSetting() {
  return (
    <div className="flex items-center gap-3">
      <Switch id="analytics" />
      <label htmlFor="analytics">Analytics cookies</label>
    </div>
  )
}`

const props: PropRow[] = [
  {
    name: "checked / defaultChecked",
    type: "boolean",
    description: "Controls or presets the on state.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    description: "Called when the user toggles the switch.",
  },
  {
    name: "size",
    type: '"default" | "sm"',
    defaultValue: '"default"',
    description: "Track and thumb size.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description:
      "Locks the switch in its current state. Use it for settings the user cannot change, such as required cookies.",
  },
  {
    name: "id",
    type: "string",
    description:
      'Pair it with a <label htmlFor> so the label names the switch and clicking it toggles. Without a visible label, set aria-label.',
  },
  {
    name: "className",
    type: "string",
    description: "Extends the track styles.",
  },
]

function Labelled({
  id,
  label,
  ...props
}: React.ComponentProps<typeof Switch> & { id: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <Switch id={id} {...props} />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </div>
  )
}

export default function SwitchShowcase() {
  return (
    <ShowcasePage
      title="Switch"
      description="A control that turns a single setting on or off, taking effect as soon as it changes or when its form is saved."
    >
      <Section title="Sizes">
        <Preview className="flex flex-wrap gap-12">
          <Example label="default">
            <Labelled id="size-default" label="Analytics" defaultChecked />
          </Example>
          <Example label="sm">
            <Labelled id="size-sm" label="Analytics" size="sm" defaultChecked />
          </Example>
        </Preview>
      </Section>

      <Section
        title="States"
        description="Off uses the input token for the track, on uses primary. Keyboard focus draws the ring token; press Tab to see it. Disabled keeps the state and lowers the opacity."
      >
        <Preview className="grid gap-8 sm:grid-cols-2">
          <Example label="Off">
            <Labelled id="state-off" label="Analytics" />
          </Example>
          <Example label="On">
            <Labelled id="state-on" label="Analytics" defaultChecked />
          </Example>
          <Example label="Disabled · off">
            <Labelled id="state-disabled-off" label="Marketing" disabled />
          </Example>
          <Example label="Disabled · on">
            <Labelled
              id="state-disabled-on"
              label="Necessary"
              disabled
              defaultChecked
            />
          </Example>
        </Preview>
      </Section>

      <Section
        title="On cream surface"
        description="Inside .surface-light the same component switches to the cream tokens."
      >
        <LightPreview className="flex flex-wrap gap-12">
          <Labelled id="light-off" label="Off" />
          <Labelled id="light-on" label="On" defaultChecked />
          <Labelled id="light-disabled" label="Disabled" disabled defaultChecked />
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
