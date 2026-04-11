import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const kaviaTheme = create({
  base: "light",

  // Brand
  brandName: "KAVIA AI Design System",
  brandTitle: "KAVIA AI Design System",
  brandUrl: "/",

  // UI colors
  colorPrimary: "#3b7de8",
  colorSecondary: "#3b7de8",

  // App background
  appBg: "#f8f9fc",
  appContentBg: "#ffffff",
  appBorderColor: "#e2e5ec",
  appBorderRadius: 8,

  // Text
  textColor: "#172b4d",
  textInverseColor: "#ffffff",
  textMutedColor: "#6b7280",

  // Toolbar
  barTextColor: "#6b7280",
  barSelectedColor: "#3b7de8",
  barBg: "#ffffff",
  barHoverColor: "#3b7de8",

  // Inputs
  inputBg: "#ffffff",
  inputBorder: "#d1d5db",
  inputTextColor: "#172b4d",
  inputBorderRadius: 6,

  // Fonts
  fontBase: '"Inter", "Segoe UI", system-ui, sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", monospace',
});

addons.setConfig({
  theme: kaviaTheme,
  sidebar: {
    showRoots: true,
  },
});
