import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// PUBLIC_INTERFACE
/**
 * Vite configuration for the Kavia Design System.
 *
 * This configuration serves two purposes:
 * 1. Local development and Storybook-compatible module resolution.
 * 2. Library builds that emit clean ESM/CJS entrypoints plus a shared CSS file.
 *
 * @returns Vite configuration for development and library packaging.
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "KaviaDesignSystem",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "styles.css";
          }

          return "assets/[name][extname]";
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
