import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "@/kavia/alert";
import { Terminal, AlertCircle } from "lucide-react";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Alert",
  component: Alert,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Alert"
      description="Displays a callout for user attention with contextual feedback messages. Supports default and destructive variants."
      shadcnCommand="alert"
      importCode={`import { Alert, AlertDescription, AlertTitle } from "@/kavia/alert";`}
      usageCode={`import { Terminal, AlertCircle } from "lucide-react";

// Default info alert
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>

// Destructive / error alert
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
      preview={
        <div className="space-y-3 w-full max-w-sm">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>CLI components available.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Session expired.</AlertDescription>
          </Alert>
        </div>
      }
      props={[
        { name: "variant", type: '"default" | "destructive"', default: '"default"', description: "Visual style of the alert." },
        { name: "className", type: "string", description: "Additional CSS classes." },
      ]}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "Alert background in default variant." },
        { token: "--foreground", value: "228 6% 17%", description: "Alert text color." },
        { token: "--border", value: "225 6% 87%", description: "Alert border color." },
        { token: "--destructive", value: "4 64% 48%", description: "Destructive alert border/icon color." },
        { token: "--destructive-foreground", value: "0 0% 100%", description: "Destructive alert text." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "AlertDescription text color." },
      ]}
      notes={[
        "AlertTitle renders as an <h5> — adjust heading level with asChild if needed.",
        "Icons placed directly inside <Alert> (as siblings to AlertTitle/AlertDescription) auto-align via CSS grid.",
        "For dismissible alerts, manage visibility with useState and conditionally render.",
        "Use role='alert' (already applied) for live region announcement to screen readers.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
