import { defineCase } from "@/lib/projects/schema"
import editorAntigo from "./images/editor-antigo.png"
import boardCritique from "./images/board-critique.png"
import editorFiltros from "./images/editor-filtros.png"
import duplicarGrupo from "./images/duplicar-grupo.png"
import cabecalhoEditor from "./images/cabecalho-editor.png"
import editorNovo from "./images/editor-novo.png"

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
          text: "Segmentation is the RD Marketing feature that lets users filter the contact base by criteria such as behavior, characteristics, and interaction history, in order to direct communications and campaigns to the right audience. It is one of the platform's most used features: according to 2024 Mixpanel data, it is the **third most visited page in the entire product**.",
        },
        {
          type: "figure",
          figure: {
            image: editorAntigo,
            label: "Old editor",
            alt: "Old lead segmentation editor in two states: empty, and with two groups of conditions and the results panel",
          },
          caption:
            "Old lead segmentation editor in two states: on the left, the empty editor; on the right, a segmentation with two groups of conditions and the results panel, which reports that no leads meet the criteria.",
        },
        {
          type: "p",
          text: "Despite this relevance, the editor was tied to a **legacy architecture** where **any change was costly**, which created a bottleneck:",
        },
        {
          type: "quote",
          text: "Customers frequently asked for new use cases, but the team struggled to deliver them.",
        },
        {
          type: "p",
          text: "The project was born from the convergence of two needs: engineering needed to restructure the editor to reduce that cost, and design wanted to bring the feature up to the product's current visual language and standards.",
        },
      ],
    },
    {
      title: "Goals",
      id: "objetivo",
      blocks: [
        { type: "p", text: "The project had three fronts:" },
        {
          type: "list",
          items: [
            "**Enable the editor's evolution**, reducing the cost of delivering new use cases by separating business rules from the interface.",
            "**Modernize the experience**, aligning the editor with the product's current design and addressing small usability frictions of the old version.",
            "**Establish a design metric** for the editor: there was already usage data on use cases and operators, but no indicator tied to the experience.",
          ],
        },
        { type: "h3", text: "How success was measured" },
        {
          type: "list",
          items: [
            "**Engineering:** time to make a new use case available in the editor, which was 2 to 3 months (depending on the case) and was targeted to drop to **2 weeks**. The team also had the potential to stop being responsible for building and instead support the review of requests from other teams.",
            "**Design:** with no existing baseline, a CSAT survey was applied to the old editor as a point of comparison, scoring 3.6, and a recurring CSAT every 6 months would be made available to collect direct feedback from users on the new editor.",
          ],
        },
        {
          type: "stats",
          items: [
            {
              value: "2–3 months",
              label: "Before · time to deliver a new use case",
            },
            {
              value: "2 weeks",
              label: "Target · with the restructured editor",
            },
            { value: "3.6", label: "Old editor CSAT · baseline" },
          ],
        },
      ],
    },
    {
      title: "Research",
      id: "pesquisa",
      blocks: [
        {
          type: "p",
          text: "The starting point was user data already circulating in the company, such as the *voice of customer* channel, where the CS team shared customers' pain points daily. These reports mostly contained requests for new use cases, with few comments about the experience itself.",
        },
        {
          type: "p",
          text: "To understand how people actually worked with segmentation, **interviews were conducted with customers** on the Pro and Advanced plans **with heavy use of the feature over the previous three months**, a profile more likely to feel the interface's frictions.",
        },
        {
          type: "p",
          text: "In parallel, a competitor benchmark brought good repertoire, but also **approaches so different from one another that they created decision overload** about which path to follow, a pattern that would reappear later, when we started working on the solution designs.",
        },
        { type: "p", text: "The interviews revealed two levels of findings:" },
        {
          type: "list",
          items: [
            "**About the list view:** the most evident pain. With many segmentations created, they got lost in the list, with no effective search features. One customer even kept their own spreadsheet, organized by campaign and with the link to each segmentation, solving outside the product what the product did not offer.",
            "**About the editor:** specific findings, such as questions about how some fields work and the use of operators, and small usability frictions that could be fixed by applying Design System components.",
          ],
        },
        {
          type: "p",
          text: "Since the project scope was the editor, the findings about the list view were documented for a future opportunity, and the rest of the interviews, together with the benchmark, served as the basis for ideation.",
        },
      ],
    },
    {
      title: "Ideation",
      id: "ideacao",
      blocks: [
        {
          type: "p",
          text: "The ideation proposals started from an evaluation of the current editor, focused on scalability, and from the findings of the interview round. In the critique rounds, the design team took the discussion beyond the planned redesign, questioning why certain editor behaviors worked the way they did and proposing highly complex paths, such as building segments through more natural language, in a conversational approach.",
        },
        {
          type: "figure",
          figure: {
            image: boardCritique,
            label: "Critique board",
            alt: "Critique board with proposals for the lead segmentation editor and sticky notes with insights and improvement suggestions",
          },
          caption:
            "Critique board with proposals for the lead segmentation editor and sticky notes recording insights and improvement suggestions.",
        },
        {
          type: "p",
          text: "Prioritization followed a **desirability vs. feasibility** logic, with support from the product's PM. The ideas were desirable and consistent with a real evolution of the product, but low in feasibility at the time: they depended on validation and technical deepening that the project timeline did not allow, and restructuring logic at that level would significantly expand the scope, which was unfeasible given the main objective.",
        },
        {
          type: "p",
          text: "With this criterion, the insights split into two paths:",
        },
        {
          type: "list",
          items: [
            "**Moved on to critique with engineering:** insights on positioning, communication, and flow, with feasibility compatible with the timeline.",
            "**Documented as a future opportunity:** structural change proposals, which required deeper discovery and fit better at a moment when the company was already discussing the unification of product fronts, a more suitable context than the current scope, which was aimed at an internal improvement.",
          ],
        },
        {
          type: "p",
          text: "With the scope aligned with the engineering team, validating this direction with users became a fundamental step before moving forward.",
        },
      ],
    },
    {
      title: "Validation",
      id: "validacao",
      blocks: [
        {
          type: "p",
          text: "A **remote moderated usability test** was conducted, with the same audience profile as the interviews: customers on the Pro and Advanced plans with heavy use of segmentations. The test had three central objectives:",
        },
        {
          type: "list",
          items: [
            "**Delivery risk:** validate whether the updated editor screens presented any risk to the user.",
            "**New features:** validate understanding of, and sentiment toward, the duplicate group action, a feature added in this version.",
            "**Flow changes:** validate whether removing the segmentation naming step at the beginning of the flow created friction.",
          ],
        },
        {
          type: "figurePair",
          // The crop is 176px wide: 800px column − 24px gap = 776px, 776 × 1/4.4 ≈ 176px
          widths: [3.4, 1],
          figures: [
            {
              image: editorFiltros,
              label: "Editor with filter options",
              alt: "Lead segmentation editor with the filter options open",
            },
            {
              image: duplicarGrupo,
              label: "“Duplicate group” action",
              alt: "“Duplicate group” button highlighted in the segmentation editor",
            },
          ],
          caption:
            "On the left, the lead segmentation editor with filter options open. On the right, the “Duplicate group” button highlighted in the editor.",
        },
        {
          type: "p",
          text: "Overall reception was positive. Participants associated the new look with the recent update to the email editor, which had recently gone through a redesign, describing it as more modern and with more personality.",
        },
        {
          type: "p",
          text: "The duplicate group action was the standout, generating enthusiasm for the possibility of optimizing the segmentation creation routine. The removal of the name field at the start of the flow, however, raised concern: participants were used to thinking of the name as the first step and feared forgetting to name the segmentation, letting the automatic name pile up in the list.",
        },
        {
          type: "figure",
          figure: {
            image: cabecalhoEditor,
            label: "Editor header",
            alt: "Segmentation editor header with automatic name, creation and update dates, and the “Save” and “Save and exit” actions",
          },
          caption:
            "Segmentation editor header, with automatic name, creation and update dates, and the “Save” and “Save and exit” actions.",
        },
        {
          type: "p",
          text: "This feedback led to a direct adjustment in the flow. The proposal of opening the editor with an automatic name was kept, but now includes **a confirmation at the moment of saving**: if the person has not edited the name during use, the editor asks whether they want to keep the automatic name or rename the segmentation before finishing.",
        },
      ],
    },
    {
      title: "Results",
      id: "resultados",
      blocks: [
        {
          type: "p",
          text: "The new editor brought the following changes in flow and features:",
        },
        {
          type: "list",
          items: [
            "**Automatic naming:** the segmentation no longer requires a name as the first step of the flow. It now automatically receives a name in the format “Segmentation dd-mm-yyyy hh:mm:ss”, editable at any time through the editor header or the list menu.",
            "**Save confirmation:** when saving with the automatic name still active, a confirmation modal is displayed, allowing the user to enter a new name or proceed with saving.",
            "**Creation and update dates:** now displayed for each list.",
            "**Filter standardization:** date filter actions and other features were standardized for better application and understanding across use cases.",
            "**Duplicate groups:** a new feature that reduces rework when building segments.",
          ],
        },
        {
          type: "p",
          text: "During delivery, the product went through a general redesign, which required updating the interface already proposed. The impact was small because the Design System library had already been applied across the editor's entire structure, and the only adjustment needed was on one custom element: the leads sample.",
        },
        {
          type: "figure",
          figure: {
            image: editorNovo,
            label: "New editor",
            alt: "New lead segmentation editor with the category menu open and a group configured with the “Visited the page” filter",
          },
          caption:
            "Lead segmentation editor at two moments: on the left, the category menu open to create a condition; on the right, a configured group with the “Visited the page” filter and the sample of leads that meet the criteria.",
        },
        { type: "h3", text: "Stabilization and CSAT" },
        {
          type: "p",
          text: "The editor went through a 3-month stabilization phase, from the start of the rollout to 100% of the base until the last improvement delivered. During this period, there was direct contact with the support team to map reported cases, and a CSAT survey was applied for 2 months, totaling **64 responses**. The result was a strongly polarized pattern, concentrated on scores 1 and 5, with an average of **2.5**. For comparison, the old editor's CSAT, applied over a shorter evaluation period, had 182 responses and an average of 3.6.",
        },
        {
          type: "comparison",
          columns: ["CSAT", "Old editor", "New editor"],
          rows: [
            ["Average", "3.6", "2.5"],
            ["Responses", "182", "64"],
            ["Survey period", "Shorter", "2 months, during stabilization"],
          ],
        },
        { type: "h3", text: "Why the score came in below expectations" },
        {
          type: "list",
          items: [
            "**Technical instabilities and inconsistencies** in how filters worked, which users associated with the new interface.",
            "**Structural changes**, such as the removal or lower visibility of some information, which increased the effort of use.",
            "**Existing segmentation behaviors that the new layout made more evident**, revealing incorrect interpretations of how the feature works.",
            "**Specific visual hierarchy adjustments**, including the assessment of Yay Forms, a form tool integrated into the product, visually competing with the lead data on the side of the editor.",
          ],
        },
        {
          type: "p",
          text: "Despite the numerical result, the conceptual reception of the new editor was positive, especially regarding the layout and consistency with the rest of the product.",
        },
        {
          type: "p",
          text: "Considering the survey comments, not counting isolated bugs, the main friction points users pointed out were:",
        },
        {
          type: "list",
          items: [
            "Increase in the number of clicks to access lead information.",
            "Problems displaying the full content of created tags.",
            "Custom fields missing the terms Statement and Name.",
            "Reduced width of the select box, making it hard to read the full content.",
            "General issues related to the size of elements on screen.",
          ],
        },
        {
          type: "p",
          text: "All the issues raised were resolved during the stabilization period. The last two items on the list were sent for study, as they involve Design System components or were not *quick wins*. After stabilization, the volume of support tickets returned to its natural level, and the nature of the questions changed: **fewer questions about how things work, more requests for new use cases**.",
        },
        { type: "h3", text: "What the new foundation enabled" },
        {
          type: "p",
          text: "Even with the initial perception below expectations, the project's structural changes enabled deliveries that the old base would not have allowed:",
        },
        {
          type: "list",
          items: [
            "**Relative date filters:** a use case highly demanded by customers, launched without the months of development it would have required in the previous architecture, bringing more flexibility in searching for the ideal profile.",
            "**Universal support text:** a feature that helps users understand each filter, with a single, replicable text for any use case. Previously, nearly identical texts were repeated across different filters without clearly explaining how they work, which made the editor's learning curve harder. Since the display rule now lives in the back end, the front end simply displays the information in the defined standard, creating a replicable model for any future scenario.",
          ],
        },
        {
          type: "p",
          text: "*Final note: the recurring CSAT, scheduled to run every 6 months, had not yet reached its new measurement cycle at the time this case was compiled.*",
        },
      ],
    },
    {
      title: "My role",
      id: "minha-atuacao",
      blocks: [
        {
          type: "p",
          text: "As the **designer responsible for the delivery**, I worked from research through post-launch stabilization, focusing on:",
        },
        {
          type: "list",
          items: [
            "**Research:** I conducted interviews with heavy users to understand their routines and pain points with segmentation, plus a competitor benchmark to map different market approaches.",
            "**Prioritization and ideation:** I organized and prioritized design insights using a desirability vs. feasibility logic, with support from the product's PM, took the feasible proposals to a technical critique with engineering, and documented the structural ideas as a future opportunity.",
            "**UI and prototyping:** I defined all screens and flows of the new editor, from wireframe to high fidelity, and produced all the handoff material for development.",
            "**Validation:** I ran a remote moderated usability test to validate the new flow and the delivered features, adjusting the segmentation naming flow based on the feedback collected.",
            "**Stabilization and follow-up:** I kept direct contact with the support team during the 3 months of post-rollout stabilization and tracked CSAT results to identify causes of friction and guide improvement efforts.",
          ],
        },
        {
          type: "p",
          text: "This project allowed me to go through every cycle of a delivery: from the initial study phase, through customer interviews and validations, to post-delivery follow-up, understanding how the solution was received by users and outlining improvement strategies and backlog for the team.",
        },
      ],
    },
  ],
})
