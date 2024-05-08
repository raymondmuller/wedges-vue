// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./layout/MainLayout.vue";
import DocsLayout from "./layout/DocsLayout.vue";
import * as components from "./components";

const examples = import.meta.glob("./examples/*.vue", { eager: true });
import "./style.css";
import "./styles/shiki.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // ...
    app.component("docs", DocsLayout);

    for (const component of Object.keys(components))
      app.component(component, components[component]);

    for (const example of Object.keys(examples))
      app.component(example, examples[example]);
  },
} satisfies Theme;
