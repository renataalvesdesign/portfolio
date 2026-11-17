import { defineProject } from "@/lib/projects/schema"
import cover from "./images/capa.png"

// Sem case.ts ainda: aparece em Projetos, sem página de case.
export default defineProject({
  slug: "a-nossa-drogaria",
  order: 5,
  group: "ecommerce",
  company: "Profit-e E-commerce Solutions",
  year: "2018",
  cover,
  text: {
    pt: {
      title: "A Nossa Drogaria",
      summary:
        "A Nossa Drogaria queria levar ao digital a proximidade que já tinha nas lojas físicas. Com base em pesquisa de campo e benchmark, defini a direção visual: o azul virou a cor principal e o amarelo da marca, que prejudicava a legibilidade, ficou nos destaques de ação.",
      roleSummary:
        "Designer responsável pela entrega, da descoberta à entrega final · com Gerente de projetos e Desenvolvimento",
      tags: ["Pesquisa de campo", "Direção visual", "Design System"],
      coverAlt: "A Nossa Drogaria — imagem do projeto",
    },
    en: {
      title: "A Nossa Drogaria",
      summary:
        "A Nossa Drogaria wanted to bring the closeness it already had in its physical stores to digital. Based on field research and benchmarking, I set the visual direction: blue became the main color, and the brand’s yellow, which hurt legibility, was kept for action highlights.",
      roleSummary:
        "Design owner, from discovery to final delivery · with Project Manager and Development",
      tags: ["Field research", "Visual direction", "Design System"],
      coverAlt: "A Nossa Drogaria — project image",
    },
  },
})
