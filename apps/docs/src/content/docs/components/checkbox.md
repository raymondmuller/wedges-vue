---
title: Checkbox
description: A user interface control enabling toggling between checked and unchecked states.
source: packages/wedges-vue/src/components/checkbox
primitive: https://www.radix-vue.com/components/checkbox.html
---

<ComponentPreview name="CheckboxPreview"  />

## Usage

```vue
<script setup lang="ts">
import { Checkbox } from "wedges-vue";
</script>

<template>
  <Checkbox id="terms" />
</template>
```

For more advanced usage you can use Checkbox.Root component to customize the appearance of the checkbox.

## API Reference

`Checkbox` component extends <a href="https://www.radix-vue.com/components/checkbox" target="_blank" rel='nofollow noreferrer'>Radix Checkbox</a> primitive and supports all of its props.

## Props
<!-- @include: ../../meta/Checkbox.md -->

## Accessibility
The Checkbox component supports all accessibility features of the Radix Checkbox primitive.

## Examples

<ComponentPreview name="CheckboxExampleOne" />

The following example shows a customized Checkbox component:

<ComponentPreview name="CheckboxExampleTwo"  />
