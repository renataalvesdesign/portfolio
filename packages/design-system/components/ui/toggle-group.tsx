"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui"

const toggleGroupItemVariants = cva(
  "relative inline-flex items-center justify-center gap-1.5 rounded-md font-medium whitespace-nowrap text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground group-data-[indicator=ready]/toggle-group:data-[state=on]:bg-transparent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      size: {
        default: "h-8 px-3 text-sm",
        sm: "h-7 px-2.5 text-xs",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

type ToggleGroupSize = VariantProps<typeof toggleGroupItemVariants>["size"]

// The indicator uses the same motion tokens as every other transition (buttons,
// links, the items' own color change), so it moves in step with them.
function motionTiming(element: Element) {
  const styles = getComputedStyle(element)
  const duration = styles.getPropertyValue("--default-transition-duration")
  const easing = styles
    .getPropertyValue("--default-transition-timing-function")
    .trim()
  const ms = duration.trim().endsWith("ms")
    ? parseFloat(duration)
    : parseFloat(duration) * 1000
  return {
    duration: Number.isFinite(ms) ? ms : 150,
    easing: easing || "cubic-bezier(0.4, 0, 0.2, 1)",
  }
}

const ToggleGroupContext = React.createContext<{ size: ToggleGroupSize }>({
  size: "default",
})

function ToggleGroup({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & {
  size?: ToggleGroupSize
}) {
  const indicatorRef = React.useRef<HTMLSpanElement>(null)
  const sliding = props.type === "single"

  // Single mode: an indicator slides under the active item. Until it is measured,
  // the active item keeps its own background, so there is no flash before
  // hydration and nothing breaks without JavaScript.
  React.useEffect(() => {
    const indicator = indicatorRef.current
    const root = indicator?.parentElement
    if (!sliding || !indicator || !root) return

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    // Only a selection change animates. Mounting (including a remount after
    // navigation) and resizing just place the indicator, so it never slides in.
    function place(animate: boolean) {
      const active = root!.querySelector<HTMLElement>(
        '[data-slot="toggle-group-item"][data-state="on"]'
      )
      // No selection, or not laid out yet: fall back to the item's own
      // background until the next change.
      if (!active || active.offsetWidth === 0) {
        delete root!.dataset.indicator
        return
      }

      const x = active.offsetLeft
      const width = active.offsetWidth
      if (animate && root!.dataset.indicator && !reducedMotion.matches) {
        // Start from where the indicator is drawn now, even mid-animation
        const from = indicator!.getBoundingClientRect()
        const fromX = from.left - root!.getBoundingClientRect().left
        indicator!.getAnimations().forEach((animation) => animation.cancel())
        indicator!.animate(
          [
            { transform: `translateX(${fromX}px)`, width: `${from.width}px` },
            { transform: `translateX(${x}px)`, width: `${width}px` },
          ],
          motionTiming(root!)
        )
      }
      indicator!.style.width = `${width}px`
      indicator!.style.transform = `translateX(${x}px)`
      root!.dataset.indicator = "ready"
    }

    place(false)
    const mutations = new MutationObserver(() => place(true))
    mutations.observe(root, { subtree: true, attributeFilter: ["data-state"] })
    // Also fires once the group gets a size, if it mounted before layout
    const resize = new ResizeObserver(() => place(false))
    resize.observe(root)
    return () => {
      mutations.disconnect()
      resize.disconnect()
    }
  }, [sliding])

  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-size={size}
      className={cn(
        "group/toggle-group relative inline-flex w-fit items-center gap-0.5 rounded-lg bg-muted p-0.5",
        className
      )}
      {...props}
    >
      {sliding && (
        <span
          ref={indicatorRef}
          aria-hidden
          data-slot="toggle-group-indicator"
          className="pointer-events-none absolute inset-y-0.5 left-0 rounded-md bg-primary opacity-0 group-data-[indicator=ready]/toggle-group:opacity-100"
        />
      )}
      <ToggleGroupContext.Provider value={{ size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item>) {
  const { size } = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(toggleGroupItemVariants({ size }), className)}
      {...props}
    />
  )
}

export { ToggleGroup, ToggleGroupItem, toggleGroupItemVariants }
