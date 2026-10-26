import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "cn"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@ds/components/ui/navigation-menu"
import { Container } from "@ds/components/ui/container"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@ds/components/ui/tooltip"
import { CompactNavOnScroll } from "@/components/compact-nav-on-scroll"
import { LanguageToggle } from "@/components/language-toggle"
import { MobileNav } from "@/components/mobile-nav"
import type { Dictionary } from "@/dictionaries/pt"
import type { Locale } from "@/lib/i18n"
import { isPending, site } from "@/lib/site"

// Text link with a 2px underline that grows from the left on hover, focus and touch.
const underlineLink =
  "relative rounded-none px-0 py-2.5 font-medium hover:bg-transparent focus:bg-transparent after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100 focus-visible:after:scale-x-100 active:after:scale-x-100 motion-reduce:after:transition-none"

export function SiteHeader({
  dict,
  locale,
}: {
  dict: Dictionary
  locale: Locale
}) {
  const links = [
    { href: "#projetos", label: dict.nav.projects },
    { href: site.aboutUrl, label: dict.nav.about },
    { href: "#contato", label: dict.nav.contact },
  ]
  const linkedinPending = isPending(site.linkedinUrl)

  const linkedin = (
    <a
      href={site.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        underlineLink,
        "group/linkedin hidden items-center gap-1 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:inline-flex"
      )}
    >
      {dict.nav.linkedin}
      <ArrowUpRightIcon
        className="size-3.5 transition-transform group-hover/linkedin:translate-x-0.5 group-hover/linkedin:-translate-y-0.5 group-focus-visible/linkedin:translate-x-0.5 group-focus-visible/linkedin:-translate-y-0.5 motion-reduce:transition-none"
        aria-hidden
      />
      <span className="sr-only">{dict.links.newTab}</span>
    </a>
  )

  return (
    // The wrapper keeps the 72px in the flow; the bar inside shrinks on scroll
    <header className="sticky top-0 z-50 h-18">
      <div
        data-slot="site-nav"
        className="relative mx-auto h-18 max-w-full border-b bg-background"
      >
        <Container className="flex h-full items-center justify-between gap-4 md:gap-7">
          <a
            href="#top"
            className="font-heading text-xl font-bold whitespace-nowrap"
          >
            Renata Alves
          </a>

          <NavigationMenu
            viewport={false}
            aria-label={dict.nav.label}
            className="mr-auto ml-6 hidden md:flex"
          >
            <NavigationMenuList className="gap-8">
              {links.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink
                    href={link.href}
                    className={underlineLink}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 md:gap-6">
            {linkedinPending ? (
              // The hint opens on hover and keyboard focus and is announced
              // as the link's description
              <Tooltip>
                <TooltipTrigger asChild>{linkedin}</TooltipTrigger>
                <TooltipContent sideOffset={6}>
                  {dict.links.linkedinPending}
                </TooltipContent>
              </Tooltip>
            ) : (
              linkedin
            )}
            <LanguageToggle locale={locale} labels={dict.language} />
            <MobileNav
              links={links}
              linkedinUrl={site.linkedinUrl}
              linkedinPending={linkedinPending}
              labels={{ nav: dict.nav, links: dict.links }}
            />
          </div>
        </Container>
      </div>
      <CompactNavOnScroll />
    </header>
  )
}
