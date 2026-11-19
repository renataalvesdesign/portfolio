import { defineCase } from "@/lib/projects/schema"
import postItsEntrevistas from "./images/post-its-entrevistas.png"
import jornadaAsIs from "./images/jornada-as-is.png"
import fluxograma from "./images/fluxograma.png"
import fluxoUpload from "./images/fluxo-upload.png"
import fluxoEnvioDocumentos from "./images/fluxo-envio-documentos.png"
import fluxoStatus from "./images/fluxo-status.png"
import versaoDesktop from "./images/versao-desktop.png"

// English version of case.ts: same blocks and images.

export default defineCase({
  status: "published",
  lang: "en",
  sections: [
    {
      title: "Overview",
      id: "visao-geral",
      blocks: [
        {
          type: "p",
          text: "**XP Empresas** is a financial services platform by **XP Investimentos**, designed to support businesses of all sizes. It offers a range of solutions in financial management, credit, and investment, with a focus on optimizing cash flow and maximizing business results.",
        },
        {
          type: "p",
          text: "An earlier study revealed that the **business account opening journey was overly complex and inefficient**. Despite the platform's robust offering, the onboarding process **involved multiple manual steps across different teams**, leading to significant delays and lack of visibility for both clients and internal teams.",
        },
        {
          type: "p",
          text: "This case study explores how we **reframed and redesigned the document submission and status tracking experience**, the critical first stage in transforming XP Empresas' onboarding journey.",
        },
      ],
    },
    {
      title: "Goals",
      id: "objetivos",
      blocks: [
        {
          type: "p",
          text: "The main objective was to **rethink and improve the account opening process, focusing on reducing lead time and identifying the most critical pain points**. At the outset, we lacked clarity on which part of the flow required the most attention, so our first step was to gain a deep understanding of the full journey.",
        },
        { type: "p", text: "The team aligned on three strategic goals:" },
        { type: "h3", text: "1. Map the current journey from end to end" },
        {
          type: "p",
          text: "The onboarding process involved multiple departments, each with different tools, responsibilities, and expectations. Creating a detailed map of the *as-is* journey, including both internal handoffs and client touchpoints, was essential to build a shared understanding and establish a baseline for change.",
        },
        { type: "h3", text: "2. Validate and expand previous research" },
        {
          type: "p",
          text: "An earlier study had already identified general inefficiencies, such as high manual effort and slow processing times, but lacked insight into operational nuances and recent process updates. As there were **signs of ad-hoc improvements** being made internally, we conducted **interviews with users and stakeholders** to verify what had changed and to surface new pain points and opportunities.",
        },
        {
          type: "h3",
          text: "3. Identify improvement opportunities and redesign key pain points",
        },
        {
          type: "p",
          text: "While the scope didn't include the entire onboarding journey, we focused on one of the most critical touchpoints as a **strategic starting point**. The goal was to design a **simpler, more transparent, and scalable** solution that would **reduce internal workload** while **improving the customer experience**.",
        },
      ],
    },
    {
      title: "Research",
      id: "pesquisa",
      blocks: [
        {
          type: "p",
          text: "To initiate the process, we conducted **interviews with key stakeholders** from all departments involved: Marketing, Customer Support, Investment Advisors, Account Opening, and Compliance.",
        },
        {
          type: "p",
          text: "These conversations surfaced several critical insights:",
        },
        {
          type: "list",
          items: [
            "**The average time from pre-registration to account activation was approximately 31 days.**",
            "All clients followed the same process, regardless of business risk or profile.",
            "The journey had changed significantly since its last mapping, **with no clear documentation**.",
            "New roles and participants were discovered along the way.",
            "**Responsibility overlaps and handoff issues** were causing frequent delays and miscommunication.",
          ],
        },
        {
          type: "figure",
          figure: {
            image: postItsEntrevistas,
            label: "Virtual post-its from the interviews",
            alt: "Virtual post-its with quotes, insights, and observations from the stakeholder interviews",
          },
          caption:
            "Virtual post-its highlighting quotes, insights, and observations from the stakeholder interviews.",
        },
        {
          type: "p",
          text: "This input enabled us to build a detailed **“as-is” journey map**, reflecting both client-facing actions and behind-the-scenes workflows. The map helped uncover where coordination broke down and where process delays were most concentrated.",
        },
        {
          type: "figure",
          figure: {
            image: jornadaAsIs,
            label: "End-to-end as-is journey",
            alt: "Map of the current account opening journey, with the internal teams and the client touchpoints",
          },
          caption:
            "Representation of the current journey, covering all internal teams and client touchpoints.",
        },
      ],
    },
    {
      title: "Ideation",
      id: "ideacao",
      blocks: [
        {
          type: "quote",
          text: "The document submission stage was the most fragmented and resource-intensive part of onboarding.",
        },
        {
          type: "p",
          text: "With a clear understanding of the current journey, it became evident that the **document submission stage** was the most fragmented and resource-intensive part of the onboarding process. Clients often felt uncertain about which documents were required, how to submit them, and how long approval would take. Internally, these gaps resulted in rework, inconsistent follow-ups, and misaligned expectations.",
        },
        {
          type: "p",
          text: "The next step was to sketch out **multiple versions of the entire account opening flow**, not just the document submission stage. This broader view helped identify how all stages connected and allowed the team to intentionally strip away anything non-essential for the current scope. The goal was to avoid rework later by ensuring the new flow could serve as a scalable foundation.",
        },
        {
          type: "figure",
          figure: {
            image: fluxograma,
            label: "Flowchart of the new process",
            alt: "Proposed flowchart for the new account opening process",
          },
          caption: "Proposed flow for the new process.",
        },
        {
          type: "p",
          text: "Once the structure was approved by the Product Manager responsible for the project, we proceeded with the interface design. We chose a *mobile-first* approach. Many XP Empresas clients, especially small and mid-sized businesses who would benefit most from this improved experience, tend to manage their financial operations on mobile devices. Starting with mobile helped reduce friction in the most constrained environment, focus on critical actions, and ensure responsive scaling to desktop later. This decision was also aligned with the broader product strategy, focused on agility and user-centered design.",
        },
        {
          type: "p",
          text: "Building on this foundation, the team brainstormed several improvements to enhance the experience:",
        },
        {
          type: "list",
          items: [
            "A guided, checklist-style document upload flow.",
            "Real-time status updates and validation feedback.",
            "Clear next steps and an accessible support channel.",
          ],
        },
        {
          type: "p",
          text: "These ideas were translated into **medium-fidelity wireframes**, prioritizing clarity, simplicity, and integration with internal systems. The wireframes were then presented in critique sessions with stakeholders, where cross-functional feedback informed the next round of iteration.",
        },
      ],
    },
    {
      title: "Validation",
      id: "validacao",
      blocks: [
        {
          type: "p",
          text: "Two rounds of testing and critique were conducted.",
        },
        {
          type: "h3",
          text: "Cross-functional critiques with participants from the initial interviews",
        },
        {
          type: "list",
          items: [
            "We collected feedback on feasibility, clarity, and integration with existing systems.",
            "Stakeholders helped validate back-end requirements and *edge cases*.",
            "Communication patterns for clients were refined based on the team's insights.",
          ],
        },
        {
          type: "h3",
          text: "Internal design critique with high-fidelity prototypes",
        },
        {
          type: "list",
          items: [
            "The focus was on consistency, visual hierarchy, and tone of voice.",
            "We identified and addressed opportunities to reduce cognitive load.",
            "We validated alignment with XP's design system.",
          ],
        },
        {
          type: "figure",
          figure: {
            image: fluxoUpload,
            label: "Document upload flow",
            alt: "Screens of the document upload flow in the high-fidelity prototypes",
          },
          caption: "Document upload flow in the high-fidelity prototypes.",
        },
      ],
    },
    {
      title: "Results",
      id: "resultados",
      blocks: [
        {
          type: "p",
          text: "As a result of this work, we delivered a **new document submission flow** that included:",
        },
        {
          type: "list",
          items: [
            "A guided upload experience.",
            "Real-time status tracking for users.",
            "Clear internal ownership at each step.",
            "Reduced rework and unnecessary overload for internal teams.",
            "A scalable design, ready for the next stages of evolution.",
          ],
        },
        { type: "h3", text: "Early signs of impact" },
        {
          type: "p",
          text: "Initial feedback from stakeholders and internal QA testing indicated important improvements compared to the scenario mapped in the research:",
        },
        {
          type: "stats",
          items: [
            {
              value: "~31 days",
              label: "Before · time to account activation",
            },
            { value: "~18 days*", label: "After · assessed estimate" },
            {
              value: "Real time",
              label: "Status visibility, previously nonexistent",
            },
          ],
        },
        {
          type: "comparison",
          columns: ["Indicator", "Before", "After"],
          rows: [
            [
              "Time to account activation",
              "~31 days",
              "Estimate assessed at ~18 days*",
            ],
            ["Status visibility", "None", "Real time"],
            ["Responsibility across teams", "Overlapping", "Clear per step"],
            [
              "Manual effort of internal teams",
              "High, with duplicated activities",
              "Reduced, with occasional interventions",
            ],
          ],
          footnote:
            "* The estimate was based on the reduction of the manual work that previously took place. It does not eliminate problems in the documentation submitted by the client or in the time needed to apply the corrections indicated by the system.",
        },
        {
          type: "figure",
          figure: {
            image: fluxoEnvioDocumentos,
            label: "Initial step: document submission",
            alt: "Screens of the initial registration step, with the submission of the documents required for validation",
          },
          caption:
            "Initial registration step, dedicated to submitting the documents required for validation.",
        },
        {
          type: "figure",
          figure: {
            image: fluxoStatus,
            label: "Status tracking",
            alt: "Screens for tracking document status, with guidance on adjustments in case of rejection",
          },
          caption:
            "Document status tracking and guidance on the adjustments needed in case of rejection.",
        },
        {
          type: "figure",
          figure: {
            image: versaoDesktop,
            label: "Desktop version",
            alt: "Desktop version of the document submission flow",
          },
          caption:
            "Adaptation of the mobile-first experience to desktop, making better use of the available space.",
        },
      ],
    },
    {
      title: "My role",
      id: "minha-atuacao",
      blocks: [
        {
          type: "p",
          text: "As the **lead designer responsible for the delivery**, I worked from discovery through final delivery, focusing on:",
        },
        {
          type: "list",
          items: [
            "**Research:** I organized materials and supported the facilitation of interviews and stakeholder dynamics, collaborating with UX Research on defining the approach, synthesizing insights, and documentation.",
            "**Journeys and flows:** I led the construction of the new flow, identifying friction points and proposing structural improvements based on the mapped experience.",
            "**UI and prototyping:** I created wireframes, high-fidelity screens, and interactive prototypes, taking a mobile-first approach.",
            "**Alignment and documentation:** I organized design critiques, consolidated feedback, and documented decisions and specifications for the handoff to development.",
          ],
        },
        {
          type: "p",
          text: "This project allowed me to **take the lead on a critical delivery**, combining strategic depth in research with quality in design execution.",
        },
      ],
    },
  ],
})
