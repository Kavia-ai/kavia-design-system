import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = { render: () => <Toggle aria-label="Toggle bold"><Bold className="h-4 w-4" /></Toggle> };
export const Outline: Story = { render: () => <Toggle variant="outline" aria-label="Toggle italic"><Italic className="h-4 w-4" /></Toggle> };
export const WithText: Story = { render: () => <Toggle aria-label="Toggle underline"><Underline className="h-4 w-4" />Underline</Toggle> };
export const Disabled: Story = { render: () => <Toggle disabled aria-label="Toggle bold"><Bold className="h-4 w-4" /></Toggle> };

export const Toolbar: Story = {
  render: () => (
    <div className="flex gap-1">
      <Toggle aria-label="Toggle bold"><Bold className="h-4 w-4" /></Toggle>
      <Toggle aria-label="Toggle italic"><Italic className="h-4 w-4" /></Toggle>
      <Toggle aria-label="Toggle underline"><Underline className="h-4 w-4" /></Toggle>
    </div>
  ),
};
