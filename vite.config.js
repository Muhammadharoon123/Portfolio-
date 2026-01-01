import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.glb"],
  optimizeDeps: {
    // This stops Vite from trying to "fix" the timeline library internally
    include: ["react-vertical-timeline-component"],
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
