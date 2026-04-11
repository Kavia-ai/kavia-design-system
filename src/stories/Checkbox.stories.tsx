import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/kavia/checkbox";
import { Label } from "@/kavia/label";
import { DevGuide } from "./DevGuide";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { id: "terms" } };

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Already checked</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
    </div>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Checkbox"
      description="A control that allows the user to toggle between checked and not checked. Can be used standalone or within forms with react-hook-form."
      shadcnCommand="checkbox"
      importCode={`import { Checkbox } from "@/kavia/checkbox";
import { Label } from "@/kavia/label";`}
      usageCode={`// Basic checkbox with label
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

// Pre-checked
<Checkbox id="checked" defaultChecked />

// Controlled
const [checked, setChecked] = useState(false);
<Checkbox
  id="controlled"
  checked={checked}
  onCheckedChange={setChecked}
/>

// With react-hook-form
<FormField
  control={form.control}
  name="terms"
  render={({ field }) => (
    <FormItem className="flex items-center space-x-2">
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
      <FormLabel>Accept terms</FormLabel>
    </FormItem>
  )}
/>`}
      preview={
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="prev1" />
            <Label htmlFor="prev1">Unchecked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="prev2" defaultChecked />
            <Label htmlFor="prev2">Checked</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="prev3" disabled />
            <Label htmlFor="prev3" className="text-muted-foreground">Disabled</Label>
          </div>
        </div>
      }
      props={[
        { name: "checked", type: "boolean | 'indeterminate'", description: "Controlled checked state. Supports indeterminate state." },
        { name: "defaultChecked", type: "boolean", default: "false", description: "Uncontrolled initial checked state." },
        { name: "onCheckedChange", type: "(checked: boolean | 'indeterminate') => void", description: "Callback when checked state changes." },
        { name: "disabled", type: "boolean", default: "false", description: "Prevents user interaction." },
        { name: "required", type: "boolean", description: "Marks field as required in forms." },
        { name: "name", type: "string", description: "HTML name attribute for form submission." },
      ]}
      tokens={[
        { token: "--primary", value: "215 80% 48%", description: "Checkbox checked background and border." },
        { token: "--primary-foreground", value: "0 0% 100%", description: "Checkmark icon color." },
        { token: "--border", value: "225 6% 87%", description: "Checkbox unchecked border." },
        { token: "--ring", value: "216 81% 60%", description: "Focus ring color." },
        { token: "--radius", value: "0.5rem", description: "Checkbox corner radius." },
      ]}
      notes={[
        "Always pair with a <Label> linked via matching id/htmlFor for accessibility.",
        "Use checked='indeterminate' for select-all scenarios with partial selection.",
        "In react-hook-form, use onCheckedChange={field.onChange} instead of onChange.",
        "Extends Radix UI CheckboxPrimitive — all Radix props are supported.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
