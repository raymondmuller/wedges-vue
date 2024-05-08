import path from "node:path";
import { defineConfig, postcssIsolateStyles } from "vitepress";
import Icons from "unplugin-icons/vite";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import { cssVariables } from "./theme/config/shiki";

// import { transformerMetaWordHighlight, transformerNotationWordHighlight } from '@shikijs/transformers'
import { siteConfig } from "./theme/config/site";
import ComponentPreviewPlugin from "./theme/plugins/previewer";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: siteConfig.name,
  titleTemplate: ":title - lemonsqueezy/wedges",
  description: siteConfig.description,
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    ["link", { rel: "shortcut icon", href: "/favicon-16x16.png" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],

    ["meta", { name: "theme-color", media: "(prefers-color-scheme: light)", content: "white" }],
    ["meta", { name: "theme-color", media: "(prefers-color-scheme: dark)", content: "black" }],

    ["meta", { name: "creator", content: "raymondmuller" }],
    ["meta", { name: "theme-color", content: "#41b883" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "en" }],
    ["meta", { name: "og:site_name", content: siteConfig.name }],
    ["meta", { name: "og:image", content: siteConfig.ogImage }],
    ["meta", { name: "twitter:image", content: siteConfig.ogImage }],

  ],

  sitemap: {
    hostname: "https://wedges-vue.pages.dev",
    transformItems(items) {
      return items.filter(item => !item.url.includes("migration"));
    },
  },
  appearance: false,

  lastUpdated: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    editLink: {
      pattern: "https://github.com/raymondmuller/wedges-vue/tree/main/apps/www/src/:path",
      text: "Edit this page on GitHub",
    },
  },

  srcDir: path.resolve(__dirname, "../src"),
  markdown: {
    theme: cssVariables,
    config(md) {
      md.use(ComponentPreviewPlugin);
    },
  },
  rewrites: {
    "content/(.*)": "(.*)",
  },
  vite: {
    css: {
      postcss: {
        plugins: [

          tailwind() as any,
          autoprefixer(),
          postcssIsolateStyles({
            includeFiles: [/vp-doc\.css/, /base\.css/, /shiki\.css/, /themes\.css/],
          }),
        ],
      },
    },
    plugins: [
      Icons({ compiler: "vue3", autoInstall: true }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../src"),
      },
    },
  },
});
