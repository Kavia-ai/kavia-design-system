import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/kavia/alert-dialog";
import { Button } from "@/kavia/button";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/AlertDialog",
  component: AlertDialog,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="AlertDialog"
      description="A modal dialog that interrupts the user with important content and expects a response. Use for destructive or irreversible actions that require confirmation."
      shadcnCommand="alert-dialog"
      importCode={`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/kavia/alert-dialog";`}
      usageCode={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete
        your account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete}>
        Delete
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      preview={<Button variant="outline">Show Alert Dialog</Button>}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state of the dialog." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes." },
        { name: "defaultOpen", type: "boolean", default: "false", description: "Uncontrolled initial open state." },
      ]}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "Dialog content background." },
        { token: "--foreground", value: "228 6% 17%", description: "Dialog title and body text color." },
        { token: "--border", value: "225 6% 87%", description: "Dialog content border." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Description text color." },
        { token: "--primary", value: "215 80% 48%", description: "Action (confirm) button color." },
        { token: "--destructive", value: "0 84% 60%", description: "Destructive action button color." },
      ]}
      notes={[
        "AlertDialogAction and AlertDialogCancel are styled button variants — do not wrap in <Button>.",
        "Use asChild on AlertDialogTrigger to render as your own button element.",
        "This is blocking UI — use sparingly. For non-destructive confirmations, consider Dialog instead.",
        "Pressing Escape always closes the dialog via the built-in Radix behavior.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
