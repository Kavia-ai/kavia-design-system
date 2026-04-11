import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "@/kavia/toggle-group";
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from "lucide-react";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
};
export default meta;
type Story = StoryObj;

export const Single: Story = {
  render: () => (
    <ToggleGroup type="single">
      <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Outline: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
      <ToggleGroupItem value="right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="ToggleGroup"
      description="A set of two-state buttons that can be toggled on or off. Supports single (radio-like) and multiple selection modes."
      shadcnCommand="toggle-group"
      importCode={`import { ToggleGroup, ToggleGroupItem } from "@/kavia/toggle-group";`}
      usageCode={`import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

// Single selection (radio-like)
<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>

// Multiple selection
<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
  <ToggleGroupItem value="underline">U</ToggleGroupItem>
</ToggleGroup>

// Controlled
<ToggleGroup
  type="single"
  value={alignment}
  onValueChange={setAlignment}
>
  ...
</ToggleGroup>`}
      preview={
        <div className="space-y-3">
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Bold"><Bold className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic"><Italic className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline"><Underline className="h-4 w-4" /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      }
      props={[
        { name: "type", type: '"single" | "multiple"', required: true, description: 'Selection mode. "single" = one active item, "multiple" = many.' },
        { name: "value", type: "string | string[]", description: "Controlled selected value(s)." },
        { name: "defaultValue", type: "string | string[]", description: "Uncontrolled initial value(s)." },
        { name: "onValueChange", type: "(value: string | string[]) => void", description: "Callback when selection changes." },
        { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style for all items." },
        { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Size for all items." },
        { name: "disabled", type: "boolean", default: "false", description: "Disables all items." },
      ]}
      tokens={[
        { token: "--accent", value: "214 91% 95%", description: "Active/pressed item background color." },
        { token: "--accent-foreground", value: "215 80% 48%", description: "Active/pressed item text and icon color." },
        { token: "--border", value: "225 6% 87%", description: "Outline variant border and item separator." },
        { token: "--primary", value: "215 80% 48%", description: "Active item color in filled variant." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Disabled item text color." },
      ]}
      notes={[
        "Always provide aria-label on icon-only ToggleGroupItems.",
        'For type="single", value is a string. For type="multiple", it\'s string[].',
        "Individual ToggleGroupItems can be disabled while others remain active.",
        "Use variant='outline' for a bordered, more distinct appearance.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
