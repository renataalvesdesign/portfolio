import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

export interface PropRow {
  name: string
  type: string
  defaultValue?: string
  description: string
}

export function ShowcasePage({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-10 py-16">
      <header className="flex flex-wrap items-start justify-between gap-6">
        <div className="flex flex-col gap-4">
          <p className="font-sans text-xs tracking-widest text-highlight uppercase">
            Components
          </p>
          <h1 className="text-5xl tracking-tight">{title}</h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
      </header>
      {children}
    </div>
  )
}

export function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-8 border-t pt-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl">{title}</h2>
        {description && (
          <p className="max-w-2xl text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  )
}

/** A labelled example. Labels are Poppins eyebrows, never the heading font. */
export function Example({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
        {label}
      </p>
      <div className={cn("flex items-center", className)}>{children}</div>
    </div>
  )
}

export function Preview({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("rounded-lg border bg-card p-8 shadow-xs", className)}>
      {children}
    </div>
  )
}

/** Puts its subtree on the cream surface, so every token switches to its light value. */
export function LightPreview({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "surface-light rounded-lg border p-8",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border bg-muted p-6 font-mono text-sm leading-relaxed">
      <code>{code}</code>
    </pre>
  )
}

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Prop</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Default</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell className="font-mono text-xs">{row.name}</TableCell>
            <TableCell className="font-mono text-xs">{row.type}</TableCell>
            <TableCell className="font-mono text-xs">
              {row.defaultValue ?? "—"}
            </TableCell>
            <TableCell className="whitespace-normal text-muted-foreground">
              {row.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
