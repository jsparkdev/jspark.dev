import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["**/dist", "**/node_modules", "**/.astro"],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  {
    rules: {
      "astro/no-exports-from-components": "error",
      "astro/prefer-class-list-directive": "error",
      "astro/prefer-object-class-list": "error",
      "astro/prefer-split-class-list": "error",
      "astro/sort-attributes": "error",
    },
  },
);
