// Bare root layout for "/", which only redirects to the default locale.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
