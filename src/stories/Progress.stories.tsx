import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
};
export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = { args: { value: 60, className: "w-[300px]" } };
export const Empty: Story = { args: { value: 0, className: "w-[300px]" } };
export const Full: Story = { args: { value: 100, className: "w-[300px]" } };

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(13);
    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
    return <Progress value={progress} className="w-[300px]" />;
  },
};
