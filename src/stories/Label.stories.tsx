import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@/kavia/label";
import { Checkbox } from "@/kavia/checkbox";
import { DevGuide } from "./DevGuide";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = { args: { children: "Your email address" } };

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" />
      <Label htmlFor="terms2">Accept terms and conditions</Label>
    </div>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Label"
      description="Renders an accessible label associated with a form control. Clicking the label focuses/activates the associated control."
      shadcnCommand="label"
      importCode={`import { Label } from "@/kavia/label";`}
      usageCode={`// Basic label linked to input
<div className="grid gap-1.5">
  <Label htmlFor="email">Email address</Label>
  <Input id="email" type="email" />
</div>

// With checkbox
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

// Required field indicator
<Label htmlFor="name">
  Name <span className="text-destructive">*</span>
</Label>

// Disabled style
<Label
  htmlFor="disabled-input"
  className="text-muted-foreground cursor-not-allowed"
>
  Disabled field
</Label>`}
      preview={
        <div className="space-y-4">
          <div className="grid gap-1.5">
            <Label htmlFor="demo-email">Email address</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="demo-terms" />
            <Label htmlFor="demo-terms">Accept terms</Label>
          </div>
        </div>
      }
      props={[
        { name: "htmlFor", type: "string", description: "Links the label to a form control by its id. Essential for accessibility." },
        { name: "className", type: "string", description: "Additional CSS classes." },
        { name: "asChild", type: "boolean", description: "Merges props onto child element." },
      ]}
      tokens={[
        { token: "--foreground", value: "228 6% 17%", description: "Label text color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Disabled/hint label text color." },
        { token: "--destructive", value: "0 84% 60%", description: "Required field asterisk color." },
      ]}
      notes={[
        "Always provide htmlFor matching the control's id for proper accessibility.",
        "Label renders as a <label> element — clicking it activates the linked control.",
        "In the Form component, use FormLabel instead of Label for integrated validation state.",
        "Avoid wrapping interactive elements inside Label — use htmlFor instead.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
