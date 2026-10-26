"use client"

import * as React from "react"
import { cn } from "cn"

// Thick translucent underline behind key words of a headline. Uses the current
// text color, so it adapts to both surfaces.
// draw="load" draws it in when the page loads; draw="view" waits until the
// headline scrolls into view. Without JavaScript, without
// IntersectionObserver or with reduced motion it is simply shown.
export function Highlight({
  draw,
  className,
  ...props
}: React.ComponentProps<"span"> & { draw?: "load" | "view" }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const [state, setState] = React.useState<"pending" | "play">()

  React.useEffect(() => {
    const node = ref.current
    if (
      draw !== "view" ||
      !node ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return

    setState("pending")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setState("play")
        observer.disconnect()
      },
      { threshold: 0.5 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [draw])

  return (
    <span
      ref={ref}
      data-draw={state}
      className={cn(
        "bg-linear-to-r from-current/30 to-current/30 box-decoration-clone bg-[length:100%_0.1em] bg-[position:0_92%] bg-no-repeat",
        draw === "load" && "animate-underline-draw motion-reduce:animate-none",
        "data-[draw=pending]:bg-[length:0%_0.1em] data-[draw=play]:animate-underline-draw",
        className
      )}
      {...props}
    />
  )
}
