---
title: Tooltip
description: A small box that appears when hovering over a UI element, providing additional information.
source: wedges
primitive: https://www.radix-vue.com/components/tooltip.html
---

<ComponentPreview name="TooltipPreview" />

## Usage

```vue
<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "wedges-vue";
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
```

## API Reference

### Tooltip

Use this component for a quick usage

<!-- @include: ../../meta/Tooltip.md -->

#### TooltipProvider

Extends the <a href="https://www.radix-vue.com/components/tooltip#provider" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Provider</a> primitive with custom configuration.

#### TooltipRoot

Extends the <a href="https://www.radix-vue.com/components/tooltip#root" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Root</a> primitive with custom configuration.

#### TooltipTrigger

Extends the <a href="https://www.radix-vue.com/components/tooltip#trigger" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Trigger</a> primitive with custom styling.

#### TooltipArrow

Extends the <a href="https://www.radix-vue.com/components/tooltip#arrow" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Arrow</a> primitive with custom styling.

#### TooltipContent

Extends the <a href="https://www.radix-vue.com/components/tooltip#content" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Content</a> primitive with custom styling.

#### TooltipPortal

Exports the <a href="https://www.radix-vue.com/components/tooltip#portal" target="_blank" rel='nofollow noreferrer'>Radix Tooltip Portal</a> primitive.

## Examples

The example below demonstrates different color and size variations of the Tooltip component.

<ComponentPreview name="TooltipExampleOne" />
