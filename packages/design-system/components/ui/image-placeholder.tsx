import * as React from "react"
import { ImageIcon } from "lucide-react"
import { cn } from "cn"

/** Stand-in for an image that is not available yet. Size it with className (e.g. aspect-video). */
function ImagePlaceholder({
  alt,
  label,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  /** Accessible description of the future image */
  alt: string
  /** Visible caption under the icon */
  label?: string
}) {
  return (
    <div
      data-slot="image-placeholder"
      role="img"
      aria-label={alt}
      className={cn(
        "flex flex-col items-center justify-center gap-2 bg-muted text-muted-foreground",
        className
      )}
      {...props}
    >
      <ImageIcon className="size-6" aria-hidden />
      {label && <span className="text-xs">{label}</span>}
    </div>
  )
}

export { ImagePlaceholder }
