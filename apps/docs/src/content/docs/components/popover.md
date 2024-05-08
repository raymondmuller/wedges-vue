---
title: Popover
description: Displays rich content in a portal, triggered by a button.
source: packages/wedges-vue/src/components/popover
primitive: https://www.radix-vue.com/components/popover.html
---

<ComponentPreview name="PopoverPreview" />

## Usage

```vue
<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "wedges-vue";
</script>

<template>
  <Popover>
    <PopoverTrigger>
      Open popover
    </PopoverTrigger>
    <PopoverContent />
  </Popover>
</template>
```

## API Reference

### Props
<!-- @include: ../../meta/Popover.md -->

## Examples
<ComponentPreview name="PopoverExampleOne" />
