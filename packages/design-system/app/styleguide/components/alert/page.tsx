import { CircleAlert, Info } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
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

const usage = `import { Info } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function TrialNotice() {
  return (
    <Alert>
      <Info />
      <AlertTitle>Trial ending soon</AlertTitle>
      <AlertDescription>
        Three days left before your trial expires.
      </AlertDescription>
    </Alert>
  )
}`

const props: PropRow[] = [
  {
    name: "Alert · variant",
    type: '"default" | "destructive"',
    defaultValue: '"default"',
    description: "destructive colors the title, description and icon as an error.",
  },
  {
    name: "Alert · children",
    type: "ReactNode",
    description:
      "An svg placed as the first child becomes the leading icon and shifts the text into a second column.",
  },
  {
    name: "AlertTitle / AlertDescription",
    type: "div attributes",
    description: "Heading line and supporting text.",
  },
  {
    name: "AlertAction",
    type: "div attributes",
    description: "Pinned to the top-right corner, for a button or link.",
  },
  {
    name: "className",
    type: "string",
    description: "Every part accepts className to extend its styles.",
  },
]

export default function AlertShowcase() {
  return (
    <ShowcasePage
      title="Alert"
      description="An inline message that calls attention to information or an error without interrupting the reader."
    >
      <Section title="Variants">
        <div className="grid gap-10 md:grid-cols-2">
          <Example label="default" className="items-start">
            <Alert>
              <Info />
              <AlertTitle>Trial ending soon</AlertTitle>
              <AlertDescription>
                Three days left before your trial expires.
              </AlertDescription>
            </Alert>
          </Example>

          <Example label="destructive" className="items-start">
            <Alert variant="destructive">
              <CircleAlert />
              <AlertTitle>Payment failed</AlertTitle>
              <AlertDescription>
                Check your card details and try again.
              </AlertDescription>
            </Alert>
          </Example>

          <Example label="Without icon" className="items-start">
            <Alert>
              <AlertTitle>New issue published</AlertTitle>
              <AlertDescription>
                Issue 24 is now available to all subscribers.
              </AlertDescription>
            </Alert>
          </Example>

          <Example label="With action" className="items-start">
            <Alert>
              <Info />
              <AlertTitle>Trial ending soon</AlertTitle>
              <AlertDescription>Three days left.</AlertDescription>
              <AlertAction>
                <Button size="xs" variant="outline">
                  Renew
                </Button>
              </AlertAction>
            </Alert>
          </Example>
        </div>
      </Section>

      <Section
        title="Sizes"
        description="The alert has a single size and always fills the width of its container."
      >
        <Preview className="flex flex-col gap-10">
          <Example label="Title only">
            <Alert>
              <Info />
              <AlertTitle>Your changes were saved.</AlertTitle>
            </Alert>
          </Example>
        </Preview>
      </Section>

      <Section
        title="States"
        description="The alert is a static message with role=&quot;alert&quot;, so it has no hover, focus or disabled state. Only links inside the title or description react: they are underlined and darken on hover."
      >
        <Preview>
          <Example label="With link">
            <Alert>
              <Info />
              <AlertTitle>Trial ending soon</AlertTitle>
              <AlertDescription>
                <p>
                  Three days left. <a href="#">See the plans</a> to keep
                  reading.
                </p>
              </AlertDescription>
            </Alert>
          </Example>
        </Preview>
      </Section>

      <Section title="On cream surface" description="Inside .surface-light the same component switches to the cream tokens.">
        <LightPreview className="grid gap-4 md:grid-cols-2">
          <Alert>
            <Info />
            <AlertTitle>Trial ending soon</AlertTitle>
            <AlertDescription>
              Three days left before your trial expires.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <CircleAlert />
            <AlertTitle>Payment failed</AlertTitle>
            <AlertDescription>
              Check your card details and try again.
            </AlertDescription>
          </Alert>
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
