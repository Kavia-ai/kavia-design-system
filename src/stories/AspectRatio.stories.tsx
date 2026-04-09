import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const meta: Meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
};
export default meta;
type Story = StoryObj;

export const SixteenByNine: Story = {
  render: () => (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
        <div className="flex items-center justify-center h-full text-muted-foreground">16:9</div>
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div className="w-[200px]">
      <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden">
        <div className="flex items-center justify-center h-full text-muted-foreground">1:1</div>
      </AspectRatio>
    </div>
  ),
};
