import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/kavia/card";
import { Button } from "@/kavia/button";
import { Input } from "@/kavia/input";
import { Label } from "@/kavia/label";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Check your inbox for updates.</p>
      </CardContent>
    </Card>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Card"
      description="Displays a card with header, content, and footer sections. A flexible container for grouping related information and actions."
      shadcnCommand="card"
      importCode={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/kavia/card";`}
      usageCode={`// Full card with all sections
<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>

// Simple card (no footer)
<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">You have 3 messages.</p>
  </CardContent>
</Card>`}
      preview={
        <Card className="w-[280px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Ready to deploy.</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Deploy</Button>
          </CardFooter>
        </Card>
      }
      props={[
        { name: "className", type: "string", description: "(Card) Additional CSS classes, e.g., for width or shadow." },
        { name: "asChild", type: "boolean", description: "(CardTitle/CardDescription) Render as a different element." },
      ]}
      tokens={[
        { token: "--card", value: "0 0% 100%", description: "Card background color." },
        { token: "--card-foreground", value: "228 6% 17%", description: "Card text color." },
        { token: "--border", value: "225 6% 87%", description: "Card border color." },
        { token: "--radius", value: "0.5rem", description: "Card corner radius." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "CardDescription text color." },
      ]}
      notes={[
        "CardHeader, CardContent, CardFooter are all optional — use only what you need.",
        "CardTitle renders as <h3> and CardDescription as <p> by default.",
        "For clickable cards, wrap the entire <Card> in a button or link element.",
        "Combine with grid layout for card grids: <div className='grid grid-cols-3 gap-4'>.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
