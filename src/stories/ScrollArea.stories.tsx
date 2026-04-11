import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "@/kavia/scroll-area";
import { Separator } from "@/kavia/separator";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
};
export default meta;
type Story = StoryObj;

const tags = Array.from({ length: 50 }).map((_, i) => `Tag ${i + 1}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <figure key={i} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <div className="h-[150px] w-[150px] bg-muted flex items-center justify-center text-muted-foreground text-sm">
                Image {i + 1}
              </div>
            </div>
          </figure>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="ScrollArea"
      description="Augments native scroll functionality for custom, cross-browser styling of scroll containers. Provides a consistent scrollbar appearance."
      shadcnCommand="scroll-area"
      importCode={`import { ScrollArea } from "@/kavia/scroll-area";`}
      usageCode={`// Vertical scrollable list
<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    {items.map((item) => (
      <div key={item} className="text-sm py-2 border-b">
        {item}
      </div>
    ))}
  </div>
</ScrollArea>

// Horizontal scrollable row
<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max gap-4 p-4">
    {cards.map((card) => (
      <div key={card} className="shrink-0 w-32 h-32 bg-muted rounded-md" />
    ))}
  </div>
</ScrollArea>`}
      preview={
        <ScrollArea className="h-40 w-48 rounded-md border">
          <div className="p-4">
            {Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`).map((item) => (
              <div key={item}>
                <div className="text-sm py-1">{item}</div>
                <Separator className="my-1" />
              </div>
            ))}
          </div>
        </ScrollArea>
      }
      props={[
        { name: "className", type: "string", description: "Set h-* for vertical scroll or w-* for horizontal scroll." },
        { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Scroll direction." },
        { name: "type", type: '"auto" | "always" | "scroll" | "hover"', default: '"hover"', description: "When to show the scrollbar." },
      ]}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "ScrollArea background color." },
        { token: "--border", value: "225 6% 87%", description: "Border color around the scroll container." },
        { token: "--muted", value: "210 7% 95%", description: "Scrollbar track background." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Scrollbar thumb color." },
        { token: "--radius", value: "0.5rem", description: "Border radius for the scroll container." },
      ]}
      notes={[
        "Set a fixed height on ScrollArea for vertical scrolling (e.g., h-72).",
        "For horizontal scroll, add whitespace-nowrap to the inner container and w-max to the content.",
        "ScrollArea replaces overflow-y-auto/overflow-x-auto — don't combine them.",
        "The scrollbar is hidden by default and appears on hover (type='hover').",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
