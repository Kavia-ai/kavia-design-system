import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/kavia/command";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Command",
  component: Command,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem><Calendar className="mr-2 h-4 w-4" />Calendar</CommandItem>
          <CommandItem><Smile className="mr-2 h-4 w-4" />Search Emoji</CommandItem>
          <CommandItem><Calculator className="mr-2 h-4 w-4" />Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem><User className="mr-2 h-4 w-4" />Profile <CommandShortcut>⌘P</CommandShortcut></CommandItem>
          <CommandItem><CreditCard className="mr-2 h-4 w-4" />Billing <CommandShortcut>⌘B</CommandShortcut></CommandItem>
          <CommandItem><Settings className="mr-2 h-4 w-4" />Settings <CommandShortcut>⌘S</CommandShortcut></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Command"
      description="Fast, composable, unstyled command menu. Can be used standalone or inside a Dialog/Popover as a command palette (⌘K)."
      shadcnCommand="command"
      importCode={`import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/kavia/command";`}
      usageCode={`// Inline command menu
<Command className="rounded-lg border shadow-md">
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Actions">
      <CommandItem onSelect={() => handleAction("new")}>
        <Plus className="mr-2 h-4 w-4" />
        New File
        <CommandShortcut>⌘N</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

// Command palette dialog (⌘K)
const [open, setOpen] = useState(false);

useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen((o) => !o);
    }
  };
  document.addEventListener("keydown", down);
  return () => document.removeEventListener("keydown", down);
}, []);

<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Pages">
      <CommandItem onSelect={() => router.push("/dashboard")}>
        Dashboard
      </CommandItem>
    </CommandGroup>
  </CommandList>
</CommandDialog>`}
      preview={
        <Command className="rounded-lg border shadow-md w-[380px]">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem><Calendar className="mr-2 h-4 w-4" />Calendar</CommandItem>
              <CommandItem><Calculator className="mr-2 h-4 w-4" />Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      }
      props={[
        { name: "onSelect", type: "(value: string) => void", description: "(CommandItem) Called when the item is selected by keyboard or click." },
        { name: "value", type: "string", description: "(CommandItem) The value used for filtering and selection." },
        { name: "disabled", type: "boolean", description: "(CommandItem) Prevents selection." },
        { name: "filter", type: "(value: string, search: string) => number", description: "(Command) Custom filter function. Return >0 to keep, 0 to hide." },
        { name: "shouldFilter", type: "boolean", default: "true", description: "(Command) Set to false to handle filtering yourself." },
      ]}
      notes={[
        "CommandDialog wraps Command in a Dialog — use it for ⌘K command palettes.",
        "Use shouldFilter={false} when filtering data server-side or with a custom algorithm.",
        "CommandItem onSelect receives the item's value (lowercased by default).",
        "CommandShortcut is purely visual — implement the actual shortcut with a keydown listener.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
