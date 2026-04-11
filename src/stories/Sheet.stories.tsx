import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/kavia/sheet";
import { Button } from "@/kavia/button";
import { Input } from "@/kavia/input";
import { Label } from "@/kavia/label";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Sheet",
  component: Sheet,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">Username</Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="py-4 space-y-2">
          <p className="text-sm">Home</p>
          <p className="text-sm">About</p>
          <p className="text-sm">Contact</p>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Sheet"
      description="Extends the Dialog component to display content that complements the main content of the screen. Slides in from any edge of the screen."
      shadcnCommand="sheet"
      importCode={`import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/kavia/sheet";`}
      usageCode={`// Right sheet (default)
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="py-4">
      {/* Sheet content */}
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Cancel</Button>
      </SheetClose>
      <Button>Save</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>

// Left-side navigation drawer
<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon"><Menu /></Button>
  </SheetTrigger>
  <SheetContent side="left">
    <nav>...</nav>
  </SheetContent>
</Sheet>`}
      preview={<Button variant="outline">Open Sheet</Button>}
      props={[
        { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"right"', description: "(SheetContent) Edge from which the sheet slides in." },
        { name: "open", type: "boolean", description: "(Sheet) Controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "(Sheet) Callback when state changes." },
      ]}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "Sheet panel background color." },
        { token: "--foreground", value: "228 6% 17%", description: "Sheet title and body text color." },
        { token: "--border", value: "225 6% 87%", description: "Sheet edge border color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Description text color." },
      ]}
      notes={[
        "SheetTitle is required for screen reader accessibility.",
        "Use side='left' for mobile navigation drawers.",
        "Use side='bottom' for mobile-friendly action sheets.",
        "SheetClose asChild wraps your button with the close behavior.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
