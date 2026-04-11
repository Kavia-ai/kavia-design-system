import type { Meta, StoryObj } from "@storybook/react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/kavia/input-otp";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/InputOTP",
  component: InputOTP,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const Simple: Story = {
  render: () => (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="InputOTP"
      description="Accessible one-time password component with copy-paste support. Provides a segmented input for verification codes."
      shadcnCommand="input-otp"
      importCode={`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/kavia/input-otp";`}
      usageCode={`// 6-digit OTP with separator
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

// Controlled
<InputOTP
  maxLength={6}
  value={otp}
  onChange={setOtp}
>
  ...
</InputOTP>

// Auto-submit when complete
<InputOTP
  maxLength={6}
  onChange={(value) => {
    if (value.length === 6) handleSubmit(value);
  }}
>
  ...
</InputOTP>`}
      preview={
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      }
      props={[
        { name: "maxLength", type: "number", required: true, description: "Total number of OTP digits." },
        { name: "value", type: "string", description: "Controlled OTP value." },
        { name: "onChange", type: "(value: string) => void", description: "Callback with the current OTP string as user types." },
        { name: "pattern", type: "string", description: "Regex pattern to restrict input (e.g., digits only)." },
        { name: "disabled", type: "boolean", default: "false", description: "Disables the entire input." },
      ]}
      notes={[
        "Copy-paste automatically fills all slots — paste a full code to fill in one action.",
        "Digits-only pattern: import REGEXP_ONLY_DIGITS_AND_CHARS from 'input-otp'.",
        "Auto-submit when value.length === maxLength in the onChange handler.",
        "InputOTPSeparator is decorative — use between groups for visual grouping.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
