import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "@/kavia/aspect-ratio";
import { DevGuide } from "./DevGuide";

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

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="AspectRatio"
      description="Displays content within a desired ratio. Wraps any content and maintains aspect ratio regardless of the container width."
      shadcnCommand="aspect-ratio"
      importCode={`import { AspectRatio } from "@/kavia/aspect-ratio";`}
      usageCode={`// 16:9 video thumbnail
<div className="w-[560px]">
  <AspectRatio ratio={16 / 9}>
    <img src="..." alt="..." className="object-cover w-full h-full rounded-md" />
  </AspectRatio>
</div>

// Square image (1:1)
<div className="w-[200px]">
  <AspectRatio ratio={1}>
    <img src="..." alt="..." className="object-cover w-full h-full rounded-full" />
  </AspectRatio>
</div>

// 4:3 card media
<AspectRatio ratio={4 / 3} className="bg-muted rounded-md overflow-hidden">
  <video src="..." className="w-full h-full object-cover" />
</AspectRatio>`}
      preview={
        <div className="w-[300px]">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">16:9</div>
          </AspectRatio>
        </div>
      }
      props={[
        { name: "ratio", type: "number", default: "1", description: "The desired aspect ratio (width / height). e.g., 16/9, 4/3, 1." },
        { name: "className", type: "string", description: "Additional CSS classes applied to the wrapper." },
      ]}
      tokens={[
        { token: "--muted", value: "210 7% 95%", description: "Placeholder/fallback background color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Placeholder text color." },
        { token: "--border", value: "225 6% 87%", description: "Optional border around the ratio container." },
        { token: "--radius", value: "0.5rem", description: "Border radius when rounded classes are applied." },
      ]}
      notes={[
        "Set a fixed width on the parent element — the height is calculated automatically.",
        "Use overflow-hidden on the AspectRatio wrapper to clip content to the container bounds.",
        "Works with images, videos, iframes, and any block-level content.",
        "Always add object-cover to img/video children to fill without distortion.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
