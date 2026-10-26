import { Cases } from "@/components/cases"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { Process } from "@/components/process"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { SiteHeader } from "@/components/site-header"
import { SkillsStrip } from "@/components/skills-strip"
import { getDictionary, getLocale } from "./dictionaries"

export default async function Page() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()])

  return (
    <>
      {dict.translationNotice && (
        <p className="bg-primary px-6 py-2.5 text-center text-sm font-medium text-primary-foreground">
          {dict.translationNotice}
        </p>
      )}
      <SiteHeader dict={dict} locale={locale} />
      {/* Body content may not be translated yet; mark its real language */}
      <main lang={dict.contentLang}>
        <Hero dict={dict.hero} titleLang={locale} />
        <Cases dict={dict.cases} placeholderLabel={dict.placeholder.image} />
        <Process dict={dict.process} />
        <SkillsStrip dict={dict.skills} />
        <Experience dict={dict.experience} />
      </main>
      <Contact dict={dict.contact} links={dict.links} lang={dict.contentLang} />
      <RevealOnScroll />
    </>
  )
}
