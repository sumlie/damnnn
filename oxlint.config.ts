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
