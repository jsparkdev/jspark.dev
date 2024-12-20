import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jspark.dev",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
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
