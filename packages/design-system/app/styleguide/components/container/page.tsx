import { Container } from "@/components/ui/container"
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

const usage = `import { Container } from "@/components/ui/container"

export function Hero() {
  return (
    <section className="surface-light">
      <Container className="grid gap-6 py-24 lg:grid-cols-12">
        {/* content */}
      </Container>
    </section>
  )
}`

const props: PropRow[] = [
  {
    name: "className",
    type: "string",
    description:
      "Adds vertical spacing or a layout (grid, flex). Width and gutters are fixed by the component.",
  },
  {
    name: "...props",
    type: 'ComponentProps<"div">',
    description: "Any div attribute, such as id or aria-*.",
  },
]

function Content({ label }: { label: string }) {
  return (
    <div className="flex h-20 items-center justify-center rounded-md border border-dashed border-foreground/40 text-sm text-muted-foreground">
      {label}
    </div>
  )
}

export default function ContainerShowcase() {
  return (
    <ShowcasePage
      title="Container"
      description="Centers page content at a maximum width of 1440px, with 24px side gutters on mobile and 48px from the md breakpoint."
    >
      <Section
        title="Variants"
        description="The dashed area is the content; the space around it inside the box is the gutter. Resize the window to see the gutter change."
      >
        <Example label="Default" className="block">
          <Preview className="px-0">
            <Container>
              <Content label="max-w-360 · px-6 md:px-12" />
            </Container>
          </Preview>
        </Example>
      </Section>

      <Section
        title="States"
        description="Combine it with the 12-column grid used across the pages."
      >
        <Example label="With a 12-column grid" className="block">
          <Preview className="px-0">
            <Container className="grid grid-cols-12 gap-6">
              <div className="col-span-7">
                <Content label="col-span-7" />
              </div>
              <div className="col-span-5">
                <Content label="col-span-5" />
              </div>
            </Container>
          </Preview>
        </Example>
      </Section>

      <Section title="On cream surface" description="Has no colors of its own: it takes whatever surface it sits on.">
        <LightPreview className="px-0">
          <Container>
            <Content label="Container" />
          </Container>
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
