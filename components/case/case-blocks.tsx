import Image from "next/image"
import { cn } from "cn"

import { ImagePlaceholder } from "@ds/components/ui/image-placeholder"
import { RichText } from "@/components/case/rich-text"
import type { Block, FigureImage } from "@/lib/projects/schema"

// The editorial blocks of a case body (lib/projects/schema.ts). Each block
// sets its own vertical margins; siblings' margins collapse, so a figure
// keeps its larger gap whatever comes before it.

/** Text column width in px, for the image `sizes` hints */
const textWidth = 800

export function CaseBlock({
  block,
  imagePending,
}: {
  block: Block
  /** "Imagem a inserir", in the page language */
  imagePending: string
}) {
  switch (block.type) {
    case "p":
      return (
        <p className="mt-6">
          <RichText text={block.text} />
        </p>
      )
    case "h3":
      return (
        <h3 className="mt-10 mb-3 text-lg font-bold tracking-tight">
          {block.text}
        </h3>
      )
    case "list": {
      const List = block.ordered ? "ol" : "ul"
      return (
        <List
          className={cn(
            "mt-5 space-y-2.5 pl-7 marker:text-foreground",
            block.ordered ? "list-decimal" : "list-disc"
          )}
        >
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              <RichText text={item} />
            </li>
          ))}
        </List>
      )
    }
    case "figure":
      return (
        <CaseFigure caption={block.caption}>
          <FigureMedia
            figure={block.figure}
            imagePending={imagePending}
            sizes={`(min-width: 1024px) ${textWidth}px, 100vw`}
          />
        </CaseFigure>
      )
    case "figurePair":
      return (
        <CaseFigure caption={block.caption}>
          <div className="grid gap-6 sm:grid-cols-2">
            {block.figures.map((figure) => (
              <FigureMedia
                key={figure.label}
                figure={figure}
                imagePending={imagePending}
                sizes={`(min-width: 1024px) ${textWidth / 2}px, (min-width: 640px) 50vw, 100vw`}
              />
            ))}
          </div>
        </CaseFigure>
      )
    case "quote":
      return <PullQuote text={block.text} />
    case "stats":
      return <BeforeAfter items={block.items} />
    case "comparison":
      return <ComparisonTable {...block} />
  }
}

/** Figure frame with an optional caption under the image(s) */
function CaseFigure({
  caption,
  children,
}: {
  caption?: string
  children: React.ReactNode
}) {
  return (
    <figure className="my-14">
      {children}
      {caption && (
        <figcaption className="mt-3 text-sm leading-normal text-muted-foreground">
          <RichText text={caption} />
        </figcaption>
      )}
    </figure>
  )
}

/** The image, or a dashed "Imagem a inserir" frame of the same ratio */
function FigureMedia({
  figure,
  imagePending,
  sizes,
}: {
  figure: FigureImage
  imagePending: string
  sizes: string
}) {
  if (figure.image)
    // Static imports carry width and height, so the space is reserved and
    // the image loads lazily as it nears the viewport
    return (
      <Image
        src={figure.image}
        alt={figure.alt}
        sizes={sizes}
        className="h-auto w-full rounded-xl"
      />
    )

  return (
    <ImagePlaceholder
      alt={`${imagePending}: ${figure.alt}`}
      label={`${imagePending} · ${figure.label}`}
      style={{ aspectRatio: figure.ratio ?? "16/9" }}
      className="w-full rounded-xl border border-dashed border-foreground/35 bg-foreground/5 px-4 text-center [&_span]:text-sm"
    />
  )
}

/** One key sentence in large type, set off by a rule */
export function PullQuote({ text }: { text: string }) {
  return (
    <blockquote className="my-14 border-l-3 border-foreground py-1 pl-7 font-heading text-2xl leading-snug font-bold tracking-tight text-balance md:text-3xl">
      <p>{text}</p>
    </blockquote>
  )
}

const statColumns = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as Record<number, string>

/** Large before/after values, side by side between two rules */
export function BeforeAfter({
  items,
}: {
  items: { value: string; label: string }[]
}) {
  return (
    <dl className={cn("my-12 grid border-y", statColumns[items.length])}>
      {items.map((item) => (
        <div
          key={item.value}
          className="flex flex-col-reverse justify-end border-b py-7 last:border-b-0 sm:border-b-0 sm:border-l sm:px-7 sm:first:border-l-0 sm:first:pl-0"
        >
          <dt className="mt-3 text-sm leading-normal text-muted-foreground">
            {item.label}
          </dt>
          <dd className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** Comparison table: column headers, one row header per row, and a footnote */
export function ComparisonTable({
  columns,
  rows,
  footnote,
}: {
  columns: string[]
  rows: string[][]
  footnote?: string
}) {
  const last = columns.length - 1
  return (
    <figure className="mt-12 mb-14">
      {/* Scrolls sideways on narrow screens instead of squeezing the cells */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-120 border-collapse text-left text-base">
          <thead>
            <tr className="border-b">
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="pr-6 pb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase last:pr-0"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([header, ...cells]) => (
              <tr key={header} className="border-b align-top">
                <th scope="row" className="py-3.5 pr-6 font-semibold">
                  {header}
                </th>
                {cells.map((cell, index) => (
                  <td
                    key={index}
                    className={cn(
                      "py-3.5 pr-6 last:pr-0",
                      index + 1 === last
                        ? "font-semibold"
                        : "text-muted-foreground"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote && (
        <figcaption className="mt-4 text-sm text-muted-foreground">
          <RichText text={footnote} />
        </figcaption>
      )}
    </figure>
  )
}
