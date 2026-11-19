import { defineCase } from "@/lib/projects/schema"
import siteAntigo from "./images/site-antigo.png"
import estruturaAntiga from "./images/estrutura-antiga.png"
import treeTestingTarefa1 from "./images/tree-testing-tarefa-1.png"
import sitemapFinal from "./images/sitemap-final.png"
import menuDesktop from "./images/menu-desktop.png"
import menuMobile from "./images/menu-mobile.png"
import rodapeDesktop from "./images/rodape-desktop.png"
import rodapeMobile from "./images/rodape-mobile.png"

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
          text: "A XP já não era só uma corretora. Com o lançamento do cartão de crédito e da conta digital, o site passou a divulgar esses produtos, e novos assuntos começaram a surgir: conta internacional, criptomoedas, câmbio, entre outros. Os produtos em si não eram o problema. O problema estava na **estrutura do site**: ela tinha sido pensada para uma corretora de investimentos e não comportava o novo portfólio adequadamente.",
        },
        {
          type: "figure",
          figure: {
            image: siteAntigo,
            label: "Site antigo da XP",
            alt: "Site antigo da XP com menu superior escuro e a categoria “Investimentos” aberta",
          },
          caption:
            "Site antigo da XP com menu superior escuro. A categoria “Investimentos” está aberta e exibe opções como produtos, ações, fundos de investimento, renda fixa, cartão de crédito e conta digital.",
        },
        {
          type: "p",
          text: "Em paralelo, a mudança de posicionamento de corretora para banco trouxe uma demanda do jurídico. Alguns itens do rodapé precisavam ser ajustados, e novas informações passaram a ser obrigatórias.",
        },
        {
          type: "p",
          text: "Seriam duas entregas pontuais: criar novas páginas e ajustar o rodapé. Mas o time enxergou nelas uma oportunidade maior. Em vez de encaixar mais itens em uma estrutura que já não funcionava, decidimos usar essas demandas para **repensar a navegação do site por completo**, alinhando-a ao novo posicionamento da XP e preparando-a para crescer junto com o portfólio.",
        },
      ],
    },
    {
      title: "Objetivo",
      blocks: [
        {
          type: "list",
          items: [
            "Reorganizar a estrutura do site para que as pessoas encontrassem produtos e serviços com mais facilidade.",
            "Criar uma arquitetura escalável, capaz de absorver os produtos que estavam por vir (XP Internacional, criptomoedas, câmbio e crédito) sem uma nova reestruturação.",
            "Dar visibilidade equilibrada a todo o portfólio, e não apenas aos produtos de investimento.",
            "Atender às exigências do jurídico decorrentes do novo posicionamento de banco.",
          ],
        },
        {
          type: "quote",
          text: "Hipótese central: as pessoas não estavam conseguindo se encontrar no site por causa da forma como o conteúdo estava organizado.",
        },
      ],
    },
    {
      title: "Pesquisa",
      blocks: [
        { type: "h3", text: "Auditoria da estrutura" },
        {
          type: "p",
          text: "O ponto de partida foi o mapeamento completo da estrutura existente. Uma primeira limpeza já tinha sido feita durante os projetos de novas páginas de produto, mas o menu ainda era extenso e pouco coeso. Eram seis itens de primeiro nível (Sobre a XP, Comece a investir, Investimentos, Conteúdos, Empresas e Atendimento), com subníveis que misturavam temas.",
        },
        {
          type: "figure",
          figure: {
            image: estruturaAntiga,
            label: "Estrutura antiga",
            alt: "Mapa da arquitetura de informação do site antigo da XP, com seis categorias principais e diversos subníveis",
          },
          caption:
            "Mapa da arquitetura de informação do site antigo da XP, com seis categorias principais: Sobre a XP, Comece a investir, Investimentos, Conteúdos, Empresas e Atendimento, cada uma com diversos subníveis de produtos, serviços e informações institucionais.",
        },
        {
          type: "p",
          text: "O mapeamento revelou quatro grupos de itens com sobreposição ou localização questionável:",
        },
        {
          type: "list",
          items: [
            "**“Como funciona a assessoria XP” e “Como a XP te atende”:** duas páginas sobre assessoria, com pouca diferença entre elas.",
            "**“Transferência de recursos” e “Portabilidade de investimentos”:** estavam em “Comece a investir”, embora sejam dúvidas operacionais.",
            "**“Custódia remunerada”, “Alavancagem” e “RLP”:** páginas de renda variável em “Opere na bolsa”.",
            "**“Tour XP” e “Fale com o Guilherme”:** itens institucionais de propósito pouco claro dentro de “Sobre a XP”.",
          ],
        },
        {
          type: "p",
          text: "A categoria Conteúdos também repetia no segundo nível os mesmos nomes de produtos que já existiam em Investimentos, como Ações, Fundos de investimento, Renda fixa e COE.",
        },
        {
          type: "p",
          text: "Outro ponto era que tudo relacionado a produto ficava em “Investimentos”, inclusive cartão de crédito, conta digital e seguros. Não havia espaço lógico para os novos produtos que estavam para ser lançados.",
        },
        { type: "h3", text: "Dados de acesso (Google Analytics)" },
        {
          type: "p",
          text: "A análise dos acessos de cada página a partir do menu:",
        },
        {
          type: "comparison",
          columns: ["Posição", "Mais acessadas", "Menos acessadas"],
          rows: [
            ["1º", "Fundos de investimento", "RLP"],
            ["2º", "Atendimento", "Política (Conteúdos, nível 2)"],
            ["3º", "Previdência privada", "Tour XP"],
            ["4º", "Renda fixa", "Projetos sociais"],
            ["5º", "Simulador de investimentos", "Custódia remunerada"],
          ],
        },
        { type: "h3", text: "Dados do funil de aquisição" },
        {
          type: "p",
          text: "As páginas também foram cruzadas com os dados do funil (Lead Intent, Lead Start e Lead Complete) para entender o peso de cada uma na aquisição de clientes. Algumas páginas existem para cumprir papéis institucionais ou de ajuda, mas a pergunta era se todas elas de fato precisavam continuar no site.",
        },
        { type: "p", text: "Três achados se destacaram:" },
        {
          type: "list",
          ordered: true,
          items: [
            "As duas páginas de assessoria tinham pouca diferença entre si, e essa diferença não parecia clara para o cliente.",
            "As páginas de renda variável (Alavancagem, Custódia remunerada e RLP) tinham baixo volume de conversão e pouco conteúdo.",
            "Portabilidade tinha números expressivos, mesmo estando em uma categoria pouco clara. A hipótese era de que ela performaria melhor em um lugar mais intuitivo.",
          ],
        },
        { type: "h3", text: "Apoio de SEO" },
        {
          type: "p",
          text: "O time de SEO participou da análise do impacto de remover páginas e reduzir links no menu e no rodapé. Com isso, as remoções e adaptações foram propostas sem comprometer a presença orgânica do site.",
        },
      ],
    },
    {
      title: "Ideação",
      blocks: [
        {
          type: "p",
          text: "A nova estrutura foi construída a partir de um **card sorting interno** com PM, GPM e Design Lead. O ponto de partida foi o conhecimento já reunido: os dados de acesso e de funil, o entendimento interno sobre o propósito de cada página e o posicionamento que o banco queria alcançar. A partir disso, as possibilidades foram sendo eliminadas e as categorias, estruturadas. A UX Writing do time apoiou na nomenclatura.",
        },
        { type: "p", text: "A proposta seguiu alguns princípios:" },
        {
          type: "list",
          items: [
            "**Agrupar por intenção do usuário, não por organograma.** Todos os produtos passaram a ficar sob “Produtos e serviços”, dividido em Produtos, Serviços financeiros e Seguros e previdência. Assim, os produtos ainda não lançados (conta internacional, criptomoedas, câmbio e crédito) poderiam entrar no subnível adequado sem mexer no primeiro nível.",
            "**Separar dúvidas operacionais de produtos.** Custos operacionais, Transferência de recursos e Portabilidade saíram de “Comece a investir” e foram agrupadas com a Central de atendimento.",
            "**Organizar o institucional em subgrupos.** “Sobre a XP” foi dividido em A XP S.A., Nossa atuação e Trabalhe conosco.",
            "**Remover ou consolidar páginas sem relevância ou defesa para continuar.** Saíram Tour XP, Fale com o Guilherme, RLP, Alavancagem e Custódia remunerada, que tinham baixo acesso ou baixa conversão, e também XP Inc., uma página defasada e sem manutenção, e Carreiras. As duas páginas de assessoria foram unificadas.",
            "**Simplificar Conteúdos**, eliminando a repetição de categorias de produto e reduzindo a três entradas: Blog, Recomendações de investimento e Evento expert.",
          ],
        },
      ],
    },
    {
      title: "Validação",
      blocks: [
        {
          type: "p",
          text: "Para validar a proposta sem a interferência do visual, a estrutura passou por um **Tree Testing** no Maze com pessoas da base de clientes da XP. Rodamos dois testes com cerca de **200 respostas cada**:",
        },
        {
          type: "list",
          items: [
            "**Teste 1:** estrutura de menu em produção na época.",
            "**Teste 2:** estrutura proposta.",
          ],
        },
        {
          type: "p",
          text: "Cada teste tinha três tarefas, seguidas de uma pergunta sobre a dificuldade percebida.",
        },
        {
          type: "h3",
          text: "Tarefa 1: encontrar todas as opções de investimento da XP",
        },
        {
          type: "p",
          text: "No teste 1, o caminho e a página mais escolhidos foram os corretos, mas as respostas estavam dispersas. Parte das pessoas chegou à página certa por caminhos incorretos, e “Sobre a XP” e “Comece a investir” foram pontos de partida frequentes (35 e 17 vezes, respectivamente).",
        },
        {
          type: "p",
          text: "No teste 2, o caminho mais escolhido também foi o correto, mas com respostas bem mais concentradas. O número total de caminhos diminuiu, e menos pessoas chegaram à página certa por caminhos indiretos. “Sobre a XP” ainda apareceu como ponto de partida cerca de 36 vezes, o que indica que o nome ainda atraía parte do público buscando entender a oferta da empresa.",
        },
        {
          type: "figure",
          figure: {
            image: treeTestingTarefa1,
            label: "Tarefa 1: teste 1 x teste 2",
            alt: "Comparação dos caminhos da tarefa 1 no Tree Testing entre a estrutura antiga e a proposta",
          },
          caption:
            "**Comparação da tarefa 1 no Tree Testing:** a estrutura antiga (à esquerda) distribuía as opções entre “Sobre a XP”, “Comece a investir”, “Investimentos” e “Conteúdos”. Na proposta (à direita), “Produtos e serviços” organiza a busca por investimentos de forma mais direta.",
        },
        { type: "h3", text: "Tarefa 2: encontrar o Cartão de Crédito XP" },
        {
          type: "p",
          text: "Aqui a diferença foi mais clara. No teste 1, o caminho mais escolhido **não foi o correto**. As pessoas fizeram **97 caminhos diferentes**, nenhum com mais de 5% das respostas, e muitas procuraram em opções institucionais e de conteúdo.",
        },
        {
          type: "p",
          text: "No teste 2, o caminho mais escolhido **foi o correto**. A quantidade de caminhos caiu **cerca de 43%**, e os três caminhos mais seguidos começavam em “Produtos e serviços”, o nível 1 correto.",
        },
        {
          type: "h3",
          text: "Tarefa 3: encontrar informações sobre fundos de investimento",
        },
        {
          type: "p",
          text: "Os resultados foram semelhantes nos dois testes. Ambos levaram à página e ao caminho corretos, com a mesma quantidade de caminhos e só variação nos percentuais.",
        },
        { type: "h3", text: "Resultado geral" },
        {
          type: "stats",
          items: [
            { value: "20–46%", label: "Taxa de sucesso por tarefa · teste 1" },
            { value: "38–60%", label: "Taxa de sucesso por tarefa · teste 2" },
          ],
        },
        { type: "h3", text: "Ajuste pós-teste" },
        {
          type: "p",
          text: "Depois da validação, a estrutura passou por um último refinamento. Tudo que era conteúdo de ajuda, incluindo o antigo “Atendimento”, passou a ficar sob **“Tire suas dúvidas”**. O nome é mais intuitivo e cria um espaço escalável para novos conteúdos de suporte.",
        },
      ],
    },
    {
      title: "Resultados",
      blocks: [
        { type: "h3", text: "O que foi entregue" },
        {
          type: "list",
          items: [
            "**Novo sitemap**, com cinco itens de primeiro nível: Sobre a XP, Produtos e serviços, Conteúdos, Empresas e Tire suas dúvidas.",
            "**Menu desktop (1440px)**, com mega menu organizado por grupos e os atalhos “Acesse sua conta” e “Abra sua conta” sempre visíveis.",
            "**Menu mobile (320px)**, com navegação em camadas e botão “Voltar”, mantendo os mesmos agrupamentos do desktop.",
            "**Novo rodapé (desktop e mobile):** mesmo com a reestruturação, a árvore ainda tinha muitos itens. Um benchmark com sites de bancos e e-commerces, escolhidos por lidarem com estruturas complexas, mostrou como eles dividiam a navegação e quais itens priorizavam. Com o apoio de SEO, ficou claro que o rodapé não precisa replicar a árvore inteira, e sim incluir as páginas mais importantes. O novo rodapé passou a priorizar Produtos e serviços, Tire suas dúvidas, Atendimento (CVM, RMP e Ouvidoria) e os canais de contato, além das informações legais exigidas pelo novo posicionamento. No mobile, as seções viraram acordeões.",
            "**Padrão para o grupo:** os componentes de menu e rodapé foram construídos, documentados e submetidos à aprovação do time de Design Ops, que os incorporou ao design system. A mesma estrutura foi aplicada aos sites da Rico e da Clear.",
          ],
        },
        {
          type: "p",
          text: "O menu e o rodapé foram construídos em WordPress, com o front-end preparado para responder a mudanças feitas na área administrativa. O time de desenvolvimento teve acompanhamento de design do handoff à entrega.",
        },
        {
          type: "figure",
          figure: {
            image: sitemapFinal,
            label: "Novo sitemap",
            alt: "Mapa da nova arquitetura de informação do site da XP, com cinco categorias principais",
          },
          caption:
            "Mapa da nova arquitetura de informação do site da XP, organizada em cinco categorias principais: Sobre a XP, Produtos e serviços, Conteúdos, Empresas e Tire suas dúvidas. A estrutura agrupa produtos, serviços financeiros, seguros e conteúdos de suporte de acordo com as necessidades das pessoas usuárias.",
        },
        { type: "h3", text: "Impacto" },
        {
          type: "p",
          text: "**Maior foco em produtos e serviços** nos primeiros meses após a entrega:",
        },
        {
          type: "stats",
          items: [
            { value: "+350%", label: "Cliques na vitrine de produtos" },
            { value: "+239%", label: "Cliques em conta digital" },
            { value: "+184%", label: "Cliques em cartão de crédito" },
          ],
        },
        { type: "p", text: "**Outros ganhos:**" },
        {
          type: "list",
          items: [
            "**Escalabilidade comprovada:** a estrutura saiu do site da XP e virou base para outras marcas do grupo.",
            "**Visibilidade equilibrada:** produtos menores ganharam destaque, dividindo melhor a atenção entre todo o portfólio.",
            "**Autonomia do time:** pessoas não desenvolvedoras passaram a atualizar menu e rodapé direto pelo WordPress.",
            "**Agilidade:** as mudanças passaram a acontecer em tempo real. Antes, cada alteração exigia uma GMUD.",
            "**Acessibilidade:** o novo menu passou a funcionar com leitores de tela e ficou totalmente responsivo.",
          ],
        },
        {
          type: "figure",
          figure: {
            image: menuDesktop,
            label: "Menu desktop",
            alt: "Menu desktop da XP com a seção “Produtos e serviços” expandida",
          },
          caption:
            "Menu desktop da XP com a seção “Produtos e serviços” expandida, organizada em Produtos, Serviços financeiros e Seguros e previdência.",
        },
        {
          type: "figure",
          figure: {
            image: menuMobile,
            label: "Menu mobile",
            alt: "Menu mobile da XP em quatro estados de navegação",
          },
          caption:
            "Menu mobile da XP em quatro estados de navegação: abertura do menu, acesso às categorias principais, exploração de “Sobre a XP” e consulta a “Conteúdos”, mantendo os atalhos “Acesse sua conta” e “Abra sua conta” visíveis.",
        },
        {
          type: "figure",
          figure: {
            image: rodapeDesktop,
            label: "Rodapé desktop",
            alt: "Rodapé desktop do site da XP com as seções “Produtos e serviços”, “Tire suas dúvidas” e “Fale conosco”",
          },
          caption:
            "Rodapé desktop do site da XP, organizado nas seções “Produtos e serviços”, “Tire suas dúvidas” e “Fale conosco”. A área também reúne links institucionais e legais, informações regulatórias, endereço da empresa e opções para baixar o aplicativo.",
        },
        {
          type: "figure",
          figure: {
            image: rodapeMobile,
            label: "Rodapé mobile",
            alt: "Rodapé mobile da XP em três estados",
          },
          caption:
            "Rodapé mobile da XP em três estados: seções recolhidas, informações legais e institucionais em destaque e a categoria “Produtos e serviços” expandida com links para opções de investimento.",
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
            "**Pesquisa e diagnóstico:** mapeei a estrutura existente, identifiquei sobreposições e itens mal posicionados, e cruzei dados de acesso (Google Analytics) e do funil de aquisição para entender o papel de cada página. Também conduzi o benchmark de rodapés em sites de bancos e e-commerces.",
            "**Arquitetura de informação:** facilitei o card sorting interno com PM, GPM e Design Lead para definir a nova estrutura, com apoio de UX Writing na nomenclatura e de SEO na avaliação das remoções.",
            "**Validação:** planejei e analisei dois Tree Testings no Maze com clientes da XP, com cerca de 200 respostas cada, comparando a estrutura atual com a proposta.",
            "**UI e responsividade:** desenhei o novo menu e o rodapé para desktop e mobile, considerando acessibilidade e compatibilidade com leitores de tela.",
            "**Design system:** construí e documentei os componentes de menu e rodapé e os submeti para aprovação do time de Design Ops. A estrutura se tornou padrão do grupo e foi aplicada também aos sites da Rico e da Clear.",
            "**Alinhamento e entrega:** apoiei a PM nas decisões de remoção e reestruturação de conteúdo e acompanhei o time de desenvolvimento do handoff à implementação.",
          ],
        },
        {
          type: "p",
          text: "O projeto me permitiu transformar uma mudança de posicionamento de negócio em uma estrutura de navegação validada com dados e escalável para outras marcas do grupo.",
        },
      ],
    },
  ],
})
