import { Poppins, Space_Grotesk } from "next/font/google"

// Single source for the brand fonts. Apply both `.variable` classes to <html>;
// globals.css maps them to font-sans and font-heading.
export const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
})
