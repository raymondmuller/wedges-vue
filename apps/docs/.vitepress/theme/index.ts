// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import type { Component } from "vue";
import DefaultTheme from "vitepress/theme";
import * as components from "./components";
import DocsLayout from "./layout/DocsLayout.vue";
import Layout from "./layout/MainLayout.vue";

const examples = import.meta.glob("./examples/*.vue", { eager: true });
import "./style.css";
import "./styles/shiki.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // ...
    app.component("docs", DocsLayout);

    for (const [name, component] of Object.entries(components))
      app.component(name, component);

    for (const [example, component] of Object.entries(examples))
      app.component(example, component as Component);
  },
} satisfies Theme;
