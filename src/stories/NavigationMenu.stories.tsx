import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const meta: Meta = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px]">
              <li>
                <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent">
                  <div className="text-sm font-medium">Introduction</div>
                  <p className="text-xs text-muted-foreground">Re-usable components built using Radix UI and Tailwind CSS.</p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent">
                  <div className="text-sm font-medium">Installation</div>
                  <p className="text-xs text-muted-foreground">How to install dependencies and structure your app.</p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px]">
              <li>
                <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent">
                  <div className="text-sm font-medium">Alert Dialog</div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent">
                  <div className="text-sm font-medium">Hover Card</div>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
