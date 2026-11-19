import { defineCase } from "@/lib/projects/schema"
import dinamicaCliente from "./images/dinamica-cliente.jpg"
import quadroSprint from "./images/quadro-sprint.jpg"
import rascunhosIdeacao from "./images/rascunhos-ideacao.jpg"
import esbocosTelas from "./images/esbocos-telas.jpg"
import prototipo from "./images/prototipo.png"
import homeMobile from "./images/home-mobile.png"
import homeMobileAtalhos from "./images/home-mobile-atalhos.png"
import fluxoDescoberta from "./images/fluxo-descoberta.png"
import homeDesktop from "./images/home-desktop.png"

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
          text: "**Prophylaxis®**, one of the largest vaccination clinic networks in Brazil, wanted to expand the business into digital with an online store. The main catalog would be vaccines, complemented by rapid tests and childcare items, such as cribs and strollers.",
        },
        {
          type: "p",
          text: "The core challenge was the nature of the product. A vaccine is not sold like clothing, cosmetics, or electronics: it is a health item, involves questions, recommendations by age and profile, and depends on the trust of the buyer, often purchasing for a child.",
        },
        {
          type: "quote",
          text: "The store needed to make buying easy without trivializing the product, and to communicate transparency at every step.",
        },
        {
          type: "p",
          text: "With a lean team and a short deadline, the project adopted an adaptation of the **4-day Design Sprint** (AJ&Smart) to speed up alignment with the client and quickly reach a testable prototype.",
        },
      ],
    },
    {
      title: "Research",
      id: "pesquisa",
      blocks: [
        {
          type: "p",
          text: "The starting point was an alignment session with the client to turn assumptions into questions. Each participant summed up in one sentence the business vision for the next year (*Long Term Goal*), and from those visions the risks that could prevent it from coming true were raised. The “How might we...” exercise helped map the problems, group them by theme, and prioritize them by complexity.",
        },
        {
          type: "p",
          text: "In parallel, personas built from desk research and references were refined with the client's knowledge of the clinics' audience. They highlighted very different profiles using the same store: mothers and fathers organizing their children's vaccination schedule, adults looking for a specific vaccine, travelers.",
        },
        {
          type: "p",
          text: "Broad benchmarking (*Lightning Demos*) completed the stage, looking at both direct competitors and other segments that already solved similar problems well, such as online pharmacies, service marketplaces, and digital health systems.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: dinamicaCliente,
              label: "In-person session with the client",
              alt: "In-person session with the client, with maps, sticky notes, and prototypes pinned to a whiteboard",
            },
            {
              image: quadroSprint,
              label: "Design Sprint board",
              alt: "Design Sprint whiteboard with personas, “How might we...?” questions, benchmarking references, and sketches",
            },
          ],
          caption:
            "On the left, the in-person session with the client, with maps, sticky notes, and prototypes pinned to a whiteboard during a collaborative ideation session. On the right, the Design Sprint board, with personas, “How might we...?” questions, benchmarking references, and prototype sketches.",
        },
        {
          type: "p",
          text: "This stage produced the principles that guided the project:",
        },
        {
          type: "list",
          items: [
            "Many people do not know the name of the vaccine they need, but they know who they are buying for. Therefore, **navigation had to start from the user's profile**, not just the product.",
            "The purchase decision depends more on safety than on price. **Technical information and credibility signals needed to be visible before purchase**, not hidden.",
          ],
        },
      ],
    },
    {
      title: "Ideation",
      id: "ideacao",
      blocks: [
        {
          type: "p",
          text: "With the problems prioritized, the focus fell on the two points with the most obstacles: discovering the right vaccine for each profile and trust at the moment of purchase. The **Crazy Eights** technique generated quick alternatives on paper, which were discussed in light of the research principles until the most promising solutions were selected.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: rascunhosIdeacao,
              label: "Ideation session drafts",
              alt: "Whiteboard with screen drafts, sticky notes, and notes about the online vaccine store prototype",
            },
            {
              image: esbocosTelas,
              label: "Screen sketches",
              alt: "Whiteboard with screen sketches for the store: home page, nearby clinics, and related content",
            },
          ],
          caption:
            "On the left, screen drafts, sticky notes, and notes about the prototype, including recommendations and featured products on the home page. On the right, home page sketches with search, categories by age group, and featured products, plus screens for nearby clinics and related content.",
        },
        { type: "p", text: "Two decisions stood out:" },
        { type: "h3", text: "Navigation by vaccination schedule" },
        {
          type: "p",
          text: "Instead of organizing the catalog like a product shelf, navigation follows the logic of the vaccination schedule, which is already the reference for those looking after their own health or their family's. Departments were divided by profile: children, adolescents, adults, 65+, pregnant women, and travelers, plus an entry by disease for those who already know what they want to protect themselves from. Within departments, an **age filter** became essential, especially for children, where recommendations change every few months.",
        },
        { type: "h3", text: "A product page that answers before it sells" },
        {
          type: "p",
          text: "The product page was treated as the main trust-building point. It brings together everything a person needs to decide with confidence, from what the vaccine prevents to the package insert, and gained a space for video or image, opening the way for explanatory content about the product.",
        },
        {
          type: "p",
          text: "These solutions gave rise to a **high-fidelity prototype**, tested with agency employees who were not part of the project to gather first feedback and initial corrections before delivery to the client. Prophylaxis®'s participation throughout the process shortened the path: the direction was validated together, and the project ended with a map of what could evolve in future phases.",
        },
        {
          type: "figure",
          figure: {
            image: prototipo,
            label: "High-fidelity prototype",
            alt: "High-fidelity prototype of vacinas.net with navigation by profile, vaccination schedule, product pages, and scheduling",
          },
          caption:
            "High-fidelity prototype of vacinas.net, with screens for navigation by profile and vaccination schedule, selection of children's vaccines, product pages, and scheduling at clinics.",
        },
      ],
    },
    {
      title: "Delivery",
      id: "entrega",
      blocks: [
        {
          type: "p",
          text: "After validation with the client, the store's complete architecture was structured.",
        },
        {
          type: "p",
          text: "Vacinas.net was designed *mobile first* and developed as a **PWA** (Progressive Web App): a website that looks and behaves like an app. The choice brought the fluidity of a native app without requiring a download, and opened the door to features such as notifications, which fit naturally in a vaccination product, where booster doses and upcoming steps of the schedule are part of the journey.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: homeMobile,
              label: "Mobile home: search and profiles",
              alt: "Vacinas.net mobile home screen with vaccine search and categories by profile",
            },
            {
              image: homeMobileAtalhos,
              label: "Mobile home: shortcuts and content",
              alt: "Vacinas.net mobile home screen with shortcuts by profile, clinic search by ZIP code, and educational content",
            },
          ],
          caption:
            "Vacinas.net mobile home screen: on the left, vaccine search, categories by profile (children, adolescents, adults, and 65+), and access to search by vaccine-preventable diseases; on the right, shortcuts to find vaccines by profile and need, search clinics by ZIP code, access educational content, and discover other health products.",
        },
        {
          type: "figure",
          figure: {
            image: fluxoDescoberta,
            label: "Vaccine discovery flow",
            alt: "Vaccine discovery flow by profile, age, and disease",
          },
          caption:
            "Vaccine discovery flow: the person chooses the profile (children, adolescent, adult, or 65+), enters their age, and accesses recommendations by age group or by disease.",
        },
        {
          type: "p",
          text: "With the UI designer's departure, the remaining screens were rolled out from the visual concept already established, extending its patterns to all pages. The final stage took the project to desktop, with the challenge of preserving the visual line built on mobile while taking advantage of the extra space for comfortable navigation on larger screens.",
        },
        {
          type: "figure",
          figure: {
            image: homeDesktop,
            label: "Desktop home",
            alt: "Vacinas.net desktop home screen with category navigation and vaccine search",
          },
          caption:
            "Vacinas.net desktop home screen, with category navigation, vaccine search, and shortcuts to find recommendations by profile or by disease.",
        },
      ],
    },
    {
      title: "My role",
      id: "minha-atuacao",
      blocks: [
        {
          type: "p",
          text: "As a **junior designer at the time**, I worked from discovery through final delivery alongside the design lead and a senior UI designer, focusing on:",
        },
        {
          type: "list",
          items: [
            "**Research:** I took part in the Design Sprint exercises with the client (*Long Term Goal* and “How might we...”) and collaborated on building the personas and the market benchmarking that informed the project's decisions.",
            "**Information architecture:** I supported structuring the store's navigation around the vaccination schedule, with departments by profile, an age filter, and a product page designed to convey confidence in the purchase.",
            "**Ideation and prototyping:** I contributed to generating alternatives with Crazy Eights, evolved solutions from paper wireframes into high-fidelity screens, and helped assemble the prototype used in internal tests.",
            "**Interface rollout:** when the UI designer left, I took over, with the design lead's support, the continuation of the screens, extending the visual concept already created to the remaining pages, in a mobile first approach, and adapting the experience to desktop.",
          ],
        },
        {
          type: "p",
          text: "The project was my first hands-on contact with the Design Sprint and gave me the opportunity to take on more responsibility throughout the delivery, building a solid foundation in research, architecture, and interface.",
        },
      ],
    },
  ],
})
