import { defineProject } from "@/lib/projects/schema"
import body from "./case"
import bodyEn from "./case.en"
import cover from "./images/capa.png"

export default defineProject({
  slug: "menu-e-footer-xp",
  order: 3,
  group: "selected",
  company: "XP Inc.",
  year: "2022",
  cover,
  body: { pt: body, en: bodyEn },
  text: {
    pt: {
      title: "Menu e Footer XP",
      summary:
        "O site da XP foi desenhado para uma corretora e não comportava um banco. Eram duas entregas pontuais; propus repensar a navegação inteira e a PM aprovou priorizá-la no roadmap do semestre. A estrutura, validada com tree testing, virou padrão para XP, Rico e Clear.",
      roleSummary:
        "Designer responsável pela entrega, da descoberta ao handoff · com PM, UX Writing, SEO e Design Ops",
      tags: ["Arquitetura de informação", "Card sorting", "Design system"],
      skills: [
        "Análise de dados",
        "Benchmark",
        "Tree testing",
        "SEO",
        "Facilitação de workshops",
        "UI Design",
        "Design responsivo",
        "Acessibilidade",
        "Handoff e documentação",
        "Gestão de stakeholders",
      ],
      coverAlt: "Menu e Footer XP — telas do menu e do footer",
    },
    en: {
      title: "XP Menu and Footer",
      summary:
        "XP’s site was built for a brokerage and couldn’t support a bank. The brief was two one-off deliverables; I proposed rethinking the entire navigation, and the PM approved prioritizing it on the half-year roadmap. Validated with tree testing, the structure became the standard for XP, Rico and Clear.",
      roleSummary:
        "Design owner, from discovery to handoff · with PM, UX Writing, SEO and Design Ops",
      tags: ["Information architecture", "Card sorting", "Design system"],
      skills: [
        "Data analysis",
        "Benchmarking",
        "Tree testing",
        "SEO",
        "Workshop facilitation",
        "UI Design",
        "Responsive design",
        "Accessibility",
        "Handoff and documentation",
        "Stakeholder management",
      ],
      coverAlt: "XP Menu and Footer — screens of the menu and footer",
    },
  },
})
