import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
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

const usage = `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function ArticleBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/essays">Essays</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>On Slow Reading</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`

const props: PropRow[] = [
  {
    name: "BreadcrumbLink · href",
    type: "string",
    description: "Destination of the crumb. Accepts every anchor attribute.",
  },
  {
    name: "BreadcrumbLink · asChild",
    type: "boolean",
    defaultValue: "false",
    description:
      "Renders the child element instead of an <a>, for example a router link.",
  },
  {
    name: "BreadcrumbSeparator · children",
    type: "ReactNode",
    defaultValue: "<ChevronRightIcon />",
    description: "Replaces the default chevron with a custom separator.",
  },
  {
    name: "BreadcrumbPage",
    type: "span attributes",
    description:
      "The current page. Not a link; announced with aria-current=\"page\".",
  },
  {
    name: "className",
    type: "string",
    description: "Every part accepts className to extend its styles.",
  },
]

function Trail() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Essays</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>On Slow Reading</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default function BreadcrumbShowcase() {
  return (
    <ShowcasePage
      title="Breadcrumb"
      description="Shows where the current page sits in the hierarchy and lets readers step back up."
    >
      <Section title="Variants">
        <Preview className="grid gap-10 md:grid-cols-3">
          <Example label="Default">
            <Trail />
          </Example>

          <Example label="Custom separator">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Essays</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>On Slow Reading</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Example>

          <Example label="Collapsed">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>On Slow Reading</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </Example>
        </Preview>
      </Section>

      <Section
        title="States"
        description="Hover and focus are pinned here so they can be compared. The current page is the disabled state: it is not clickable."
      >
        <Preview>
          <Breadcrumb>
            <BreadcrumbList className="items-start gap-10 sm:gap-10">
              <BreadcrumbItem>
                <Example label="Default">
                  <BreadcrumbLink href="#">Essays</BreadcrumbLink>
                </Example>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Example label="Hover">
                  <BreadcrumbLink href="#" className="text-foreground">
                    Essays
                  </BreadcrumbLink>
                </Example>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Example label="Focus">
                  <BreadcrumbLink
                    href="#"
                    className="rounded-sm outline-2 outline-offset-2 outline-ring"
                  >
                    Essays
                  </BreadcrumbLink>
                </Example>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Example label="Current page (disabled)">
                  <BreadcrumbPage>Essays</BreadcrumbPage>
                </Example>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Preview>
      </Section>

      <Section title="On cream surface" description="Inside .surface-light the same component switches to the cream tokens.">
        <LightPreview>
          <Trail />
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
