---
title: Loading
description: Renders an accessible label associated with controls.
source: packages/wedges-vue/src/components/label
primitive: https://www.radix-vue.com/components/label.html
---

<ComponentPreview name="LoadingPreview" />

## Usage

```vue
<script setup lang="ts">
import { Loading } from "wedges-vue";
</script>

<template>
  <Loading />
</template>
```

## API Reference

### Props
<!-- @include: ../../meta/Loading.md -->

## Examples

The following example demonstrates using the `Label` component alongside a `Label.Helper` component with the `error` prop.

<ComponentPreview name="LoadingExampleOne" />

Change the color using the `color` prop, or set a custom text color with a `class`.

<ComponentPreview name="LoadingExampleTwo" />
