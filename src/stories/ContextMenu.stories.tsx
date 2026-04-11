import type { Meta, StoryObj } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
} from "@/kavia/context-menu";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/ContextMenu",
  component: ContextMenu,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here (context menu)
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>Back <ContextMenuShortcut>⌘[</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem inset disabled>Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuItem inset>Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut></ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Save Page As... <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut></ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>Show Bookmarks Bar <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut></ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="ContextMenu"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by right-clicking or long-pressing."
      shadcnCommand="context-menu"
      importCode={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/kavia/context-menu";`}
      usageCode={`<ContextMenu>
  <ContextMenuTrigger className="w-[300px] h-[100px] border border-dashed flex items-center justify-center text-sm rounded-md">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem onSelect={handleCopy}>
      Copy
      <ContextMenuShortcut>⌘C</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem onSelect={handlePaste}>
      Paste
      <ContextMenuShortcut>⌘V</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Email</ContextMenuItem>
        <ContextMenuItem>Slack</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
      Show Grid
    </ContextMenuCheckboxItem>
  </ContextMenuContent>
</ContextMenu>`}
      preview={
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[100px] w-[280px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuItem>Copy <ContextMenuShortcut>⌘C</ContextMenuShortcut></ContextMenuItem>
            <ContextMenuItem>Paste <ContextMenuShortcut>⌘V</ContextMenuShortcut></ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      }
      props={[
        { name: "onSelect", type: "(event: Event) => void", description: "(ContextMenuItem) Called when the item is selected." },
        { name: "disabled", type: "boolean", description: "(ContextMenuItem) Prevents selection and applies disabled styles." },
        { name: "inset", type: "boolean", description: "(ContextMenuItem/Label) Adds left padding to align with items that have icons." },
        { name: "checked", type: "boolean", description: "(ContextMenuCheckboxItem) Controlled checked state." },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "(ContextMenuCheckboxItem) Callback when checked changes." },
      ]}
      notes={[
        "ContextMenuTrigger wraps any element — the context menu appears on right-click.",
        "Use inset on items without icons to align text with icon-accompanied items.",
        "ContextMenuShortcut is visual only — implement actual shortcuts with keyboard listeners.",
        "Nest ContextMenuSub/SubTrigger/SubContent for hierarchical menus.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
