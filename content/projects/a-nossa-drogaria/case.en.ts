import { defineCase } from "@/lib/projects/schema"
import lojasMarca from "./images/lojas-marca.jpg"
import homeDesktop from "./images/home-desktop.jpg"
import homeMobile from "./images/home-mobile.png"
import categoriaPrateleira from "./images/categoria-prateleira.jpg"
import categoriaAtalhos from "./images/categoria-atalhos.jpg"
import cardsProduto from "./images/cards-produto.png"

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
          text: "Founded in 1972 in Duque de Caxias, Rio de Janeiro, **A Nossa Drogaria** is an established pharmacy chain with more than 20 stores in Greater Rio.",
        },
        {
          type: "p",
          text: "The project was born from the company's ambition to expand its operation into digital. We followed a *mobile first* approach: all screens were designed for mobile first and then adapted to desktop layouts.",
        },
        {
          type: "p",
          text: "The main challenge was to create an **omnichannel e-commerce experience**, connecting online and offline touchpoints seamlessly to deliver a consistent, high-quality experience. The strategy started from two points. The first was the communication and close relationship the brand already had with customers in its physical stores. The second was the commitment to maintain that same level of quality when moving to digital.",
        },
      ],
    },
    {
      title: "Research",
      id: "pesquisa",
      blocks: [
        {
          type: "p",
          text: "Since the brand had a strong, established offline presence, the client needed to maintain a **unified brand experience across all channels**. To do this, we conducted **field research** in several physical stores. We observed how products were displayed, how visual communication was applied, and how the relationship with customers played out at the point of sale.",
        },
        {
          type: "p",
          text: "During the visits, we also gathered a range of printed, institutional, and point-of-sale materials. Together with the brand's visual identity manual that we had at hand, these materials helped us understand the visual and experience principles that guided the brand's communication.",
        },
        {
          type: "figure",
          figure: {
            image: lojasMarca,
            label: "Stores and brand identity",
            alt: "Collage of two photos of A Nossa Drogaria stores and the brand's multicolored logo",
          },
          caption:
            "Collage of two photos of A Nossa Drogaria stores and the brand's multicolored logo, in a predominantly yellow and blue composition.",
        },
        {
          type: "p",
          text: "In addition, we **benchmarked the leading online pharmacies** to identify best practices and industry-specific market standards. Pharmacy e-commerce sites follow design patterns of their own compared to other segments, such as larger areas for promotional banners, more robust navigation structures, and extensive product shelves. We used these patterns as core references in designing the digital experience.",
        },
      ],
    },
    {
      title: "Ideation",
      id: "ideacao",
      blocks: [
        {
          type: "p",
          text: "The site's visual foundation was built from the brand materials provided by the client. Yellow was the brand's main highlight color, but in digital its use hurt legibility and created a negative visual impact.",
        },
        {
          type: "p",
          text: "To solve this, we adopted a shade of blue as the interface's main color. Yellow was reserved for smaller details, such as action buttons, checkboxes, and highlighted text in the pre-header.",
        },
        {
          type: "quote",
          text: "This adjustment preserved brand recognition while improving contrast and accessibility.",
        },
        {
          type: "p",
          text: "For typography, we chose **Roboto** for all the site's text. Its clean lines, balanced proportions, and friendly curves matched the brand's personality, ensuring legibility and a cohesive visual tone.",
        },
      ],
    },
    {
      title: "Delivery",
      id: "entrega",
      blocks: [
        {
          type: "p",
          text: "We delivered layouts for all the main pages of an e-commerce site: home, product pages, category pages, and institutional pages, all implemented on the **VTEX** platform. The design system was built modularly, so the client could update or rearrange components as needed.",
        },
        { type: "h3", text: "Homepage" },
        {
          type: "p",
          text: "The home page was designed to be **clear and inviting**. Following SEO best practices, we included text areas strategically positioned and with the right terminology, to help the site perform better in search engines. We opted for a reduced number of product shelves, which ensures faster loading and reduces the cognitive overload caused by irrelevant products.",
        },
        {
          type: "p",
          text: "To improve product discovery, we created a **featured categories section**. In it, the client can highlight specific groups of products, such as best sellers or most searched.",
        },
        {
          type: "figurePair",
          widths: [2.6, 1],
          figures: [
            {
              image: homeDesktop,
              label: "Desktop homepage",
              alt: "A Nossa Drogaria desktop homepage with promotional banners, categories, and product showcases",
            },
            {
              image: homeMobile,
              label: "Mobile homepage",
              alt: "A Nossa Drogaria mobile homepage with search, banner, categories, and best sellers",
            },
          ],
          caption:
            "A Nossa Drogaria e-commerce homepage. On the left, on desktop, promotional banners, category navigation, and featured product showcases. On the right, on mobile, product search, promotional banner, category navigation, sign-up to receive offers, and a best sellers section.",
        },
        { type: "h3", text: "Category page" },
        {
          type: "p",
          text: "We delivered two layout variations for category pages. The first had a flexible product shelf, where the client could highlight collections such as best sellers or items on sale. For departments with many categories, we proposed a **shortcuts layout**, which guides the user through featured categories and improves navigation and product discovery.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: categoriaPrateleira,
              label: "Category with flexible shelf",
              alt: "Kids category with a baby products banner, best sellers section, and product showcase",
            },
            {
              image: categoriaAtalhos,
              label: "Category with shortcuts",
              alt: "Kids category with category shortcuts, filters, sorting, and a product grid",
            },
          ],
          caption:
            "The two variations of the Kids category. On the left, a promotional banner for baby products, a best sellers section, a category list, and a product showcase. On the right, category shortcuts, filters, sorting options, and a product grid with prices, discounts, free shipping, and “Buy” buttons.",
        },
        { type: "h3", text: "Product card" },
        {
          type: "p",
          text: "The product card interaction was designed to **simulate the physical store experience**, like taking an item off the shelf. When clicking “Buy”, the user saw a subtle animation and a brief confirmation message at the bottom of the screen, indicating that the item had been added to the cart or updated. The cart icon in the header was also updated in real time. This reinforced the action and maintained a sense of continuity throughout the shopping experience.",
        },
        {
          type: "figure",
          figure: {
            image: cardsProduto,
            label: "Product cards",
            alt: "Product card states when adding an item to the cart",
          },
          caption:
            "Product cards and the confirmation shown when adding an item to the cart.",
        },
      ],
    },
    {
      title: "My role",
      id: "minha-atuacao",
      blocks: [
        {
          type: "p",
          text: "As the **designer responsible for the delivery**, I worked from discovery through final delivery, focusing on:",
        },
        {
          type: "list",
          items: [
            "**Client and alignment:** I led alignment meetings and presentations at different stages, from medium-fidelity wireframes to final layouts.",
            "**Visual direction:** I defined the visual direction and the application of the brand identity in digital, considering accessibility and usability.",
            "**Partnership and strategy:** I worked with the project manager to translate business goals into design priorities and to manage expectations and scope.",
            "**Technical alignment:** I collaborated with development to understand platform limitations and ensure feasible solutions.",
          ],
        },
        {
          type: "p",
          text: "The project required **closeness to the client and a consultative role**, translating design concepts in an accessible way, explaining decisions, and building trust in the brand's new digital direction.",
        },
      ],
    },
  ],
})
