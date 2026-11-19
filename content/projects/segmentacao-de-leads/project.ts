import { defineProject } from "@/lib/projects/schema"
import body from "./case"
import bodyEn from "./case.en"
import cover from "./images/capa.png"

export default defineProject({
  slug: "segmentacao-de-leads",
  order: 1,
  group: "selected",
  company: "TOTVS | RD Station",
  year: "2024",
  cover,
  body: { pt: body, en: bodyEn },
  text: {
    pt: {
      title: "Segmentação de leads",
      summary:
        "O editor de segmentação era a 3ª página mais acessada do RD Marketing, mas a arquitetura legada tornava cada novo caso de uso custoso de entregar. Redesenhei o editor junto da reestruturação da engenharia, o que viabilizou entregas como filtros de datas relativas.",
      roleSummary:
        "Designer responsável pela entrega, da descoberta à estabilização · com PM, Engenharia e Suporte",
      tags: [
        "Entrevistas com usuários",
        "Priorização",
        "Acompanhamento pós lançamento",
      ],
      skills: [
        "Benchmark",
        "Teste de usabilidade",
        "Análise de dados",
        "Métricas de UX",
        "Fluxos de usuário",
        "Wireframes",
        "UI Design",
        "Prototipação",
        "Design System",
        "Critique de design",
        "Handoff e documentação",
      ],
      coverAlt: "Segmentação de leads — tela do editor de segmentação",
    },
    en: {
      title: "Lead Segmentation",
      summary:
        "The segmentation editor was the third most-visited page in RD Marketing, but its legacy architecture made every new use case costly to ship. I redesigned the editor alongside engineering’s restructuring, which enabled features like relative date filters.",
      roleSummary:
        "Design owner, from discovery to post-launch stabilization · with PM, Engineering and Support",
      tags: ["User interviews", "Prioritization", "Post-launch follow-up"],
      skills: [
        "Benchmarking",
        "Usability testing",
        "Data analysis",
        "UX metrics",
        "User flows",
        "Wireframes",
        "UI Design",
        "Prototyping",
        "Design System",
        "Design critique",
        "Handoff and documentation",
      ],
      coverAlt: "Segmentation — editor screen",
    },
  },
})
