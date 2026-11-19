import { defineCase } from "@/lib/projects/schema"
import postItsEntrevistas from "./images/post-its-entrevistas.png"
import jornadaAsIs from "./images/jornada-as-is.png"
import fluxograma from "./images/fluxograma.png"
import fluxoUpload from "./images/fluxo-upload.png"
import fluxoEnvioDocumentos from "./images/fluxo-envio-documentos.png"
import fluxoStatus from "./images/fluxo-status.png"
import versaoDesktop from "./images/versao-desktop.png"

// Conteúdo extraído da página do case no Notion (versão em português).
// Case de referência: usa todos os tipos de bloco. Copie-o para começar um
// novo case (veja content/projects/README.md).

export default defineCase({
  status: "published",
  lang: "pt",
  sections: [
    {
      title: "Visão geral",
      blocks: [
        {
          type: "p",
          text: "O **XP Empresas** é uma plataforma de serviços financeiros da **XP Investimentos**, criada para apoiar empresas de todos os portes. Reúne soluções de gestão financeira, crédito e investimentos, com foco em otimizar o fluxo de caixa e maximizar os resultados do negócio.",
        },
        {
          type: "p",
          text: "Uma pesquisa anterior mostrou que a **jornada de abertura de conta PJ era excessivamente complexa e ineficiente**. Apesar da robustez da oferta da plataforma, o onboarding **envolvia diversas etapas manuais entre diferentes times**, o que gerava atrasos significativos e falta de visibilidade tanto para os clientes quanto para as áreas internas.",
        },
        {
          type: "p",
          text: "Este case explora como **redefinimos e redesenhamos a experiência de envio de documentos e acompanhamento de status**, a primeira etapa crítica na transformação da jornada de onboarding do XP Empresas.",
        },
      ],
    },
    {
      title: "Objetivos",
      blocks: [
        {
          type: "p",
          text: "O principal objetivo era **repensar e melhorar o processo de abertura de conta, com foco em reduzir o lead time e identificar os principais pontos de dor**. No início, não tínhamos clareza sobre qual parte do fluxo exigia mais atenção, então o primeiro passo foi entender a fundo a jornada completa.",
        },
        { type: "p", text: "O time alinhou três objetivos estratégicos:" },
        { type: "h3", text: "1. Mapear a jornada atual de ponta a ponta" },
        {
          type: "p",
          text: "O processo de onboarding envolvia vários departamentos, cada um com ferramentas, responsabilidades e expectativas diferentes. Criar um mapa detalhado da jornada *as-is*, incluindo tanto os handoffs internos quanto os pontos de contato com o cliente, foi essencial para construir um entendimento compartilhado e estabelecer uma linha de base para a mudança.",
        },
        { type: "h3", text: "2. Validar e ampliar a pesquisa anterior" },
        {
          type: "p",
          text: "Um estudo anterior já havia identificado ineficiências gerais, como alto esforço manual e lentidão no processamento, mas não trazia insights sobre as nuances operacionais nem sobre as atualizações mais recentes do processo. Como havia **indícios de melhorias pontuais** sendo feitas internamente, conduzimos **entrevistas com usuários e stakeholders** para verificar o que havia mudado e identificar novos pontos de dor e oportunidades.",
        },
        {
          type: "h3",
          text: "3. Identificar oportunidades de melhoria e redesenhar os principais pontos de dor",
        },
        {
          type: "p",
          text: "Embora o escopo não abrangesse toda a jornada de onboarding, focamos em um dos pontos de contato mais críticos como **ponto de partida estratégico**. O objetivo era desenhar uma solução **mais simples, transparente e escalável**, que **reduzisse a carga de trabalho interna** e, ao mesmo tempo, **melhorasse a experiência do cliente**.",
        },
      ],
    },
    {
      title: "Pesquisa",
      blocks: [
        {
          type: "p",
          text: "Para iniciar o processo, conduzimos **entrevistas com os principais stakeholders** de todas as áreas envolvidas: Marketing, Atendimento ao Cliente, Assessores de Investimentos, Abertura de Contas e Compliance.",
        },
        {
          type: "p",
          text: "Essas conversas trouxeram diversos insights críticos:",
        },
        {
          type: "list",
          items: [
            "**O tempo médio entre o pré-cadastro e a ativação da conta era de aproximadamente 31 dias.**",
            "Todos os clientes seguiam o mesmo processo, independentemente do risco ou do perfil do negócio.",
            "A jornada havia mudado significativamente desde o último mapeamento, **sem nenhuma documentação clara**.",
            "Novos papéis e participantes foram descobertos ao longo do processo.",
            "**Sobreposições de responsabilidade e falhas nos handoffs** causavam atrasos frequentes e ruídos de comunicação.",
          ],
        },
        {
          type: "figure",
          figure: {
            image: postItsEntrevistas,
            label: "Post-its virtuais das entrevistas",
            alt: "Post-its virtuais com citações, insights e observações das entrevistas com stakeholders",
          },
          caption:
            "Post-its virtuais evidenciando citações, insights e observações das entrevistas com stakeholders.",
        },
        {
          type: "p",
          text: "Essas informações nos permitiram construir um mapa detalhado da **jornada “as-is”**, refletindo tanto as ações visíveis ao cliente quanto os fluxos de trabalho de bastidores. O mapa ajudou a revelar onde a coordenação falhava e onde os atrasos do processo se concentravam.",
        },
        {
          type: "figure",
          figure: {
            image: jornadaAsIs,
            label: "Jornada as-is ponta a ponta",
            alt: "Mapa da jornada atual de abertura de conta, com as equipes internas e os pontos de contato com o cliente",
          },
          caption:
            "Representação da jornada atual, abrangendo todas as equipes internas e os pontos de contato com o cliente.",
        },
      ],
    },
    {
      title: "Ideação",
      blocks: [
        {
          type: "quote",
          text: "A etapa de envio de documentos era a parte mais fragmentada e a que mais consumia recursos no onboarding.",
        },
        {
          type: "p",
          text: "Com uma compreensão clara da jornada atual, ficou evidente que a **etapa de envio de documentos** era a parte mais fragmentada e que mais consumia recursos no processo de onboarding. Os clientes frequentemente ficavam em dúvida sobre quais documentos eram necessários, como enviá-los e quanto tempo levaria a aprovação. Internamente, essas lacunas resultavam em retrabalho, acompanhamentos inconsistentes e expectativas desalinhadas.",
        },
        {
          type: "p",
          text: "O passo seguinte foi esboçar **diversas versões de todo o fluxo de abertura de conta**, e não apenas da etapa de envio de documentos. Essa visão mais ampla ajudou a entender como todas as etapas se conectavam e permitiu que o time removesse, de forma intencional, tudo o que não era essencial para o escopo atual. O objetivo era evitar retrabalho no futuro, garantindo que o novo fluxo pudesse servir como uma base escalável.",
        },
        {
          type: "figure",
          figure: {
            image: fluxograma,
            label: "Fluxograma do novo processo",
            alt: "Fluxograma proposto para o novo processo de abertura de conta",
          },
          caption: "Proposta de fluxo para o novo processo.",
        },
        {
          type: "p",
          text: "Depois que a estrutura foi aprovada pelo Product Manager responsável pelo projeto, seguimos para o design de interface. Optamos por uma abordagem *mobile-first*. Muitos clientes do XP Empresas, especialmente as pequenas e médias empresas, que mais se beneficiariam dessa experiência aprimorada, tendem a gerenciar suas operações financeiras pelo celular. Começar pelo mobile ajudou a reduzir atritos no ambiente mais restrito, focar nas ações críticas e garantir uma escala responsiva para o desktop posteriormente. Essa decisão também estava alinhada à estratégia mais ampla do produto, voltada para agilidade e design centrado no usuário.",
        },
        {
          type: "p",
          text: "A partir dessa base, o time fez um brainstorming de melhorias para aprimorar a experiência:",
        },
        {
          type: "list",
          items: [
            "Um fluxo de upload de documentos guiado, no formato de checklist.",
            "Atualizações de status e feedbacks de validação em tempo real.",
            "Próximos passos claros e um canal de suporte acessível.",
          ],
        },
        {
          type: "p",
          text: "Essas ideias foram traduzidas em **wireframes de média fidelidade**, priorizando clareza, simplicidade e integração com os sistemas internos. Os wireframes foram então apresentados em sessões de crítica com stakeholders, nas quais o feedback multidisciplinar orientou a rodada seguinte de iteração.",
        },
      ],
    },
    {
      title: "Validação",
      blocks: [
        {
          type: "p",
          text: "Foram realizadas duas rodadas de testes e critiques.",
        },
        {
          type: "h3",
          text: "Critiques multidisciplinares com participantes das entrevistas iniciais",
        },
        {
          type: "list",
          items: [
            "Coletamos feedback sobre viabilidade, clareza e integração com os sistemas existentes.",
            "Os stakeholders ajudaram a validar requisitos de back-end e casos de borda (*edge cases*).",
            "Os padrões de comunicação com os clientes foram refinados com base nos insights do time.",
          ],
        },
        {
          type: "h3",
          text: "Critique interna de design com protótipos de alta fidelidade",
        },
        {
          type: "list",
          items: [
            "O foco foi em consistência, hierarquia visual e tom de voz.",
            "Identificamos e trabalhamos oportunidades para reduzir a carga cognitiva.",
            "Validamos o alinhamento com o design system da XP.",
          ],
        },
        {
          type: "figure",
          figure: {
            image: fluxoUpload,
            label: "Fluxo de upload de documentos",
            alt: "Telas do fluxo de upload de documentos nos protótipos de alta fidelidade",
          },
          caption:
            "Fluxo de upload de documentos nos protótipos de alta fidelidade.",
        },
      ],
    },
    {
      title: "Resultados",
      blocks: [
        {
          type: "p",
          text: "Como resultado desse trabalho, entregamos um **novo fluxo de envio de documentos** que incluía:",
        },
        {
          type: "list",
          items: [
            "Uma experiência de upload guiada.",
            "Acompanhamento de status em tempo real para os usuários.",
            "Responsabilidades internas claras em cada etapa.",
            "Redução de retrabalho e de sobrecarga desnecessária para os times internos.",
            "Um design escalável, pronto para as próximas etapas de evolução.",
          ],
        },
        { type: "h3", text: "Primeiros sinais de impacto" },
        {
          type: "p",
          text: "Os feedbacks iniciais dos stakeholders e os testes internos de QA indicaram melhorias importantes em relação ao cenário mapeado na pesquisa:",
        },
        {
          type: "stats",
          items: [
            {
              value: "~31 dias",
              label: "Antes · tempo até a ativação da conta",
            },
            { value: "~18 dias*", label: "Depois · estimativa avaliada" },
            {
              value: "Tempo real",
              label: "Visibilidade do status, antes inexistente",
            },
          ],
        },
        {
          type: "comparison",
          columns: ["Indicador", "Antes", "Depois"],
          rows: [
            [
              "Tempo até a ativação da conta",
              "~31 dias",
              "Estimativa avaliada em ~18 dias*",
            ],
            ["Visibilidade do status", "Nenhuma", "Em tempo real"],
            ["Responsabilidade entre times", "Sobreposta", "Clara por etapa"],
            [
              "Esforço manual dos times internos",
              "Alto e com atividades duplicadas",
              "Reduzido, com intervenções pontuais",
            ],
          ],
          footnote:
            "* A estimativa foi baseada na redução do trabalho manual que ocorria anteriormente. Não elimina problemas na documentação enviada pelo cliente nem no tempo hábil para aplicar as correções necessárias indicadas pelo sistema.",
        },
        {
          type: "figure",
          figure: {
            image: fluxoEnvioDocumentos,
            label: "Etapa inicial: envio de documentos",
            alt: "Telas da etapa inicial do cadastro, com o envio dos documentos necessários para validação",
          },
          caption:
            "Etapa inicial do cadastro, dedicada ao envio dos documentos necessários para validação.",
        },
        {
          type: "figure",
          figure: {
            image: fluxoStatus,
            label: "Acompanhamento de status",
            alt: "Telas de acompanhamento do status dos documentos, com orientações sobre ajustes em caso de reprovação",
          },
          caption:
            "Acompanhamento do status dos documentos e orientações sobre os ajustes necessários em caso de reprovação.",
        },
        {
          type: "figure",
          figure: {
            image: versaoDesktop,
            label: "Versão desktop",
            alt: "Versão desktop do fluxo de envio de documentos",
          },
          caption:
            "Adaptação da experiência mobile-first para desktop, aproveitando melhor o espaço disponível.",
        },
      ],
    },
    {
      title: "Minha atuação",
      blocks: [
        {
          type: "p",
          text: "Como **designer líder responsável pela entrega**, atuei da descoberta à entrega final, com foco em:",
        },
        {
          type: "list",
          items: [
            "**Pesquisa:** organizei materiais e apoiei a condução de entrevistas e dinâmicas com stakeholders, colaborando com UX Research na definição da abordagem, síntese de insights e documentação.",
            "**Jornadas e fluxos:** liderei a construção do novo fluxo, identificando pontos de fricção e propondo melhorias estruturais a partir da experiência mapeada.",
            "**UI e prototipação:** criei wireframes, telas de alta fidelidade e protótipos interativos, adotando uma abordagem mobile-first.",
            "**Alinhamento e documentação:** organizei críticas de design, consolidei feedbacks e documentei decisões e especificações para o handoff com desenvolvimento.",
          ],
        },
        {
          type: "p",
          text: "O projeto me permitiu **assumir a liderança de uma entrega crítica**, combinando profundidade estratégica em pesquisa com qualidade na execução do design.",
        },
      ],
    },
  ],
})
