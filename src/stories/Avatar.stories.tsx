import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/kavia/avatar";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Avatar",
  component: Avatar,
};
export default meta;
type Story = StoryObj;

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-14 w-14">
        <AvatarFallback className="text-lg">LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Avatar"
      description="An image element with a fallback for representing the user. Shows initials or a placeholder icon when the image fails to load."
      shadcnCommand="avatar"
      importCode={`import { Avatar, AvatarFallback, AvatarImage } from "@/kavia/avatar";`}
      usageCode={`// With image
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

// Fallback only (no image)
<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// Custom sizes via className
<Avatar className="h-8 w-8">
  <AvatarFallback className="text-xs">SM</AvatarFallback>
</Avatar>

<Avatar className="h-16 w-16">
  <AvatarImage src={user.avatar} alt={user.name} />
  <AvatarFallback className="text-xl">{user.initials}</AvatarFallback>
</Avatar>`}
      preview={
        <div className="flex items-center gap-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-14 w-14">
            <AvatarFallback className="text-lg">LG</AvatarFallback>
          </Avatar>
        </div>
      }
      props={[
        { name: "src", type: "string", description: "(AvatarImage) The URL of the avatar image." },
        { name: "alt", type: "string", description: "(AvatarImage) Alt text for the image — use the user's name." },
        { name: "className", type: "string", description: "(Avatar) Tailwind classes for sizing, shape, etc." },
        { name: "delayMs", type: "number", default: "600", description: "(AvatarImage) Delay before showing fallback if image is loading." },
      ]}
      tokens={[
        { token: "--muted", value: "210 7% 95%", description: "AvatarFallback background color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "AvatarFallback text color." },
        { token: "--border", value: "225 6% 87%", description: "Avatar ring/border when stacked." },
      ]}
      notes={[
        "AvatarFallback is shown while the image loads or if it errors — always provide meaningful initials.",
        "Default size is 40×40px (h-10 w-10). Override with className.",
        "Use object-cover on AvatarImage for non-square source images.",
        "For group avatars, use negative margin: -space-x-2 on a flex container.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
