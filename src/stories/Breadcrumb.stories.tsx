import type { Meta, StoryObj } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/kavia/breadcrumb";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Breadcrumb"
      description="Displays the path to the current resource using a hierarchy of links. Helps users understand their location within an app and navigate back."
      shadcnCommand="breadcrumb"
      importCode={`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/kavia/breadcrumb";`}
      usageCode={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Components</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

// With collapsed items (use BreadcrumbEllipsis)
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      preview={
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      }
      props={[
        { name: "href", type: "string", description: "(BreadcrumbLink) The link URL." },
        { name: "asChild", type: "boolean", description: "(BreadcrumbLink) Render as child element, e.g., Next.js <Link>." },
        { name: "separator", type: "ReactNode", description: "(BreadcrumbSeparator) Custom separator icon." },
      ]}
      tokens={[
        { token: "--foreground", value: "228 6% 17%", description: "Current page (BreadcrumbPage) text color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Link and separator text color." },
        { token: "--border", value: "225 6% 87%", description: "Separator color." },
        { token: "--ring", value: "216 81% 60%", description: "Link focus ring color." },
      ]}
      notes={[
        "BreadcrumbPage marks the current page — it renders as a <span> with aria-current='page'.",
        "For Next.js, use asChild on BreadcrumbLink: <BreadcrumbLink asChild><Link href='/'>…</Link></BreadcrumbLink>.",
        "The <Breadcrumb> root renders a <nav aria-label='breadcrumb'> for accessibility.",
        "Use BreadcrumbEllipsis with a dropdown to collapse long paths on mobile.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
