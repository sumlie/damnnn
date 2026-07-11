import { defineConfig } from "oxfmt";

export default defineConfig({
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 70,
  semi: true,
  singleQuote: false,
  sortImports: {
    groups: [
      "builtin",
      "external",
      "internal",
      "parent",
      "sibling",
      "index",
    ],
    ignoreDeclarationSort: true,
    ignoreMemberSort: true,
    newlinesBetween: true,
    pathGroups: [
      {
        group: "internal",
        pattern: "@/**",
        position: "before",
      },
    ],
  },
  sortTailwindcss: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
});
