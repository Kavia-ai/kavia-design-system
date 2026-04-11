import type { Preview, Decorator } from "@storybook/react";
import React, { useEffect } from "react";
import "../src/index.css";

// Apply Atlassian token theme by setting the data-color-mode attribute on <html>.
// @atlaskit/* components use var(--ds-*) CSS custom properties scoped to this attribute.
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? "light";

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-color-mode", theme === "dark" ? "dark" : "light");
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");

    // Apply saved theme tokens from the Theme Customizer
    try {
      const storageKey = theme === "dark" ? "kavia-theme-tokens-dark" : "kavia-theme-tokens";
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const tokens = JSON.parse(saved) as Record<string, string>;
        Object.entries(tokens).forEach(([key, value]) => {
          root.style.setProperty(key, value);
        });
      }
      const radius = localStorage.getItem("kavia-theme-radius");
      if (radius) root.style.setProperty("--radius", `${radius}rem`);
    } catch {}
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
    a11y: {
      // Run axe-core on every story
      element: "#storybook-root",
      config: {
        rules: [
          // Enforce color contrast (WCAG AA)
          { id: "color-contrast", enabled: true },
          // Enforce all images have alt text
          { id: "image-alt", enabled: true },
          // Enforce form labels
          { id: "label", enabled: true },
          // Enforce buttons have accessible names
          { id: "button-name", enabled: true },
          // Enforce links have accessible names
          { id: "link-name", enabled: true },
        ],
      },
      options: {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21aa", "best-practice"],
        },
      },
    },
  },
};

export default preview;
