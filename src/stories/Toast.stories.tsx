import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/kavia/button";
import { Toaster } from "@/kavia/toaster";
import { ToastAction } from "@/kavia/toast";
import { toast } from "@/hooks/use-toast";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Toast",
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast({ title: "Your message has been sent." })}
    >
      Simple Toast
    </Button>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }
    >
      Destructive Toast
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: (
            <ToastAction altText="Try again" onClick={() => console.log("retry")}>
              Try again
            </ToastAction>
          ),
        })
      }
    >
      Toast with Action
    </Button>
  ),
};

export const DestructiveWithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast({
          variant: "destructive",
          title: "Error deleting file.",
          description: "Make sure you have permission to delete this file.",
          action: (
            <ToastAction altText="Try again">Try again</ToastAction>
          ),
        })
      }
    >
      Destructive + Action
    </Button>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Toast"
      description="A succinct message that is displayed temporarily. Built-in toast system using a custom hook. Note: For new projects, prefer Sonner which has a simpler API."
      shadcnCommand="toast"
      importCode={`// Add <Toaster /> to app root
import { Toaster } from "@/kavia/toaster";

// Use the hook in your components
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/kavia/toast";`}
      usageCode={`// 1. Add Toaster to your root layout
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

// 2. Use the hook in any component
function MyComponent() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10 at 5:57 PM",
          action: (
            <ToastAction altText="Undo">Undo</ToastAction>
          ),
        })
      }
    >
      Show Toast
    </Button>
  );
}

// Destructive variant
toast({
  variant: "destructive",
  title: "Uh oh! Something went wrong.",
  description: "There was a problem with your request.",
});`}
      preview={<Button variant="outline">Show Toast (click)</Button>}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "Toast background." },
        { token: "--foreground", value: "228 6% 17%", description: "Toast text color." },
        { token: "--destructive", value: "4 64% 48%", description: "Destructive toast background." },
        { token: "--destructive-foreground", value: "0 0% 100%", description: "Destructive toast text." },
        { token: "--border", value: "225 6% 87%", description: "Toast border." },
      ]}
      notes={[
        "Add <Toaster /> once in the root layout — it renders all queued toasts.",
        "ToastAction requires an altText prop for screen reader accessibility.",
        "Toasts auto-dismiss after a timeout — users can also swipe to dismiss.",
        "For new projects, consider Sonner (npx shadcn@latest add sonner) — simpler API, better UX.",
        "The useToast hook returns { toast, dismiss, toasts } — use dismiss(toastId) to programmatically close.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
