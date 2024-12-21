import eslintPluginAstro from "eslint-plugin-astro";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "astro/no-exports-from-components": "error",
      "astro/prefer-class-list-directive": "error",
      "astro/prefer-object-class-list": "error",
      "astro/prefer-split-class-list": "error",
      "astro/sort-attributes": "error",
    },
  },
  { ignores: [".vscode", "pnpm-lock.yaml", "*.svg", "*.md"] },
];
