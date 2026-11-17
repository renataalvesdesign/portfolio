import type { StaticImageData } from "next/image"

import coverSegmentation from "@/public/images/home/capa-01-editor-segmentacao.png"
import coverBusinessAccount from "@/public/images/home/capa-02-abertura-conta-pj.png"
import coverMenuFooter from "@/public/images/home/capa-03-menu-footer-xp.png"
import coverVacinas from "@/public/images/projects/capa-04-vacinas-net.png"
import coverNossaDrogaria from "@/public/images/projects/capa-05-a-nossa-drogaria.png"
import coverMahogany from "@/public/images/projects/capa-06-mahogany.png"

// Case covers, in the same order as dict.cases.items (texts live in the
// dictionaries, links in site.caseUrls). To add a case, add its texts to both
// dictionaries, its cover here and its link in site.caseUrls.
export const caseCovers: StaticImageData[] = [
  coverSegmentation,
  coverBusinessAccount,
  coverMenuFooter,
]

// Covers of the Projects page groups (projects.groups), by case number. A case
// without a cover here shows the Design System image placeholder.
export const projectCovers: Partial<Record<string, StaticImageData>> = {
  "04": coverVacinas,
  "05": coverNossaDrogaria,
  "06": coverMahogany,
}
