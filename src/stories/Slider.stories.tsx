import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/kavia/slider";
import { DevGuide } from "./DevGuide";

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

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Slider"
      description="An input where the user selects a value from within a given range. Supports single and range (dual-thumb) modes."
      shadcnCommand="slider"
      importCode={`import { Slider } from "@/kavia/slider";`}
      usageCode={`// Single value
<Slider defaultValue={[50]} max={100} step={1} className="w-[300px]" />

// Controlled
const [volume, setVolume] = useState([50]);
<Slider
  value={volume}
  onValueChange={setVolume}
  max={100}
  step={1}
/>
<p>Volume: {volume[0]}%</p>

// Range (two thumbs)
<Slider defaultValue={[25, 75]} max={100} step={1} />

// Custom step (0–100 in steps of 10)
<Slider defaultValue={[50]} max={100} step={10} />`}
      preview={
        <div className="space-y-6 w-full max-w-xs">
          <Slider defaultValue={[30]} max={100} step={1} />
          <Slider defaultValue={[20, 70]} max={100} step={1} />
        </div>
      }
      props={[
        { name: "defaultValue", type: "number[]", description: "Uncontrolled initial value(s). Use array — single value: [50], range: [25, 75]." },
        { name: "value", type: "number[]", description: "Controlled value(s)." },
        { name: "onValueChange", type: "(value: number[]) => void", description: "Callback called as the slider moves." },
        { name: "onValueCommit", type: "(value: number[]) => void", description: "Callback called only when interaction ends (mouse up)." },
        { name: "min", type: "number", default: "0", description: "Minimum value." },
        { name: "max", type: "number", default: "100", description: "Maximum value." },
        { name: "step", type: "number", default: "1", description: "Step increment between values." },
        { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
      ]}
      tokens={[
        { token: "--primary", value: "215 80% 48%", description: "Slider track filled portion and thumb color." },
        { token: "--secondary", value: "210 7% 95%", description: "Slider track unfilled background." },
        { token: "--ring", value: "216 81% 60%", description: "Thumb focus ring color." },
        { token: "--border", value: "225 6% 87%", description: "Thumb border color." },
      ]}
      notes={[
        "value and defaultValue are always arrays — even for single-thumb sliders.",
        "Use onValueCommit instead of onValueChange for expensive operations like API calls.",
        "Add aria-label to each thumb via the Radix SliderThumb if you need custom accessible names.",
        "Orientation can be 'horizontal' (default) or 'vertical'.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
