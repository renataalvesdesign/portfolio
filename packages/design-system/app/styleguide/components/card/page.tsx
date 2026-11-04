import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

const usage = `import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function IssueCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>The Sunday Edition</CardTitle>
        <CardDescription>Issue 24 · Autumn</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Long reads, quiet interviews and slow recipes.</p>
      </CardContent>
      <CardFooter>
        <Button>Subscribe</Button>
      </CardFooter>
    </Card>
  )
}`

const props: PropRow[] = [
  {
    name: "Card · size",
    type: '"default" | "sm"',
    defaultValue: '"default"',
    description: "Inner spacing. sm also reduces the title size.",
  },
  {
    name: "CardHeader",
    type: "div attributes",
    description: "Holds the title, description and an optional action.",
  },
  {
    name: "CardAction",
    type: "div attributes",
    description: "Pinned to the top-right corner of the header.",
  },
  {
    name: "CardContent / CardFooter",
    type: "div attributes",
    description:
      "Body and footer. Add border-t to the footer for a divided footer.",
  },
  {
    name: "className",
    type: "string",
    description: "Every part accepts className to extend its styles.",
  },
]

function IssueCard({ size }: { size?: "default" | "sm" }) {
  return (
    <Card size={size} className="w-full">
      <CardHeader>
        <CardTitle>The Sunday Edition</CardTitle>
        <CardDescription>Issue 24 · Autumn</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Long reads, quiet interviews and slow recipes, once a week.</p>
      </CardContent>
      <CardFooter className="gap-3">
        <Button size={size === "sm" ? "sm" : "default"}>Subscribe</Button>
        <Button size={size === "sm" ? "sm" : "default"} variant="ghost">
          Read a sample
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function CardShowcase() {
  return (
    <ShowcasePage
      title="Card"
      description="A surface that groups related content, with optional header, action and footer."
    >
      <Section title="Variants">
        <div className="grid gap-10 md:grid-cols-2">
          <Example label="With action" className="items-start">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>On Slow Reading</CardTitle>
                <CardDescription>Essays · 8 min read</CardDescription>
                <CardAction>
                  <Badge variant="secondary">New</Badge>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Why the best pages ask for an unhurried afternoon.</p>
              </CardContent>
            </Card>
          </Example>

          <Example label="Divided footer" className="items-start">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>A Kitchen in Autumn</CardTitle>
                <CardDescription>Recipes · 12 min read</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Six seasonal dishes for the first cold week.</p>
              </CardContent>
              <CardFooter className="border-t">
                <Button variant="outline">Read more</Button>
              </CardFooter>
            </Card>
          </Example>
        </div>
      </Section>

      <Section title="Sizes">
        <div className="grid gap-10 md:grid-cols-2">
          <Example label="default" className="items-start">
            <IssueCard />
          </Example>
          <Example label="sm" className="items-start">
            <IssueCard size="sm" />
          </Example>
        </div>
      </Section>

      <Section
        title="States"
        description="The card is a static container, so it has no hover, focus or disabled state of its own. Interactive states belong to the controls placed inside it."
      >
        <Preview className="grid gap-10 md:grid-cols-2">
          <Example label="Default" className="items-start">
            <Card size="sm" className="w-full">
              <CardHeader>
                <CardTitle>Weekly edition</CardTitle>
                <CardDescription>Every Sunday morning.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="sm">Subscribe</Button>
              </CardFooter>
            </Card>
          </Example>
          <Example label="With disabled control" className="items-start">
            <Card size="sm" className="w-full">
              <CardHeader>
                <CardTitle>Audio edition</CardTitle>
                <CardDescription>Coming soon.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button size="sm" disabled>
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
          </Example>
        </Preview>
      </Section>

      <Section title="On cream surface" description="Inside .surface-light the same component switches to the cream tokens.">
        <LightPreview>
          <div className="max-w-md">
            <IssueCard />
          </div>
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
