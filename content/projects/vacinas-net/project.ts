import { defineProject } from "@/lib/projects/schema"
import body from "./case"
import bodyEn from "./case.en"
import cover from "./images/capa.png"

export default defineProject({
  slug: "vacinas-net",
  order: 4,
  group: "ecommerce",
  company: "Profit-e E-commerce Solutions",
  year: "2018",
  cover,
  body: { pt: body, en: bodyEn },
  text: {
    pt: {
      title: "Vacinas.net: Loja online de vacinas",
      summary:
        "Vacina não se compra como qualquer produto: a decisão depende mais de confiança do que de preço. Em um Design Sprint com o cliente, chegamos a uma navegação pelo calendário vacinal e a uma página de produto que responde às dúvidas antes de vender.",
      roleSummary:
        "Designer no time de projeto, da descoberta à entrega final · com Design Lead e UI Designer sênior",
      tags: ["Design Sprint", "Arquitetura de informação", "Prototipação"],
      skills: [
        "Benchmark",
        "Priorização",
        "Fluxos de usuário",
        "Wireframes",
        "Teste de usabilidade",
        "Design responsivo",
      ],
      coverAlt: "Vacinas.net: Loja online de vacinas — imagem do projeto",
    },
    en: {
      title: "Vacinas.net: Online Vaccine Store",
      summary:
        "Vaccines aren’t bought like any other product: the decision depends more on trust than on price. In a Design Sprint with the client, we arrived at navigation built around the vaccination schedule and a product page that answers questions before it sells.",
      roleSummary:
        "Designer on the project team, from discovery to final delivery · with Design Lead and Senior UI Designer",
      tags: ["Design Sprint", "Information architecture", "Prototyping"],
      skills: [
        "Benchmarking",
        "Prioritization",
        "User flows",
        "Wireframes",
        "Usability testing",
        "Responsive design",
      ],
      coverAlt: "Vacinas.net: Online Vaccine Store — project image",
    },
  },
})
