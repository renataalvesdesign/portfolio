import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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

const issues = [
  { issue: "No. 24", title: "On Slow Reading", status: "Published", readers: "12,480" },
  { issue: "No. 25", title: "A Kitchen in Autumn", status: "Scheduled", readers: "—" },
  { issue: "No. 26", title: "Letters from Lisbon", status: "Draft", readers: "—" },
]

const usage = `import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function IssuesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Issue</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="text-right">Readers</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>No. 24</TableCell>
          <TableCell>On Slow Reading</TableCell>
          <TableCell className="text-right">12,480</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}`

const props: PropRow[] = [
  {
    name: "Table",
    type: "table attributes",
    description:
      "Root element. Wrapped in a container that scrolls horizontally when the table overflows.",
  },
  {
    name: "TableHeader / TableBody / TableFooter",
    type: "thead / tbody / tfoot attributes",
    description: "Row groups. The footer gets a muted background.",
  },
  {
    name: 'TableRow · data-state="selected"',
    type: "attribute",
    description: "Marks the row as selected and applies the muted background.",
  },
  {
    name: "TableHead / TableCell",
    type: "th / td attributes",
    description:
      "Cells do not wrap by default. Add text-right for numeric columns.",
  },
  {
    name: "TableCaption",
    type: "caption attributes",
    description: "Describes the table. Rendered below it in muted text.",
  },
  {
    name: "className",
    type: "string",
    description: "Every part accepts className to extend its styles.",
  },
]

function IssuesTable({ withFooter = false }: { withFooter?: boolean }) {
  return (
    <Table>
      {!withFooter && <TableCaption>Recent issues.</TableCaption>}
      <TableHeader>
        <TableRow>
          <TableHead>Issue</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Readers</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues.map((row) => (
          <TableRow key={row.issue}>
            <TableCell className="font-medium">{row.issue}</TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell className="text-right">{row.readers}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {withFooter && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total readers</TableCell>
            <TableCell className="text-right">12,480</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  )
}

export default function TableShowcase() {
  return (
    <ShowcasePage
      title="Table"
      description="Rows and columns for structured data, with optional caption and footer."
    >
      <Section title="Variants">
        <Preview className="grid gap-10 lg:grid-cols-2">
          <Example label="With caption" className="items-start">
            <IssuesTable />
          </Example>
          <Example label="With footer" className="items-start">
            <IssuesTable withFooter />
          </Example>
        </Preview>
      </Section>

      <Section
        title="States"
        description="Row states, pinned so they can be compared. Rows are not focusable on their own, and disabled is a className pattern rather than a built-in state."
      >
        <Preview>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>State</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>How</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-transparent">
                <TableCell className="font-medium">Default</TableCell>
                <TableCell>On Slow Reading</TableCell>
                <TableCell className="font-mono text-xs">—</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Hover</TableCell>
                <TableCell>A Kitchen in Autumn</TableCell>
                <TableCell className="font-mono text-xs">
                  hover:bg-muted/50
                </TableCell>
              </TableRow>
              <TableRow data-state="selected">
                <TableCell className="font-medium">Selected</TableCell>
                <TableCell>Letters from Lisbon</TableCell>
                <TableCell className="font-mono text-xs">
                  data-state=&quot;selected&quot;
                </TableCell>
              </TableRow>
              <TableRow
                aria-disabled="true"
                className="pointer-events-none text-muted-foreground"
              >
                <TableCell className="font-medium">Disabled</TableCell>
                <TableCell>The Winter Garden</TableCell>
                <TableCell className="font-mono text-xs">
                  text-muted-foreground pointer-events-none
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Preview>
      </Section>

      <Section title="On cream surface" description="Inside .surface-light the same component switches to the cream tokens.">
        <LightPreview>
          <IssuesTable withFooter />
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
