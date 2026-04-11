import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/kavia/select";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Select"
      description="Displays a list of options for the user to pick from, triggered by a button. Built on Radix UI Select with full keyboard and accessibility support."
      shadcnCommand="select"
      importCode={`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/kavia/select";`}
      usageCode={`// Basic select
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>

// Controlled
<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select status" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="active">Active</SelectItem>
    <SelectItem value="inactive">Inactive</SelectItem>
  </SelectContent>
</Select>

// With grouped options
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern (EST)</SelectItem>
      <SelectItem value="pst">Pacific (PST)</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
      preview={
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      }
      props={[
        { name: "value", type: "string", description: "Controlled selected value." },
        { name: "defaultValue", type: "string", description: "Uncontrolled initial value." },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback when selection changes." },
        { name: "disabled", type: "boolean", default: "false", description: "Disables the entire select." },
        { name: "placeholder", type: "string", description: "(SelectValue) Text shown when nothing is selected." },
      ]}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "Trigger background." },
        { token: "--foreground", value: "228 6% 17%", description: "Trigger text color." },
        { token: "--border", value: "225 6% 87%", description: "Trigger border." },
        { token: "--popover", value: "0 0% 100%", description: "Dropdown content background." },
        { token: "--popover-foreground", value: "228 6% 17%", description: "Dropdown item text." },
        { token: "--accent", value: "214 91% 95%", description: "Item hover background." },
        { token: "--ring", value: "216 81% 60%", description: "Focus ring on trigger." },
      ]}
      notes={[
        "Each SelectItem value must be a unique non-empty string.",
        "Use SelectGroup + SelectLabel to organize long option lists.",
        "In react-hook-form, use onValueChange={field.onChange} and value={field.value}.",
        "SelectContent portals to document.body by default — use container prop to change this.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
