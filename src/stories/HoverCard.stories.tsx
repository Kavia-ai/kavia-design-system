import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/kavia/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/kavia/avatar";
import { Button } from "@/kavia/button";
import { CalendarDays } from "lucide-react";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/HoverCard",
  component: HoverCard,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="HoverCard"
      description="For sighted users to preview content available behind a link. Shows rich preview on hover with a configurable delay."
      shadcnCommand="hover-card"
      importCode={`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/kavia/hover-card";`}
      usageCode={`<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">@username</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={user.avatar} />
        <AvatarFallback>{user.initials}</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">{user.name}</h4>
        <p className="text-sm text-muted-foreground">{user.bio}</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <CalendarDays className="h-3 w-3" />
          Joined {user.joinDate}
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>

// Custom open delay
<HoverCard openDelay={200} closeDelay={100}>
  ...
</HoverCard>`}
      preview={
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-72">
            <div className="flex gap-3">
              <Avatar>
                <AvatarFallback>NX</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-xs text-muted-foreground">The React Framework by Vercel.</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      }
      props={[
        { name: "openDelay", type: "number", default: "700", description: "Delay in ms before the hover card opens." },
        { name: "closeDelay", type: "number", default: "300", description: "Delay in ms before the hover card closes." },
        { name: "open", type: "boolean", description: "Controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when state changes." },
        { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "(HoverCardContent) Alignment relative to trigger." },
        { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"bottom"', description: "(HoverCardContent) Preferred display side." },
      ]}
      tokens={[
        { token: "--popover", value: "0 0% 100%", description: "HoverCard content background." },
        { token: "--popover-foreground", value: "228 6% 17%", description: "HoverCard content text color." },
        { token: "--border", value: "225 6% 87%", description: "HoverCard border color." },
        { token: "--radius", value: "0.5rem", description: "HoverCard border radius." },
      ]}
      notes={[
        "HoverCard is for supplementary info only — don't put critical content inside.",
        "Not shown on touch devices — ensure the linked page provides the same info.",
        "Use asChild on HoverCardTrigger so the trigger element retains its semantics.",
        "Prefer lower openDelay (200–400ms) for better UX on rich previews.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
