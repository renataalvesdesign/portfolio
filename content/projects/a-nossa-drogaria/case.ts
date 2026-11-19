import { defineCase } from "@/lib/projects/schema"
import lojasMarca from "./images/lojas-marca.jpg"
import homeDesktop from "./images/home-desktop.jpg"
import homeMobile from "./images/home-mobile.png"
import categoriaPrateleira from "./images/categoria-prateleira.jpg"
import categoriaAtalhos from "./images/categoria-atalhos.jpg"
import cardsProduto from "./images/cards-produto.png"

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
          text: "Fundada em 1972 em Duque de Caxias, no Rio de Janeiro, a **A Nossa Drogaria** é uma rede de farmácias consolidada, com mais de 20 lojas no Grande Rio.",
        },
        {
          type: "p",
          text: "O projeto nasceu da ambição da empresa de expandir sua operação para o digital. Seguimos uma abordagem *mobile first*: todas as telas foram desenhadas primeiro para mobile e depois adaptadas para os layouts de desktop.",
        },
        {
          type: "p",
          text: "O principal desafio era criar uma **experiência de e-commerce omnichannel**, conectando os pontos de contato online e offline de forma fluida para oferecer uma experiência consistente e de qualidade. A estratégia partiu de dois pontos. O primeiro era a comunicação e a relação próxima que a marca já tinha com os clientes nas lojas físicas. O segundo era o compromisso de manter esse mesmo nível de qualidade ao chegar ao digital.",
        },
      ],
    },
    {
      title: "Pesquisa",
      blocks: [
        {
          type: "p",
          text: "Como a marca tinha uma presença offline forte e consolidada, o cliente precisava manter uma **experiência de marca unificada em todos os canais**. Para isso, fizemos uma **pesquisa de campo** em várias lojas físicas. Observamos como os produtos eram expostos, como a comunicação visual era aplicada e como se dava o relacionamento com os clientes no ponto de venda.",
        },
        {
          type: "p",
          text: "Durante as visitas, também reunimos diversos materiais impressos, institucionais e de PDV. Somados ao manual de identidade visual da marca que tínhamos em mãos, esses materiais nos ajudaram a entender os princípios visuais e de experiência que orientavam a comunicação da marca.",
        },
        {
          type: "figure",
          figure: {
            image: lojasMarca,
            label: "Lojas e identidade da marca",
            alt: "Colagem com duas fotos de lojas da A Nossa Drogaria e o logotipo multicolorido da marca",
          },
          caption:
            "Colagem com duas fotos de lojas da A Nossa Drogaria e o logotipo multicolorido da marca, em uma composição predominantemente amarela e azul.",
        },
        {
          type: "p",
          text: "Além disso, fizemos um **benchmark das principais farmácias online** para identificar boas práticas e padrões de mercado específicos do setor. Os e-commerces de farmácia seguem padrões de design próprios em relação a outros segmentos, como áreas maiores para banners promocionais, estruturas de navegação mais robustas e prateleiras de produtos extensas. Usamos esses padrões como referências centrais no desenho da experiência digital.",
        },
      ],
    },
    {
      title: "Ideação",
      blocks: [
        {
          type: "p",
          text: "A base visual do site foi construída a partir dos materiais de marca fornecidos pelo cliente. O amarelo era a principal cor de destaque da marca, mas, no digital, seu uso prejudicava a legibilidade e causava um impacto visual negativo.",
        },
        {
          type: "p",
          text: "Para resolver isso, adotamos um tom de azul como cor principal da interface. O amarelo ficou reservado para detalhes menores, como botões de ação, checkboxes e textos de destaque no pré-header.",
        },
        {
          type: "quote",
          text: "Esse ajuste preservou o reconhecimento da marca e, ao mesmo tempo, melhorou o contraste e a acessibilidade.",
        },
        {
          type: "p",
          text: "Na tipografia, escolhemos a **Roboto** para todos os textos do site. Suas linhas limpas, proporções equilibradas e curvas amigáveis combinavam com a personalidade da marca, garantindo legibilidade e um tom visual coeso.",
        },
      ],
    },
    {
      title: "Entrega",
      blocks: [
        {
          type: "p",
          text: "Entregamos layouts para todas as páginas principais de um e-commerce: home, páginas de produto, páginas de categoria e páginas institucionais, todas implementadas na plataforma **VTEX**. O design system foi construído de forma modular, para que o cliente pudesse atualizar ou reorganizar os componentes conforme a necessidade.",
        },
        { type: "h3", text: "Homepage" },
        {
          type: "p",
          text: "A home foi pensada para ser **clara e convidativa**. Seguindo boas práticas de SEO, incluímos áreas de texto posicionadas estrategicamente e com a terminologia correta, para ajudar o site a ter um melhor desempenho nos buscadores. Optamos por um número reduzido de prateleiras de produtos, o que garante um carregamento mais rápido e diminui a sobrecarga cognitiva causada por produtos irrelevantes.",
        },
        {
          type: "p",
          text: "Para melhorar a descoberta de produtos, criamos uma **seção de categorias em destaque**. Nela, o cliente pode destacar grupos específicos de produtos, como os mais vendidos ou os mais buscados.",
        },
        {
          type: "figurePair",
          widths: [2.6, 1],
          figures: [
            {
              image: homeDesktop,
              label: "Homepage desktop",
              alt: "Homepage desktop do e-commerce A Nossa Drogaria com banners promocionais, categorias e vitrines de produtos",
            },
            {
              image: homeMobile,
              label: "Homepage mobile",
              alt: "Homepage mobile do e-commerce A Nossa Drogaria com busca, banner, categorias e produtos mais vendidos",
            },
          ],
          caption:
            "Homepage do e-commerce A Nossa Drogaria. À esquerda, no desktop, banners promocionais, navegação por categorias e vitrines de produtos em destaque. À direita, no mobile, busca de produtos, banner promocional, navegação por categorias, cadastro para receber ofertas e seção de produtos mais vendidos.",
        },
        { type: "h3", text: "Página de categoria" },
        {
          type: "p",
          text: "Entregamos duas variações de layout para as páginas de categoria. A primeira tinha uma prateleira de produtos flexível, onde o cliente podia destacar coleções como os mais vendidos ou itens em promoção. Para departamentos com muitas categorias, propusemos um **layout de atalhos**, que guia o usuário pelas categorias em destaque e melhora a navegação e a descoberta de produtos.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: categoriaPrateleira,
              label: "Categoria com prateleira flexível",
              alt: "Categoria Infantil com banner de produtos para bebês, seção de mais vendidos e vitrine de produtos",
            },
            {
              image: categoriaAtalhos,
              label: "Categoria com atalhos",
              alt: "Categoria Infantil com atalhos para categorias, filtros, ordenação e grade de produtos",
            },
          ],
          caption:
            "As duas variações da categoria Infantil. À esquerda, banner promocional, seção de mais vendidos, lista de categorias e vitrine de produtos. À direita, atalhos para categorias, filtros, opções de ordenação e uma grade de produtos com preços, descontos, frete grátis e botões “Comprar”.",
        },
        { type: "h3", text: "Card de produto" },
        {
          type: "p",
          text: "A interação do card de produto foi pensada para **simular a experiência da loja física**, como pegar um item da prateleira. Ao clicar em “Comprar”, o usuário via uma animação sutil e uma breve mensagem de confirmação na parte inferior da tela, indicando que o item tinha sido adicionado ao carrinho ou atualizado. O ícone do carrinho no header também era atualizado em tempo real. Isso reforçava a ação e mantinha a sensação de continuidade ao longo da experiência de compra.",
        },
        {
          type: "figure",
          figure: {
            image: cardsProduto,
            label: "Cards de produto",
            alt: "Estados do card de produto ao adicionar um item ao carrinho",
          },
          caption:
            "Cards de produto e a confirmação exibida ao adicionar um item ao carrinho.",
        },
      ],
    },
    {
      title: "Minha atuação",
      blocks: [
        {
          type: "p",
          text: "Como **designer responsável pela entrega**, atuei da descoberta à entrega final, com foco em:",
        },
        {
          type: "list",
          items: [
            "**Cliente e alinhamento:** conduzi alinhamentos e apresentações em diferentes etapas, dos wireframes de média fidelidade aos layouts finais.",
            "**Direção visual:** defini a direção visual e a aplicação da identidade da marca no digital, considerando acessibilidade e usabilidade.",
            "**Parceria e estratégia:** trabalhei com o gerente de projetos para traduzir objetivos de negócio em prioridades de design e gerenciar expectativas e escopo.",
            "**Alinhamento técnico:** colaborei com desenvolvimento para entender limitações da plataforma e garantir soluções viáveis.",
          ],
        },
        {
          type: "p",
          text: "O projeto exigiu **proximidade com o cliente e atuação consultiva**, traduzindo conceitos de design de forma acessível, explicando decisões e construindo confiança na nova direção digital da marca.",
        },
      ],
    },
  ],
})
