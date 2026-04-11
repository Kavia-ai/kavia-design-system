import type { Meta, StoryObj } from "@storybook/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/kavia/chart";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Chart",
};
export default meta;
type Story = StoryObj;

// --- Bar Chart ---
const barData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const barConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
  mobile: { label: "Mobile", color: "hsl(var(--chart-2))" },
};

export const BarChartStory: Story = {
  name: "Bar Chart",
  render: () => (
    <ChartContainer config={barConfig} className="h-[300px] w-full">
      <BarChart data={barData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};

// --- Line Chart ---
const lineData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
];

const lineConfig: ChartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
  expenses: { label: "Expenses", color: "hsl(var(--chart-2))" },
};

export const LineChartStory: Story = {
  name: "Line Chart",
  render: () => (
    <ChartContainer config={lineConfig} className="h-[300px] w-full">
      <LineChart data={lineData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="expenses" stroke="var(--color-expenses)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  ),
};

// --- Pie Chart ---
const pieData = [
  { name: "Chrome", value: 400, fill: "var(--color-chrome)" },
  { name: "Safari", value: 300, fill: "var(--color-safari)" },
  { name: "Firefox", value: 200, fill: "var(--color-firefox)" },
  { name: "Edge", value: 100, fill: "var(--color-edge)" },
];

const pieConfig: ChartConfig = {
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
};

export const PieChartStory: Story = {
  name: "Pie Chart",
  render: () => (
    <ChartContainer config={pieConfig} className="h-[300px] w-full">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} />
      </PieChart>
    </ChartContainer>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Chart"
      description="Chart components built on top of Recharts with a theming layer. ChartContainer wires up color tokens from your ChartConfig, providing consistent theming across light and dark modes."
      shadcnCommand="chart"
      importCode={`import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/kavia/chart";

// Recharts chart types (install separately)
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid } from "recharts";`}
      usageCode={`// 1. Define config — maps dataKey to label and color token
const chartConfig: ChartConfig = {
  desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
  mobile: { label: "Mobile", color: "hsl(var(--chart-2))" },
};

// 2. Wrap your Recharts chart in ChartContainer
<ChartContainer config={chartConfig} className="h-[300px] w-full">
  <BarChart data={data}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} axisLine={false} />
    <YAxis tickLine={false} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    {/* Use var(--color-desktop) — injected by ChartContainer */}
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>

// Line chart
<ChartContainer config={config} className="h-[300px] w-full">
  <LineChart data={data}>
    <Line dataKey="value" stroke="var(--color-value)" strokeWidth={2} dot={false} />
  </LineChart>
</ChartContainer>`}
      preview={
        <ChartContainer config={barConfig} className="h-[200px] w-full">
          <BarChart data={barData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tick={{ fontSize: 11 }} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      }
      props={[
        { name: "config", type: "ChartConfig", required: true, description: "(ChartContainer) Maps dataKey → { label, color }. ChartContainer injects CSS variables like --color-{key}." },
        { name: "className", type: "string", description: "(ChartContainer) Required for sizing — set h-[...] and w-full." },
        { name: "hideLabel", type: "boolean", description: "(ChartTooltipContent) Hides the data key label in tooltips." },
        { name: "hideIndicator", type: "boolean", description: "(ChartTooltipContent) Hides the color indicator in tooltips." },
        { name: "indicator", type: '"line" | "dot" | "dashed"', description: "(ChartTooltipContent) Style of the color indicator." },
      ]}
      tokens={[
        { token: "--chart-1", value: "216 80% 56%", description: "Primary chart color (Blue)." },
        { token: "--chart-2", value: "84 54% 46%", description: "Secondary chart color (Lime)." },
        { token: "--chart-3", value: "278 86% 67%", description: "Tertiary chart color (Purple)." },
        { token: "--chart-4", value: "32 93% 50%", description: "Chart color 4 (Orange)." },
        { token: "--chart-5", value: "195 65% 55%", description: "Chart color 5 (Teal)." },
        { token: "--chart-6", value: "279 48% 52%", description: "Chart color 6 (Deep Purple)." },
        { token: "--chart-7", value: "29 100% 37%", description: "Chart color 7 (Brown Orange)." },
        { token: "--chart-8", value: "323 71% 68%", description: "Chart color 8 (Magenta)." },
      ]}
      notes={[
        "ChartContainer injects --color-{key} CSS variables for each key in your config — use var(--color-desktop) in fill/stroke props.",
        "Always set h-[...] on ChartContainer — Recharts needs a fixed height parent.",
        "Colors automatically adapt to dark mode via the CSS variable system.",
        "Use ChartTooltipContent and ChartLegendContent for consistent tooltip/legend styling.",
        "ChartConfig color value must be an hsl() value — use hsl(var(--chart-N)) pattern.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};

// --- Tooltip Indicators ---
export const LineIndicator: Story = {
  name: "Tooltip Line Indicator",
  render: () => (
    <ChartContainer config={lineConfig} className="h-[300px] w-full">
      <LineChart data={lineData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
        <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="expenses" stroke="var(--color-expenses)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  ),
};
