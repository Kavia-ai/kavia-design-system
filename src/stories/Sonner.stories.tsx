import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/kavia/sonner";
import { toast } from "sonner";
import { Button } from "@/kavia/button";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Sonner",
  component: Toaster,
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
    <Button variant="outline" onClick={() => toast("Event has been created.")}>
      Show Toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.success("Profile updated successfully!")}>
      Success Toast
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.error("Something went wrong.")}>
      Error Toast
    </Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event Created", {
          description: "Monday, January 3rd at 6:00pm",
          action: { label: "Undo", onClick: () => console.log("Undo") },
        })
      }
    >
      Toast with Description
    </Button>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Sonner"
      description="An opinionated toast component for React. Renders beautiful toast notifications with stacking, dismissal, and promise support. A modern replacement for the built-in Toast component."
      shadcnCommand="sonner"
      importCode={`// Add <Toaster /> once in your app root
import { Toaster } from "@/kavia/sonner";

// Import toast function anywhere
import { toast } from "sonner";`}
      usageCode={`// 1. Add Toaster to app root (layout.tsx or App.tsx)
<Toaster />

// 2. Trigger toasts anywhere in your app
import { toast } from "sonner";

// Basic toast
toast("Event has been created");

// Variants
toast.success("Profile updated successfully!");
toast.error("Something went wrong.");
toast.warning("Low disk space.");
toast.info("New update available.");

// With description + action
toast("Undo deletion", {
  description: "File moved to trash.",
  action: {
    label: "Undo",
    onClick: () => restoreFile(),
  },
});

// Promise toast
toast.promise(saveSettings(), {
  loading: "Saving...",
  success: "Settings saved!",
  error: "Failed to save.",
});

// Custom duration (ms)
toast("Quick message", { duration: 2000 });`}
      preview={
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => toast("Event created.")}>Default</Button>
          <Button variant="outline" size="sm" onClick={() => toast.success("Success!")}>Success</Button>
          <Button variant="outline" size="sm" onClick={() => toast.error("Error!")}>Error</Button>
        </div>
      }
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "Toast background in light mode." },
        { token: "--foreground", value: "228 6% 17%", description: "Toast text color." },
        { token: "--border", value: "225 6% 87%", description: "Toast border color." },
        { token: "--primary", value: "215 80% 48%", description: "Action button color." },
        { token: "--destructive", value: "4 64% 48%", description: "Error toast indicator color." },
      ]}
      notes={[
        "Add <Toaster /> once in your root layout — not per-page.",
        "The toast() function is imported from 'sonner' (the npm package), not your components.",
        "Use toast.promise() for async operations — automatically shows loading/success/error states.",
        "Toaster accepts theme, position, richColors, and expand props for global configuration.",
        "Prefer Sonner over the legacy Toast component — it has better UX and API.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
