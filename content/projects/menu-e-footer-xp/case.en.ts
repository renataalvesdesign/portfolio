import { defineCase } from "@/lib/projects/schema"
import siteAntigo from "./images/site-antigo.png"
import estruturaAntiga from "./images/estrutura-antiga.png"
import treeTestingTarefa1 from "./images/tree-testing-tarefa-1.png"
import sitemapFinal from "./images/sitemap-final.png"
import menuDesktop from "./images/menu-desktop.png"
import menuMobile from "./images/menu-mobile.png"
import rodapeDesktop from "./images/rodape-desktop.png"
import rodapeMobile from "./images/rodape-mobile.png"

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
          text: "XP was no longer just a brokerage. With the launch of the credit card and the digital account, the site began promoting these products, and new topics started to emerge: international account, cryptocurrencies, foreign exchange, among others. The products themselves were not the problem. The problem was the **site structure**: it had been designed for an investment brokerage and could not properly accommodate the new portfolio.",
        },
        {
          type: "figure",
          figure: {
            image: siteAntigo,
            label: "Old XP site",
            alt: "Old XP site with a dark top menu and the “Investments” category open",
          },
          caption:
            "Old XP site with a dark top menu. The “Investments” category is open and shows options such as products, stocks, investment funds, fixed income, credit card, and digital account.",
        },
        {
          type: "p",
          text: "In parallel, the repositioning from brokerage to bank brought a request from the legal team. Some footer items needed to be adjusted, and new information became mandatory.",
        },
        {
          type: "p",
          text: "There would be two one-off deliveries: creating new pages and adjusting the footer. But the team saw a bigger opportunity in them. Instead of fitting more items into a structure that no longer worked, we decided to use these demands to **rethink the site's navigation entirely**, aligning it with XP's new positioning and preparing it to grow along with the portfolio.",
        },
      ],
    },
    {
      title: "Goals",
      id: "objetivo",
      blocks: [
        {
          type: "list",
          items: [
            "Reorganize the site structure so people could find products and services more easily.",
            "Create a scalable architecture, able to absorb the products that were coming (XP International, cryptocurrencies, foreign exchange, and credit) without another restructuring.",
            "Give balanced visibility to the entire portfolio, not just investment products.",
            "Meet the legal requirements resulting from the new bank positioning.",
          ],
        },
        {
          type: "quote",
          text: "Core hypothesis: people could not find their way around the site because of how the content was organized.",
        },
      ],
    },
    {
      title: "Research",
      id: "pesquisa",
      blocks: [
        { type: "h3", text: "Structure audit" },
        {
          type: "p",
          text: "The starting point was a complete mapping of the existing structure. A first cleanup had already been done during the new product page projects, but the menu was still extensive and not very cohesive. There were six first-level items (About XP, Start investing, Investments, Content, Business, and Support), with sublevels that mixed topics.",
        },
        {
          type: "figure",
          figure: {
            image: estruturaAntiga,
            label: "Old structure",
            alt: "Information architecture map of the old XP site, with six main categories and several sublevels",
          },
          caption:
            "Information architecture map of the old XP site, with six main categories: About XP, Start investing, Investments, Content, Business, and Support, each with several sublevels of products, services, and institutional information.",
        },
        {
          type: "p",
          text: "The mapping revealed four groups of items with overlap or questionable placement:",
        },
        {
          type: "list",
          items: [
            "**“How XP advisory works” and “How XP serves you”:** two pages about advisory, with little difference between them.",
            "**“Fund transfers” and “Investment portability”:** they were under “Start investing”, even though they are operational questions.",
            "**“Remunerated custody”, “Leverage”, and “RLP”:** equities pages under “Trade on the stock exchange”.",
            "**“XP Tour” and “Talk to Guilherme”:** institutional items with an unclear purpose within “About XP”.",
          ],
        },
        {
          type: "p",
          text: "The Content category also repeated, on its second level, the same product names that already existed under Investments, such as Stocks, Investment funds, Fixed income, and COE.",
        },
        {
          type: "p",
          text: "Another issue was that everything product-related sat under “Investments”, including the credit card, digital account, and insurance. There was no logical place for the new products about to be launched.",
        },
        { type: "h3", text: "Access data (Google Analytics)" },
        {
          type: "p",
          text: "Analysis of page accesses coming from the menu:",
        },
        {
          type: "comparison",
          columns: ["Rank", "Most visited", "Least visited"],
          rows: [
            ["1st", "Investment funds", "RLP"],
            ["2nd", "Support", "Politics (Content, level 2)"],
            ["3rd", "Private pension", "XP Tour"],
            ["4th", "Fixed income", "Social projects"],
            ["5th", "Investment simulator", "Remunerated custody"],
          ],
        },
        { type: "h3", text: "Acquisition funnel data" },
        {
          type: "p",
          text: "The pages were also cross-referenced with funnel data (Lead Intent, Lead Start, and Lead Complete) to understand the weight of each one in customer acquisition. Some pages exist to fulfill institutional or help roles, but the question was whether all of them actually needed to remain on the site.",
        },
        { type: "p", text: "Three findings stood out:" },
        {
          type: "list",
          ordered: true,
          items: [
            "The two advisory pages had little difference between them, and that difference did not seem clear to the customer.",
            "The equities pages (Leverage, Remunerated custody, and RLP) had low conversion volume and little content.",
            "Portability had significant numbers, even though it sat in an unclear category. The hypothesis was that it would perform better in a more intuitive place.",
          ],
        },
        { type: "h3", text: "SEO support" },
        {
          type: "p",
          text: "The SEO team took part in analyzing the impact of removing pages and reducing links in the menu and footer. With this, the removals and adaptations were proposed without compromising the site's organic presence.",
        },
      ],
    },
    {
      title: "Ideation",
      id: "ideacao",
      blocks: [
        {
          type: "p",
          text: "The new structure was built from an **internal card sorting** with the PM, GPM, and Design Lead. The starting point was the knowledge already gathered: access and funnel data, the internal understanding of each page's purpose, and the positioning the bank wanted to achieve. From there, possibilities were eliminated and categories structured. The team's UX Writing supported the naming.",
        },
        { type: "p", text: "The proposal followed a few principles:" },
        {
          type: "list",
          items: [
            "**Group by user intent, not by org chart.** All products were placed under “Products and services”, divided into Products, Financial services, and Insurance and pension. This way, products not yet launched (international account, cryptocurrencies, foreign exchange, and credit) could go into the right sublevel without touching the first level.",
            "**Separate operational questions from products.** Operational costs, Fund transfers, and Portability left “Start investing” and were grouped with the Support center.",
            "**Organize institutional content into subgroups.** “About XP” was split into XP S.A., Our business, and Work with us.",
            "**Remove or consolidate pages with no relevance or justification to stay.** Gone were XP Tour, Talk to Guilherme, RLP, Leverage, and Remunerated custody, which had low traffic or low conversion, as well as XP Inc., an outdated and unmaintained page, and Careers. The two advisory pages were merged.",
            "**Simplify Content**, eliminating the repetition of product categories and reducing it to three entries: Blog, Investment recommendations, and Expert event.",
          ],
        },
      ],
    },
    {
      title: "Validation",
      id: "validacao",
      blocks: [
        {
          type: "p",
          text: "To validate the proposal without interference from visuals, the structure went through a **Tree Test** in Maze with people from XP's customer base. We ran two tests with about **200 responses each**:",
        },
        {
          type: "list",
          items: [
            "**Test 1:** the menu structure in production at the time.",
            "**Test 2:** the proposed structure.",
          ],
        },
        {
          type: "p",
          text: "Each test had three tasks, followed by a question about perceived difficulty.",
        },
        { type: "h3", text: "Task 1: find all of XP's investment options" },
        {
          type: "p",
          text: "In test 1, the most chosen path and page were the correct ones, but the responses were scattered. Some people reached the right page through incorrect paths, and “About XP” and “Start investing” were frequent starting points (35 and 17 times, respectively).",
        },
        {
          type: "p",
          text: "In test 2, the most chosen path was also the correct one, but with much more concentrated responses. The total number of paths decreased, and fewer people reached the right page through indirect paths. “About XP” still appeared as a starting point about 36 times, which indicates that the name still attracted part of the audience looking to understand the company's offering.",
        },
        {
          type: "figure",
          figure: {
            image: treeTestingTarefa1,
            label: "Task 1: test 1 vs. test 2",
            alt: "Comparison of the task 1 paths in the Tree Test between the old structure and the proposal",
          },
          caption:
            "**Task 1 comparison in the Tree Test:** the old structure (left) spread the options across “About XP”, “Start investing”, “Investments”, and “Content”. In the proposal (right), “Products and services” organizes the search for investments more directly.",
        },
        { type: "h3", text: "Task 2: find the XP Credit Card" },
        {
          type: "p",
          text: "Here the difference was clearer. In test 1, the most chosen path **was not the correct one**. People took **97 different paths**, none with more than 5% of responses, and many looked in institutional and content options.",
        },
        {
          type: "p",
          text: "In test 2, the most chosen path **was the correct one**. The number of paths dropped by **about 43%**, and the three most followed paths started at “Products and services”, the correct level 1.",
        },
        { type: "h3", text: "Task 3: find information about investment funds" },
        {
          type: "p",
          text: "Results were similar in both tests. Both led to the correct page and path, with the same number of paths and only variation in the percentages.",
        },
        { type: "h3", text: "Overall result" },
        {
          type: "stats",
          items: [
            { value: "20–46%", label: "Success rate per task · test 1" },
            { value: "38–60%", label: "Success rate per task · test 2" },
          ],
        },
        { type: "h3", text: "Post-test adjustment" },
        {
          type: "p",
          text: "After validation, the structure went through a final refinement. Everything that was help content, including the former “Support”, was moved under **“Get your questions answered”**. The name is more intuitive and creates a scalable space for new support content.",
        },
      ],
    },
    {
      title: "Results",
      id: "resultados",
      blocks: [
        { type: "h3", text: "What was delivered" },
        {
          type: "list",
          items: [
            "**New sitemap**, with five first-level items: About XP, Products and services, Content, Business, and Get your questions answered.",
            "**Desktop menu (1440px)**, with a mega menu organized by groups and the “Access your account” and “Open your account” shortcuts always visible.",
            "**Mobile menu (320px)**, with layered navigation and a “Back” button, keeping the same groupings as desktop.",
            "**New footer (desktop and mobile):** even after the restructuring, the tree still had many items. A benchmark of bank and e-commerce sites, chosen because they deal with complex structures, showed how they divided navigation and which items they prioritized. With SEO's support, it became clear that the footer does not need to replicate the entire tree, but rather include the most important pages. The new footer began to prioritize Products and services, Get your questions answered, Support (CVM, RMP, and Ombudsman), and contact channels, plus the legal information required by the new positioning. On mobile, the sections became accordions.",
            "**Group standard:** the menu and footer components were built, documented, and submitted for approval by the Design Ops team, which incorporated them into the design system. The same structure was applied to the Rico and Clear sites.",
          ],
        },
        {
          type: "p",
          text: "The menu and footer were built in WordPress, with the front end prepared to respond to changes made in the admin area. The development team had design support from handoff to delivery.",
        },
        {
          type: "figure",
          figure: {
            image: sitemapFinal,
            label: "New sitemap",
            alt: "Information architecture map of the new XP site, with five main categories",
          },
          caption:
            "Final sitemap of the new XP site information architecture, organized into five main categories: About XP, Products and services, Content, Business, and Get your questions answered. The structure groups products, financial services, insurance, and support content according to users' needs.",
        },
        { type: "h3", text: "Impact" },
        {
          type: "p",
          text: "**Greater focus on products and services** in the first months after delivery:",
        },
        {
          type: "stats",
          items: [
            { value: "+350%", label: "Clicks on the product showcase" },
            { value: "+239%", label: "Clicks on digital account" },
            { value: "+184%", label: "Clicks on credit card" },
          ],
        },
        { type: "p", text: "**Other gains:**" },
        {
          type: "list",
          items: [
            "**Proven scalability:** the structure left the XP site and became the basis for other brands in the group.",
            "**Balanced visibility:** smaller products gained prominence, better dividing attention across the entire portfolio.",
            "**Team autonomy:** non-developers began updating the menu and footer directly in WordPress.",
            "**Agility:** changes began to happen in real time. Previously, each change required a GMUD (change management request).",
            "**Accessibility:** the new menu now works with screen readers and is fully responsive.",
          ],
        },
        {
          type: "figure",
          figure: {
            image: menuDesktop,
            label: "Desktop menu",
            alt: "XP desktop menu with the “Products and services” section expanded",
          },
          caption:
            "XP desktop menu with the “Products and services” section expanded, organized into Products, Financial services, and Insurance and pension.",
        },
        {
          type: "figure",
          figure: {
            image: menuMobile,
            label: "Mobile menu",
            alt: "XP mobile menu in four navigation states",
          },
          caption:
            "XP mobile menu in four navigation states: opening the menu, accessing the main categories, exploring “About XP”, and browsing “Content”, keeping the “Access your account” and “Open your account” shortcuts visible.",
        },
        {
          type: "figure",
          figure: {
            image: rodapeDesktop,
            label: "Desktop footer",
            alt: "XP site desktop footer with the “Products and services”, “Get your questions answered”, and “Contact us” sections",
          },
          caption:
            "XP site desktop footer, organized into the sections “Products and services”, “Get your questions answered”, and “Contact us”. The area also gathers institutional and legal links, regulatory information, company address, and options to download the app.",
        },
        {
          type: "figure",
          figure: {
            image: rodapeMobile,
            label: "Mobile footer",
            alt: "XP mobile footer in three states",
          },
          caption:
            "XP mobile footer in three states: collapsed sections, legal and institutional information highlighted, and the “Products and services” category expanded with links to investment options.",
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
            "**Research and diagnosis:** I mapped the existing structure, identified overlaps and misplaced items, and cross-referenced access data (Google Analytics) and acquisition funnel data to understand the role of each page. I also conducted the benchmark of footers on bank and e-commerce sites.",
            "**Information architecture:** I facilitated the internal card sorting with the PM, GPM, and Design Lead to define the new structure, with UX Writing support on naming and SEO support in evaluating removals.",
            "**Validation:** I planned and analyzed two Tree Tests in Maze with XP customers, with around 200 responses each, comparing the current structure with the proposed one.",
            "**UI and responsiveness:** I designed the new menu and footer for desktop and mobile, considering accessibility and screen reader compatibility.",
            "**Design system:** I built and documented the menu and footer components and submitted them for approval by the Design Ops team. The structure became the group standard and was also applied to the Rico and Clear sites.",
            "**Alignment and delivery:** I supported the PM in decisions about content removal and restructuring and followed the development team from handoff to implementation.",
          ],
        },
        {
          type: "p",
          text: "This project allowed me to turn a business repositioning into a navigation structure validated with data and scalable to other brands in the group.",
        },
      ],
    },
  ],
})
