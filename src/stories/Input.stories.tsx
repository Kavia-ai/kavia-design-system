import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/kavia/input";
import { Label } from "@/kavia/label";
import { Button } from "@/kavia/button";
import { DevGuide } from "./DevGuide";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { type: "text", placeholder: "Email" } };
export const Disabled: Story = { args: { disabled: true, placeholder: "Disabled" } };
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};
export const WithButton: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};
export const File: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Input"
      description="Displays a form input field. A styled wrapper around the native HTML <input> element that accepts all standard input attributes."
      shadcnCommand="input"
      importCode={`import { Input } from "@/kavia/input";`}
      usageCode={`// Basic text input
<Input type="text" placeholder="Enter your name" />

// With label
<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="you@example.com" />
</div>

// With button (search bar pattern)
<div className="flex gap-2">
  <Input type="search" placeholder="Search..." />
  <Button type="submit">Search</Button>
</div>

// Disabled
<Input disabled placeholder="Read only..." />

// With react-hook-form
<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input placeholder="you@example.com" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>`}
      preview={
        <div className="space-y-3 w-full max-w-xs">
          <Input type="text" placeholder="Enter your email" />
          <Input type="text" disabled placeholder="Disabled input" />
        </div>
      }
      props={[
        { name: "type", type: "string", default: '"text"', description: 'HTML input type: "text", "email", "password", "number", "file", "search", etc.' },
        { name: "placeholder", type: "string", description: "Placeholder text shown when the field is empty." },
        { name: "disabled", type: "boolean", default: "false", description: "Prevents user interaction and applies disabled styles." },
        { name: "value", type: "string", description: "Controlled value." },
        { name: "onChange", type: "React.ChangeEventHandler<HTMLInputElement>", description: "Change event handler." },
        { name: "className", type: "string", description: "Additional CSS classes, e.g., for width." },
      ]}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "Input background color." },
        { token: "--foreground", value: "228 6% 17%", description: "Input text color." },
        { token: "--border", value: "225 6% 87%", description: "Input default border." },
        { token: "--input", value: "224 5% 57%", description: "Input border on focus state." },
        { token: "--ring", value: "216 81% 60%", description: "Focus ring color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Placeholder text color." },
        { token: "--radius", value: "0.5rem", description: "Input border radius." },
      ]}
      notes={[
        "Spread react-hook-form's field props directly: <Input {...field} />.",
        "For password fields, manage visibility with state + type toggling.",
        "Input does not include validation UI — pair with FormMessage from the Form component.",
        "All native HTMLInputElement attributes are supported via prop forwarding.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
