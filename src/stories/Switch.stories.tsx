import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@/kavia/switch";
import { Label } from "@/kavia/label";
import { DevGuide } from "./DevGuide";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="checked" defaultChecked />
      <Label htmlFor="checked">Enabled</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled" disabled />
      <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
    </div>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Switch"
      description="A control that allows the user to toggle between on and off states. Use for binary settings where the effect is immediate (no submit needed)."
      shadcnCommand="switch"
      importCode={`import { Switch } from "@/kavia/switch";
import { Label } from "@/kavia/label";`}
      usageCode={`// With label
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>

// Controlled
const [enabled, setEnabled] = useState(false);
<Switch
  checked={enabled}
  onCheckedChange={setEnabled}
/>

// Pre-enabled
<Switch defaultChecked />

// With react-hook-form
<FormField
  control={form.control}
  name="notifications"
  render={({ field }) => (
    <FormItem className="flex items-center gap-2">
      <FormControl>
        <Switch
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
      <FormLabel>Enable notifications</FormLabel>
    </FormItem>
  )}
/>`}
      preview={
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Switch id="sw1" />
            <Label htmlFor="sw1">Off by default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="sw2" defaultChecked />
            <Label htmlFor="sw2">On by default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="sw3" disabled />
            <Label htmlFor="sw3" className="text-muted-foreground">Disabled</Label>
          </div>
        </div>
      }
      props={[
        { name: "checked", type: "boolean", description: "Controlled checked state." },
        { name: "defaultChecked", type: "boolean", default: "false", description: "Uncontrolled initial state." },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback when state changes." },
        { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
        { name: "required", type: "boolean", description: "Marks as required in form context." },
      ]}
      tokens={[
        { token: "--primary", value: "215 80% 48%", description: "Switch checked track background." },
        { token: "--primary-foreground", value: "0 0% 100%", description: "Switch thumb color." },
        { token: "--input", value: "224 5% 57%", description: "Switch unchecked track background." },
        { token: "--ring", value: "216 81% 60%", description: "Focus ring color." },
        { token: "--radius", value: "0.5rem", description: "Switch border radius." },
      ]}
      notes={[
        "Switch is for immediate binary toggles (dark mode, notifications) — not for form submissions.",
        "Prefer Checkbox for form fields that need explicit submission.",
        "Always provide a visible label for screen reader accessibility.",
        "Use onCheckedChange instead of onChange — it receives a boolean directly.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
