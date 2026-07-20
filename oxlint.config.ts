import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    nursery: "warn",
    perf: "warn",
    style: "warn",
  },

  plugins: ["import", "typescript", "react", "unicorn", "promise"],

  rules: {
    "max-depth": "off",
    "sort-keys": "off",
    "func-style": "off",
    "import/group-exports": "off",
    "import/no-namespace": "off",
    "import/consistent-type-specifier-style": "off",
    "import/no-named-export": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "sort-imports": "off",
    "typescript/no-explicit-any": "warn",
  },

  settings: {
    react: {
      version: "19.1",
    },
    typescript: true,
  },
});
