import { cn } from "cn"

import { enter } from "@/lib/motion"

// Opening of an inner page: a small uppercase eyebrow over the page title,
// both entering on load. Sits inside the page's first Container.
export function PageHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <>
      <p
        className={cn(
          enter,
          "text-xs font-semibold tracking-wider text-muted-foreground uppercase"
        )}
      >
        {eyebrow}
      </p>
      <h1
        className={cn(
          enter,
          "mt-5 max-w-270 text-4xl leading-tight font-bold tracking-tight delay-60 md:text-5xl"
        )}
      >
        {title}
      </h1>
    </>
  )
}
