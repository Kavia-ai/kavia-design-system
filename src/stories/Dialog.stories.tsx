import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/kavia/dialog";
import { Button } from "@/kavia/button";
import { Input } from "@/kavia/input";
import { Label } from "@/kavia/label";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Dialog",
  component: Dialog,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">Username</Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Dialog"
      description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. Use for forms, confirmations, and focused tasks."
      shadcnCommand="dialog"
      importCode={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/kavia/dialog";`}
      usageCode={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    {/* Content */}
    <div className="grid gap-4 py-4">
      <Input placeholder="Name" />
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button onClick={handleSave}>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Controlled dialog
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>...</DialogContent>
</Dialog>`}
      preview={<Button variant="outline">Open Dialog</Button>}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes." },
        { name: "defaultOpen", type: "boolean", default: "false", description: "Uncontrolled initial open state." },
        { name: "modal", type: "boolean", default: "true", description: "When true, interaction outside the dialog is blocked." },
      ]}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "Dialog content background." },
        { token: "--foreground", value: "228 6% 17%", description: "Dialog title and body text color." },
        { token: "--border", value: "225 6% 87%", description: "Dialog content border." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Description and secondary text color." },
        { token: "--radius", value: "0.5rem", description: "Dialog corner radius." },
      ]}
      notes={[
        "DialogTitle is required for screen reader accessibility — never omit it.",
        "Use DialogClose asChild to close via your own button element.",
        "For programmatic close: use controlled open state (open/onOpenChange).",
        "Dialog is modal by default — use modal={false} for non-blocking overlays.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
