import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/ui/slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: { defaultValue: [50], max: 100, step: 1, className: "w-[300px]" },
};

export const Range: Story = {
  args: { defaultValue: [25, 75], max: 100, step: 1, className: "w-[300px]" },
};

export const Steps: Story = {
  args: { defaultValue: [50], max: 100, step: 10, className: "w-[300px]" },
};
