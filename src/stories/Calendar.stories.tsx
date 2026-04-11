import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Calendar } from "@/kavia/calendar";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Calendar",
  component: Calendar,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = useState<{ from?: Date; to?: Date } | undefined>();
    return (
      <Calendar
        mode="range"
        selected={range as any}
        onSelect={setRange as any}
        className="rounded-md border"
      />
    );
  },
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Calendar"
      description="A date field component that allows users to enter and edit date. Built on top of react-day-picker."
      shadcnCommand="calendar"
      importCode={`import { Calendar } from "@/kavia/calendar";`}
      usageCode={`// Single date selection
const [date, setDate] = useState<Date | undefined>(new Date());

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>

// Date range selection
const [range, setRange] = useState<DateRange | undefined>();

<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  numberOfMonths={2}
/>

// Disable past dates
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={{ before: new Date() }}
/>

// Combine with Popover for a date picker
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <CalendarIcon className="mr-2 h-4 w-4" />
      {date ? format(date, "PPP") : "Pick a date"}
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>`}
      preview={
        <Calendar
          mode="single"
          selected={new Date()}
          className="rounded-md border"
        />
      }
      props={[
        { name: "mode", type: '"single" | "multiple" | "range"', required: true, description: "Selection mode." },
        { name: "selected", type: "Date | Date[] | DateRange", description: "Selected date(s)." },
        { name: "onSelect", type: "(date: ...) => void", description: "Callback when a date is selected." },
        { name: "disabled", type: "Matcher | Matcher[]", description: "Disable specific dates, ranges, or conditions (e.g., { before: new Date() })." },
        { name: "numberOfMonths", type: "number", default: "1", description: "Number of months to display side by side." },
        { name: "showOutsideDays", type: "boolean", default: "true", description: "Show days from adjacent months." },
      ]}
      notes={[
        "Calendar does not include a text input — combine with Popover + Input for a full date picker.",
        "Use the date-fns library (already a dependency) for formatting: format(date, 'PPP').",
        "For range selection, selected expects { from: Date, to: Date } object.",
        "Disable specific dates: disabled={[new Date(2024, 0, 1), { dayOfWeek: [0, 6] }]}.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
