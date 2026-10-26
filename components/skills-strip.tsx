import { Badge } from "@ds/components/ui/badge"
import type { Dictionary } from "@/dictionaries/pt"

// Marquee: two copies of the list slide by half their width, so the loop is
// seamless. It pauses on hover, keyboard focus and touch (the strip itself is
// focusable for that). With reduced motion it stops and wraps into lines,
// without the duplicate copy.
export function SkillsStrip({ dict }: { dict: Dictionary["skills"] }) {
  return (
    <section
      aria-label={dict.label}
      tabIndex={0}
      className="group/marquee overflow-hidden border-y bg-background outline-none focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-inset"
    >
      <div className="[mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)] py-5 motion-reduce:[mask-image:none]">
        <div className="flex w-max animate-marquee group-hover/marquee:paused group-focus-visible/marquee:paused group-active/marquee:paused motion-reduce:w-auto motion-reduce:animate-none motion-reduce:px-6 md:motion-reduce:px-12">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 || undefined}
              className="flex shrink-0 gap-3 pr-3 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:pr-0 motion-reduce:[&[aria-hidden]]:hidden"
            >
              {dict.items.map((skill) => (
                <li key={skill}>
                  <Badge size="lg" variant="outline">
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
