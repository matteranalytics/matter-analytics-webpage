import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: [
      "matter-analytics.replit.app",
      "matteranalytics.io",
      "matter-analytics-webpage-yjmercer.replit.app"
    ],
  },
});
