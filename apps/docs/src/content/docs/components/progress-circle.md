---
title: Progress Circle
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
source: packages/wedges-vue/src/components/progress
primitive: https://www.radix-vue.com/components/progress.html
---

<ComponentPreview name="ProgressCirclePreview" />

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
<!-- @include: ../../meta/ProgressCircle.md -->

## Examples
<ComponentPreview name="ProgressCircleExampleOne" />
