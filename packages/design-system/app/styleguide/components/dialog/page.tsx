import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  CodeBlock,
  Example,
  Preview,
  PropsTable,
  Section,
  ShowcasePage,
  type PropRow,
} from "../showcase"

const usage = `import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ShareDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent closeLabel="Close">
        <DialogHeader>
          <DialogTitle>Share this case</DialogTitle>
          <DialogDescription>Anyone with the link can view it.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Copy link</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`

const props: PropRow[] = [
  {
    name: "Dialog · open / defaultOpen / onOpenChange",
    type: "boolean · (open: boolean) => void",
    description:
      "Controls the dialog. Leave them out and use DialogTrigger for an uncontrolled dialog.",
  },
  {
    name: "DialogTrigger / DialogClose",
    type: "button attributes · asChild",
    description:
      "Open and close the dialog. With asChild they pass the behavior to a Button.",
  },
  {
    name: "DialogContent · showCloseButton",
    type: "boolean",
    defaultValue: "true",
    description: "Shows the X button in the top-right corner.",
  },
  {
    name: "DialogContent · closeLabel",
    type: "string",
    defaultValue: '"Close"',
    description:
      "Accessible name of the X button. Translate it on multilingual sites.",
  },
  {
    name: "DialogTitle / DialogDescription",
    type: "Radix Title / Description",
    description:
      "Name and describe the dialog for screen readers. Always render a title; hide it with sr-only if it should not show.",
  },
  {
    name: "DialogHeader / DialogFooter",
    type: "div attributes",
    description:
      "Layout helpers. The footer stacks its buttons, primary on top, below sm and lines them up to the right above it.",
  },
  {
    name: "className",
    type: "string",
    description:
      "Every part accepts className. Add surface-light to DialogContent for the cream version.",
  },
]

export default function DialogShowcase() {
  return (
    <ShowcasePage
      title="Dialog"
      description="A modal window over the page for a task that needs the user's full attention. The rest of the page is inert until it closes."
    >
      <Section
        title="Examples"
        description="Open each example to see the panel. The overlay uses the darkest navy, so the panel reads on both surfaces."
      >
        <Preview className="flex flex-wrap gap-10">
          <Example label="Default">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share this case</DialogTitle>
                  <DialogDescription>
                    Anyone with the link can view it.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Copy link</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Example>

          <Example label="Without close button">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>Leave without saving?</DialogTitle>
                  <DialogDescription>
                    Your changes will be lost.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Stay</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button>Leave</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Example>

          <Example label="On cream surface">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open dialog</Button>
              </DialogTrigger>
              <DialogContent className="surface-light">
                <DialogHeader>
                  <DialogTitle>Share this case</DialogTitle>
                  <DialogDescription>
                    Anyone with the link can view it.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button>Copy link</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Example>
        </Preview>
      </Section>

      <Section title="Behavior">
        <ul className="flex max-w-2xl list-disc flex-col gap-2 pl-5 text-muted-foreground">
          <li>
            Focus moves into the dialog when it opens and stays there: Tab
            cycles through its controls.
          </li>
          <li>
            Esc, the X button or a click on the overlay closes it, and focus
            returns to the control that opened it.
          </li>
          <li>
            Below sm the panel takes the full width minus a 16px gutter, and it
            scrolls when it is taller than the screen.
          </li>
        </ul>
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
