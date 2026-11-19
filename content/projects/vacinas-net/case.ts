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
          text: "A **Prophylaxis®**, uma das maiores redes de clínicas de vacinação do Brasil, queria expandir o negócio para o digital com uma loja online. O catálogo principal seriam vacinas, complementado por testes rápidos e itens de puericultura, como berços e carrinhos.",
        },
        {
          type: "p",
          text: "O desafio central estava na natureza do produto. Vacina não se vende como roupa, cosmético ou eletrônico: é um item de saúde, envolve dúvidas, recomendações por idade e perfil, e depende da confiança de quem compra, muitas vezes para um filho.",
        },
        {
          type: "quote",
          text: "A loja precisava tornar a compra fácil sem banalizar o produto, e comunicar transparência em cada etapa.",
        },
        {
          type: "p",
          text: "Com time enxuto e prazo curto, o projeto adotou uma adaptação do **Design Sprint de 4 dias** (AJ&Smart) para acelerar o alinhamento com o cliente e chegar rapidamente a um protótipo testável.",
        },
      ],
    },
    {
      title: "Pesquisa",
      blocks: [
        {
          type: "p",
          text: "O ponto de partida foi um alinhamento com o cliente para transformar premissas em perguntas. Cada participante resumiu em uma frase a visão do negócio para o próximo ano (*Long Term Goal*), e a partir dessas visões foram levantados os riscos que poderiam impedir que ela se concretizasse. O exercício “Como nós podemos...” ajudou a mapear os problemas, agrupá-los por tema e priorizá-los por complexidade.",
        },
        {
          type: "p",
          text: "Em paralelo, personas construídas a partir de pesquisa desk e referências foram refinadas com o conhecimento que o cliente tinha do público das clínicas. Elas evidenciaram perfis bem diferentes usando a mesma loja: mães e pais organizando o calendário vacinal dos filhos, adultos buscando uma vacina específica, viajantes.",
        },
        {
          type: "p",
          text: "Um benchmarking amplo (*Lightning Demos*) completou a etapa, observando tanto concorrentes diretos quanto outros segmentos que já resolviam bem problemas parecidos, como farmácias online, marketplaces de serviços e sistemas de saúde digital.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: dinamicaCliente,
              label: "Dinâmica presencial com o cliente",
              alt: "Dinâmica presencial com o cliente, com mapas, post-its e protótipos afixados em um quadro branco",
            },
            {
              image: quadroSprint,
              label: "Quadro do Design Sprint",
              alt: "Quadro branco do Design Sprint com personas, perguntas “Como podemos...?”, referências de benchmarking e esboços",
            },
          ],
          caption:
            "À esquerda, a dinâmica presencial com o cliente, com mapas, post-its e protótipos afixados durante uma sessão colaborativa de ideação. À direita, o quadro do Design Sprint, com personas, perguntas “Como podemos...?”, referências de benchmarking e esboços de protótipos.",
        },
        {
          type: "p",
          text: "Dessa etapa saíram os princípios que guiaram o projeto:",
        },
        {
          type: "list",
          items: [
            "Muitas pessoas não sabem o nome da vacina de que precisam, mas sabem para quem estão comprando. Por isso, **a navegação precisava partir do perfil do usuário**, e não só do produto.",
            "A decisão de compra depende mais de segurança do que de preço. **A informação técnica e os sinais de credibilidade precisavam estar visíveis antes da compra**, e não escondidos.",
          ],
        },
      ],
    },
    {
      title: "Ideação",
      blocks: [
        {
          type: "p",
          text: "Com os problemas priorizados, o foco recaiu sobre os dois pontos com mais impedimentos: a descoberta da vacina certa para cada perfil e a confiança no momento da compra. A técnica **Crazy Eights** gerou alternativas rápidas no papel, que foram discutidas à luz dos princípios da pesquisa até a seleção das soluções mais promissoras.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: rascunhosIdeacao,
              label: "Rascunhos da sessão de ideação",
              alt: "Quadro branco com rascunhos de telas, post-its e anotações sobre o protótipo da loja online de vacinas",
            },
            {
              image: esbocosTelas,
              label: "Esboços de telas",
              alt: "Quadro branco com esboços de telas da loja: página inicial, clínicas próximas e conteúdos relacionados",
            },
          ],
          caption:
            "À esquerda, rascunhos de telas, post-its e anotações sobre o protótipo, incluindo indicação e produtos em destaque na página inicial. À direita, esboços da página inicial com busca, categorias por faixa etária e produtos em destaque, além de telas de clínicas próximas e conteúdos relacionados.",
        },
        { type: "p", text: "Duas decisões se destacaram:" },
        { type: "h3", text: "Navegação pelo calendário de vacinação" },
        {
          type: "p",
          text: "Em vez de organizar o catálogo como uma prateleira de produtos, a navegação segue a lógica do calendário vacinal, que já é a referência de quem cuida da própria saúde ou da família. Os departamentos foram divididos por perfil: infantil, adolescente, adulto, 65+, gestantes e viajantes, além de uma entrada por doença para quem já sabe do que quer se proteger. Dentro dos departamentos, um **filtro por idade** se tornou essencial, sobretudo no infantil, em que as recomendações mudam a cada poucos meses.",
        },
        {
          type: "h3",
          text: "Uma página de produto que responde antes de vender",
        },
        {
          type: "p",
          text: "A página de produto foi tratada como o principal ponto de construção de confiança. Ela reúne tudo que a pessoa precisa para decidir com segurança, do que a vacina previne até a bula, e ganhou um espaço para vídeo ou imagem, abrindo caminho para conteúdo explicativo sobre o produto.",
        },
        {
          type: "p",
          text: "Essas soluções deram origem a um **protótipo de alta fidelidade**, testado com colaboradores da agência que não participavam do projeto para reunir os primeiros feedbacks e correções iniciais antes da entrega para o cliente. A participação da Prophylaxis® ao longo do processo encurtou o caminho: o direcionamento foi validado em conjunto, e o projeto terminou com um mapa do que poderia evoluir em fases futuras.",
        },
        {
          type: "figure",
          figure: {
            image: prototipo,
            label: "Protótipo de alta fidelidade",
            alt: "Protótipo de alta fidelidade do vacinas.net com navegação por perfil, calendário de vacinação, páginas de produto e agendamento",
          },
          caption:
            "Protótipo de alta fidelidade do vacinas.net, com telas de navegação por perfil e calendário de vacinação, seleção de vacinas infantis, páginas de produto e agendamento em clínicas.",
        },
      ],
    },
    {
      title: "Entrega",
      blocks: [
        {
          type: "p",
          text: "Após a validação com o cliente, a arquitetura completa da loja foi estruturada.",
        },
        {
          type: "p",
          text: "O vacinas.net foi desenhado em *mobile first* e desenvolvido como um **PWA** (Progressive Web App): um site com aparência e comportamento de aplicativo. A escolha trazia a fluidez de um app nativo sem exigir download, além de abrir espaço para recursos como notificações, que se encaixam naturalmente num produto de vacinação, em que doses de reforço e próximas etapas do calendário fazem parte da jornada.",
        },
        {
          type: "figurePair",
          figures: [
            {
              image: homeMobile,
              label: "Home mobile: busca e perfis",
              alt: "Tela inicial mobile do vacinas.net com busca de vacinas e categorias por perfil",
            },
            {
              image: homeMobileAtalhos,
              label: "Home mobile: atalhos e conteúdos",
              alt: "Tela inicial mobile do vacinas.net com atalhos por perfil, busca de clínicas por CEP e conteúdos educativos",
            },
          ],
          caption:
            "Tela inicial mobile do vacinas.net: à esquerda, busca de vacinas, categorias por perfil (infantil, adolescente, adulto e 65+) e acesso à busca por doenças imunopreveníveis; à direita, atalhos para encontrar vacinas por perfil e necessidade, buscar clínicas por CEP, acessar conteúdos educativos e conhecer outros produtos de saúde.",
        },
        {
          type: "figure",
          figure: {
            image: fluxoDescoberta,
            label: "Fluxo de descoberta de vacinas",
            alt: "Fluxo de descoberta de vacinas por perfil, idade e doença",
          },
          caption:
            "Fluxo de descoberta de vacinas: a pessoa escolhe o perfil (infantil, adolescente, adulto ou 65+), informa a idade e acessa recomendações por faixa etária ou por doença.",
        },
        {
          type: "p",
          text: "Com a saída do UI designer, as telas restantes foram desdobradas a partir do conceito visual já estabelecido, estendendo seus padrões para todas as páginas. A etapa final levou o projeto para o desktop, com o desafio de preservar a linha visual construída no mobile e, ao mesmo tempo, aproveitar o espaço extra para uma navegação confortável em telas maiores.",
        },
        {
          type: "figure",
          figure: {
            image: homeDesktop,
            label: "Home desktop",
            alt: "Tela inicial desktop do vacinas.net com navegação por categorias e busca de vacinas",
          },
          caption:
            "Tela inicial desktop do vacinas.net, com navegação por categorias, busca de vacinas e atalhos para encontrar recomendações por perfil ou por doença.",
        },
      ],
    },
    {
      title: "Minha atuação",
      blocks: [
        {
          type: "p",
          text: "Como **designer júnior na época**, atuei da descoberta à entrega final ao lado do design lead e de um UI designer sênior, com foco em:",
        },
        {
          type: "list",
          items: [
            "**Pesquisa:** participei das dinâmicas do Design Sprint com o cliente (*Long Term Goal* e “Como nós podemos...”) e colaborei na construção das personas e no benchmarking de mercado que embasou as decisões do projeto.",
            "**Arquitetura da informação:** apoiei a estruturação da navegação da loja a partir do calendário vacinal, com departamentos por perfil, filtro por idade e uma página de produto pensada para transmitir segurança na compra.",
            "**Ideação e prototipação:** contribuí na geração de alternativas com Crazy Eights, evoluí soluções de wireframes em papel para telas de alta fidelidade e participei da montagem do protótipo usado nos testes internos.",
            "**Desdobramento de interfaces:** com a saída do UI designer, assumi, com o apoio do design lead, a continuidade das telas, estendendo o conceito visual já criado para as demais páginas, em abordagem mobile first, e adaptando a experiência para desktop.",
          ],
        },
        {
          type: "p",
          text: "O projeto foi meu primeiro contato com o Design Sprint na prática e me deu a oportunidade de assumir mais responsabilidade ao longo da entrega, desenvolvendo uma base sólida em pesquisa, arquitetura e interface.",
        },
      ],
    },
  ],
})
