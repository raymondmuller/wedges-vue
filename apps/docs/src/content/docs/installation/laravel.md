---
title: Laravel
description: Start using Wedges with Laravel + Inertia.
breadcrumbs:
  - Installation
---

<Steps>

### Create Laravel project

To set up a new Laravel project with Inertia and Vue, run the following command in your terminal:

```bash
laravel new my-laravel-app --typescript --breeze --stack=vue --git --no-interaction
```

<Alert variant="expanded" className="not-prose">
This command requires the Laravel Installer version 5.2.0 or higher. Ensure you have this version installed to utilize the features and options specified in the command.
</Alert>

### Install Wedges

<Tabs variant='underlined' defaultValue='pnpm'>
  <TabsList>
    <TabsTrigger value="pnpm">pnpm</TabsTrigger>
    <TabsTrigger value="npm">npm</TabsTrigger>
    <TabsTrigger value="yarn">yarn</TabsTrigger>
  </TabsList>

  <TabsContent value="pnpm">

```bash
pnpm add wedges-vue
```

  </TabsContent>

  <TabsContent value="npm">

```bash
npm i wedges-vue
```

  </TabsContent>

  <TabsContent value="yarn">

```bash
yarn add wedges-vue
```

  </TabsContent>

</Tabs>

### Configure Tailwind CSS

Wedges requires Tailwind CSS to be installed prior to use. If you haven't installed it already, follow the instructions in the <a href="https://tailwindcss.com/docs/installation/" target="_blank" rel='nofollow noreferrer'>official Tailwind CSS installation guide</a>.

Once Tailwind CSS is installed, update your `tailwind.config.js` file to add the necessary configuration for Wedges:

```js {1,10,13,14} title="tailwind.config.js" showLineNumbers
import { wedgesTW } from "wedges-vue";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.vue",
    "node_modules/wedges-vue/dist/**/*.{js,ts,vue}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [wedgesTW()],
};
```

### Setup pnpm (optional)

If you're using pnpm, add the following line to your `.npmrc` file:

```
public-hoist-pattern[]=*@lmsqueezy/*
```

This ensures that pnpm correctly handles dependencies for Wedges, allowing necessary packages to be accessible at the top level of your node_modules.

After updating, run `pnpm install` again to reconfigure your dependencies correctly.

### Using the components

That's all. You can now start using the components in your application.

```vue
<script setup lang="ts">
import { Alert } from "wedges-vue";
</script>

<template>
  <Alert>You're awesome!</Alert>
</template>
```

</Steps>