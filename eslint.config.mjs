import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["**/dist", "**/node_modules", "**/.astro"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",

      // Astro
      "astro/no-exports-from-components": "error",
      "astro/prefer-class-list-directive": "error",
      "astro/prefer-object-class-list": "error",
      "astro/prefer-split-class-list": "error",
      "astro/sort-attributes": "error",

      // JavaScript
      "func-style": ["error", "expression"],
      "prefer-arrow-callback": "error",
      "prefer-destructuring": "error",
      "prefer-template": "error",
      "no-console": "warn",

      // TypeScript
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
          fixStyle: "separate-type-imports",
        },
      ],
    },
  },
);
