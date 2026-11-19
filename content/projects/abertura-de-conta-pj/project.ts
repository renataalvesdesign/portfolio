import { defineProject } from "@/lib/projects/schema"
import body from "./case"
import bodyEn from "./case.en"
import cover from "./images/capa.png"

export default defineProject({
  slug: "abertura-de-conta-pj",
  order: 2,
  group: "selected",
  company: "XP Inc.",
  year: "2023",
  cover,
  body: { pt: body, en: bodyEn },
  text: {
    pt: {
      title: "Abertura de conta PJ",
      summary:
        "A abertura de conta cruzava cinco áreas, com handoffs falhos e sem jornada documentada. Apoiei o mapeamento e desenhei o fluxo de envio de documentos, com status em tempo real. Primeiros sinais: menos esforço manual nos times.",
      roleSummary:
        "Designer responsável pela entrega, da descoberta ao handoff · com UX Research, PM e stakeholders",
      tags: [
        "Mapa de jornada",
        "Entrevistas com stakeholders",
        "Blueprint de serviço",
      ],
      skills: [
        "Facilitação de workshops",
        "Fluxos de usuário",
        "Wireframes",
        "UI Design",
        "Prototipação",
        "Design responsivo",
        "Critique de design",
        "Handoff e documentação",
        "Gestão de stakeholders",
        "Liderança de design",
      ],
      coverAlt: "Abertura de conta PJ — fluxo em desktop e mobile",
    },
    en: {
      title: "Business account opening",
      summary:
        "Account opening spanned five departments, with broken handoffs and an undocumented journey. I supported the journey mapping and designed the document upload flow, with real-time status. Early signs: less manual work for internal teams.",
      roleSummary:
        "Design owner, from discovery to handoff · with UX Research, PM and stakeholders",
      tags: ["Journey mapping", "Stakeholder interviews", "Service blueprint"],
      skills: [
        "Workshop facilitation",
        "User flows",
        "Wireframes",
        "UI Design",
        "Prototyping",
        "Responsive design",
        "Design critique",
        "Handoff and documentation",
        "Stakeholder management",
        "Design leadership",
      ],
      coverAlt: "Business account opening — desktop and mobile flow",
    },
  },
})
