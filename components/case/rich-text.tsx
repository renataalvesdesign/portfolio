import * as React from "react"

import type { RichText as RichTextValue } from "@/lib/projects/schema"

// Inline formatting of the case content: **bold** and *italic*. Anything else
// is plain text, so a stray "*" (e.g. a footnote mark) stays as written.
const pattern = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g

export function RichText({ text }: { text: RichTextValue }) {
  return text.split(pattern).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4)
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2)
      return <em key={index}>{part.slice(1, -1)}</em>
    return <React.Fragment key={index}>{part}</React.Fragment>
  })
}
