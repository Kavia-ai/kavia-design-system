import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/kavia/pagination";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Pagination",
  component: Pagination,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Pagination"
      description="Pagination with page navigation, next and previous links. Renders as a nav element with proper aria-label for accessibility."
      shadcnCommand="pagination"
      importCode={`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/kavia/pagination";`}
      usageCode={`// Static pagination
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/page/1" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/1">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/2" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/page/3">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/page/3" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

// Dynamic (onClick-based)
<PaginationLink onClick={() => setPage(3)}>3</PaginationLink>
<PaginationNext onClick={() => setPage(p => p + 1)} />`}
      preview={
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
            <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem><PaginationNext href="#" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      }
      props={[
        { name: "href", type: "string", description: "(PaginationLink/Previous/Next) URL for the page link." },
        { name: "isActive", type: "boolean", default: "false", description: "(PaginationLink) Marks the current page with active styling." },
        { name: "size", type: "string", default: '"icon"', description: "(PaginationLink) Button size variant." },
      ]}
      tokens={[
        { token: "--foreground", value: "228 6% 17%", description: "Page link text color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Inactive/disabled link color." },
        { token: "--border", value: "225 6% 87%", description: "Active page button border." },
        { token: "--primary", value: "215 80% 48%", description: "Active page link background/text." },
        { token: "--accent", value: "214 91% 95%", description: "Hover background for page links." },
      ]}
      notes={[
        "Use href for link-based routing (Next.js, React Router). For SPA pagination, use onClick.",
        "PaginationEllipsis is decorative — manage which page numbers to show in your logic.",
        "For large page counts, show first, last, and pages around the current page.",
        "PaginationPrevious/Next accept all PaginationLink props and add arrow icons automatically.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
