import { Container } from "@ds/components/ui/container"
import type { Dictionary } from "@/dictionaries/pt"

// Cream section: two groups of competencies, each a plain list under a
// single rule. The header follows the home's section header (12 columns:
// title in 5, the optional subtitle from column 6, on the title's baseline and
// flush right to the page margin);
// below lg the subtitle sits under the title. It only renders when the
// dictionary sets one.
export function Competencies({
  dict,
}: {
  dict: Dictionary["about"]["skills"]
}) {
  return (
    <section aria-labelledby="competencias-title" className="surface-light">
      <Container className="py-26">
        <div className="grid items-baseline gap-x-6 gap-y-4 lg:grid-cols-12">
          <h2
            id="competencias-title"
            className="text-section-title lg:col-span-5"
          >
            {dict.title}
          </h2>
          {dict.lead && (
            <p className="text-section-lead text-balance lg:col-span-7 lg:col-start-6 lg:text-right">
              {dict.lead}
            </p>
          )}
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-12 lg:grid-cols-2">
          {dict.groups.map((group, index) => (
            <article
              key={group.title}
              aria-labelledby={`competencias-${index}`}
              data-reveal=""
              className="border-t-2 border-foreground pt-5"
            >
              <h3
                id={`competencias-${index}`}
                className="text-2xl font-bold tracking-tight"
              >
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-4">
                {group.items.map((item) => (
                  <li key={item} className="max-w-150">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
