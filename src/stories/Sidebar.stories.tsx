import type { Meta, StoryObj } from "@storybook/react";
import {
  Home,
  Inbox,
  Settings,
  ChevronDown,
  LayoutDashboard,
  Users,
  FileText,
  BarChart2,
} from "lucide-react";
import { DevGuide } from "./DevGuide";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/kavia/sidebar";
import { Separator } from "@/kavia/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/kavia/collapsible";

const meta: Meta = {
  title: "Components/Sidebar",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "#" },
  { title: "Inbox", icon: Inbox, url: "#", badge: "12" },
  { title: "Users", icon: Users, url: "#" },
  { title: "Reports", icon: BarChart2, url: "#" },
  { title: "Documents", icon: FileText, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
];

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Home className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Acme Corp</span>
                  <span className="text-xs text-muted-foreground">Dashboard</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {item.badge && (
                      <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 px-4 border-b">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-medium">Page Content</span>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="aspect-video rounded-xl bg-muted/50" />
            ))}
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="Acme Corp">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Home className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Acme Corp</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 px-4 border-b">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-medium">Collapsed by default</span>
        </header>
        <div className="p-4 text-muted-foreground text-sm">
          Hover over the rail or click the trigger to expand.
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Home className="size-4" />
                </div>
                <span className="font-semibold">Acme Corp</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive>
                    <a href="#">
                      <LayoutDashboard />
                      <span>Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <Collapsible defaultOpen>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <Users />
                        <span>Users</span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#">All Users</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#">Admins</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#">Roles</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Settings />
                      <span>Settings</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <div className="flex aspect-square size-6 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                  JD
                </div>
                <span>John Doe</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 px-4 border-b">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-medium">With Submenu & Footer</span>
        </header>
        <div className="p-4 text-muted-foreground text-sm">
          Collapsible submenu under Users.
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
};

export const FloatingVariant: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="floating">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Home className="size-4" />
                </div>
                <span className="font-semibold">Floating Sidebar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.slice(0, 4).map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 px-4 border-b">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <span className="font-medium">Floating variant</span>
        </header>
        <div className="p-4 text-muted-foreground text-sm">
          The sidebar floats with rounded corners and a shadow.
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Sidebar"
      description="A composable, themeable sidebar component system. Supports collapsible, floating, and inset variants with keyboard shortcut toggle and mobile drawer mode."
      shadcnCommand="sidebar"
      importCode={`import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/kavia/sidebar";`}
      usageCode={`// Wrap your layout in SidebarProvider
export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          {/* Logo / branding */}
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header>
          <SidebarTrigger />
          {/* Page header */}
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}`}
      preview={
        <div className="text-sm text-muted-foreground p-4 border rounded-lg">
          Sidebar requires fullscreen layout — see the Default and WithSubMenu stories for live demos.
        </div>
      }
      props={[
        { name: "defaultOpen", type: "boolean", default: "true", description: "(SidebarProvider) Initial open state of the sidebar." },
        { name: "open", type: "boolean", description: "(SidebarProvider) Controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "(SidebarProvider) Callback when sidebar opens/closes." },
        { name: "variant", type: '"sidebar" | "floating" | "inset"', default: '"sidebar"', description: "(Sidebar) Layout variant." },
        { name: "side", type: '"left" | "right"', default: '"left"', description: "(Sidebar) Which side the sidebar appears on." },
        { name: "collapsible", type: '"offcanvas" | "icon" | "none"', default: '"offcanvas"', description: "(Sidebar) Collapse behavior." },
        { name: "tooltip", type: "string | TooltipContent", description: "(SidebarMenuButton) Tooltip shown when sidebar is collapsed." },
        { name: "isActive", type: "boolean", description: "(SidebarMenuButton) Marks current page/section as active." },
      ]}
      tokens={[
        { token: "--sidebar-background", value: "0 0% 98%", description: "Sidebar panel background." },
        { token: "--sidebar-foreground", value: "240 5.3% 26.1%", description: "Sidebar text color." },
        { token: "--sidebar-primary", value: "240 5.9% 10%", description: "Active item / brand color." },
        { token: "--sidebar-primary-foreground", value: "0 0% 98%", description: "Active item text." },
        { token: "--sidebar-accent", value: "240 4.8% 95.9%", description: "Item hover background." },
        { token: "--sidebar-accent-foreground", value: "240 5.9% 10%", description: "Item hover text." },
        { token: "--sidebar-border", value: "220 13% 91%", description: "Sidebar border color." },
        { token: "--sidebar-ring", value: "217.2 91.2% 59.8%", description: "Focus ring color." },
      ]}
      notes={[
        "Always wrap the entire layout (sidebar + content) in <SidebarProvider>.",
        "SidebarInset provides the content area with proper margin adjustment for the sidebar.",
        "SidebarRail provides a thin clickable area to expand the collapsed sidebar.",
        "Default keyboard shortcut to toggle: ⌘B (Mac) / Ctrl+B (Windows).",
        "On mobile, the sidebar renders as a Sheet drawer automatically.",
        "Use isActive on SidebarMenuButton to highlight the current page.",
      ]}
    />
  ),
  parameters: { layout: "fullscreen" },
};
