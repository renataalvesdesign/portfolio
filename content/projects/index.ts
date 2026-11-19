import type { Project } from "@/lib/projects/schema"
import aNossaDrogaria from "./a-nossa-drogaria/project"
import aberturaDeContaPj from "./abertura-de-conta-pj/project"
import menuEFooterXp from "./menu-e-footer-xp/project"
import redesignMahogany from "./redesign-mahogany/project"
import segmentacaoDeLeads from "./segmentacao-de-leads/project"
import vacinasNet from "./vacinas-net/project"

// Every project on the site. The list order does not matter: each project's
// `order` field sets where it appears. To add one, import its project.ts and
// list it here (see README.md).
export const allProjects: Project[] = [
  segmentacaoDeLeads,
  aberturaDeContaPj,
  menuEFooterXp,
  vacinasNet,
  aNossaDrogaria,
  redesignMahogany,
]
