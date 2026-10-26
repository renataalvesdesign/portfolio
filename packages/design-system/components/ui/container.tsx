import * as React from "react"
import { cn } from "cn"

/** Centers page content: 1440px max width, 24px gutters on mobile and 48px from md up. */
function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full max-w-360 px-6 md:px-12", className)}
      {...props}
    />
  )
}

export { Container }
