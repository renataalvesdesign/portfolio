import { ArrowUpIcon, ArrowUpRightIcon, MailIcon } from "lucide-react"

import { Button } from "@ds/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@ds/components/ui/tooltip"
import { Container } from "@ds/components/ui/container"
import { Highlight } from "@/components/highlight"
import { ScrollLink } from "@/components/scroll-link"
import type { Dictionary } from "@/dictionaries/pt"
import { isPending, site } from "@/lib/site"

export function Contact({
  dict,
  links,
  lang,
}: {
  dict: Dictionary["contact"]
  links: Dictionary["links"]
  lang: string
}) {
  const contacts = [
    {
      label: dict.linkedin.label,
      value: dict.linkedin.value,
      href: site.linkedinUrl,
      // lucide has no brand icons; the monogram matches the reference
      icon: <span className="font-heading font-bold">in</span>,
      newTab: true,
      note: isPending(site.linkedinUrl) ? links.linkedinPending : undefined,
    },
    {
      label: dict.email.label,
      value: site.email,
      href: `mailto:${site.email}`,
      icon: <MailIcon className="size-5" />,
    },
  ]

  return (
    <footer id="contato" lang={lang} className="surface-light">
      <Container className="pt-28 pb-10">
        <div className="grid items-center gap-x-6 gap-y-12 lg:grid-cols-12">
          <h2 className="text-5xl font-bold tracking-tight md:text-6xl lg:col-span-7">
            {dict.titleStart}{" "}
            <Highlight draw="view">{dict.titleHighlight}</Highlight>
          </h2>

          <ul className="flex flex-col gap-3 lg:col-span-5 lg:col-start-8">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  {...(contact.newTab && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="group flex items-center gap-4 rounded-2xl border border-input px-5.5 py-5 transition-colors outline-none hover:border-foreground/70 hover:bg-foreground/5 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:border-foreground active:bg-foreground/10"
                >
                  <span
                    aria-hidden
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border bg-foreground/5"
                  >
                    {contact.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {contact.label}
                    </span>
                    <span className="mt-0.5 block font-heading text-lg font-bold wrap-anywhere md:text-xl">
                      {contact.value}
                    </span>
                    {contact.newTab && (
                      <span className="sr-only">{links.newTab}</span>
                    )}
                    {contact.note && (
                      <span className="sr-only">{contact.note}</span>
                    )}
                  </span>
                  <ArrowUpRightIcon
                    aria-hidden
                    className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-active:translate-x-0.5 group-active:-translate-y-0.5 motion-reduce:transition-none"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t pt-6">
          <p className="text-sm text-muted-foreground">{dict.copyright}</p>
          <div className="flex items-center gap-7">
            <Button asChild variant="link" className="h-auto px-0">
              <a href={site.cookiePreferencesUrl}>{dict.cookies}</a>
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="outline" size="icon-xl">
                  <ScrollLink href="#top" aria-label={dict.backToTop}>
                    <ArrowUpIcon aria-hidden />
                  </ScrollLink>
                </Button>
              </TooltipTrigger>
              {/* Portaled outside the footer, so it needs the surface class itself */}
              <TooltipContent sideOffset={6} className="surface-light">
                {dict.backToTop}
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </Container>
    </footer>
  )
}
