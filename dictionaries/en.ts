import type { Dictionary } from "./pt"

const en: Dictionary = {
  meta: {
    title: "Renata Alves — Senior Product Designer · São Paulo, Brazil",
    description:
      "Senior Product Designer with 8+ years in fintech, martech and ERP. Research, data and partnership with Product and Engineering, from discovery to delivery.",
  },
  // Language the page content is written in
  contentLang: "en",
  translationNotice: null,

  links: {
    newTab: "(opens in a new tab)",
    linkedinPending: "The LinkedIn link has not been set up yet.",
  },
  nav: {
    label: "Main navigation",
    projects: "Projects",
    about: "About me",
    contact: "Contact",
    linkedin: "LinkedIn",
    menu: "Menu",
  },
  language: {
    label: "Language",
    pt: "Português",
    en: "English",
  },
  hero: {
    titleStart: "Designing",
    titleHighlight: "clarity",
    titleEnd: "into complex products.",
    subtitle:
      "For over 8 years, I’ve designed digital products with research and data, working alongside Product and Engineering from discovery to delivery, at companies like XP Inc., RD Station and Conta Azul.",
    name: "Renata Alves",
    role: "Senior Product Designer · São Paulo, Brazil",
    photoAlt: "Renata Alves",
    ctaProjects: "View projects",
    ctaContact: "Let's talk",
  },
  cases: {
    title: "Selected projects",
    viewCase: "View case study",
    carousel: {
      label: "carousel",
      previous: "Previous case",
      next: "Next case",
      position: "{current} of {total}",
    },
    items: [
      {
        number: "01",
        company: "TOTVS | RD Station",
        year: "2024",
        title: "Lead Segmentation",
        description:
          "The segmentation editor was the third most-visited page in RD Marketing, but its legacy architecture made every new use case costly to ship. I redesigned the editor alongside engineering’s restructuring, which enabled features like relative date filters.",
        role: "Design owner, from discovery to post-launch stabilization · with PM, Engineering and Support",
        tags: ["User interviews", "Prioritization", "Post-launch monitoring"],
        imageAlt: "Segmentation — editor screen",
      },
      {
        number: "02",
        company: "XP Inc.",
        year: "2023",
        title: "Business account opening",
        description:
          "Account opening spanned five departments, with broken handoffs and an undocumented journey. I supported the journey mapping and designed the document upload flow, with real-time status. Early signs: less manual work for internal teams.",
        role: "Design owner, from discovery to handoff · with UX Research, PM and stakeholders",
        tags: [
          "Journey mapping",
          "Stakeholder interviews",
          "Service blueprint",
        ],
        imageAlt: "Business account opening — desktop and mobile flow",
      },
      {
        number: "03",
        company: "XP Inc.",
        year: "2022",
        title: "XP Menu and Footer",
        description:
          "XP’s site was built for a brokerage and couldn’t support a bank. The brief was two one-off deliverables; I proposed rethinking the entire navigation, and the PM approved prioritizing it on the half-year roadmap. Validated with tree testing, the structure became the standard for XP, Rico and Clear.",
        role: "Design owner, from discovery to handoff · with PM, UX Writing, SEO and Design Ops",
        tags: ["Information architecture", "Card sorting", "Design system"],
        imageAlt: "XP Menu and Footer — screens of the menu and footer",
      },
    ],
  },
  process: {
    title: "How I get to clarity",
    lead: "Clarity comes from understanding the problem, validating with evidence and turning what works into patterns.",
    steps: [
      {
        title: "Understand",
        description:
          "I start with the problem, not the screen. I combine interviews, customer feedback and usage data (Mixpanel, Google Analytics, among others) with business context to decide what’s worth solving.",
      },
      {
        title: "Structure and validate",
        description:
          "I involve Product and Engineering from discovery. I prioritize by value and feasibility, define flows and architecture, and validate with users (interviews, usability tests, tree testing) before implementation.",
      },
      {
        title: "Deliver and scale",
        description:
          "I stay involved through delivery and post-launch, with metrics and A/B tests. I turn one-off solutions into reusable patterns and share research with other disciplines.",
      },
    ],
    note: "Accessibility and UX Writing are part of the design, not a separate step. I incorporate AI into my process, from research to documentation.",
    seeInProjects: "See it in the projects",
  },
  skills: {
    label: "Skills and tools",
    items: [
      "Research",
      "Strategy",
      "Interface design",
      "Product discovery",
      "User interviews",
      "Usability tests",
      "User Flows",
      "Information architecture",
      "Prototyping",
      "Product metrics",
      "A/B tests",
      "Responsive design",
      "Design systems",
      "Atomic Design",
      "Figma",
      "Maze",
      "Mixpanel",
      "Hotjar",
    ],
  },
  experience: {
    title: "Experience",
    lead: "From e-commerce and telecom to fintech, ERP and martech.",
    fullHistory: "View full career history",
    items: [
      {
        role: "Senior Product Designer",
        company: "TOTVS | RD Station",
        period: "Apr/2024 – Sep/2026",
      },
      {
        role: "Senior Product Designer",
        company: "Conta Azul",
        period: "Sep/2023 – Apr/2024",
      },
      {
        role: "Product Designer",
        company: "XP Inc.",
        period: "Jul/2021 – Aug/2023",
      },
      {
        role: "Product Designer",
        company: "Octadesk",
        period: "Aug/2020 – Jul/2021",
      },
      {
        role: "UX Designer/Product Designer",
        company: "Oi S.A. — via Stefanini",
        period: "Jan/2019 – Jul/2020",
      },
      {
        role: "Junior Product Designer",
        company: "Profit-e E-commerce Solutions",
        period: "Jul/2018 – Jan/2019",
      },
    ],
  },
  contact: {
    titleStart: "Let's talk about",
    titleHighlight: "product and design.",
    linkedin: { label: "LinkedIn", value: "in/renaataalves" },
    email: { label: "E-mail" },
    cookies: "Cookie preferences",
    backToTop: "Back to top",
    copyright: "© 2026 Renata Alves",
  },
}

export default en
