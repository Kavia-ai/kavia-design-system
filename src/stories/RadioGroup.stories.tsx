import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "@/kavia/radio-group";
import { Label } from "@/kavia/label";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="RadioGroup"
      description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
      shadcnCommand="radio-group"
      importCode={`import { RadioGroup, RadioGroupItem } from "@/kavia/radio-group";
import { Label } from "@/kavia/label";`}
      usageCode={`// Basic radio group
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="o1" />
    <Label htmlFor="o1">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="o2" />
    <Label htmlFor="o2">Option Two</Label>
  </div>
</RadioGroup>

// Controlled
<RadioGroup value={selected} onValueChange={setSelected}>
  ...
</RadioGroup>

// In react-hook-form
<FormField
  control={form.control}
  name="type"
  render={({ field }) => (
    <RadioGroup
      onValueChange={field.onChange}
      defaultValue={field.value}
    >
      ...
    </RadioGroup>
  )}
/>`}
      preview={
        <RadioGroup defaultValue="r2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="r1" id="rg1" />
            <Label htmlFor="rg1">Option A</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="r2" id="rg2" />
            <Label htmlFor="rg2">Option B (selected)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="r3" id="rg3" disabled />
            <Label htmlFor="rg3" className="text-muted-foreground">Option C (disabled)</Label>
          </div>
        </RadioGroup>
      }
      props={[
        { name: "value", type: "string", description: "Controlled selected value." },
        { name: "defaultValue", type: "string", description: "Uncontrolled initial selected value." },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback when selection changes." },
        { name: "disabled", type: "boolean", description: "(RadioGroupItem) Disables a specific option." },
        { name: "required", type: "boolean", description: "Marks the group as required." },
      ]}
      tokens={[
        { token: "--primary", value: "215 80% 48%", description: "Selected radio button color." },
        { token: "--primary-foreground", value: "0 0% 100%", description: "Radio indicator dot color." },
        { token: "--border", value: "225 6% 87%", description: "Unselected radio button border." },
        { token: "--ring", value: "216 81% 60%", description: "Focus ring color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Disabled option text color." },
      ]}
      notes={[
        "Always pair each RadioGroupItem with a Label via matching id/htmlFor.",
        "Keyboard: Arrow keys navigate between options within the group.",
        "In react-hook-form use onValueChange={field.onChange} on the group.",
        "Each RadioGroupItem value must be unique within the group.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
