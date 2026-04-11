import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/kavia/navigation-menu";
import { DevGuide } from "./DevGuide";

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

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="NavigationMenu"
      description="A collection of links for navigating websites. Supports dropdown submenus with animated content panels."
      shadcnCommand="navigation-menu"
      importCode={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/kavia/navigation-menu";`}
      usageCode={`// With dropdown content
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
          <li>
            <NavigationMenuLink asChild>
              <a href="/product-a" className="block p-3 rounded-md hover:bg-accent">
                <div className="font-medium">Product A</div>
                <p className="text-sm text-muted-foreground">Description here.</p>
              </a>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>

    {/* Plain link (no dropdown) */}
    <NavigationMenuItem>
      <NavigationMenuLink
        href="/docs"
        className={navigationMenuTriggerStyle()}
      >
        Documentation
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      preview={
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Docs
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      }
      props={[
        { name: "value", type: "string", description: "Controlled open menu item." },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback when active item changes." },
        { name: "delayDuration", type: "number", default: "200", description: "Delay before dropdown appears." },
        { name: "asChild", type: "boolean", description: "(NavigationMenuLink) Render as child (e.g., Next.js Link)." },
      ]}
      tokens={[
        { token: "--background", value: "0 0% 100%", description: "NavigationMenu background." },
        { token: "--popover", value: "0 0% 100%", description: "Dropdown content background." },
        { token: "--accent", value: "214 91% 95%", description: "Link hover/focus background." },
        { token: "--accent-foreground", value: "215 80% 48%", description: "Link hover/focus text color." },
        { token: "--border", value: "225 6% 87%", description: "Menu border color." },
      ]}
      notes={[
        "For Next.js, use NavigationMenuLink asChild with <Link> component.",
        "navigationMenuTriggerStyle() provides consistent button styling for plain links.",
        "NavigationMenuContent animates — it slides in from above on open.",
        "Use grid layout inside NavigationMenuContent for multi-column mega menus.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
