import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@/kavia/skeleton";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Skeleton",
  component: Skeleton,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

export const Card: Story = {
  render: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Skeleton"
      description="Used to show a placeholder while content is loading. Creates a pulsing animation that mimics the shape of your actual content layout."
      shadcnCommand="skeleton"
      importCode={`import { Skeleton } from "@/kavia/skeleton";`}
      usageCode={`// Profile card skeleton
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[150px]" />
  </div>
</div>

// Article list skeleton
{Array.from({ length: 3 }).map((_, i) => (
  <div key={i} className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
  </div>
))}

// Conditional rendering
{isLoading ? (
  <Skeleton className="h-8 w-[200px]" />
) : (
  <h2>{title}</h2>
)}`}
      preview={
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[180px]" />
            <Skeleton className="h-4 w-[140px]" />
          </div>
        </div>
      }
      props={[
        { name: "className", type: "string", required: true, description: "Set h-*, w-*, and rounded-* to match the content shape." },
      ]}
      tokens={[
        { token: "--muted", value: "210 7% 95%", description: "Skeleton base background color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Skeleton shimmer highlight color." },
      ]}
      notes={[
        "Skeleton has no props other than className — shape it entirely with Tailwind.",
        "Match skeleton dimensions exactly to the real content for smooth transition.",
        "Use rounded-full for avatars, rounded-md for cards/images, no rounding for text lines.",
        "Wrap multiple skeletons in the same layout structure as the real content.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
