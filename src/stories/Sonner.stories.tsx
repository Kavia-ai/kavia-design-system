import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

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
