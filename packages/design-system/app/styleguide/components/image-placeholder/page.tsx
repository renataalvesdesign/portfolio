import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import {
  CodeBlock,
  LightPreview,
  Example,
  Preview,
  PropsTable,
  Section,
  ShowcasePage,
  type PropRow,
} from "../showcase"

const usage = `import { ImagePlaceholder } from "@/components/ui/image-placeholder"

export function CaseCover() {
  return (
    <ImagePlaceholder
      alt="Segmentação de leads — tela do editor"
      label="Imagem em breve"
      className="aspect-video rounded-xl"
    />
  )
}`

const props: PropRow[] = [
  {
    name: "alt",
    type: "string",
    description:
      "Describes the image that will replace the placeholder. Read by screen readers (role=img).",
  },
  {
    name: "label",
    type: "string",
    description: "Optional visible caption under the icon.",
  },
  {
    name: "className",
    type: "string",
    description:
      "Sets the size and shape: an aspect ratio (aspect-video, aspect-square, aspect-4/5) and a radius.",
  },
]

export default function ImagePlaceholderShowcase() {
  return (
    <ShowcasePage
      title="Image Placeholder"
      description="Holds the space of an image that is not ready yet, keeping layouts at their final proportions."
    >
      <Section
        title="Variants"
        description="The ratio comes from className, so the placeholder matches the final image."
      >
        <Preview className="grid grid-cols-3 items-start gap-6">
          <Example label="Landscape · aspect-video" className="block">
            <ImagePlaceholder
              alt="Landscape image"
              label="Imagem em breve"
              className="aspect-video rounded-xl"
            />
          </Example>
          <Example label="Square · aspect-square" className="block">
            <ImagePlaceholder
              alt="Square image"
              label="Imagem em breve"
              className="aspect-square rounded-xl"
            />
          </Example>
          <Example label="Portrait · aspect-4/5" className="block">
            <ImagePlaceholder
              alt="Portrait image"
              label="Imagem em breve"
              className="aspect-4/5 rounded-xl"
            />
          </Example>
        </Preview>
      </Section>

      <Section
        title="States"
        description="With or without a visible caption. The alt text is always required."
      >
        <Preview className="grid grid-cols-2 gap-6">
          <Example label="With label" className="block">
            <ImagePlaceholder
              alt="Case cover"
              label="Imagem em breve"
              className="aspect-video rounded-lg"
            />
          </Example>
          <Example label="Icon only" className="block">
            <ImagePlaceholder
              alt="Case cover"
              className="aspect-video rounded-lg"
            />
          </Example>
        </Preview>
      </Section>

      <Section
        title="On cream surface"
        description="Uses the muted tokens, so on cream it becomes a darker sand block."
      >
        <LightPreview className="grid grid-cols-2 gap-6">
          <ImagePlaceholder
            alt="Portrait"
            label="Imagem em breve"
            className="aspect-4/5 rounded-lg"
          />
          <ImagePlaceholder
            alt="Case cover"
            label="Imagem em breve"
            className="aspect-video rounded-lg"
          />
        </LightPreview>
      </Section>

      <Section title="Usage">
        <CodeBlock code={usage} />
      </Section>

      <Section title="Props">
        <PropsTable rows={props} />
      </Section>
    </ShowcasePage>
  )
}
