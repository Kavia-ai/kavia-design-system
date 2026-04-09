import type { Preview, Decorator } from "@storybook/react";
import React, { useEffect } from "react";
import "../src/index.css";

// Apply Atlassian token theme by setting the data-color-mode attribute on <html>.
// @atlaskit/* components use var(--ds-*) CSS custom properties scoped to this attribute.
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? "light";

  useEffect(() => {
    const root = document.documentElement;
    // Atlassian uses data-color-mode="light|dark" to scope CSS variable blocks
    root.setAttribute("data-color-mode", theme === "dark" ? "dark" : "light");
    // Also keep our .dark class for Tailwind dark utilities
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#1d2125" : "#ffffff",
        color: theme === "dark" ? "#c7d1db" : "#172b4d",
        minHeight: "100vh",
        padding: "1.5rem",
      }}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withTheme],

  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: "light",
  },

  parameters: {
    layout: "padded",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
