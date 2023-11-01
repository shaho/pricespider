/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test-setup.ts",
    include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.{idea,git,cache,output}/**",
    ],

    reporters: ["default", "junit"],
  },
  plugins: [react()],
});
