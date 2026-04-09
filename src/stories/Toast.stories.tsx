import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";

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
