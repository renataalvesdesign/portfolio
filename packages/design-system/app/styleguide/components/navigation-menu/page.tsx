"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
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

const sections = [
  { title: "Essays", description: "Long reads for slow afternoons." },
  { title: "Interviews", description: "Quiet conversations with makers." },
  { title: "Recipes", description: "Seasonal cooking, week by week." },
]

const usage = `"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function SiteNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-1">
              <li>
                <NavigationMenuLink href="/essays">Essays</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/recipes">Recipes</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            className={navigationMenuTriggerStyle()}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`

const props: PropRow[] = [
  {
    name: "NavigationMenu · viewport",
    type: "boolean",
    defaultValue: "true",
    description:
      "Renders dropdowns in one shared, animated panel. Set to false to anchor each dropdown under its own trigger.",
  },
  {
    name: "NavigationMenu · value / onValueChange",
    type: "string / (value: string) => void",
    description: "Controls which item is open.",
  },
  {
    name: "NavigationMenu · delayDuration",
    type: "number",
    defaultValue: "200",
    description: "Milliseconds of hover before a dropdown opens.",
  },
  {
    name: "NavigationMenuTrigger · disabled",
    type: "boolean",
    defaultValue: "false",
    description: "Prevents the dropdown from opening.",
  },
  {
    name: "NavigationMenuLink · href",
    type: "string",
    description: "Destination of the link. Accepts every anchor attribute.",
  },
  {
    name: "NavigationMenuLink · asChild",
    type: "boolean",
    defaultValue: "false",
    description: "Renders the child element instead, for example a router link.",
  },
  {
    name: "navigationMenuTriggerStyle()",
    type: "() => string",
    description:
      "Class names that make a plain link look like a trigger in the top-level list.",
  },
]

function Menu({ viewport = true }: { viewport?: boolean }) {
  return (
    <NavigationMenu viewport={viewport}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-1">
              {sections.map((section) => (
                <li key={section.title}>
                  <NavigationMenuLink href="#">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">{section.title}</span>
                      <span className="text-muted-foreground">
                        {section.description}
                      </span>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Subscribe
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default function NavigationMenuShowcase() {
  return (
    <ShowcasePage
      title="Navigation Menu"
      description="A horizontal site navigation with plain links and dropdown panels that open on hover, click or keyboard."
    >
      <Section
        title="Variants"
        description="Hover or click Sections to open the dropdown."
      >
        <Preview className="grid gap-10 md:grid-cols-2">
          <Example label="With viewport (default)">
            <Menu />
          </Example>
          <Example label="viewport={false}">
            <Menu viewport={false} />
          </Example>
        </Preview>
      </Section>

      <Section
        title="States"
        description="Hover and focus are pinned here so they can be compared."
      >
        <Preview>
          <NavigationMenu>
            <NavigationMenuList className="items-end gap-8">
              <NavigationMenuItem>
                <Example label="Default">
                  <NavigationMenuLink
                    href="#"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "hover:bg-transparent focus:bg-transparent"
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Example>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Example label="Hover">
                  <NavigationMenuLink
                    href="#"
                    className={cn(navigationMenuTriggerStyle(), "bg-muted")}
                  >
                    About
                  </NavigationMenuLink>
                </Example>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Example label="Focus">
                  <NavigationMenuLink
                    href="#"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-muted ring-3 ring-ring/50 outline-1"
                    )}
                  >
                    About
                  </NavigationMenuLink>
                </Example>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Example label="Disabled">
                  <NavigationMenuTrigger disabled>Sections</NavigationMenuTrigger>
                </Example>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Preview>
      </Section>

      <Section title="On cream surface" description="Inside .surface-light the same component switches to the cream tokens.">
        <LightPreview>
          <Menu />
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
