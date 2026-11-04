import { Container } from "@ds/components/ui/container"
import type { Dictionary } from "@/dictionaries/pt"

// Column labels: small-caps labels (not headings) that name their lists
const label =
  "mb-3 font-sans text-xs font-semibold tracking-wider text-muted-foreground uppercase"
const row = "border-t py-2.5 text-sm text-muted-foreground"

// Education and certifications. Sits at the end of the navy experience band,
// after a thin rule, with half the usual section spacing above it. On the
// right, academic education and languages share a row; courses span both
// below, one grid gap further down, and reuse the same columns (subgrid), so
// the items line up with the row above. Without courses the block does not
// render.
export function Education({
  dict,
}: {
  dict: Dictionary["about"]["education"]
}) {
  // Placeholders are temporary: flag them on every build and dev render
  const placeholders = dict.courses.filter((course) => course.placeholder)
  if (placeholders.length > 0) {
    console.warn(
      `[sobre] ${placeholders.length} course(s) still marked placeholder: true in about.education.courses. Replace them before publishing.`
    )
  }

  return (
    <section aria-labelledby="formacao-title">
      <Container className="pb-28">
        <div className="grid items-start gap-x-6 gap-y-10 border-t pt-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2
              id="formacao-title"
              className="text-4xl font-bold tracking-tight md:text-5xl"
            >
              {dict.title}
            </h2>
          </div>

          <div className="grid gap-x-6 gap-y-8 md:grid-cols-[5fr_7fr] md:gap-y-10 lg:col-span-7 lg:col-start-6">
            <div>
              <p id="formacao-academica" className={label}>
                {dict.academicLabel}
              </p>
              <ul aria-labelledby="formacao-academica">
                <li className={row}>
                  {dict.academic.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </li>
              </ul>
            </div>

            <div>
              <p id="formacao-idiomas" className={label}>
                {dict.languagesLabel}
              </p>
              <ul aria-labelledby="formacao-idiomas">
                {dict.languages.map((item) => (
                  <li key={item} className={row}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {dict.courses.length > 0 && (
              <div className="grid md:col-span-2 md:grid-cols-subgrid">
                <p id="formacao-cursos" className={`${label} md:col-span-2`}>
                  {dict.coursesLabel}
                </p>
                <ul
                  aria-labelledby="formacao-cursos"
                  className="grid md:col-span-2 md:grid-cols-subgrid"
                >
                  {dict.courses.map((course, index) => (
                    <li key={index} className={row}>
                      <span className="block">{course.name}</span>
                      <span className="block">{course.institution}</span>
                      <span className="block tabular-nums">{course.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
