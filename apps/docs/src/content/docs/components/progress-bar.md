---
title: Progress Bar
description: A progress bar visually showing the percentage of a task completed.
source: packages/wedges-vue/src/components/progress
primitive: https://www.radix-vue.com/components/progress.html
---

<ComponentPreview name="ProgressBarPreview" />

## Usage

```vue
<script setup lang="ts">
import { Progress } from "wedges-vue";
</script>

<template>
  <Progress :model-value="33" />
</template>
```

## API Reference

### Props
<!-- @include: ../../meta/ProgressBar.md -->

## Examples

The following example shows different layout variants.

<ComponentPreview name="ProgressBarExampleOne" />

Next example shows different color and layout combinations.

<ComponentPreview name="ProgressBarExampleTwo" />
