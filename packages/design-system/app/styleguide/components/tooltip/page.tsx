import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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

const sides = ["top", "right", "bottom", "left"] as const

const usage = `import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SaveButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Save</Button>
        </TooltipTrigger>
        <TooltipContent>Save for later</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`

const props: PropRow[] = [
  {
    name: "TooltipProvider · delayDuration",
    type: "number",
    defaultValue: "0",
    description:
      "Milliseconds before a tooltip opens. Wrap the app (or a section) in one provider.",
  },
  {
    name: "Tooltip · open / defaultOpen",
    type: "boolean",
    description: "Controls or presets the open state.",
  },
  {
    name: "Tooltip · onOpenChange",
    type: "(open: boolean) => void",
    description: "Called when the tooltip opens or closes.",
  },
  {
    name: "TooltipTrigger · asChild",
    type: "boolean",
    defaultValue: "false",
    description:
      "Uses the child (for example a Button) as the trigger instead of adding a button.",
  },
  {
    name: "TooltipContent · side",
    type: '"top" | "right" | "bottom" | "left"',
    defaultValue: '"top"',
    description: "Preferred side. Flips automatically when there is no room.",
  },
  {
    name: "TooltipContent · sideOffset",
    type: "number",
    defaultValue: "0",
    description: "Distance in pixels between the trigger and the tooltip.",
  },
  {
    name: "TooltipContent · className",
    type: "string",
    description: "Extends the tooltip bubble styles.",
  },
]

export default function TooltipShowcase() {
  return (
    // The root layout has no TooltipProvider, so the page supplies its own
    <TooltipProvider>
      <ShowcasePage
        title="Tooltip"
        description="A short hint that appears when a control is hovered or focused with the keyboard."
      >
        <Section
          title="Variants"
          description="Hover or tab to each button to see the tooltip on that side."
        >
          <Preview className="flex flex-wrap gap-10">
            {sides.map((side) => (
              <Example key={side} label={side}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="capitalize">
                      {side}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side={side}>Save for later</TooltipContent>
                </Tooltip>
              </Example>
            ))}
          </Preview>
        </Section>

        <Section
          title="States"
          description="A tooltip is closed by default and opens on hover or keyboard focus. Disabled buttons do not fire events, so wrap them in a focusable element."
        >
          <Preview className="flex flex-wrap gap-16 pt-16">
            <Example label="Default (closed)">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Save</Button>
                </TooltipTrigger>
                <TooltipContent>Save for later</TooltipContent>
              </Tooltip>
            </Example>

            <Example label="Hover / focus (open)">
              <Tooltip open>
                <TooltipTrigger asChild>
                  <Button variant="outline">Save</Button>
                </TooltipTrigger>
                <TooltipContent side="right">Save for later</TooltipContent>
              </Tooltip>
            </Example>

            <Example label="Disabled trigger">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span tabIndex={0} className="inline-flex rounded-md">
                    <Button variant="outline" disabled>
                      Save
                    </Button>
                  </span>
                </TooltipTrigger>
                <TooltipContent>Sign in to save articles</TooltipContent>
              </Tooltip>
            </Example>
          </Preview>
        </Section>

        <Section
          title="On cream surface"
          description="The tooltip renders in a portal outside this box, so the surface-light class is also set on TooltipContent."
        >
          <LightPreview>
            <Tooltip open>
              <TooltipTrigger asChild>
                <Button variant="outline">Save</Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="surface-light">
                Save for later
              </TooltipContent>
            </Tooltip>
          </LightPreview>
        </Section>

        <Section title="Usage">
          <CodeBlock code={usage} />
        </Section>

        <Section title="Props">
          <PropsTable rows={props} />
        </Section>
      </ShowcasePage>
    </TooltipProvider>
  )
}
