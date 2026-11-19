import { defineProject } from "@/lib/projects/schema"
import body from "./case"
import bodyEn from "./case.en"
import cover from "./images/capa.png"

export default defineProject({
  slug: "redesign-mahogany",
  order: 6,
  group: "ecommerce",
  company: "Profit-e E-commerce Solutions",
  year: "2018",
  cover,
  body: { pt: body, en: bodyEn },
  text: {
    pt: {
      title: "Redesign do e-commerce Mahogany",
      summary:
        "No e-commerce da Mahogany, o mobile concentrava os acessos, mas preço e botão de compra ficavam abaixo da primeira dobra. Com base em dados de cliques e rolagem, redesenhei a experiência com botão de compra fixo, preço visível de início e atalhos de categoria na home.",
      roleSummary:
        "Designer responsável pela entrega, do kickoff à entrega final · com Gerente de projetos e Desenvolvimento",
      tags: ["Análise de dados", "Design responsivo", "Design System"],
      skills: [
        "Wireframes",
        "UI Design",
        "Direção visual",
        "Gestão de stakeholders",
      ],
      coverAlt: "Redesign do e-commerce Mahogany — imagem do projeto",
    },
    en: {
      title: "Mahogany e-commerce redesign",
      summary:
        "On Mahogany’s e-commerce, mobile drove most of the traffic, but price and the buy button sat below the fold. Using click and scroll data, I redesigned the experience with a sticky buy button, price visible upfront, and category shortcuts on the home page.",
      roleSummary:
        "Design owner, from kickoff to final delivery · with Project Manager and Development",
      tags: ["Data analysis", "Responsive design", "Design System"],
      skills: [
        "Wireframes",
        "UI Design",
        "Visual direction",
        "Stakeholder management",
      ],
      coverAlt: "Mahogany e-commerce redesign — project image",
    },
  },
})
