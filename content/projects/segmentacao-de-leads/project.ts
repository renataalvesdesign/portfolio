import { defineProject } from "@/lib/projects/schema"
import body from "./case"
import cover from "./images/capa.png"

export default defineProject({
  slug: "segmentacao-de-leads",
  order: 1,
  group: "selected",
  company: "TOTVS | RD Station",
  year: "2024",
  cover,
  body,
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
      coverAlt: "Segmentação de leads — tela do editor de segmentação",
    },
    en: {
      title: "Lead Segmentation",
      summary:
        "The segmentation editor was the third most-visited page in RD Marketing, but its legacy architecture made every new use case costly to ship. I redesigned the editor alongside engineering’s restructuring, which enabled features like relative date filters.",
      roleSummary:
        "Design owner, from discovery to post-launch stabilization · with PM, Engineering and Support",
      tags: ["User interviews", "Prioritization", "Post-launch monitoring"],
      coverAlt: "Segmentation — editor screen",
    },
  },
})
