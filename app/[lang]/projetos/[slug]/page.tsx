import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Container } from "@ds/components/ui/container"
import { CaseBlock } from "@/components/case/case-blocks"
import { CaseHero } from "@/components/case/case-hero"
import { CaseToc } from "@/components/case/case-toc"
import { CaseNav } from "@/components/case/case-nav"
import { Contact } from "@/components/contact"
import { RevealOnScroll } from "@/components/reveal-on-scroll"
import { SiteHeader } from "@/components/site-header"
import {
  caseBody,
  caseNeighbors,
  caseSections,
  localize,
  projects,
} from "@/lib/projects"
import { getDictionary, getLocale } from "../../dictionaries"

// One static page per project, in every language; projects without a case.ts
// show a "content pending" page. Any other slug is the 404 page.
export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

async function findCase(
  params: PageProps<"/[lang]/projetos/[slug]">["params"]
) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()
  return { project, body: caseBody(project) }
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projetos/[slug]">): Promise<Metadata> {
  const [{ project, body }, locale] = await Promise.all([
    findCase(params),
    getLocale(),
  ])
  const view = localize(project, locale)
  const title = `${view.title} — Renata Alves`

  return {
    title,
    description: view.summary,
    openGraph: {
      type: "article",
      title,
      description: view.summary,
      locale,
      images: view.cover && [
        {
          url: view.cover.src,
          width: view.cover.width,
          height: view.cover.height,
          alt: view.coverAlt,
        },
      ],
    },
    twitter: { card: view.cover ? "summary_large_image" : "summary" },
    // Unfinished cases stay out of search engines
    robots: body.status === "pending" ? { index: false } : undefined,
  }
}

export default async function CasePage({
  params,
}: PageProps<"/[lang]/projetos/[slug]">) {
  const [{ project, body }, dict, locale] = await Promise.all([
    findCase(params),
    getDictionary(),
    getLocale(),
  ])
  const view = localize(project, locale)
  const sections = caseSections(body)
  const published = body.status === "published"
  const { previous, next } = caseNeighbors(project.slug)
  const t = dict.caseStudy

  return (
    <>
      {dict.translationNotice && (
        <p className="bg-primary px-6 py-2.5 text-center text-sm font-medium text-primary-foreground">
          {dict.translationNotice}
        </p>
      )}
      <SiteHeader dict={dict} locale={locale} page="projects" />
      <main id="top" className="surface-light">
        <CaseHero project={view} dict={t} />

        <Container className="pb-24">
          {body.lang !== locale && t.otherLanguage && (
            <p className="mb-12 max-w-200 rounded-xl border px-5 py-4 text-sm">
              {t.otherLanguage}
            </p>
          )}

          {published ? (
            <div className="grid gap-x-12 lg:grid-cols-12">
              <aside className="hidden lg:col-span-3 lg:block xl:col-span-2">
                <div className="sticky top-28">
                  {/* Only id and title reach the client component */}
                  <CaseToc
                    label={t.toc}
                    sections={sections.map(({ id, title }) => ({ id, title }))}
                  />
                </div>
              </aside>

              {/* The body may be in another language than the page */}
              <article
                lang={body.lang}
                className="max-w-200 text-lg leading-[1.8] lg:col-span-9 xl:col-span-8 xl:col-start-4"
              >
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    aria-labelledby={`${section.id}-title`}
                    className={index > 0 ? "mt-20" : undefined}
                  >
                    <h2
                      id={`${section.id}-title`}
                      className="text-3xl leading-tight font-bold tracking-tight md:text-4xl"
                    >
                      {section.title}
                    </h2>
                    {section.blocks.map((block, blockIndex) => (
                      <CaseBlock
                        key={blockIndex}
                        block={block}
                        imagePending={t.imagePending}
                      />
                    ))}
                  </section>
                ))}
              </article>
            </div>
          ) : (
            <p className="max-w-200 rounded-xl border border-dashed border-foreground/35 bg-foreground/5 px-6 py-5">
              {t.contentPending}
            </p>
          )}
        </Container>

        <CaseNav
          previous={previous && localize(previous, locale)}
          next={next && localize(next, locale)}
          dict={t}
        />
      </main>
      <Contact dict={dict.contact} links={dict.links} lang={dict.contentLang} />
      <RevealOnScroll />
    </>
  )
}
