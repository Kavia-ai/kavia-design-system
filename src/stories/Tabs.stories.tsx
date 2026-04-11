import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/kavia/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/kavia/card";
import { Button } from "@/kavia/button";
import { Input } from "@/kavia/input";
import { Label } from "@/kavia/label";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Tabs",
  component: Tabs,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Tabs"
      description="A set of layered sections of content—known as tab panels—that are displayed one at a time. Built on Radix UI with full keyboard navigation support."
      shadcnCommand="tabs"
      importCode={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/kavia/tabs";`}
      usageCode={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>

  <TabsContent value="overview">
    <p>Overview content here</p>
  </TabsContent>

  <TabsContent value="analytics">
    <p>Analytics content here</p>
  </TabsContent>

  <TabsContent value="settings">
    <p>Settings content here</p>
  </TabsContent>
</Tabs>

// Controlled tabs
<Tabs value={activeTab} onValueChange={setActiveTab}>
  ...
</Tabs>`}
      preview={
        <Tabs defaultValue="tab1" className="w-[300px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="p-4 text-sm text-muted-foreground">Content for Tab 1</TabsContent>
          <TabsContent value="tab2" className="p-4 text-sm text-muted-foreground">Content for Tab 2</TabsContent>
          <TabsContent value="tab3" className="p-4 text-sm text-muted-foreground">Content for Tab 3</TabsContent>
        </Tabs>
      }
      props={[
        { name: "defaultValue", type: "string", description: "The value of the tab that is active by default (uncontrolled)." },
        { name: "value", type: "string", description: "The controlled active tab value." },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback when the active tab changes." },
        { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Orientation of the tabs." },
      ]}
      tokens={[
        { token: "--muted", value: "210 7% 95%", description: "TabsList background." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Inactive tab text color." },
        { token: "--background", value: "0 0% 100%", description: "Active tab background." },
        { token: "--foreground", value: "228 6% 17%", description: "Active tab text color." },
        { token: "--border", value: "225 6% 87%", description: "Tab border." },
        { token: "--ring", value: "216 81% 60%", description: "Tab focus ring." },
      ]}
      notes={[
        "Each TabsTrigger value must match the corresponding TabsContent value.",
        "Use onValueChange + value for controlled tabs (e.g., synced to URL params).",
        "Keyboard: Arrow keys navigate between tabs, Enter/Space activates.",
        "TabsList applies flex layout — override with grid for equal-width triggers.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
