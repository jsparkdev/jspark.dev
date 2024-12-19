import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jspark.dev",
  integrations: [sitemap()],
  experimental: {
    svg: true,
  },
  vite: {
    build: {
      target: "esnext",
    },
    plugins: [tailwindcss()],
  },
});
