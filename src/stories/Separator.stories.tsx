import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@/kavia/separator";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Separator",
  component: Separator,
};
export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-1 w-[300px]">
      <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
      <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Separator"
      description="Visually or semantically separates content. Renders as an <hr> (horizontal) or a styled div (vertical) with proper ARIA role."
      shadcnCommand="separator"
      importCode={`import { Separator } from "@/kavia/separator";`}
      usageCode={`// Horizontal separator (default)
<div>
  <p>Above</p>
  <Separator className="my-4" />
  <p>Below</p>
</div>

// Vertical separator (inline items)
<div className="flex items-center gap-4 h-5">
  <span>Blog</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>Source</span>
</div>

// Decorative (hidden from screen readers)
<Separator decorative />`}
      preview={
        <div className="space-y-4 w-full max-w-xs">
          <div>
            <p className="text-sm">Section A</p>
            <Separator className="my-3" />
            <p className="text-sm">Section B</p>
          </div>
          <div className="flex items-center h-5 gap-4 text-sm">
            <span>Blog</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>API</span>
          </div>
        </div>
      }
      props={[
        { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Orientation of the separator." },
        { name: "decorative", type: "boolean", default: "false", description: "When true, hides from screen readers (role='none'). Use for purely visual dividers." },
        { name: "className", type: "string", description: "Additional classes for sizing (vertical needs explicit height)." },
      ]}
      tokens={[
        { token: "--border", value: "225 6% 87%", description: "Separator line color." },
      ]}
      notes={[
        "Vertical separators need a parent with a defined height and flex/grid layout.",
        "Use decorative when the separator is purely visual — it removes it from the accessibility tree.",
        "For section headers, a Separator below the heading is common pattern.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
