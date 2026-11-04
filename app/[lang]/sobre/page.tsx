import type { Metadata } from "next"

import { AboutHero } from "@/components/about-hero"
import { CareerTimeline } from "@/components/career-timeline"
import { Competencies } from "@/components/competencies"
import { Contact } from "@/components/contact"
import { Education } from "@/components/education"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { SiteHeader } from "@/components/site-header"
import { getDictionary, getLocale } from "../dictionaries"

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary()
  return {
    title: dict.about.meta.title,
    description: dict.about.meta.description,
  }
}

export default async function AboutPage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()])

  // Page order: reorder the entries to move a band. Bands alternate navy,
  // cream, navy, and Contact (outside main) closes the page in cream.
  const sections = [
    <AboutHero
      key="hero"
      dict={dict.about.hero}
      profile={dict.hero}
      resumePending={dict.links.resumePending}
    />,
    <Competencies key="competencies" dict={dict.about.skills} />,
    // One continuous navy band: experience, then education
    <div key="background">
      <CareerTimeline
        dict={dict.about.experience}
        cases={dict.cases.items}
        locale={locale}
      />
      <Education dict={dict.about.education} />
    </div>,
  ]

  return (
    <>
      {dict.translationNotice && (
        <p className="bg-primary px-6 py-2.5 text-center text-sm font-medium text-primary-foreground">
          {dict.translationNotice}
        </p>
      )}
      <SiteHeader dict={dict} locale={locale} page="about" />
      {/* Body content may not be translated yet; mark its real language */}
      <main lang={dict.contentLang}>{sections}</main>
      <Contact dict={dict.contact} links={dict.links} lang={dict.contentLang} />
      <RevealOnScroll />
    </>
  )
}
