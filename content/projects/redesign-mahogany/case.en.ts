import { defineCase } from "@/lib/projects/schema"
import homeMobileMapa from "./images/home-mobile-mapa.png"
import produtoMobileMapa from "./images/produto-mobile-mapa.png"
import homeDesktopMapa from "./images/home-desktop-mapa.png"
import produtoDesktopMapa from "./images/produto-desktop-mapa.png"
import homeDesktop from "./images/home-desktop.jpg"
import homeDesktopContinuacao from "./images/home-desktop-continuacao.jpg"
import produtoDesktop from "./images/produto-desktop.jpg"
import produtoMobile from "./images/produto-mobile.jpg"

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
          text: "**Mahogany** is a cosmetics brand with more than 26 years of history, recognized for its strong commitment to innovation, quality, beauty, and results. Its audience is mainly women aged 25 and over, who love parties and enjoy hosting friends at home or going out. They are always looking for a reason to celebrate and have fun. She is a woman who wants to take care of herself, feel beautiful, and be ready for any occasion.",
        },
        {
          type: "p",
          text: "This project was the **redesign of Mahogany's e-commerce site**. We followed a *mobile first* approach: all screens were designed for mobile first and then adapted to desktop. The goal was to generate positive results for the online store by solving the usability problems identified in the previous version of the site.",
        },
      ],
    },
    {
      title: "Research",
      id: "pesquisa",
      blocks: [
        {
          type: "p",
          text: "Analyzing user behavior on the current site gave us a baseline to guide the redesign. It was essential to understand the existing scenario in order to propose improvements whose impact on user behavior could be measured after implementation.",
        },
        {
          type: "p",
          text: "The analysis used behavior data collected between January 1 and September 1, 2018. That period gathered a significant volume of information, which allowed a more precise and well-grounded approach.",
        },
        {
          type: "p",
          text: "The data showed that **mobile devices** accounted for **most of the visits in the analyzed period**. **Desktop represented 34% of visits**, which still makes this segment relevant. However, the share of completed transactions on mobile dropped, while the conversion rate on desktop increased.",
        },
        {
          type: "p",
          text: "The analysis compared behavior on mobile and desktop, on both the home page and the product page. The results helped identify content relevance, navigation flow, and areas with potential for performance improvement.",
        },
        { type: "h3", text: "Home page" },
        {
          type: "list",
          items: [
            "**50% of mobile users** scroll all the way to the footer. On **desktop**, clicks are concentrated mainly above the fold.",
            "On **mobile**, clicks are concentrated on the menu, the search, and the main banner. On **desktop**, banners, second-row carousels, and lead capture areas have low interaction.",
            "The **desktop home page** shows a significant drop in the navigation flow between the header and the last product shelf. This indicates the need to evaluate the impact of these sections.",
          ],
        },
        {
          type: "figure",
          figure: {
            image: homeMobileMapa,
            label: "Mobile home: clicks and scroll",
            alt: "Click and scroll map of the mobile home page with the main interaction zones",
          },
          caption:
            "Click and scroll map of the mobile home page, highlighting the main interaction zones.",
        },
        { type: "h3", text: "Product page" },
        {
          type: "list",
          items: [
            "On **mobile**, users interact more above the fold. Even so, they scroll the page, and clicks are distributed along it.",
            "**Price and the buy button do not appear above the fold** on mobile, which can create friction and affect the conversion rate.",
            "On **desktop**, navigation on the product page is more distributed: 50% of users reach the related products shelf.",
            "On both devices, clicks on the product page are concentrated above the fold. Still, desktop users interact more with the lower sections, which shows high content relevance.",
          ],
        },
        {
          type: "figure",
          figure: {
            image: produtoMobileMapa,
            label: "Mobile product page: interaction",
            alt: "Interaction data on the mobile product page with the areas of highest engagement and scroll depth",
          },
          caption:
            "Interaction data on the mobile product page, with the areas of highest engagement and scroll depth.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: homeDesktopMapa,
              label: "Desktop home: clicks and scroll",
              alt: "Click and scroll patterns on the desktop home page",
            },
            {
              image: produtoDesktopMapa,
              label: "Desktop product page: behavior",
              alt: "Desktop user behavior on the product page, with navigation flow and content relevance",
            },
          ],
          caption:
            "On the left, click and scroll patterns on the desktop home page, used to identify low-visibility areas and points of highest engagement. On the right, analysis of desktop user behavior on the product page, with navigation flow and content relevance.",
        },
        { type: "h3", text: "Conclusions" },
        {
          type: "p",
          text: "Based on the site analysis data, combined with the insights aligned with the client, we reached the following conclusions:",
        },
        {
          type: "list",
          items: [
            "**Mobile should be prioritized**, as it represents the biggest opportunity to increase the conversion rate.",
            "On the mobile home page, users scroll through all sections but concentrate their actions at the top of the page.",
            "Price and the buy button do not appear above the fold on mobile. This forces users to scroll to access these essential elements.",
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
          text: "To reinforce Mahogany's identity and ensure visual consistency, we built the design from the main color palette provided by the client. We prioritized *Brandon Grotesque*, the brand's institutional typeface, used across all its marketing materials. It was reserved mainly for headlines and highlighted text, to maintain brand recognition and convey elegance and modernity.",
        },
        {
          type: "p",
          text: "For body text, we chose *Open Sans*. It complements *Brandon Grotesque* and improves legibility. As a widely supported Google Font, it also contributes to faster page loading. The combination ensures harmonious, clear, and pleasant reading on all devices.",
        },
        {
          type: "p",
          text: "Together, these typographic choices preserve Mahogany's identity while optimizing usability and performance, **ensuring a site that is both beautiful and functional**.",
        },
      ],
    },
    {
      title: "Delivery",
      id: "entrega",
      blocks: [
        {
          type: "p",
          text: "The project involved a complete redesign of Mahogany's e-commerce experience. We delivered new layouts for the home page, product pages, category pages, and institutional pages, all implemented on the **VTEX** platform. The design system was built modularly, so the client could update or rearrange components as needed.",
        },
        { type: "h3", text: "Homepage" },
        {
          type: "p",
          text: "**We reduced the size of the main banner and simplified the product shelves.** The decision came from the behavior data and from the insight that the shelves often did not match users' expectations.",
        },
        {
          type: "p",
          text: "In their place, we created a visually appealing solution with **shortcut banners**, which highlight the main categories and promotions. The goal of the change was to guide users more efficiently and increase engagement.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: homeDesktop,
              label: "Desktop homepage: top",
              alt: "Mahogany desktop homepage with a promotional banner, new arrivals showcase, and category shortcuts",
            },
            {
              image: homeDesktopContinuacao,
              label: "Desktop homepage: continued",
              alt: "Continuation of the Mahogany desktop homepage with category shortcuts, reseller area, Instagram, and footer",
            },
          ],
          caption:
            "Mahogany desktop homepage. On the left, a featured promotional banner, a showcase of new arrivals, and shortcuts to categories such as perfumery, special kits, and makeup. On the right, the continuation, with shortcuts to beauty categories, a reseller area, Instagram updates, and institutional information in the footer.",
        },
        { type: "h3", text: "Product page" },
        {
          type: "p",
          text: "To improve the shopping experience, we included **a fixed “Buy” button that stays visible while the user scrolls the page**. We also reduced the size of the product image, which allowed the price to be displayed above the fold. This way, users now see the essential purchase information right away, without having to scroll.",
        },
        {
          type: "figurePair",
          widths: [1.35, 1],
          figures: [
            {
              image: produtoDesktop,
              label: "Desktop product page",
              alt: "Mahogany desktop product page with color selection, price, buy button, reviews, and related products",
            },
            {
              image: produtoMobile,
              label: "Mobile product page",
              alt: "Mahogany mobile product page with the “Buy” button fixed at the bottom of the screen",
            },
          ],
          caption:
            "Mahogany product page. On the left, on desktop, product information, color selection, price, buy button, reviews, and related products. On the right, on mobile, the “Buy” button fixed at the bottom of the screen.",
        },
        {
          type: "p",
          text: "By basing the redesign on behavior data and on close alignment with the brand identity, we delivered not only a new interface but a more meaningful and efficient shopping experience. The result is a **scalable e-commerce solution** that balances **visual appeal, usability, and performance**.",
        },
      ],
    },
    {
      title: "My role",
      id: "minha-atuacao",
      blocks: [
        {
          type: "p",
          text: "As the **designer responsible for the delivery**, I worked from kickoff to final delivery, across three main fronts:",
        },
        {
          type: "list",
          items: [
            "**Client and alignment:** I took part in alignment meetings with the client, including the presentation of the medium-fidelity wireframes and the final high-fidelity proposal.",
            "**Partnership and strategy:** I worked with the project manager to apply e-commerce best practices, balancing business goals and stakeholder expectations.",
            "**Technical alignment:** I collaborated with development to understand platform limitations and ensure solutions that were feasible to implement.",
          ],
        },
        {
          type: "p",
          text: "The project required **collaboration and adaptability** to balance client needs, technical constraints, and a user-centered approach.",
        },
      ],
    },
  ],
})
