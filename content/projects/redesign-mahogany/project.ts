import { defineProject } from "@/lib/projects/schema"
import cover from "./images/capa.png"

// Sem case.ts ainda: aparece em Projetos, sem página de case.
export default defineProject({
  slug: "redesign-mahogany",
  order: 6,
  group: "ecommerce",
  company: "Profit-e E-commerce Solutions",
  year: "2018",
  cover,
  text: {
    pt: {
      title: "Redesign do e-commerce Mahogany",
      summary:
        "No e-commerce da Mahogany, o mobile concentrava os acessos, mas preço e botão de compra ficavam abaixo da primeira dobra. Com base em dados de cliques e rolagem, redesenhei a experiência com botão de compra fixo, preço visível de início e atalhos de categoria na home.",
      roleSummary:
        "Designer responsável pela entrega, do kickoff à entrega final · com Gerente de projetos e Desenvolvimento",
      tags: ["Análise de dados", "Design responsivo", "Design System"],
      coverAlt: "Redesign do e-commerce Mahogany — imagem do projeto",
    },
    en: {
      title: "Mahogany e-commerce redesign",
      summary:
        "On Mahogany’s e-commerce, mobile drove most of the traffic, but price and the buy button sat below the fold. Using click and scroll data, I redesigned the experience with a sticky buy button, price visible upfront, and category shortcuts on the home page.",
      roleSummary:
        "Design owner, from kickoff to final delivery · with Project Manager and Development",
      tags: ["Data analysis", "Responsive design", "Design System"],
      coverAlt: "Mahogany e-commerce redesign — project image",
    },
  },
})
