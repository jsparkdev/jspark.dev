import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://jspark.dev",
  integrations: [sitemap(), preact()],
  markdown: {
    shikiConfig: {
      theme: "one-light",
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
