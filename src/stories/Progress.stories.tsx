import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/kavia/progress";
import { useEffect, useState } from "react";
import { DevGuide } from "./DevGuide";

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

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Progress"
      description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      shadcnCommand="progress"
      importCode={`import { Progress } from "@/kavia/progress";`}
      usageCode={`// Static value
<Progress value={60} className="w-[300px]" />

// Animated with state
const [progress, setProgress] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(timer);
        return 100;
      }
      return prev + 10;
    });
  }, 500);
  return () => clearInterval(timer);
}, []);

<Progress value={progress} className="w-full" />

// Upload progress example
<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span>{progress}%</span>
  </div>
  <Progress value={progress} />
</div>`}
      preview={
        <div className="space-y-4 w-full max-w-xs">
          <Progress value={0} className="w-full" />
          <Progress value={40} className="w-full" />
          <Progress value={75} className="w-full" />
          <Progress value={100} className="w-full" />
        </div>
      }
      props={[
        { name: "value", type: "number | null", description: "The progress value from 0 to 100. Pass null for indeterminate state." },
        { name: "max", type: "number", default: "100", description: "The maximum value." },
        { name: "className", type: "string", description: "Additional CSS classes, typically for width." },
      ]}
      tokens={[
        { token: "--primary", value: "215 80% 48%", description: "Progress bar fill color." },
        { token: "--secondary", value: "210 7% 95%", description: "Progress bar track (background) color." },
        { token: "--radius", value: "0.5rem", description: "Progress bar border radius." },
      ]}
      notes={[
        "Progress smoothly animates between value changes via CSS transition.",
        "Pass value={null} for an indeterminate animation (infinite loading state).",
        "Always display a numeric percentage label alongside for clarity.",
        "For file uploads, bind value to (uploadedBytes / totalBytes) * 100.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
