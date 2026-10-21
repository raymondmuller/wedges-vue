import antfu from "@antfu/eslint-config";

export default antfu(
  {
    vue: true,
    typescript: true,
    stylistic: {
      quotes: "double",
      semi: true,
    },
    ignores: ["vendor/**"],
  },
  {
    files: ["**/*.vue"],
    rules: {
      "vue/one-component-per-file": 0,
      "vue/no-reserved-component-names": 0,
      "vue/no-useless-v-bind": 0,
    },
  },
  {
    files: ["pnpm-workspace.yaml"],
    rules: {
      // These settings belong to pnpm 10+. This repo is on pnpm 9.
      "pnpm/yaml-enforce-settings": "off",
    },
  },
  {
    files: ["package.json"],
    rules: {
      // Moving pnpm settings into pnpm-workspace.yaml needs pnpm 10.6+.
      "pnpm/json-prefer-workspace-settings": "off",
    },
  },
  {
    // Without `files`, they are general rules for all files
    rules: {
      "symbol-description": 0,
      "no-console": 1,
      "no-tabs": 0,
      "import/first": 0,
      "node/prefer-global/process": 0,
    },
  },
);
