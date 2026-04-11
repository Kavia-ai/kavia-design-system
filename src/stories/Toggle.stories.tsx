import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/kavia/toggle";
import { Bold, Italic, Underline } from "lucide-react";
import { DevGuide } from "./DevGuide";

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

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Toggle"
      description="A two-state button that can be either on or off. Commonly used for toolbar actions like bold, italic, and text alignment."
      shadcnCommand="toggle"
      importCode={`import { Toggle } from "@/kavia/toggle";`}
      usageCode={`import { Bold, Italic, Underline } from "lucide-react";

// Icon toggle
<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>

// Text toggle
<Toggle aria-label="Toggle underline">
  <Underline className="h-4 w-4" />
  Underline
</Toggle>

// Outline variant
<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>

// Controlled
<Toggle
  pressed={isPressed}
  onPressedChange={setIsPressed}
  aria-label="Toggle feature"
>
  Feature
</Toggle>`}
      preview={
        <div className="flex gap-2 flex-wrap">
          <Toggle aria-label="Toggle bold"><Bold className="h-4 w-4" /></Toggle>
          <Toggle variant="outline" aria-label="Toggle italic"><Italic className="h-4 w-4" /></Toggle>
          <Toggle aria-label="Toggle underline"><Underline className="h-4 w-4" />Underline</Toggle>
        </div>
      }
      props={[
        { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style variant." },
        { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Size of the toggle." },
        { name: "pressed", type: "boolean", description: "Controlled pressed state." },
        { name: "defaultPressed", type: "boolean", default: "false", description: "Uncontrolled initial pressed state." },
        { name: "onPressedChange", type: "(pressed: boolean) => void", description: "Callback when pressed state changes." },
        { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
        { name: "aria-label", type: "string", required: true, description: "Required for icon-only toggles for screen reader accessibility." },
      ]}
      tokens={[
        { token: "--accent", value: "214 91% 95%", description: "Pressed/active toggle background." },
        { token: "--accent-foreground", value: "215 80% 48%", description: "Pressed/active toggle text and icon color." },
        { token: "--border", value: "225 6% 87%", description: "Outline variant border color." },
        { token: "--ring", value: "216 81% 60%", description: "Focus ring color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Disabled state text color." },
      ]}
      notes={[
        "Always provide aria-label for icon-only toggles.",
        "For groups of mutually exclusive toggles, use ToggleGroup instead.",
        "Toggle renders as a <button> with aria-pressed for accessibility.",
        "Use size='icon' variant for compact icon-only buttons in toolbars.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
