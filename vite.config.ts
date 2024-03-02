import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@Components": path.resolve(__dirname, "src/Components"),
      "@Hooks": path.resolve(__dirname, "src/Hooks"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Context": path.resolve(__dirname, "src/Context"),
      "@Containers": path.resolve(__dirname, "src/Containers"),
    },
  },
  plugins: [react()],
});
