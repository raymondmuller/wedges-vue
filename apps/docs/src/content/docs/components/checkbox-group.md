---
title: Checkbox Group
description: A visual group of Checkbox controls, allowing for the selection of multiple options within a set.
source: packages/wedges-vue/src/components/checkbox-group
primitive: https://www.radix-vue.com/components/checkbox.html
---

<ComponentPreview name="CheckboxGroupPreview"  />

## Usage

```vue
<script setup lang="ts">
import { CheckboxGroup } from "wedges-vue";
</script>

<template>
  <CheckboxGroup id="terms" />
</template>
```

### API Reference

#### CheckboxGroup

Alternatively, `CheckboxGroupRoot` can be used in place of this component.`CheckboxGroup` includes these props:

<!-- @include: ../../meta/CheckboxGroup.md -->

#### CheckboxGroupItem

Shares all the properties of the `Checkbox` component. Details can be found <a href="/docs/components/checkbox#api-reference">here</a>.

## Examples

<ComponentPreview name="CheckboxGroupExampleOne" />
