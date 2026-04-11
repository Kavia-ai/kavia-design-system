import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/kavia/collapsible";
import { Button } from "@/kavia/button";
import { ChevronsUpDown } from "lucide-react";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Collapsible",
  component: Collapsible,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@radix-ui/colors</div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@stitches/react</div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Collapsible"
      description="An interactive component which expands/collapses a panel. Lower-level than Accordion — gives you full control over what triggers and content look like."
      shadcnCommand="collapsible"
      importCode={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/kavia/collapsible";`}
      usageCode={`const [isOpen, setIsOpen] = useState(false);

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <div className="flex items-center justify-between">
    <h4 className="text-sm font-semibold">Advanced Settings</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>

  {/* Always visible content */}
  <div className="rounded-md border p-3 text-sm">
    Basic setting
  </div>

  {/* Collapsible content */}
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border p-3 text-sm">Advanced option 1</div>
    <div className="rounded-md border p-3 text-sm">Advanced option 2</div>
  </CollapsibleContent>
</Collapsible>`}
      preview={
        <div className="w-[280px] space-y-2">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-semibold">Repositories</span>
            <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-xs">@radix-ui/primitives</div>
          <div className="rounded-md border px-4 py-2 font-mono text-xs text-muted-foreground">(collapsed items hidden)</div>
        </div>
      }
      props={[
        { name: "open", type: "boolean", description: "Controlled open state." },
        { name: "defaultOpen", type: "boolean", default: "false", description: "Uncontrolled initial open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes." },
        { name: "disabled", type: "boolean", default: "false", description: "Prevents the collapsible from being toggled." },
        { name: "asChild", type: "boolean", description: "(CollapsibleTrigger) Render as child element." },
      ]}
      tokens={[
        { token: "--border", value: "225 6% 87%", description: "Border color for the collapsible container and items." },
        { token: "--background", value: "0 0% 100%", description: "Background color of the collapsible content." },
        { token: "--foreground", value: "228 6% 17%", description: "Text color inside collapsible content." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Secondary text color in collapsed state." },
      ]}
      notes={[
        "Use Accordion for multiple collapsible items — it handles single/multiple open states.",
        "Use Collapsible for single independent expandable sections.",
        "CollapsibleContent animates via CSS — add transition classes for smooth open/close.",
        "CollapsibleTrigger with asChild lets any element trigger the toggle.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
