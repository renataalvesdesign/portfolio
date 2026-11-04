export interface NavItem {
  name: string
  href: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: "Foundation",
    items: [{ name: "Design Tokens", href: "/styleguide" }],
  },
  {
    title: "Components",
    items: [
      { name: "Alert", href: "/styleguide/components/alert" },
      { name: "Badge", href: "/styleguide/components/badge" },
      { name: "Breadcrumb", href: "/styleguide/components/breadcrumb" },
      { name: "Button", href: "/styleguide/components/button" },
      { name: "Card", href: "/styleguide/components/card" },
      { name: "Container", href: "/styleguide/components/container" },
      {
        name: "Image Placeholder",
        href: "/styleguide/components/image-placeholder",
      },
      {
        name: "Navigation Menu",
        href: "/styleguide/components/navigation-menu",
      },
      { name: "Separator", href: "/styleguide/components/separator" },
      { name: "Table", href: "/styleguide/components/table" },
      { name: "Toggle Group", href: "/styleguide/components/toggle-group" },
      { name: "Tooltip", href: "/styleguide/components/tooltip" },
    ],
  },
]
