---
title: Tabs
description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
source: packages/wedges-vue/src/components/tabs
primitive: https://www.radix-vue.com/components/tabs.html
---

<ComponentPreview name="TabsPreview" />

## Usage

```vue
<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "wedges-vue";
</script>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">
        Account
      </TabsTrigger>
      <TabsTrigger value="password">
        Password
      </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Make changes to your account here.
    </TabsContent>
    <TabsContent value="password">
      Change your password here.
    </TabsContent>
  </Tabs>
</template>
```

## API Reference

### Props
<!-- @include: ../../meta/Tabs.md -->

## Examples

<ComponentPreview name="TabsExampleOne" />
