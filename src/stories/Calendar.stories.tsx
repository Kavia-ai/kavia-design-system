import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

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
