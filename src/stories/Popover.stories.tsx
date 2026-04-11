import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/kavia/popover";
import { Button } from "@/kavia/button";
import { Input } from "@/kavia/input";
import { Label } from "@/kavia/label";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Popover",
  component: Popover,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Popover"
      description="Displays rich content in a portal, triggered by a button. Unlike Tooltip, Popover can contain interactive content like forms and buttons."
      shadcnCommand="popover"
      importCode={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/kavia/popover";`}
      usageCode={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Settings</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-3">
      <h4 className="font-medium text-sm">Settings</h4>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label>Notifications</Label>
          <Switch />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>

// Controlled
<Popover open={open} onOpenChange={setOpen}>
  ...
</Popover>

// Custom alignment
<PopoverContent align="start" side="bottom" sideOffset={8}>
  ...
</PopoverContent>`}
      preview={<Button variant="outline">Open Popover</Button>}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes." },
        { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "(PopoverContent) Alignment relative to the trigger." },
        { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: "(PopoverContent) Preferred side to display." },
        { name: "sideOffset", type: "number", default: "4", description: "(PopoverContent) Distance from trigger in px." },
      ]}
      tokens={[
        { token: "--popover", value: "0 0% 100%", description: "Popover content background color." },
        { token: "--popover-foreground", value: "228 6% 17%", description: "Popover content text color." },
        { token: "--border", value: "225 6% 87%", description: "Popover content border color." },
        { token: "--ring", value: "216 81% 60%", description: "Trigger focus ring color." },
        { token: "--radius", value: "0.5rem", description: "Popover border radius." },
      ]}
      notes={[
        "Popover is the right choice when content includes interactive elements (Switch, Input, etc.).",
        "Use Tooltip for non-interactive info — use Popover for interactive content.",
        "PopoverContent portals to document.body — use container prop to scope it.",
        "Clicking outside or pressing Escape closes the popover.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
