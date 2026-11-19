import type { Metadata } from "next"

import { Contact } from "@/components/contact"
import { ProjectsList } from "@/components/projects-list"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { SiteHeader } from "@/components/site-header"
import { getProjects } from "@/lib/projects"
import { getDictionary, getLocale } from "../dictionaries"

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary()
  return {
    title: dict.projects.meta.title,
    description: dict.projects.meta.description,
  }
}

export default async function ProjectsPage() {
  const [dict, locale] = await Promise.all([getDictionary(), getLocale()])

  return (
    <>
      {dict.translationNotice && (
        <p className="bg-primary px-6 py-2.5 text-center text-sm font-medium text-primary-foreground">
          {dict.translationNotice}
        </p>
      )}
      <SiteHeader dict={dict} locale={locale} page="projects" />
      {/* Body content may not be translated yet; mark its real language */}
      <main lang={dict.contentLang}>
        <ProjectsList
          dict={dict.projects}
          viewCase={dict.cases.viewCase}
          projects={getProjects(locale)}
        />
      </main>
      <Contact dict={dict.contact} links={dict.links} lang={dict.contentLang} />
      <RevealOnScroll />
    </>
  )
}
