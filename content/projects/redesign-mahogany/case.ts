import { defineCase } from "@/lib/projects/schema"
import homeMobileMapa from "./images/home-mobile-mapa.png"
import produtoMobileMapa from "./images/produto-mobile-mapa.png"
import homeDesktopMapa from "./images/home-desktop-mapa.png"
import produtoDesktopMapa from "./images/produto-desktop-mapa.png"
import homeDesktop from "./images/home-desktop.jpg"
import homeDesktopContinuacao from "./images/home-desktop-continuacao.jpg"
import produtoDesktop from "./images/produto-desktop.jpg"
import produtoMobile from "./images/produto-mobile.jpg"

// Conteúdo extraído da página do case no Notion (versão em português).

export default defineCase({
  status: "published",
  lang: "pt",
  sections: [
    {
      title: "Visão geral",
      blocks: [
        {
          type: "p",
          text: "A **Mahogany** é uma marca de cosméticos com mais de 26 anos de história, reconhecida pelo forte compromisso com inovação, qualidade, beleza e resultados. Seu público é formado principalmente por mulheres a partir de 25 anos, que adoram festas e gostam de receber amigos em casa ou de sair. Estão sempre em busca de um motivo para celebrar e se divertir. É uma mulher que quer cuidar de si, se sentir bonita e estar pronta para qualquer ocasião.",
        },
        {
          type: "p",
          text: "Este projeto foi o **redesign do e-commerce da Mahogany**. Seguimos uma abordagem *mobile first*: todas as telas foram desenhadas primeiro para mobile e depois adaptadas para desktop. O objetivo era gerar resultados positivos para a loja virtual, resolvendo os problemas de usabilidade identificados na versão anterior do site.",
        },
      ],
    },
    {
      title: "Pesquisa",
      blocks: [
        {
          type: "p",
          text: "Analisar o comportamento dos usuários no site atual nos deu uma linha de base para orientar o redesign. Era essencial entender o cenário existente para propor melhorias cujo impacto no comportamento do usuário pudesse ser medido depois da implementação.",
        },
        {
          type: "p",
          text: "A análise usou dados de comportamento coletados entre 1º de janeiro e 1º de setembro de 2018. Esse período reuniu um volume significativo de informações, o que permitiu uma abordagem mais precisa e embasada.",
        },
        {
          type: "p",
          text: "Os dados mostraram que os **dispositivos móveis** concentraram a **maior parte dos acessos no período analisado**. O **desktop representou 34% das visitas**, o que ainda torna esse segmento relevante. No entanto, a proporção de transações concluídas no mobile caiu, enquanto a taxa de conversão no desktop aumentou.",
        },
        {
          type: "p",
          text: "A análise comparou o comportamento no mobile e no desktop, tanto na home quanto na página de produto. Os resultados ajudaram a identificar a relevância dos conteúdos, o fluxo de navegação e as áreas com potencial de melhoria de performance.",
        },
        { type: "h3", text: "Home" },
        {
          type: "list",
          items: [
            "**50% dos usuários mobile** rolam a página até o rodapé. No **desktop**, os cliques se concentram principalmente na primeira dobra.",
            "No **mobile**, os cliques se concentram no menu, na busca e no banner principal. No **desktop**, os banners, os carrosséis da segunda linha e as áreas de captação de leads têm baixa interação.",
            "A **home desktop** apresenta uma queda significativa no fluxo de navegação entre o header e a última prateleira de produtos. Isso indica a necessidade de avaliar o impacto dessas seções.",
          ],
        },
        {
          type: "figure",
          figure: {
            image: homeMobileMapa,
            label: "Home mobile: cliques e rolagem",
            alt: "Mapa de cliques e de rolagem da home mobile com as principais zonas de interação",
          },
          caption:
            "Mapa de cliques e de rolagem da home mobile, com destaque para as principais zonas de interação.",
        },
        { type: "h3", text: "Página de produto" },
        {
          type: "list",
          items: [
            "No **mobile**, os usuários interagem mais na primeira dobra. Mesmo assim, eles rolam a página, e os cliques se distribuem ao longo dela.",
            "**Preço e botão de compra não aparecem na primeira dobra** no mobile, o que pode gerar atrito e afetar a taxa de conversão.",
            "No **desktop**, a navegação na página de produto é mais distribuída: 50% dos usuários chegam à prateleira de produtos relacionados.",
            "Nos dois dispositivos, os cliques na página de produto se concentram na primeira dobra. Ainda assim, os usuários de desktop interagem mais com as seções inferiores, o que mostra alta relevância do conteúdo.",
          ],
        },
        {
          type: "figure",
          figure: {
            image: produtoMobileMapa,
            label: "Página de produto mobile: interação",
            alt: "Dados de interação na página de produto mobile com as áreas de maior engajamento e a profundidade de rolagem",
          },
          caption:
            "Dados de interação na página de produto mobile, com as áreas de maior engajamento e a profundidade de rolagem.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: homeDesktopMapa,
              label: "Home desktop: cliques e rolagem",
              alt: "Padrões de clique e rolagem na home desktop",
            },
            {
              image: produtoDesktopMapa,
              label: "Página de produto desktop: comportamento",
              alt: "Comportamento dos usuários de desktop na página de produto, com fluxo de navegação e relevância do conteúdo",
            },
          ],
          caption:
            "À esquerda, padrões de clique e rolagem na home desktop, usados para identificar áreas de baixa visibilidade e pontos de maior engajamento. À direita, o comportamento dos usuários de desktop na página de produto, com fluxo de navegação e relevância do conteúdo.",
        },
        { type: "h3", text: "Conclusões" },
        {
          type: "p",
          text: "Com base nos dados da análise do site, somados aos insights alinhados com o cliente, chegamos às seguintes conclusões:",
        },
        {
          type: "list",
          items: [
            "**O mobile deve ser priorizado**, pois representa a maior oportunidade de aumentar a taxa de conversão.",
            "Na home mobile, os usuários rolam por todas as seções, mas concentram suas ações no topo da página.",
            "Preço e botão de compra não aparecem na primeira dobra no mobile. Isso obriga o usuário a rolar a página para acessar esses elementos essenciais.",
          ],
        },
      ],
    },
    {
      title: "Ideação",
      blocks: [
        {
          type: "p",
          text: "Para reforçar a identidade da Mahogany e garantir consistência visual, construímos o design a partir da paleta de cores principal fornecida pelo cliente. Priorizamos a *Brandon Grotesque*, fonte institucional da marca, usada em todos os seus materiais de marketing. Ela ficou reservada principalmente para títulos e textos de destaque, para manter o reconhecimento da marca e transmitir elegância e modernidade.",
        },
        {
          type: "p",
          text: "Para o corpo de texto, escolhemos a *Open Sans*. Ela complementa a *Brandon Grotesque* e melhora a legibilidade. Por ser uma Google Font amplamente suportada, também contribui para um carregamento mais rápido das páginas. A combinação garante uma leitura harmônica, clara e agradável em todos os dispositivos.",
        },
        {
          type: "p",
          text: "Juntas, essas escolhas tipográficas preservam a identidade da Mahogany e, ao mesmo tempo, otimizam usabilidade e performance, **garantindo um site bonito e funcional**.",
        },
      ],
    },
    {
      title: "Entrega",
      blocks: [
        {
          type: "p",
          text: "O projeto envolveu o redesign completo da experiência de e-commerce da Mahogany. Entregamos novos layouts para a home, as páginas de produto, as páginas de categoria e as páginas institucionais, todos implementados na plataforma **VTEX**. O design system foi construído de forma modular, para que o cliente pudesse atualizar ou reorganizar os componentes conforme a necessidade.",
        },
        { type: "h3", text: "Homepage" },
        {
          type: "p",
          text: "**Reduzimos o tamanho do banner principal e simplificamos as prateleiras de produtos**. A decisão partiu dos dados de comportamento e do insight de que as prateleiras muitas vezes não correspondiam às expectativas dos usuários.",
        },
        {
          type: "p",
          text: "No lugar delas, criamos uma solução visualmente atraente com **banners de atalho**, que destacam as principais categorias e promoções. O objetivo da mudança era guiar os usuários de forma mais eficiente e aumentar o engajamento.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: homeDesktop,
              label: "Homepage desktop: topo",
              alt: "Homepage desktop da Mahogany com banner promocional, vitrine de novidades e atalhos para categorias",
            },
            {
              image: homeDesktopContinuacao,
              label: "Homepage desktop: continuação",
              alt: "Continuação da homepage desktop da Mahogany com atalhos de categorias, área para revendedores, Instagram e rodapé",
            },
          ],
          caption:
            "Homepage desktop da Mahogany. À esquerda, banner promocional em destaque, vitrine de novidades e atalhos para categorias como perfumaria, kits especiais e maquiagem. À direita, a continuação, com atalhos para categorias de beleza, área para revendedores, novidades do Instagram e informações institucionais no rodapé.",
        },
        { type: "h3", text: "Página de produto" },
        {
          type: "p",
          text: "Para melhorar a experiência de compra, incluímos **um botão “Comprar” fixo, que permanece visível enquanto o usuário rola a página**. Também reduzimos o tamanho da imagem do produto, o que permitiu exibir o preço na primeira dobra. Assim, o usuário passou a ver as informações essenciais para a compra logo de cara, sem precisar rolar.",
        },
        {
          type: "figurePair",
          widths: [1.35, 1],
          figures: [
            {
              image: produtoDesktop,
              label: "Página de produto desktop",
              alt: "Página de produto desktop da Mahogany com seleção de cores, preço, botão de compra, avaliações e produtos relacionados",
            },
            {
              image: produtoMobile,
              label: "Página de produto mobile",
              alt: "Página de produto mobile da Mahogany com o botão “Comprar” fixo na base da tela",
            },
          ],
          caption:
            "Página de produto da Mahogany. À esquerda, no desktop, informações do produto, seleção de cores, preço, botão de compra, avaliações e produtos relacionados. À direita, no mobile, o botão “Comprar” fixo na base da tela.",
        },
        {
          type: "p",
          text: "Ao basear o redesign em dados de comportamento e em um alinhamento próximo com a identidade da marca, entregamos não só uma nova interface, mas uma experiência de compra mais significativa e eficiente. O resultado é uma **solução de e-commerce escalável** que equilibra **apelo visual, usabilidade e performance**.",
        },
      ],
    },
    {
      title: "Minha atuação",
      blocks: [
        {
          type: "p",
          text: "Como **designer responsável pela entrega**, atuei do kickoff à entrega final, em três frentes principais:",
        },
        {
          type: "list",
          items: [
            "**Cliente e alinhamento:** participei de reuniões de alinhamento com o cliente, incluindo a apresentação dos wireframes de média fidelidade e da proposta final de alta fidelidade.",
            "**Parceria e estratégia:** trabalhei com o gerente de projetos para aplicar boas práticas de e-commerce, equilibrando objetivos de negócio e expectativas dos stakeholders.",
            "**Alinhamento técnico:** colaborei com desenvolvimento para compreender limitações da plataforma e garantir soluções viáveis para implementação.",
          ],
        },
        {
          type: "p",
          text: "O projeto exigiu **colaboração e adaptabilidade** para equilibrar necessidades do cliente, restrições técnicas e uma abordagem centrada no usuário.",
        },
      ],
    },
  ],
})
