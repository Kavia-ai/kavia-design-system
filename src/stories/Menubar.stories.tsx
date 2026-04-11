import type { Meta, StoryObj } from "@storybook/react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/kavia/menubar";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Menubar",
  component: Menubar,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
          <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print... <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
          <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarItem>Find...</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In <MenubarShortcut>⌘+</MenubarShortcut></MenubarItem>
          <MenubarItem>Zoom Out <MenubarShortcut>⌘-</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Menubar"
      description="A visually persistent menu common in desktop applications, providing quick access to a consistent set of commands. Best suited for desktop/editor interfaces."
      shadcnCommand="menubar"
      importCode={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/kavia/menubar";`}
      usageCode={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New File <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Save <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked={showSidebar} onCheckedChange={setShowSidebar}>
        Sidebar
      </MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarRadioGroup value={theme}>
        <MenubarRadioItem value="light">Light</MenubarRadioItem>
        <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      preview={
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print... <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      }
      props={[
        { name: "onSelect", type: "(event: Event) => void", description: "(MenubarItem) Called when item is selected." },
        { name: "disabled", type: "boolean", description: "(MenubarItem) Prevents selection." },
        { name: "inset", type: "boolean", description: "(MenubarItem) Adds left padding for icon alignment." },
        { name: "checked", type: "boolean", description: "(MenubarCheckboxItem) Controlled checked state." },
        { name: "value", type: "string", description: "(MenubarRadioItem) Radio value." },
      ]}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "Menubar background." },
        { token: "--popover", value: "0 0% 100%", description: "Menu dropdown background." },
        { token: "--popover-foreground", value: "228 6% 17%", description: "Menu dropdown text." },
        { token: "--accent", value: "214 91% 95%", description: "Item hover/focus background." },
        { token: "--border", value: "225 6% 87%", description: "Menubar border." },
      ]}
      notes={[
        "Menubar is for app-level menus like File, Edit, View — use DropdownMenu for contextual actions.",
        "MenubarShortcut is visual only — implement keyboard shortcuts with global listeners.",
        "Keyboard: Tab navigates between menus, Arrow keys navigate menu items.",
        "Supports CheckboxItem and RadioGroup for stateful menu items.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
