import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/kavia/dropdown-menu";
import { Button } from "@/kavia/button";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithCheckboxes: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Status Bar</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Activity Bar</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>New Tab</DropdownMenuItem>
        <DropdownMenuItem>New Window</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Save Page As...</DropdownMenuItem>
            <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="DropdownMenu"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button. Built on Radix UI DropdownMenu."
      shadcnCommand="dropdown-menu"
      importCode={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuShortcut,
} from "@/kavia/dropdown-menu";`}
      usageCode={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      <MoreHorizontal className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onSelect={() => router.push("/profile")}>
      Profile
      <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem onSelect={() => router.push("/billing")}>
      Billing
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem
      onSelect={handleLogout}
      className="text-destructive focus:text-destructive"
    >
      Log out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      preview={
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
      props={[
        { name: "onSelect", type: "(event: Event) => void", description: "(DropdownMenuItem) Called when item is selected." },
        { name: "disabled", type: "boolean", description: "(DropdownMenuItem) Prevents selection." },
        { name: "inset", type: "boolean", description: "(DropdownMenuItem) Adds left padding for alignment with icon items." },
        { name: "checked", type: "boolean", description: "(DropdownMenuCheckboxItem) Controlled checked state." },
        { name: "value", type: "string", description: "(DropdownMenuRadioItem) The value for radio selection." },
      ]}
      tokens={[
        { token: "--popover", value: "0 0% 100%", description: "DropdownMenu content background color." },
        { token: "--popover-foreground", value: "228 6% 17%", description: "DropdownMenu content text color." },
        { token: "--accent", value: "214 91% 95%", description: "Item hover/focus background." },
        { token: "--accent-foreground", value: "215 80% 48%", description: "Item hover/focus text color." },
        { token: "--border", value: "225 6% 87%", description: "Menu border color." },
      ]}
      notes={[
        "DropdownMenuShortcut is visual only — implement actual shortcuts with keydown listeners.",
        "Use inset on items without icons to align text with icon-accompanied items.",
        "For destructive items, add className='text-destructive focus:text-destructive'.",
        "Nest DropdownMenuSub for hierarchical menus.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
