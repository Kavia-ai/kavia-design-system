import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/kavia/button";
import { Mail, Loader2 } from "lucide-react";
import { DevGuide } from "./DevGuide";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { children: "Button" } };
export const Destructive: Story = { args: { children: "Destructive", variant: "destructive" } };
export const Outline: Story = { args: { children: "Outline", variant: "outline" } };
export const Secondary: Story = { args: { children: "Secondary", variant: "secondary" } };
export const Ghost: Story = { args: { children: "Ghost", variant: "ghost" } };
export const Link: Story = { args: { children: "Link", variant: "link" } };

export const WithIcon: Story = {
  render: () => (
    <Button>
      <Mail className="mr-2 h-4 w-4" />
      Login with Email
    </Button>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center flex-wrap gap-2">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Button"
      description="Displays a button or a component that looks like a button. Supports multiple visual variants and sizes, can render as any element via the asChild prop."
      shadcnCommand="button"
      importCode={`import { Button } from "@/kavia/button";`}
      usageCode={`// Default button
<Button>Click me</Button>

// Variants
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Learn more</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Mail /></Button>

// With icon
<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>

// Loading state
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>

// Render as link (asChild)
<Button asChild>
  <a href="/home">Go Home</a>
</Button>`}
      preview={
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      }
      props={[
        { name: "variant", type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"default"', description: "Visual style variant of the button." },
        { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "Controls the size of the button." },
        { name: "asChild", type: "boolean", default: "false", description: "Merges props onto the immediate child element instead of rendering a <button>." },
        { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction and applies disabled styles." },
        { name: "onClick", type: "React.MouseEventHandler", description: "Click event handler." },
      ]}
      tokens={[
        { token: "--primary", value: "215 80% 48%", description: "Default button background." },
        { token: "--primary-foreground", value: "0 0% 100%", description: "Default button text color." },
        { token: "--secondary", value: "210 7% 95%", description: "Secondary button background." },
        { token: "--secondary-foreground", value: "228 6% 17%", description: "Secondary button text." },
        { token: "--destructive", value: "4 64% 48%", description: "Destructive button background." },
        { token: "--destructive-foreground", value: "0 0% 100%", description: "Destructive button text." },
        { token: "--accent", value: "214 91% 95%", description: "Ghost/hover background." },
        { token: "--ring", value: "216 81% 60%", description: "Focus ring color." },
        { token: "--radius", value: "0.5rem", description: "Button border radius." },
      ]}
      notes={[
        "Use asChild with <a> tags for accessible link buttons.",
        "Always provide a visible label or aria-label for icon-only buttons.",
        "The loading pattern uses disabled + Loader2 icon with animate-spin.",
        "Extends all native <button> HTML attributes.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
