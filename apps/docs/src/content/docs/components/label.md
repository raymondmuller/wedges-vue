---
title: Label
description: Renders an accessible label associated with controls.
source: packages/wedges-vue/src/components/label
primitive: https://www.radix-vue.com/components/label.html
---

<ComponentPreview name="LabelPreview" />

## Usage

```vue
<script setup lang="ts">
import { Label } from "wedges-vue";
</script>

<template>
  <Label for="email">Your email address</Label>
</template>
```

## API Reference

### Props
<!-- @include: ../../meta/Label.md -->

## Examples

The following example demonstrates using the `Label` component alongside a `Label.Helper` component with the `error` prop.

<ComponentPreview name="LabelExampleOne" />
