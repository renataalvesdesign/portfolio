"use client"

import * as React from "react"
import Image, { type StaticImageData } from "next/image"
import { Dialog } from "radix-ui"
import { XIcon, ZoomInIcon } from "lucide-react"
import { cn } from "cn"

// A case image is enlargeable only when it has more detail than fits on
// screen: its file is at least this many times wider than it is shown.
// Small images already at their real size (e.g. a cropped button) stay plain.
const zoomThreshold = 1.2

export type ZoomLabels = { open: string; close: string }

// Case body image. Never shown wider than its file, so small images keep
// their real size. When the file is wider than the image on screen, it opens
// in a full-screen view on click: fitted to the width (up to its real size)
// and scrollable when taller than the screen. Esc, the close button or a
// click outside the image closes it. Without JavaScript it is a plain image.
export function ZoomableImage({
  image,
  alt,
  sizes,
  labels,
  className,
}: {
  image: StaticImageData
  alt: string
  sizes: string
  labels: ZoomLabels
  className?: string
}) {
  const ref = React.useRef<HTMLImageElement>(null)
  const [zoomable, setZoomable] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  // Re-checked on resize: on a phone almost every image has detail to show
  React.useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new ResizeObserver(() => {
      const shown = element.clientWidth
      setZoomable(shown > 0 && image.width >= shown * zoomThreshold)
    })
    observer.observe(element)
    return () => observer.disconnect()
  }, [image.width])

  const picture = (
    // Static imports carry width and height, so the space is reserved and
    // the image loads lazily as it nears the viewport
    <Image
      ref={ref}
      src={image}
      alt={alt}
      sizes={sizes}
      style={{ maxWidth: image.width }}
      className={cn("h-auto w-full rounded-xl", className)}
    />
  )

  if (!zoomable) return picture

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={`${labels.open}: ${alt}`}
          className="group/zoom relative block w-full cursor-zoom-in rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring"
          style={{ maxWidth: image.width }}
        >
          {picture}
          <span
            aria-hidden
            className="absolute right-3 bottom-3 flex size-9 items-center justify-center rounded-md bg-background/90 text-foreground shadow-md transition-transform group-hover/zoom:scale-110 group-focus-visible/zoom:scale-110 motion-reduce:transition-none"
          >
            <ZoomInIcon className="size-4.5" />
          </span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-100 bg-primary-900/95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:animate-in data-[state=open]:fade-in motion-reduce:animate-none" />
        {/* The content fills the screen and scrolls; a click on the space
            around the image closes it */}
        <Dialog.Content
          aria-describedby={undefined}
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
          className="fixed inset-0 z-100 grid overflow-auto p-4 pt-16 outline-none data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=open]:fade-in motion-reduce:animate-none md:p-10 md:pt-18"
        >
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          <Image
            src={image}
            alt={alt}
            sizes="100vw"
            style={{ maxWidth: image.width }}
            className="m-auto h-auto w-full rounded-lg"
          />
          <Dialog.Close
            aria-label={labels.close}
            className="fixed top-3 right-3 flex size-11 items-center justify-center rounded-md bg-background text-foreground shadow-lg outline-none focus-visible:ring-3 focus-visible:ring-ring md:top-5 md:right-5"
          >
            <XIcon aria-hidden className="size-5" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
