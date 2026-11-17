# Projetos e cases

Fonte única dos projetos do site. A Home, a página Projetos, a página Sobre
(cases relacionados) e as páginas de case (`/[lang]/projetos/<slug>`) leem
daqui. Nenhum texto de projeto fica nos dicionários.

```
content/projects/
  index.ts                 ← lista de todos os projetos (1 linha por projeto)
  <slug>/
    project.ts             ← metadados (pt e en): card, hero e SEO
    case.ts                ← corpo do case (opcional: sem ele, a página mostra "conteúdo pendente")
    images/
      capa.png             ← capa (card, hero e compartilhamento)
      …                    ← imagens do corpo
```

## Adicionar um case

1. Crie a pasta `content/projects/<slug>/` (slug em minúsculas com hífens; vira a URL).
2. Copie `abertura-de-conta-pj/project.ts` e preencha os campos (tabela abaixo).
3. Salve a capa em `images/capa.png` (ideal 1920×1080, 16:9).
4. Copie `abertura-de-conta-pj/case.ts` como `case.ts` e escreva o corpo.
   Para publicar só o card por enquanto, use `defineCase({ status: "pending", lang: "pt" })`.
5. Em `index.ts`, importe o `project.ts` e adicione-o à lista `allProjects`.
6. Rode `npm run build`. Dados incompletos ou inválidos fazem o build falhar
   com uma mensagem `[projetos] …`; cases pendentes e imagens a inserir geram aviso.

Todo projeto listado tem página e entra na navegação "Anterior"/"Próximo".
Sem `case.ts`, a página mostra o topo e o aviso de conteúdo pendente, como os
de e-commerce hoje.

## Campos de `project.ts`

| Campo                 | Obrigatório | Uso                                                                                                                                                              |
| --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`                | sim         | URL da página. Único.                                                                                                                                            |
| `order`               | sim         | Posição (1, 2, 3…). Define o número do card ("02"), a ordem nas listas e os links "Anterior"/"Próximo". Único.                                                   |
| `group`               | sim         | `"selected"` (Home + 1º grupo de Projetos) ou `"ecommerce"`. Novos grupos: `projectGroups` em `lib/projects/schema.ts` e `projects.groupTitles` nos dicionários. |
| `company`, `year`     | sim         | Card e hero ("Case · XP Inc. · 2023").                                                                                                                           |
| `cover`               | não         | `import cover from "./images/capa.png"`. Sem ela, aparece um placeholder.                                                                                        |
| `body`                | não         | `import body from "./case"`. Sem ele, a página mostra "conteúdo pendente".                                                                                       |
| `text.pt` / `text.en` | sim         | Textos em cada idioma:                                                                                                                                           |
| ↳ `title`             | sim         | Título do card, do hero e da aba.                                                                                                                                |
| ↳ `summary`           | sim         | Descrição do card; também é o subtítulo do hero e a descrição de SEO.                                                                                            |
| ↳ `roleSummary`       | sim         | Linha de papel do card ("Designer responsável pela entrega, …"); também é o "Papel" do hero.                                                                     |
| ↳ `tags`              | sim         | Etiquetas do card (3); também são os primeiros chips do hero do case.                                                                                            |
| ↳ `skills`            | não         | Demais skills, só no hero do case, atrás do chip "+N". Tags + skills: até 10; o que faltar aparece como "Skill a inserir".                                       |
| ↳ `coverAlt`          | sim         | Texto alternativo da capa.                                                                                                                                       |

## Corpo do case (`case.ts`)

```ts
export default defineCase({
  status: "published", // ou "pending" (mostra aviso de conteúdo pendente, fica fora do Google)
  lang: "pt", // idioma do corpo
  sections: [{ title: "Visão geral", blocks: [/* blocos */] }],
})
```

Cada seção vira um `h2` com âncora gerada do título (`"Visão geral"` → `#visao-geral`)
e uma entrada no índice lateral. Use `id: "…"` para fixar outra âncora.

Nos textos, `**negrito**` e `*itálico*` funcionam. Nada mais é interpretado.

### Blocos

| Bloco                | Exemplo                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| Parágrafo            | `{ type: "p", text: "Texto com **destaque**." }`                                                               |
| Subtítulo (h3)       | `{ type: "h3", text: "1. Mapear a jornada" }`                                                                  |
| Lista                | `{ type: "list", items: ["…", "…"], ordered?: true }`                                                          |
| Figura               | `{ type: "figure", figure: { image?, alt, label, ratio? }, caption?: "…" }`                                    |
| Par de figuras       | `{ type: "figurePair", figures: [{…}, {…}], caption?: "…" }`                                                   |
| Frase em destaque    | `{ type: "quote", text: "…" }`                                                                                 |
| Números antes/depois | `{ type: "stats", items: [{ value: "~31 dias", label: "Antes · …" }, …] }` (2 a 4)                             |
| Tabela comparativa   | `{ type: "comparison", columns: ["Indicador", "Antes", "Depois"], rows: [["…", "…", "…"]], footnote?: "* …" }` |

**Imagens.** Salve em `images/` e importe no topo do `case.ts`:

```ts
import fluxograma from "./images/fluxograma.png"
// …
{ type: "figure", figure: { image: fluxograma, alt: "Fluxograma do novo processo", label: "Fluxograma" } }
```

Sem `image`, a figura mostra "Imagem a inserir · <label>" no mesmo formato
(`ratio`, padrão `"16/9"`). Largura, altura e carregamento sob demanda vêm do import.

## Automático (não preencha à mão)

- Rota e geração estática de cada case; slug inexistente → 404.
- Número do card, ordem nas listas, links "Anterior" e "Próximo" no fim da página (o primeiro e o último se ligam).
- Índice lateral (seções). O tempo de leitura do hero ainda é um placeholder ("00 minutos").
- Título, descrição e imagem de compartilhamento (Open Graph) da página.
- Links da Home, de Projetos e de Sobre para a página do case.
