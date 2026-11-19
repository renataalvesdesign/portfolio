import { defineCase } from "@/lib/projects/schema"
import editorAntigo from "./images/editor-antigo.png"
import boardCritique from "./images/board-critique.png"
import editorFiltros from "./images/editor-filtros.png"
import duplicarGrupo from "./images/duplicar-grupo.png"
import cabecalhoEditor from "./images/cabecalho-editor.png"
import editorNovo from "./images/editor-novo.png"

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
          text: "A segmentação é o recurso do RD Marketing que permite filtrar a base de contatos por critérios como comportamento, características e histórico de interações, para direcionar comunicações e campanhas ao público certo. É uma das funcionalidades mais utilizadas da plataforma: segundo dados do Mixpanel de 2024, é a **terceira página mais acessada de todo o produto**.",
        },
        {
          type: "figure",
          figure: {
            image: editorAntigo,
            label: "Editor antigo",
            alt: "Editor antigo de segmentação de leads em dois estados: vazio e com dois grupos de condições e o painel de resultados",
          },
          caption:
            "Editor antigo de segmentação de leads em dois estados: à esquerda, o editor vazio; à direita, uma segmentação com dois grupos de condições e o painel de resultados, que informa que nenhum lead atende aos critérios.",
        },
        {
          type: "p",
          text: "Apesar dessa relevância, o editor estava preso a uma **arquitetura legada** em que **qualquer alteração era custosa**, o que criava um gargalo:",
        },
        {
          type: "quote",
          text: "Os clientes pediam novos casos de uso com frequência, mas o time tinha dificuldade em entregá-los.",
        },
        {
          type: "p",
          text: "O projeto nasceu da convergência de duas necessidades: a engenharia precisava reestruturar o editor para reduzir esse custo, e o design queria levar a funcionalidade para a linguagem visual e os padrões atuais do produto.",
        },
      ],
    },
    {
      title: "Objetivo",
      blocks: [
        { type: "p", text: "O projeto tinha três frentes:" },
        {
          type: "list",
          items: [
            "**Viabilizar a evolução do editor**, reduzindo o custo de entregar novos casos de uso ao separar as regras de negócio da interface.",
            "**Modernizar a experiência**, alinhando o editor ao design atual do produto e endereçando pequenos atritos de usabilidade da versão antiga.",
            "**Estabelecer uma métrica de design** para o editor: já existiam dados de uso dos casos de uso e dos operadores, mas nenhum indicador alinhado à experiência.",
          ],
        },
        { type: "h3", text: "Como o sucesso seria medido" },
        {
          type: "list",
          items: [
            "**Engenharia:** tempo para disponibilizar um novo caso de uso no editor, que era de 2 a 3 meses (dependendo do caso) e tinha como objetivo passar para **2 semanas**. O time também poderia deixar de ser responsável pela construção e passar a apoiar a revisão de solicitações de outros times.",
            "**Design:** sem uma linha de base existente, um CSAT foi aplicado no editor antigo como ponto de comparação, com nota de 3,6, e um CSAT recorrente a cada 6 meses passaria a coletar feedback direto dos usuários no novo editor.",
          ],
        },
        {
          type: "stats",
          items: [
            {
              value: "2–3 meses",
              label: "Antes · tempo para entregar um novo caso de uso",
            },
            { value: "2 semanas", label: "Meta · com o editor reestruturado" },
            { value: "3,6", label: "CSAT do editor antigo · linha de base" },
          ],
        },
      ],
    },
    {
      title: "Pesquisa",
      blocks: [
        {
          type: "p",
          text: "O ponto de partida foram dados de usuários que já circulavam na empresa, como o canal de *voice of customer*, onde o time de CS compartilhava diariamente as dores dos clientes. Esses relatos traziam principalmente pedidos de novos casos de uso, com poucos comentários sobre a experiência em si.",
        },
        {
          type: "p",
          text: "Para entender como as pessoas realmente trabalhavam com segmentação, **foram realizadas entrevistas com clientes** dos planos Pro e Advanced **com alto uso da funcionalidade nos últimos três meses**, perfil com potencial maior de sentir os atritos da interface.",
        },
        {
          type: "p",
          text: "Em paralelo, um benchmark de concorrentes trouxe bom repertório, mas também **abordagens tão distintas entre si que geraram sobrecarga de decisão** sobre qual caminho seguir, um padrão que reapareceria mais adiante, quando começamos a atuar nos desenhos da solução.",
        },
        { type: "p", text: "As entrevistas revelaram dois níveis de achado:" },
        {
          type: "list",
          items: [
            "**Sobre a listagem:** a dor mais evidente. Com muitas segmentações criadas, elas se perdiam na lista, sem recursos de busca eficientes. Um cliente chegou a manter uma planilha própria, organizada por campanha e com o link de cada segmentação, resolvendo fora do produto o que o produto não oferecia.",
            "**Sobre o editor:** achados pontuais, como dúvidas sobre o funcionamento de alguns campos e o uso dos operadores, e pequenos atritos de usabilidade com potencial de correção pela aplicação dos componentes do Design System.",
          ],
        },
        {
          type: "p",
          text: "Como o escopo do projeto era o editor, os achados sobre a listagem foram documentados para uma oportunidade futura, e o restante das entrevistas, junto ao benchmark, serviu de base para a ideação.",
        },
      ],
    },
    {
      title: "Ideação",
      blocks: [
        {
          type: "p",
          text: "As propostas de ideação partiram da avaliação do editor atual, com foco em escalabilidade, e dos achados da rodada de entrevistas. Nas rodadas de critique, o time de design levou a discussão além do redesign previsto, questionando por que certos comportamentos do editor funcionavam daquela forma e propondo caminhos de alta complexidade, como a construção de segmentos por linguagem mais natural, em uma via conversacional.",
        },
        {
          type: "figure",
          figure: {
            image: boardCritique,
            label: "Board de critique",
            alt: "Board de critique com propostas do editor de segmentação de leads e post-its com insights e sugestões de melhoria",
          },
          caption:
            "Board de critique com propostas do editor de segmentação de leads e post-its que registram insights e sugestões de melhoria.",
        },
        {
          type: "p",
          text: "A priorização seguiu uma lógica de **desejabilidade x viabilidade**, com apoio da PM do produto. As ideias eram desejáveis e coerentes com uma evolução real do produto, mas de baixa viabilidade no momento: dependiam de validação e aprofundamento técnico que o prazo do projeto não permitia, e uma reestruturação de lógica nesse nível ampliaria significativamente o escopo, o que era inviável diante do objetivo principal.",
        },
        {
          type: "p",
          text: "Com esse critério, os insights se dividiram em dois caminhos:",
        },
        {
          type: "list",
          items: [
            "**Seguiram para a critique com engenharia:** insights de posicionamento, comunicação e fluxo, com viabilidade compatível com o prazo.",
            "**Foram documentados como oportunidade futura:** propostas de mudança estrutural, que exigiam um discovery mais aprofundado e se encaixavam melhor num momento em que a empresa já discutia a unificação entre frentes de produto, um contexto mais adequado do que o escopo atual, voltado a uma melhoria interna.",
          ],
        },
        {
          type: "p",
          text: "Com o escopo alinhado com o time de engenharia, validar essa direção com usuários se tornou uma etapa fundamental antes de avançar.",
        },
      ],
    },
    {
      title: "Validação",
      blocks: [
        {
          type: "p",
          text: "Foi conduzido um **teste de usabilidade moderado remoto**, com o mesmo perfil de público das entrevistas: clientes dos planos Pro e Advanced com alto uso de segmentações. O teste tinha três objetivos centrais:",
        },
        {
          type: "list",
          items: [
            "**Risco de entrega:** validar se as telas atualizadas do editor apresentavam algum risco para o usuário.",
            "**Novos recursos:** validar o entendimento e o sentimento em relação à ação de duplicar grupos, recurso adicionado nesta versão.",
            "**Mudanças de fluxo:** validar se a remoção da etapa de nomear a segmentação no início do fluxo gerava atrito.",
          ],
        },
        {
          type: "figurePair",
          // The crop is 176px wide: 800px column − 24px gap = 776px, 776 × 1/4.4 ≈ 176px
          widths: [3.4, 1],
          figures: [
            {
              image: editorFiltros,
              label: "Editor com opções de filtros",
              alt: "Editor de segmentação de leads com as opções de filtros abertas",
            },
            {
              image: duplicarGrupo,
              label: "Ação “Duplicar grupo”",
              alt: "Botão “Duplicar grupo” destacado no editor de segmentação",
            },
          ],
          caption:
            "À esquerda, o editor de segmentação de leads com as opções de filtros abertas. À direita, o botão “Duplicar grupo” destacado no editor.",
        },
        {
          type: "p",
          text: "A recepção geral foi positiva. Participantes associaram a nova aparência à atualização recente do editor de e-mail, que havia passado por um redesign, descrevendo-a como mais moderna e com mais personalidade.",
        },
        {
          type: "p",
          text: "A ação de duplicar grupos foi o ponto de maior destaque, gerando entusiasmo pela possibilidade de otimizar a rotina de criação de segmentações. Já a remoção do campo de nome no início do fluxo gerou preocupação: os participantes estavam habituados a pensar no nome como primeira etapa e temiam esquecer de nomear a segmentação, deixando o nome automático acumular na listagem.",
        },
        {
          type: "figure",
          figure: {
            image: cabecalhoEditor,
            label: "Cabeçalho do editor",
            alt: "Cabeçalho do editor de segmentação com nome automático, datas de criação e atualização e as ações “Salvar” e “Salvar e sair”",
          },
          caption:
            "Cabeçalho do editor de segmentação, com nome automático, datas de criação e atualização e as ações “Salvar” e “Salvar e sair”.",
        },
        {
          type: "p",
          text: "Esse feedback gerou um ajuste direto no fluxo. A proposta de abrir o editor com um nome automático foi mantida, mas passou a incluir **uma confirmação no momento de salvar**: se a pessoa não tiver editado o nome durante o uso, o editor pergunta se deseja manter o nome automático ou renomear a segmentação antes de concluir.",
        },
      ],
    },
    {
      title: "Resultados",
      blocks: [
        {
          type: "p",
          text: "O novo editor trouxe as seguintes mudanças de fluxo e recursos:",
        },
        {
          type: "list",
          items: [
            "**Nomeação automática:** a segmentação deixou de exigir nome como primeira etapa do fluxo. Agora recebe automaticamente o nome no formato “Segmentação dd-mm-aaaa hh:mm:ss”, editável a qualquer momento pelo header do editor ou pelo menu da listagem.",
            "**Confirmação ao salvar:** ao salvar com o nome automático ainda ativo, um modal de confirmação é exibido, permitindo preencher um novo nome ou seguir com o salvamento.",
            "**Datas de criação e atualização:** passaram a ser exibidas para cada lista.",
            "**Padronização de filtros:** as ações de filtro de data e outros recursos foram padronizadas para melhor aplicação e entendimento nos casos de uso.",
            "**Duplicar grupos:** novo recurso que reduz o retrabalho na construção de segmentos.",
          ],
        },
        {
          type: "p",
          text: "Durante a entrega, o produto passou por um redesign geral, o que exigiu atualizar a interface já proposta. O impacto foi pequeno porque a biblioteca do Design System já vinha sendo aplicada em toda a estrutura do editor, e o único ajuste necessário foi em um elemento customizado: a amostra de leads.",
        },
        {
          type: "figure",
          figure: {
            image: editorNovo,
            label: "Novo editor",
            alt: "Novo editor de segmentação de leads com o menu de categorias aberto e um grupo configurado com o filtro “Visitou a página”",
          },
          caption:
            "Editor de segmentação de leads em dois momentos: à esquerda, o menu de categorias aberto para criar uma condição; à direita, um grupo configurado com o filtro “Visitou a página” e a amostra de leads que atendem aos critérios.",
        },
        { type: "h3", text: "Estabilização e CSAT" },
        {
          type: "p",
          text: "O editor passou por uma fase de estabilização de 3 meses, do início da liberação para 100% da base até a última melhoria entregue. Nesse período, houve contato direto com o time de suporte para mapear casos reportados, e um CSAT foi aplicado por 2 meses, somando **64 respostas**. O resultado foi um padrão fortemente polarizado, concentrado nas notas 1 e 5, com média de **2,5**. Para efeito de comparação, o CSAT do editor antigo, aplicado em um período de avaliação mais curto, teve 182 respostas e média de 3,6.",
        },
        {
          type: "comparison",
          columns: ["CSAT", "Editor antigo", "Novo editor"],
          rows: [
            ["Média", "3,6", "2,5"],
            ["Respostas", "182", "64"],
            [
              "Período de aplicação",
              "Mais curto",
              "2 meses, durante a estabilização",
            ],
          ],
        },
        { type: "h3", text: "Por que a nota veio abaixo do esperado" },
        {
          type: "list",
          items: [
            "**Instabilidades técnicas e inconsistências** no funcionamento de filtros, associadas pelos usuários à nova interface.",
            "**Mudanças estruturais**, como remoção ou menor visibilidade de algumas informações, que aumentaram o esforço de uso.",
            "**Comportamentos já existentes da segmentação que o novo layout tornou mais evidentes**, revelando interpretações incorretas sobre o funcionamento da funcionalidade.",
            "**Ajustes pontuais de hierarquia visual**, incluindo a avaliação do Yay Forms, ferramenta de formulários integrada ao produto, competindo visualmente com os dados do lead na lateral do editor.",
          ],
        },
        {
          type: "p",
          text: "Apesar do resultado numérico, a recepção conceitual do novo editor foi positiva, especialmente em relação ao layout e à consistência com o restante do produto.",
        },
        {
          type: "p",
          text: "Considerando os comentários da pesquisa, sem contar bugs pontuais, os principais pontos de atrito apontados pelos usuários foram:",
        },
        {
          type: "list",
          items: [
            "Aumento no número de cliques para acessar informações do lead.",
            "Problemas na exibição completa das tags criadas.",
            "Campos personalizados sem a presença dos termos Enunciado e Nome.",
            "Largura reduzida da caixa de seleção, dificultando a leitura do conteúdo completo.",
            "Questões gerais relacionadas ao tamanho de elementos na tela.",
          ],
        },
        {
          type: "p",
          text: "Todas as questões levantadas foram resolvidas ainda no período de estabilização. Os dois últimos itens da lista foram encaminhados para estudo, por envolverem componentes do Design System ou não se tratarem de *quick wins*. Depois da estabilização, o volume de chamados voltou ao padrão natural, e o teor das dúvidas mudou: **menos perguntas sobre funcionamento, mais pedidos de novos casos de uso**.",
        },
        { type: "h3", text: "O que a nova base viabilizou" },
        {
          type: "p",
          text: "Mesmo com a percepção inicial abaixo do esperado, as mudanças estruturais do projeto viabilizaram entregas que a base antiga não permitiria:",
        },
        {
          type: "list",
          items: [
            "**Filtros de datas relativas:** um caso de uso muito demandado pelos clientes, lançado sem os meses de desenvolvimento que exigiria na arquitetura anterior, trazendo mais flexibilidade na busca pelo perfil ideal.",
            "**Texto de apoio universal:** um recurso de ajuda ao entendimento de cada filtro, com texto único e replicável para qualquer caso de uso. Antes, textos quase idênticos eram repetidos entre filtros diferentes, sem explicar o funcionamento com clareza, o que dificultava a curva de aprendizado do editor. Como a regra de exibição passou a viver no back-end, o front apenas exibe a informação no padrão definido, criando um modelo replicável para qualquer cenário futuro.",
          ],
        },
        {
          type: "p",
          text: "*Observação final: o CSAT recorrente, com aplicação prevista a cada 6 meses, ainda não havia atingido o novo ciclo de medição no momento de consolidação deste case.*",
        },
      ],
    },
    {
      title: "Minha atuação",
      blocks: [
        {
          type: "p",
          text: "Como **designer responsável pela entrega**, atuei da pesquisa à estabilização pós-lançamento, com foco em:",
        },
        {
          type: "list",
          items: [
            "**Pesquisa:** conduzi entrevistas com heavy users para entender rotina e pontos de atrito com a segmentação, além de um benchmark de concorrentes para mapear diferentes abordagens de mercado.",
            "**Priorização e ideação:** organizei e priorizei os insights de design a partir de uma lógica de desejabilidade x viabilidade, com apoio da PM do produto, e levei as propostas viáveis para critique técnica com engenharia, documentando as ideias estruturais como oportunidade futura.",
            "**UI e prototipação:** defini todas as telas e fluxos do novo editor, do wireframe à alta fidelidade, e produzi todo o material de handoff para o desenvolvimento.",
            "**Validação:** conduzi um teste de usabilidade moderado remoto para validar o novo fluxo e os recursos entregues, ajustando o fluxo de nomeação de segmentações a partir do feedback coletado.",
            "**Estabilização e acompanhamento:** mantive contato direto com o time de suporte durante os 3 meses de estabilização pós-rollout e acompanhei os resultados do CSAT para identificar causas de atrito e direcionar frentes de melhoria.",
          ],
        },
        {
          type: "p",
          text: "Esse projeto me permitiu passar por todos os ciclos de uma entrega: da fase inicial de estudos, passando por entrevistas e validações com clientes, até o acompanhamento pós-entrega, entendendo como a solução era recebida pelos usuários e traçando estratégias de melhoria e geração de backlog para o time.",
        },
      ],
    },
  ],
})
