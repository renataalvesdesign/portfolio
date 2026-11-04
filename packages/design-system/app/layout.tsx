import "./globals.css"
import { fontHeading, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fontSans.variable, fontHeading.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
