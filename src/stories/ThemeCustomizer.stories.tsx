import type { Meta, StoryObj } from "@storybook/react";
import { ThemeCustomizer } from "./ThemeCustomizer";

const meta: Meta<typeof ThemeCustomizer> = {
  title: "Design System/Theme Customizer",
  component: ThemeCustomizer,
};
export default meta;
type Story = StoryObj<typeof ThemeCustomizer>;

export const Default: Story = {
  render: () => <ThemeCustomizer />,
  parameters: { layout: "padded" },
};
