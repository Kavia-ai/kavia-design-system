import type { Meta, StoryObj } from "@storybook/react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/kavia/drawer";
import { Button } from "@/kavia/button";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Drawer",
  component: Drawer,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <p className="text-sm text-muted-foreground">Drawer content goes here.</p>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Drawer"
      description="A drawer component for mobile. Built on top of Vaul, it slides up from the bottom of the screen with drag-to-close support."
      shadcnCommand="drawer"
      importCode={`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/kavia/drawer";`}
      usageCode={`<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Edit Settings</DrawerTitle>
        <DrawerDescription>
          Adjust your preferences below.
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4">
        {/* Drawer body content */}
      </div>
      <DrawerFooter>
        <Button>Save</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>

// Controlled
<Drawer open={open} onOpenChange={setOpen}>
  ...
</Drawer>`}
      preview={<Button variant="outline">Open Drawer</Button>}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when state changes." },
        { name: "shouldScaleBackground", type: "boolean", description: "Scale the background content when drawer opens." },
      ]}
      notes={[
        "Drawer is optimized for mobile — use Sheet for desktop side panels.",
        "The drag handle at the top is automatic — users can drag down to dismiss.",
        "DrawerTitle is required for screen reader accessibility.",
        "Use a responsive pattern: Dialog on desktop, Drawer on mobile.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
