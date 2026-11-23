import { Button } from "@/components/ui/button"
import {
  CookieConsent,
  CookieConsentActions,
  CookieConsentDescription,
  CookieConsentTitle,
} from "@/components/ui/cookie-consent"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  CodeBlock,
  Example,
  PropsTable,
  Section,
  ShowcasePage,
  type PropRow,
} from "../showcase"
import { CookieConsentDemo, Viewport } from "./demo"

const usage = `import { Button } from "@/components/ui/button"
import {
  CookieConsent,
  CookieConsentActions,
  CookieConsentDescription,
  CookieConsentTitle,
} from "@/components/ui/cookie-consent"

// The site owns the state and the copy: render the banner only while there
// is no choice, with the text of the current language
export function ConsentBanner({ t, onAccept, onDecline }) {
  return (
    <CookieConsent>
      <CookieConsentDescription>
        <CookieConsentTitle>{t.title}</CookieConsentTitle> {t.description}{" "}
        <a href={t.policyUrl}>{t.policyLabel}</a>
      </CookieConsentDescription>
      <CookieConsentActions>
        <Button variant="outline" size="lg" onClick={onDecline}>{t.decline}</Button>
        <Button size="lg" onClick={onAccept}>{t.accept}</Button>
      </CookieConsentActions>
    </CookieConsent>
  )
}`

const props: PropRow[] = [
  {
    name: "CookieConsent",
    type: "section attributes",
    description:
      "The banner: fixed to the bottom center of the viewport, above the page (z-50). Render it only while the visitor has not chosen; it never closes by itself.",
  },
  {
    name: "CookieConsent · aria-label",
    type: "string",
    description:
      "Names the region when there is no CookieConsentTitle. With a title, leave it out: the title names the region.",
  },
  {
    name: "CookieConsentTitle",
    type: "strong attributes",
    description:
      "Short bold lead at the start of the description. It also becomes the accessible name of the region.",
  },
  {
    name: "CookieConsentDescription",
    type: "p attributes",
    description:
      "What is collected and why. Links inside it are underlined, for the privacy policy.",
  },
  {
    name: "CookieConsentActions",
    type: "div attributes",
    description:
      "Holds the Decline and Accept Buttons. Full width while the banner is stacked, natural width (96px minimum) in a row.",
  },
  {
    name: "className",
    type: "string",
    description:
      "Every part accepts className. Add surface-light to CookieConsent for the cream version.",
  },
]

const specs: [string, string][] = [
  [
    "Position",
    "Fixed, bottom center. 16px from the sides and bottom (inset-x-4 bottom-4), 24px from the bottom from md up (md:bottom-6).",
  ],
  [
    "Width",
    "Full width minus the 16px gutters, up to 880px (max-w-220), so the text does not run cramped beside the buttons.",
  ],
  [
    "Surface",
    "bg-popover, text-popover-foreground, ring-1 ring-foreground/10, shadow-lg. Navy by default, cream with surface-light.",
  ],
  ["Radius", "rounded-xl (radius × 1.4)."],
  ["Padding", "16px stacked (p-4); 20px × 24px in a row (py-5 px-6)."],
  [
    "Layout",
    "Stacked below 36rem of its own width, one row from there up, with a 32px gap. It follows the banner's width (container query @xl), not the viewport.",
  ],
  [
    "Typography",
    "text-sm, Poppins. Title font-semibold in popover-foreground, description in muted-foreground, links underlined.",
  ],
  [
    "Actions",
    "Button size lg (40px), 8px apart, at least 96px wide. Decline outline, Accept default.",
  ],
  [
    "Language",
    "No built-in copy. Every text comes from children, so the site passes it in each language. The layout absorbs longer Portuguese text.",
  ],
  [
    "Motion",
    "Fades and slides in from 16px below, 300ms. No animation with prefers-reduced-motion.",
  ],
  ["Layer", "z-50."],
]

const guidelines = [
  "Use it only for consent. Other notices use Alert, inside the page.",
  "Give Decline and Accept the same size and place them side by side: declining must be as easy as accepting.",
  "The banner does not block the page and does not trap focus. It does not close with Esc or a click outside: it closes only after a choice.",
  "Render it as the first child of body. It still shows at the bottom, but keyboard and screen reader users reach it first.",
  "Always include CookieConsentTitle, or an aria-label, so the region has a name.",
  "When it closes, move focus to the start of the main content, so focus is not lost with the button that was clicked.",
  "Keep the text to one or two sentences: what is collected, why, and a link to the policy.",
  "Pass the text in the page's language. The html lang attribute already tells screen readers how to read it.",
  "Offer a way to change the choice later, such as a Cookie preferences link in the footer that shows the banner again.",
  "The component stores nothing. The site saves the choice and loads tracking scripts only after consent.",
]

const copy = {
  en: {
    title: "Cookies, your call.",
    description:
      "I use analytics to see how people use this portfolio. It sets cookies and only loads if you accept.",
    decline: "Decline",
    accept: "Accept",
  },
  pt: {
    title: "Cookies, você decide.",
    description:
      "Uso ferramentas de análise para entender como as pessoas usam este portfólio. Elas usam cookies e só são carregadas se você aceitar.",
    decline: "Recusar",
    accept: "Aceitar",
  },
}

function Banner({
  lang = "en",
  className,
}: {
  lang?: keyof typeof copy
  className?: string
}) {
  const t = copy[lang]
  return (
    <CookieConsent lang={lang} className={className}>
      <CookieConsentDescription>
        <CookieConsentTitle>{t.title}</CookieConsentTitle> {t.description}
      </CookieConsentDescription>
      <CookieConsentActions>
        <Button variant="outline" size="lg">
          {t.decline}
        </Button>
        <Button size="lg">{t.accept}</Button>
      </CookieConsentActions>
    </CookieConsent>
  )
}

export default function CookieConsentShowcase() {
  return (
    <ShowcasePage
      title="Cookie Consent"
      description="A notice pinned to the bottom center of the page that asks for consent before analytics cookies load. It stays until the visitor declines or accepts, without blocking the page."
    >
      <Section
        title="Variants"
        description="Each box below stands in for a browser window: the banner pins to its bottom center, as it does on the real page."
      >
        <div className="flex flex-col gap-10">
          <Example label="Default" className="items-stretch">
            <Viewport>
              <Banner />
            </Viewport>
          </Example>

          <Example
            label="On cream surface · surface-light"
            className="items-stretch"
          >
            <Viewport>
              <Banner className="surface-light" />
            </Viewport>
          </Example>
        </div>
      </Section>

      <Section
        title="Languages"
        description="The component has no copy of its own: the site passes the text in each language. Portuguese runs longer, and the layout absorbs it."
      >
        <div className="flex flex-col gap-10">
          <Example label="English" className="items-stretch">
            <Viewport>
              <Banner lang="en" />
            </Viewport>
          </Example>
          <Example label="Português" className="items-stretch">
            <Viewport>
              <Banner lang="pt" />
            </Viewport>
          </Example>
        </div>
      </Section>

      <Section
        title="Responsive"
        description="Below 36rem of its own width the text and the buttons stack, and the buttons fill the width. Shown here at a phone width (375px)."
      >
        <div className="flex flex-wrap gap-10">
          <Example label="English · 375px" className="items-stretch">
            <Viewport className="h-80 w-[375px]">
              <Banner lang="en" />
            </Viewport>
          </Example>
          <Example label="Português · 375px" className="items-stretch">
            <Viewport className="h-80 w-[375px]">
              <Banner lang="pt" />
            </Viewport>
          </Example>
        </div>
      </Section>

      <Section
        title="Interactive demo"
        description="Choose Decline or Accept. State lives only in this page: nothing is stored and no script loads."
      >
        <CookieConsentDemo />
      </Section>

      <Section title="Specifications">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {specs.map(([name, value]) => (
              <TableRow key={name}>
                <TableCell className="font-medium">{name}</TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  {value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Section>

      <Section title="Accessibility and guidelines">
        <ul className="flex max-w-3xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
          {guidelines.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
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
