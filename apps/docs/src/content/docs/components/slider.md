---
title: Slider
description: An input where the user selects a value from within a given range.
source: packages/wedges-vue/src/components/slider
primitive: https://www.radix-vue.com/components/slider.html
---

<ComponentPreview name="SliderPreview" />

## Usage

```vue
<script setup lang="ts">
import { Slider } from "wedges-vue";
</script>

<template>
  <Slider
    :default-value="[33]" :max="100" :step="1"
  />
</template>
```

## API Reference

### Props
<!-- @include: ../../meta/Slider.md -->

## Examples

Use `orientation` prop to create vertical sliders.

<ComponentPreview name="SliderExampleOne" />

You can disable the slider by using the `disabled` prop.

<ComponentPreview name="SliderExampleTwo" />

Use range values:

<ComponentPreview name="SliderExampleThree" />

Controlled component:

<ComponentPreview name="SliderExampleFour" />

Playground:

<ComponentPreview name="SliderExampleFive" />
