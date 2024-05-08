---
title: Toggle Group
description: A set of two-state buttons that can be toggled on or off.
source: packages/wedges-vue/src/components/toggle-group
primitive: https://www.radix-vue.com/components/toggle-group.html
---

<ComponentPreview name="ToggleGroupPreview" />

## Usage

```vue
<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from "wedges-vue";
</script>

<template>
  <ToggleGroup type="single">
    <ToggleGroupItem value="a">
      A
    </ToggleGroupItem>
    <ToggleGroupItem value="b">
      B
    </ToggleGroupItem>
    <ToggleGroupItem value="c">
      C
    </ToggleGroupItem>
  </ToggleGroup>
</template>
```

## API Reference

### Props
<!-- @include: ../../meta/ToggleGroup.md -->

## Examples

### Default

<ComponentPreview name="ToggleGroupExampleOne" />
