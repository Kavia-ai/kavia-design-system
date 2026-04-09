import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Design System/Colors",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

// ─── Types ────────────────────────────────────────────────────────────────────

interface ColorToken {
  name: string;
  lightHex: string;
  lightLabel: string;
  darkHex: string;
  darkLabel: string;
  description: string;
}

interface ColorSection {
  title: string;
  description: string;
  tokens: ColorToken[];
}

// ─── Swatch Cell ─────────────────────────────────────────────────────────────

function SwatchCell({ hex, label, dark }: { hex: string; label: string; dark?: boolean }) {
  const textColor = dark ? "#d1d5db" : "#374151";
  const borderColor = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          flexShrink: 0,
          background: hex,
          border: `1px solid ${borderColor}`,
        }}
      />
      <span style={{ fontSize: 13, color: textColor, fontFamily: "monospace" }}>{label}</span>
    </div>
  );
}

// ─── Token Table ─────────────────────────────────────────────────────────────

function TokenTable({ title, description, tokens }: ColorSection) {
  const borderColor = "#e5e7eb";
  const headerBg = "#f9fafb";
  const darkColBg = "#111827";
  const darkHeaderBg = "#0d131f";

  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111827", margin: "0 0 6px 0" }}>{title}</h2>
      <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 16px 0", maxWidth: 640, lineHeight: 1.6 }}>{description}</p>

      <div style={{ borderRadius: 8, border: `1px solid ${borderColor}`, overflow: "hidden" }}>
        {/* Table header */}
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr 1fr 1fr", background: headerBg }}>
          <div style={{ padding: "10px 16px", fontSize: 13, fontWeight: 600, color: "#374151", borderRight: `1px solid ${borderColor}` }}>Token</div>
          <div style={{ padding: "10px 16px", fontSize: 13, fontWeight: 600, color: "#374151", borderRight: `1px solid ${borderColor}` }}>Light</div>
          <div style={{ padding: "10px 16px", fontSize: 13, fontWeight: 600, color: "#d1d5db", background: darkHeaderBg, borderRight: `1px solid rgba(255,255,255,0.08)` }}>Dark</div>
          <div style={{ padding: "10px 16px", fontSize: 13, fontWeight: 600, color: "#374151" }}>Description</div>
        </div>

        {/* Rows */}
        {tokens.map((token, i) => {
          const rowBorder = `1px solid ${borderColor}`;
          const isLast = i === tokens.length - 1;
          return (
            <div
              key={token.name}
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr 1fr 1fr",
                borderTop: rowBorder,
              }}
            >
              {/* Token name */}
              <div style={{
                padding: "10px 16px",
                fontSize: 13,
                fontFamily: "monospace",
                color: "#374151",
                borderRight: rowBorder,
                display: "flex",
                alignItems: "center",
                background: i % 2 === 0 ? "#ffffff" : "#fafafa",
              }}>
                {token.name}
              </div>

              {/* Light */}
              <div style={{
                padding: "10px 16px",
                borderRight: rowBorder,
                display: "flex",
                alignItems: "center",
                background: i % 2 === 0 ? "#ffffff" : "#fafafa",
              }}>
                <SwatchCell hex={token.lightHex} label={token.lightLabel} />
              </div>

              {/* Dark */}
              <div style={{
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                background: i % 2 === 0 ? darkColBg : "#0f1724",
                borderRight: `1px solid rgba(255,255,255,0.08)`,
              }}>
                <SwatchCell hex={token.darkHex} label={token.darkLabel} dark />
              </div>

              {/* Description */}
              <div style={{
                padding: "10px 16px",
                fontSize: 13,
                color: "#6b7280",
                display: "flex",
                alignItems: "center",
                lineHeight: 1.5,
                background: i % 2 === 0 ? "#ffffff" : "#fafafa",
              }}>
                {token.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Token Data ───────────────────────────────────────────────────────────────

const sections: ColorSection[] = [
  {
    title: "Background Tokens",
    description: "Defines surface and container colors that form the foundation of layouts. These include page backgrounds, cards, and layered surfaces, helping establish depth and structure.",
    tokens: [
      { name: "background",       lightHex: "#ffffff",  lightLabel: "white",      darkHex: "#09090b",  darkLabel: "zinc/950",    description: "Main page background for any layout or view." },
      { name: "card",             lightHex: "#ffffff",  lightLabel: "white",      darkHex: "#09090b",  darkLabel: "zinc/950",    description: "Background for card surfaces and elevated containers." },
      { name: "popover",          lightHex: "#ffffff",  lightLabel: "white",      darkHex: "#09090b",  darkLabel: "zinc/950",    description: "Background for popovers, dropdowns, and floating panels." },
      { name: "muted",            lightHex: "#f4f4f5",  lightLabel: "zinc/100",   darkHex: "#27272a",  darkLabel: "zinc/800",    description: "Subdued background for muted or secondary content areas." },
      { name: "accent",           lightHex: "#f4f4f5",  lightLabel: "zinc/100",   darkHex: "#27272a",  darkLabel: "zinc/800",    description: "Background for highlighted or hovered interactive elements." },
      { name: "secondary",        lightHex: "#f4f4f5",  lightLabel: "zinc/100",   darkHex: "#27272a",  darkLabel: "zinc/800",    description: "Secondary surface background, used for grouping or sectioning." },
    ],
  },
  {
    title: "Foreground Tokens",
    description: "Text and icon colors that sit on top of background surfaces. These tokens ensure readability and visual hierarchy across light and dark themes.",
    tokens: [
      { name: "foreground",           lightHex: "#18181b",  lightLabel: "zinc/900",   darkHex: "#fafafa",  darkLabel: "zinc/50",     description: "Primary text color for body copy and labels." },
      { name: "card-foreground",      lightHex: "#18181b",  lightLabel: "zinc/900",   darkHex: "#fafafa",  darkLabel: "zinc/50",     description: "Text color rendered on card backgrounds." },
      { name: "popover-foreground",   lightHex: "#18181b",  lightLabel: "zinc/900",   darkHex: "#fafafa",  darkLabel: "zinc/50",     description: "Text color rendered inside popovers and dropdowns." },
      { name: "muted-foreground",     lightHex: "#71717a",  lightLabel: "zinc/500",   darkHex: "#a1a1aa",  darkLabel: "zinc/400",    description: "Subdued text for hints, placeholders, and secondary labels." },
      { name: "accent-foreground",    lightHex: "#18181b",  lightLabel: "zinc/900",   darkHex: "#fafafa",  darkLabel: "zinc/50",     description: "Text color rendered on accent-colored surfaces." },
      { name: "secondary-foreground", lightHex: "#18181b",  lightLabel: "zinc/900",   darkHex: "#fafafa",  darkLabel: "zinc/50",     description: "Text color rendered on secondary-colored surfaces." },
    ],
  },
  {
    title: "Brand / Primary Tokens",
    description: "Core brand colors used for primary actions, buttons, and key interactive elements. These tokens establish the dominant visual identity of the product.",
    tokens: [
      { name: "primary",            lightHex: "#18181b",  lightLabel: "zinc/900",  darkHex: "#fafafa",  darkLabel: "zinc/50",   description: "Main brand color for primary buttons and key actions." },
      { name: "primary-foreground", lightHex: "#fafafa",  lightLabel: "zinc/50",   darkHex: "#18181b",  darkLabel: "zinc/900",  description: "Text color rendered on primary-colored surfaces." },
    ],
  },
  {
    title: "Destructive Tokens",
    description: "Colors reserved for destructive actions such as deletions, errors, and irreversible operations. Use these to communicate risk clearly.",
    tokens: [
      { name: "destructive",            lightHex: "#ef4444",  lightLabel: "red/500",  darkHex: "#7f1d1d",  darkLabel: "red/900",   description: "Background for destructive actions like delete or remove." },
      { name: "destructive-foreground", lightHex: "#fafafa",  lightLabel: "zinc/50",  darkHex: "#fafafa",  darkLabel: "zinc/50",   description: "Text color rendered on destructive-colored surfaces." },
    ],
  },
  {
    title: "Border & Input Tokens",
    description: "Colors for borders, dividers, and form input outlines. These tokens define visual separation between elements and interactive field boundaries.",
    tokens: [
      { name: "border", lightHex: "#e4e4e7",  lightLabel: "zinc/200",  darkHex: "#27272a",  darkLabel: "zinc/800",  description: "Default border color for dividers and component outlines." },
      { name: "input",  lightHex: "#e4e4e7",  lightLabel: "zinc/200",  darkHex: "#27272a",  darkLabel: "zinc/800",  description: "Border color for form inputs and text fields." },
      { name: "ring",   lightHex: "#18181b",  lightLabel: "zinc/900",  darkHex: "#d4d4d8",  darkLabel: "zinc/300",  description: "Focus ring color for keyboard-navigable interactive elements." },
    ],
  },
  {
    title: "Status — Danger",
    description: "Semantic red tokens for error states, validation failures, and destructive feedback.",
    tokens: [
      { name: "danger/bold",   lightHex: "#ef4444",  lightLabel: "red/500",   darkHex: "#f87171",  darkLabel: "red/400",   description: "High-emphasis danger color for critical alerts and errors." },
      { name: "danger/subtle", lightHex: "#fef2f2",  lightLabel: "red/50",    darkHex: "#450a0a",  darkLabel: "red/950",   description: "Low-emphasis background for danger notification areas." },
      { name: "danger/text",   lightHex: "#dc2626",  lightLabel: "red/600",   darkHex: "#fca5a5",  darkLabel: "red/300",   description: "Text color for danger labels and inline error messages." },
      { name: "danger/border", lightHex: "#f87171",  lightLabel: "red/400",   darkHex: "#f87171",  darkLabel: "red/400",   description: "Border accent for danger-state input fields and callouts." },
    ],
  },
  {
    title: "Status — Warning",
    description: "Semantic amber/yellow tokens for cautionary states, alerts, and non-critical notices.",
    tokens: [
      { name: "warning/bold",   lightHex: "#f59e0b",  lightLabel: "amber/500",  darkHex: "#fbbf24",  darkLabel: "amber/400",  description: "High-emphasis warning color for alerts and notices." },
      { name: "warning/subtle", lightHex: "#fffbeb",  lightLabel: "amber/50",   darkHex: "#451a03",  darkLabel: "amber/950",  description: "Low-emphasis background for warning areas." },
      { name: "warning/text",   lightHex: "#d97706",  lightLabel: "amber/600",  darkHex: "#fcd34d",  darkLabel: "amber/300",  description: "Text color for warning labels and inline caution messages." },
      { name: "warning/border", lightHex: "#fbbf24",  lightLabel: "amber/400",  darkHex: "#fbbf24",  darkLabel: "amber/400",  description: "Border accent for warning-state components." },
    ],
  },
  {
    title: "Status — Success",
    description: "Semantic green tokens for success states, confirmations, and positive feedback.",
    tokens: [
      { name: "success/bold",   lightHex: "#22c55e",  lightLabel: "green/500",  darkHex: "#4ade80",  darkLabel: "green/400",  description: "High-emphasis success color for confirmations and completions." },
      { name: "success/subtle", lightHex: "#f0fdf4",  lightLabel: "green/50",   darkHex: "#052e16",  darkLabel: "green/950",  description: "Low-emphasis background for success notification areas." },
      { name: "success/text",   lightHex: "#16a34a",  lightLabel: "green/600",  darkHex: "#86efac",  darkLabel: "green/300",  description: "Text color for success labels and inline messages." },
      { name: "success/border", lightHex: "#4ade80",  lightLabel: "green/400",  darkHex: "#4ade80",  darkLabel: "green/400",  description: "Border accent for success-state components." },
    ],
  },
  {
    title: "Status — Information",
    description: "Semantic blue tokens for informational states, tips, and neutral notices that don't imply urgency.",
    tokens: [
      { name: "info/bold",   lightHex: "#3b82f6",  lightLabel: "blue/500",  darkHex: "#60a5fa",  darkLabel: "blue/400",  description: "High-emphasis info color for banners and notices." },
      { name: "info/subtle", lightHex: "#eff6ff",  lightLabel: "blue/50",   darkHex: "#172554",  darkLabel: "blue/950",  description: "Low-emphasis background for informational areas." },
      { name: "info/text",   lightHex: "#2563eb",  lightLabel: "blue/600",  darkHex: "#93c5fd",  darkLabel: "blue/300",  description: "Text color for info labels and inline descriptions." },
      { name: "info/border", lightHex: "#60a5fa",  lightLabel: "blue/400",  darkHex: "#60a5fa",  darkLabel: "blue/400",  description: "Border accent for info-state components." },
    ],
  },
  {
    title: "Chart Colors",
    description: "A curated palette for data visualizations. Each token maps to a distinct hue designed for clear differentiation across chart series.",
    tokens: [
      { name: "chart-1", lightHex: "#e76e50",  lightLabel: "orange",     darkHex: "#2a9d8f",  darkLabel: "teal",      description: "First data series color — primary chart accent." },
      { name: "chart-2", lightHex: "#2a9d8f",  lightLabel: "teal",       darkHex: "#e76e50",  darkLabel: "orange",    description: "Second data series color — secondary chart accent." },
      { name: "chart-3", lightHex: "#e9c46a",  lightLabel: "yellow",     darkHex: "#e9c46a",  darkLabel: "yellow",    description: "Third data series color — tertiary chart accent." },
      { name: "chart-4", lightHex: "#264653",  lightLabel: "dark-teal",  darkHex: "#f4a261",  darkLabel: "amber",     description: "Fourth data series color for additional series." },
      { name: "chart-5", lightHex: "#f4a261",  lightLabel: "amber",      darkHex: "#264653",  darkLabel: "dark-teal", description: "Fifth data series color for extended series." },
    ],
  },
  {
    title: "Sidebar Tokens",
    description: "Dedicated tokens for the sidebar navigation component. These provide independent theming for sidebar surfaces, text, borders, and interactive states.",
    tokens: [
      { name: "sidebar-background",         lightHex: "#fafafa",  lightLabel: "zinc/50",    darkHex: "#18181b",  darkLabel: "zinc/900",    description: "Background of the sidebar panel." },
      { name: "sidebar-foreground",         lightHex: "#3f3f46",  lightLabel: "zinc/700",   darkHex: "#a1a1aa",  darkLabel: "zinc/400",    description: "Default text and icon color in the sidebar." },
      { name: "sidebar-primary",            lightHex: "#18181b",  lightLabel: "zinc/900",   darkHex: "#fafafa",  darkLabel: "zinc/50",     description: "Primary brand color applied within the sidebar." },
      { name: "sidebar-primary-foreground", lightHex: "#fafafa",  lightLabel: "zinc/50",    darkHex: "#18181b",  darkLabel: "zinc/900",    description: "Text on sidebar primary-colored elements." },
      { name: "sidebar-accent",             lightHex: "#f4f4f5",  lightLabel: "zinc/100",   darkHex: "#27272a",  darkLabel: "zinc/800",    description: "Hover and active state background in sidebar menus." },
      { name: "sidebar-accent-foreground",  lightHex: "#18181b",  lightLabel: "zinc/900",   darkHex: "#fafafa",  darkLabel: "zinc/50",     description: "Text on sidebar accent-colored elements." },
      { name: "sidebar-border",             lightHex: "#e4e4e7",  lightLabel: "zinc/200",   darkHex: "#27272a",  darkLabel: "zinc/800",    description: "Border color for sidebar separators and outlines." },
      { name: "sidebar-ring",               lightHex: "#18181b",  lightLabel: "zinc/900",   darkHex: "#d4d4d8",  darkLabel: "zinc/300",    description: "Focus ring for sidebar interactive elements." },
    ],
  },
];

// ─── Story ────────────────────────────────────────────────────────────────────

export const Palette: Story = {
  name: "Color Palette",
  render: () => (
    <div style={{ padding: "40px 48px", maxWidth: 1100, margin: "0 auto", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>Color System</h1>
        <p style={{ fontSize: 14, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
          Design tokens for every color decision in the system. Each token shows its light and dark mode values alongside its intended usage.
        </p>
      </div>

      {sections.map((section) => (
        <TokenTable key={section.title} {...section} />
      ))}
    </div>
  ),
};
