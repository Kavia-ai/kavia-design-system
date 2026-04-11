import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/kavia/badge";
import { DevGuide } from "./DevGuide";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "Badge" } };
export const Secondary: Story = { args: { children: "Secondary", variant: "secondary" } };
export const Destructive: Story = { args: { children: "Destructive", variant: "destructive" } };
export const Outline: Story = { args: { children: "Outline", variant: "outline" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Badge"
      description="Displays a small status indicator or label. Commonly used to highlight states, counts, or categories on UI elements."
      shadcnCommand="badge"
      importCode={`import { Badge } from "@/kavia/badge";`}
      usageCode={`<Badge>New</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Draft</Badge>`}
      preview={
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      }
      props={[
        { name: "variant", type: '"default" | "secondary" | "destructive" | "outline"', default: '"default"', description: "Visual style variant of the badge." },
        { name: "className", type: "string", description: "Additional CSS classes to apply." },
      ]}
      tokens={[
        { token: "--primary", value: "215 80% 48%", description: "Default badge background." },
        { token: "--primary-foreground", value: "0 0% 100%", description: "Default badge text." },
        { token: "--secondary", value: "210 7% 95%", description: "Secondary badge background." },
        { token: "--secondary-foreground", value: "228 6% 17%", description: "Secondary badge text." },
        { token: "--destructive", value: "4 64% 48%", description: "Destructive badge background." },
        { token: "--destructive-foreground", value: "0 0% 100%", description: "Destructive badge text." },
        { token: "--border", value: "225 6% 87%", description: "Outline badge border color." },
        { token: "--radius", value: "0.5rem", description: "Badge border radius." },
      ]}
      notes={[
        "Badge renders as a <div> by default — wrap in a <span> if inline placement is needed.",
        "Use variant='destructive' for errors or critical counts.",
        "Combine with asChild to render the badge as an <a> or other element.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
