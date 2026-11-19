type AboutJob = {
  role: string
  company: string
  period: string
  summary: string | null
  description: string[]
  /** Project slugs (content/projects), linked to their case pages */
  cases: string[]
  focus: string[]
  tools: string[]
}

type Course = {
  name: string
  institution?: string
  date: string
  placeholder?: boolean
}

const pt = {
  meta: {
    title: "Renata Alves — Product Designer Sênior · São Paulo",
    description:
      "Product Designer Sênior com mais de 8 anos em fintech, martech e ERP. Pesquisa, dados e parceria com Produto e Engenharia, da descoberta à entrega.",
  },
  // Language the page content is written in (only nav and title are translated so far)
  contentLang: "pt",
  translationNotice: null as string | null,
  links: {
    newTab: "(abre em nova aba)",
    linkedinPending: "O link do LinkedIn ainda não foi configurado.",
    resumePending: "O arquivo do currículo ainda não foi configurado.",
  },
  nav: {
    label: "Navegação principal",
    projects: "Projetos",
    about: "Sobre mim",
    contact: "Contato",
    linkedin: "LinkedIn",
    menu: "Menu",
  },
  language: {
    label: "Idioma",
    pt: "Português",
    en: "English",
  },
  hero: {
    titleStart: "Projetando",
    titleHighlight: "clareza",
    titleEnd: "para produtos complexos.",
    subtitle:
      "Há mais de 8 anos desenho produtos digitais com pesquisa, dados e parceria com Produto e Engenharia, da descoberta à entrega, em empresas como XP Inc., RD Station e Conta Azul.",
    name: "Renata Alves",
    role: "Product Designer Sênior · São Paulo",
    photoAlt: "Renata Alves",
    ctaProjects: "Ver projetos",
    ctaContact: "Vamos conversar",
  },
  cases: {
    title: "Projetos selecionados",
    viewCase: "Ver case",
    carousel: {
      label: "carrossel",
      previous: "Case anterior",
      next: "Próximo case",
      position: "{current} de {total}",
    },
  },
  process: {
    title: "Como chego à clareza",
    lead: "Clareza vem de entender o problema, validar com evidência e transformar o que funciona em padrão.",
    steps: [
      {
        title: "Entender",
        description:
          "Começo pelo problema, não pela tela. Cruzo entrevistas, feedback de clientes e dados de uso (Mixpanel, Google Analytics, entre outros) com contexto de negócio para decidir o que vale resolver.",
      },
      {
        title: "Estruturar e validar",
        description:
          "Envolvo Produto e Engenharia desde a descoberta. Priorizo por valor e viabilidade, defino fluxos e arquitetura e valido com usuários (entrevistas, testes de usabilidade, tree testing) antes da implementação.",
      },
      {
        title: "Entregar e escalar",
        description:
          "Acompanho a entrega e o pós-lançamento, com métricas e testes A/B. Transformo soluções pontuais em padrões reutilizáveis e compartilho pesquisas com outras disciplinas.",
      },
    ],
    note: "Acessibilidade e UX Writing fazem parte do design, não de uma etapa à parte. Incorporo IA ao meu processo, da pesquisa à documentação.",
    seeInProjects: "Ver como isso aparece nos projetos",
  },
  skills: {
    label: "Competências e ferramentas",
    items: [
      "Pesquisa",
      "Estratégia",
      "Design de interfaces",
      "Descoberta de produto",
      "Entrevistas com usuários",
      "Testes de usabilidade",
      "Fluxos",
      "Arquitetura de informação",
      "Prototipação",
      "Métricas de produto",
      "Testes A/B",
      "Design responsivo",
      "Design systems",
      "Atomic Design",
      "Figma",
      "Maze",
      "Mixpanel",
      "Hotjar",
    ],
  },
  experience: {
    title: "Experiência",
    lead: "De e-commerce e telecom a fintech, ERP e martech.",
    fullHistory: "Ver trajetória completa",
    items: [
      {
        role: "Product Designer Sênior",
        company: "TOTVS | RD Station",
        period: "Abr/2024 – Set/2026",
      },
      {
        role: "Product Designer Sênior",
        company: "Conta Azul",
        period: "Set/2023 – Mar/2024",
      },
      {
        role: "Product Designer",
        company: "XP Inc.",
        period: "Jul/2021 – Ago/2023",
      },
      {
        role: "Product Designer",
        company: "Octadesk",
        period: "Ago/2020 – Jul/2021",
      },
      {
        role: "UX Designer e Product Designer",
        company: "Oi S.A. — via Stefanini",
        period: "Jan/2019 – Jul/2020",
      },
      {
        role: "Product Designer Júnior",
        company: "Profit-e E-commerce Solutions",
        period: "Jul/2018 – Jan/2019",
      },
    ],
  },
  // Projects page: the cards come from content/projects
  projects: {
    meta: {
      title: "Projetos — Renata Alves, Product Designer Sênior",
      description:
        "Seleção de projetos de Renata Alves, Product Designer Sênior, em martech, fintech e e-commerce, da descoberta à entrega.",
    },
    eyebrow: "Projetos",
    title: "Seleção de projetos em que atuei ao longo da minha trajetória",
    // Group titles (project.group in content/projects). The "selected"
    // group opens the page under a title read by screen readers only.
    groupTitles: {
      selected: "Martech e fintech",
      ecommerce: "E-commerce",
    },
  },
  // Case pages (/projetos/<slug>); the case texts live in content/projects
  caseStudy: {
    eyebrow: "Case",
    role: "Papel",
    reading: "Tempo de leitura",
    // {n}: whole minutes, from the case body (lib/projects readingMinutes)
    readingTime: { one: "{n} minuto", other: "{n} minutos" },
    skills: {
      label: "Skills do projeto",
      more: "Mostrar mais {n} skills",
      collapse: "Recolher",
    },
    toc: "Neste case",
    imagePending: "Imagem a inserir",
    // Images that can be enlarged (shown larger than they fit in the text)
    zoom: { open: "Ampliar imagem", close: "Fechar imagem ampliada" },
    contentPending:
      "O conteúdo deste case ainda está sendo escrito. Enquanto isso, veja o resumo acima ou os outros projetos.",
    // Shown when the case body is in another language than the page
    otherLanguage: null as { title: string; description: string } | null,
    otherCases: "Outros cases",
    previous: "Anterior",
    next: "Próximo",
  },
  about: {
    meta: {
      title: "Sobre mim — Renata Alves, Product Designer Sênior",
      description:
        "Trajetória, competências e formação de Renata Alves, Product Designer Sênior com experiência em e-commerce, telecom, fintech, ERP e martech.",
    },
    hero: {
      eyebrow: "Sobre mim",
      title:
        "Comecei no design gráfico e na comunicação digital e, desde 2018, desenho produtos digitais.",
      // Non-breaking hyphen keeps "e‑commerce" on one line
      lead: "Passei por e‑commerce, telecom, fintech, ERP e martech. Em todos, o fio é o mesmo: pesquisa e dados para decidir o que construir, e Design System para fazer isso escalar.",
      resume: "Baixar currículo",
    },
    experience: {
      title: "Experiência",
      // Picked by the number of case links (Intl.PluralRules)
      relatedCases: { one: "Case relacionado:", other: "Cases relacionados:" },
      focusLabel: "Foco",
      toolsLabel: "Ferramentas",
      items: [
        {
          role: "Product Designer Sênior",
          company: "TOTVS | RD Station",
          period: "Abr/2024 – Set/2026",
          summary:
            "Time de Contact Management: experiências para gerenciar, entender e ativar dados de clientes em ações de marketing.",
          description: [
            "Projetei e evoluí as experiências de gestão de contatos, segmentação, importação de dados e tags, em parceria com Produto e Engenharia, conduzindo discovery e acompanhando churn para apoiar a priorização. Atuei além do meu time, facilitando um card sorting com os times de marketing para a evolução da navegação do RD Station Marketing e explorando experiências com IA no editor de Landing Pages. Fiz design review de entregas de outros designers e apoiei a evolução do Design System.",
          ],
          cases: ["segmentacao-de-leads"],
          focus: [
            "Gestão de contatos",
            "Product discovery",
            "Métricas de produto",
            "Arquitetura de informação",
            "Teste de usabilidade",
            "Design System",
          ],
          tools: ["Mixpanel", "Maze", "Gemini", "Figma Make", "Userflow"],
        },
        {
          role: "Product Designer Sênior",
          company: "Conta Azul",
          period: "Set/2023 – Mar/2024",
          summary:
            "Squad de Meios de Pagamento do ERP para pequenas e médias empresas, com foco em cobrança e recebimento.",
          description: [
            "Projetei e evoluí as jornadas de criação de cobranças e de meios de pagamento, da discovery à entrega, e acompanhei a adoção como métrica. Atuei na concepção de um painel de cobranças que dá visibilidade à operação financeira dos clientes (contas em aberto, atrasos, recorrentes e prioridades) e conduzi pesquisas e testes de usabilidade conforme a necessidade.",
          ],
          cases: [],
          focus: [
            "Meios de pagamento",
            "Cobrança",
            "Product discovery",
            "Métricas de produto",
            "Teste de usabilidade",
          ],
          tools: ["Amplitude", "Appcues"],
        },
        {
          role: "Product Designer",
          company: "XP Inc.",
          period: "Jul/2021 – Ago/2023",
          summary:
            "Experiências em diferentes etapas da jornada do cliente, da aquisição e abertura de conta à ativação, em múltiplos times de produto.",
          description: [
            "Projetei experiências da aquisição e abertura de conta à ativação, em XP Investimentos, Rico e Clear, em parceria com Produto, Engenharia e UX Research. Planejei e conduzi testes A/B e usei métricas de aquisição e conversão para embasar decisões de design. Criei templates de componentes para que pessoas não desenvolvedoras montassem páginas no WordPress e contribuí para a padronização de interfaces.",
          ],
          cases: ["abertura-de-conta-pj", "menu-e-footer-xp"],
          focus: [
            "Testes A/B",
            "Métricas de conversão",
            "Arquitetura de informação",
            "Acessibilidade",
            "Design System",
          ],
          tools: ["Google Analytics", "Maze", "WordPress", "Dovetail"],
        },
        {
          role: "Product Designer",
          company: "Octadesk",
          period: "Ago/2020 – Jul/2021",
          summary:
            "Squad de Canais, com foco em usabilidade, consistência e identidade de um produto conversacional.",
          description: [
            "Identifiquei inconsistências de usabilidade e interação ao longo do produto, conduzi entrevistas e testes de usabilidade e padronizei componentes, navegação e terminologia, contribuindo para o Design System e a biblioteca no Figma. Atuei na interface de chat que facilita o atendimento da persona Atendente, indicando as conversas prioritárias e recentes, e usei NPS, churn e LTV para identificar oportunidades. Também participei de design reviews, de entrevistas de contratação e do onboarding de designer recém-chegado.",
          ],
          cases: [],
          focus: [
            "Usabilidade",
            "Design System",
            "Entrevistas",
            "Testes de usabilidade",
            "NPS",
            "Churn",
            "LTV",
          ],
          tools: ["Figma"],
        },
        {
          role: "UX Designer e Product Designer",
          company: "Oi S.A. — via Stefanini",
          period: "Jan/2019 – Jul/2020",
          summary: "",
          description: [
            "Primeiro, no squad “Demandas Oi”, redesenhei páginas legadas do portal Minha Oi e apoiei a evolução do app mobile, com experiências para web, Android e iOS. Depois integrei o time de Design System: criei e mantive a biblioteca de componentes no Sketch, prototipei microinterações no InVision Studio e documentei padrões seguindo Atomic Design.",
          ],
          cases: [],
          focus: [
            "App mobile",
            "Design System",
            "Atomic Design",
            "Scrum e Kanban",
          ],
          tools: ["Sketch", "InVision Studio"],
        },
        {
          role: "Product Designer Júnior",
          company: "Profit-e E-commerce Solutions",
          period: "Jul/2018 – Jan/2019",
          summary:
            "Experiências de e-commerce do briefing à entrega, com Product Managers, desenvolvedores e clientes.",
          description: [
            "Participei de discovery, benchmark, personas e design sprints, usei Google Analytics e Hotjar e acompanhei a implementação.",
          ],
          cases: [],
          focus: ["Discovery", "Benchmark", "Personas", "Design sprints"],
          tools: ["Google Analytics", "Hotjar", "Figma"],
        },
        {
          role: "Design gráfico e conteúdo digital",
          company: "Antes de produto",
          period: "2015 – 2018",
          summary: null,
          description: [
            "Na Praça Conteúdo e Performance (conteúdo digital, redes sociais e e-mail marketing) e Folha Dirigida (peças para publicações impressas e digitais).",
          ],
          cases: [],
          focus: [
            "Conteúdo digital",
            "Redes sociais",
            "E-mail marketing",
            "Peças impressas e digitais",
          ],
          tools: [],
        },
      ] as AboutJob[],
    },
    skills: {
      title: "Competências",
      // Optional subtitle beside the title; nothing renders while it is null
      lead: "A prática por trás dos projetos." as string | null,
      groups: [
        {
          title: "Descoberta e decisão",
          items: [
            "Entrevistas, testes de usabilidade e feedback de clientes para entender o problema antes de desenhar.",
            "Métricas de negócio e de produto (aquisição, conversão, NPS, churn e LTV), com análise no Mixpanel e testes A/B.",
            "Priorização com Produto e Engenharia, por desejabilidade × viabilidade, documentando o que fica para depois.",
            "Acompanhamento pós-lançamento junto ao suporte, para entender como a solução foi recebida.",
            "Fluxo com IA para consolidar dados brutos de pesquisa, com fidelidade aos dados e cuidado com informações sensíveis.",
          ],
        },
        {
          title: "Design e sistemas",
          items: [
            "Fluxos, arquitetura de informação e prototipação para web responsiva, do wireframe ao handoff.",
            "Design System: criação e evolução de componentes e padrões, aproveitando o que existe para evitar customizações.",
            "UX Writing e acessibilidade, incluindo o projeto de menu e footer da XP com leitores de tela.",
            "Parceria com Produto e Engenharia desde a descoberta; participo de design reviews, critiques e entrevistas de contratação.",
            "IA em desk research, benchmark e prototipação, para apoiar discussões, geração de ideias e validações.",
          ],
        },
      ],
    },
    education: {
      title: "Formação e certificações",
      academicLabel: "Formação acadêmica",
      // One fact per line: degree, institution, period
      academic: [
        "Bacharelado em Design Gráfico",
        "Centro Universitário Carioca",
        "2014 – 2017",
      ],
      languagesLabel: "Idiomas",
      // TODO: confirm the year of the Cambridge certificate before showing it
      languages: [
        "Inglês profissional · Certificado Cambridge (C1)",
        "Espanhol básico",
      ],
      coursesLabel: "Cursos e certificações",
      courses: [
        {
          name: "Acessibilidade digital",
          institution: "Mergo Escola de Design",
          date: "2021",
        },
        {
          name: "Métricas de produto",
          institution: "Product Arena",
          date: "2020",
        },
        { name: "UX Design", institution: "Alura", date: "2017" },
      ] as Course[],
    },
  },
  contact: {
    titleStart: "Vamos conversar sobre",
    titleHighlight: "produto e design.",
    linkedin: { label: "LinkedIn", value: "in/renaataalves" },
    email: { label: "E-mail" },
    cookies: "Preferências de cookies",
    backToTop: "Voltar ao topo",
    copyright: "© 2026 Renata Alves",
  },
}

export type Dictionary = typeof pt

export default pt
