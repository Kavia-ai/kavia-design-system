import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@/kavia/textarea";
import { Label } from "@/kavia/label";
import { Button } from "@/kavia/button";
import { DevGuide } from "./DevGuide";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { placeholder: "Type your message here." } };
export const Disabled: Story = { args: { placeholder: "Disabled", disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Textarea"
      description="Displays a multi-line text input control. A styled wrapper around the native HTML <textarea> element."
      shadcnCommand="textarea"
      importCode={`import { Textarea } from "@/kavia/textarea";`}
      usageCode={`// Basic textarea
<Textarea placeholder="Type your message here." />

// With label
<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea id="message" placeholder="Type your message here." />
</div>

// Fixed rows
<Textarea placeholder="Bio" rows={4} />

// Disabled
<Textarea placeholder="Disabled" disabled />

// With react-hook-form
<FormField
  control={form.control}
  name="bio"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Bio</FormLabel>
      <FormControl>
        <Textarea placeholder="Tell us about yourself" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>`}
      preview={
        <div className="space-y-3 w-full max-w-xs">
          <Textarea placeholder="Type your message here." rows={3} />
          <Textarea placeholder="Disabled textarea" disabled rows={2} />
        </div>
      }
      props={[
        { name: "placeholder", type: "string", description: "Placeholder text shown when the field is empty." },
        { name: "rows", type: "number", description: "Number of visible text lines. Defaults to browser default (~2)." },
        { name: "disabled", type: "boolean", default: "false", description: "Prevents user interaction." },
        { name: "value", type: "string", description: "Controlled value." },
        { name: "onChange", type: "React.ChangeEventHandler<HTMLTextAreaElement>", description: "Change event handler." },
        { name: "className", type: "string", description: "Additional CSS classes, e.g., min-h-[200px] for taller textarea." },
      ]}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "Textarea background." },
        { token: "--foreground", value: "228 6% 17%", description: "Textarea text color." },
        { token: "--border", value: "225 6% 87%", description: "Textarea border." },
        { token: "--ring", value: "216 81% 60%", description: "Focus ring color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Placeholder text color." },
      ]}
      notes={[
        "Use min-h-[...] with className to set a minimum height instead of fixed rows.",
        "Spread react-hook-form field props directly: <Textarea {...field} />.",
        "For auto-resize, use a useEffect + ref to set height based on scrollHeight.",
        "All native HTMLTextAreaElement attributes are supported.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
