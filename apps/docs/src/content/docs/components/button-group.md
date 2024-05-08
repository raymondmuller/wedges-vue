---
title: Button Group
description: A collection of Button elements.
source: packages/wedges-vue/src/components/avatar
primitive: https://www.radix-vue.com/components/avatar.html
---

<ComponentPreview name="ButtonGroupPreview" />

## Usage

```vue
<script setup lang="ts">
import { ButtonGroup, ButtonGroupItem } from "wedges-vue";
</script>

<template>
  <ButtonGroup>
    <ButtonGroupItem>Button</ButtonGroupItem>
    <ButtonGroupItem>Button</ButtonGroupItem>
  </ButtonGroup>
</template>
```

### API Reference

### ButtonGroup
Alternatively, `ButtonGroupRoot` can be used in place of this component.  `ButtonGroup` includes these props:
<!-- @include: ../../meta/ButtonGroup.md -->

### ButtonGroupItem
Includes all props from the Button component, with the exception of variant, shape, and size props.

Includes all props from the `Button` component, with the exception of `variant`, `shape`, and `size` props.

The type `ButtonGroupItemProps` is defined as follows:

<!-- @include: ../../meta/ButtonGroupItem.md -->

## Examples

The following examples shows different variants of the `ButtonGroup` component.

<ComponentPreview name="ButtonGroupExampleOne" />

The following examples shows a combination of the `ButtonGroup` and `Tooltip` components.

<ComponentPreview name="ButtonGroupExampleTwo" />
