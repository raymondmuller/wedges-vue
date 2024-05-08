---
title: Radio Group
description: A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
source: packages/wedges-vue/src/components/radio-group
primitive: https://www.radix-vue.com/components/radio-group.html
---

<ComponentPreview name="RadioGroupPreview" />

## Usage

```vue
<script setup lang="ts">
import { Label } from "wedges-vue";
import { RadioGroup, RadioGroupItem } from "wedges-group";
</script>

<template>
  <RadioGroup default-value="option-one">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-one" value="option-one" />
      <Label for="option-one">Option One</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-two" value="option-two" />
      <Label for="option-two">Option Two</Label>
    </div>
  </RadioGroup>
</template>
```

## API Reference

### Props
<!-- @include: ../../meta/RadioGroup.md -->

<DataAttributesTable
  :data="[
      {
        attribute: '[data-disabled]',
       values: 'Present when disabled'
       },
        ]"
/>

#### RadioGroupItem

An item in the group that can be checked. An `input` element will also be rendered when used within a form to ensure events propagate correctly.

<!-- @include: ../../meta/RadioGroupItem.md -->

## Examples

<ComponentPreview name="RadioGroupExampleOne" />
