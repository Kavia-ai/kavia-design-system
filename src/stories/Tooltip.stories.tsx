import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/kavia/tooltip";
import { Button } from "@/kavia/button";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Tooltip",
  component: Tooltip,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Positions: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-4">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline" className="capitalize">{side}</Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              <p>Tooltip on {side}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      shadcnCommand="tooltip"
      importCode={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/kavia/tooltip";`}
      usageCode={`// Basic tooltip (wrap app in TooltipProvider once)
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

// Position
<TooltipContent side="right">Right tooltip</TooltipContent>

// With delay
<TooltipProvider delayDuration={200}>
  ...
</TooltipProvider>

// Icon button with tooltip (best practice)
<Tooltip>
  <TooltipTrigger asChild>
    <Button size="icon" variant="ghost" aria-label="Settings">
      <Settings className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>Settings</TooltipContent>
</Tooltip>`}
      preview={
        <TooltipProvider>
          <div className="flex gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent><p>Tooltip content</p></TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      }
      props={[
        { name: "delayDuration", type: "number", default: "700", description: "(TooltipProvider) Delay in ms before tooltips appear." },
        { name: "skipDelayDuration", type: "number", default: "300", description: "(TooltipProvider) How long to skip the delay when moving between tooltips." },
        { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "(TooltipContent) Preferred side to show." },
        { name: "sideOffset", type: "number", default: "4", description: "(TooltipContent) Distance from the trigger in px." },
        { name: "open", type: "boolean", description: "(Tooltip) Controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "(Tooltip) Callback when open state changes." },
      ]}
      tokens={[
        { token: "--popover", value: "228 6% 17%", description: "Tooltip background color." },
        { token: "--popover-foreground", value: "0 0% 100%", description: "Tooltip text color." },
        { token: "--border", value: "225 6% 87%", description: "Tooltip border color." },
        { token: "--radius", value: "0.5rem", description: "Tooltip border radius." },
      ]}
      notes={[
        "Wrap your app (or layout) once in <TooltipProvider> — not per tooltip.",
        "Use asChild on TooltipTrigger so your element remains the actual interactive element.",
        "Never use tooltip as the only label for an icon button — also add aria-label.",
        "Tooltips are not shown on touch devices — don't put critical info in them.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
