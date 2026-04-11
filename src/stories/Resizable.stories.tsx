import type { Meta, StoryObj } from "@storybook/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/kavia/resizable";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
};
export default meta;
type Story = StoryObj;

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup direction="vertical" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[100px] items-center justify-center p-6">
          <span className="font-semibold">Top</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[100px] items-center justify-center p-6">
          <span className="font-semibold">Bottom</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Resizable"
      description="Accessible resizable panel groups and layouts with keyboard support. Built on react-resizable-panels."
      shadcnCommand="resizable"
      importCode={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/kavia/resizable";`}
      usageCode={`// Horizontal split
<ResizablePanelGroup direction="horizontal" className="rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="p-4">Left panel</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="p-4">Right panel</div>
  </ResizablePanel>
</ResizablePanelGroup>

// With size constraints
<ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
  <div className="p-4">Sidebar</div>
</ResizablePanel>

// Handle with grab indicator
<ResizableHandle withHandle />

// Three panels
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={25} />
  <ResizableHandle />
  <ResizablePanel defaultSize={50} />
  <ResizableHandle />
  <ResizablePanel defaultSize={25} />
</ResizablePanelGroup>`}
      preview={
        <ResizablePanelGroup direction="horizontal" className="max-w-sm rounded-lg border h-[120px]">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center text-sm font-medium">One</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center text-sm font-medium">Two</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      }
      props={[
        { name: "direction", type: '"horizontal" | "vertical"', required: true, description: "(ResizablePanelGroup) Direction of the panels." },
        { name: "defaultSize", type: "number", description: "(ResizablePanel) Initial size as a percentage (0–100)." },
        { name: "minSize", type: "number", description: "(ResizablePanel) Minimum size as a percentage." },
        { name: "maxSize", type: "number", description: "(ResizablePanel) Maximum size as a percentage." },
        { name: "withHandle", type: "boolean", description: "(ResizableHandle) Shows a visible grab handle in the center." },
      ]}
      notes={[
        "All panel defaultSize values in a group should add up to 100.",
        "Use withHandle on ResizableHandle for a better visual drag affordance.",
        "Keyboard: focus the handle and use arrow keys to resize.",
        "Wrap in a container with a fixed height for vertical splits.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
