---
title: Avatar Group
description: A collection of Avatar elements.
source: packages/wedges-vue/src/components/avatar
primitive: https://www.radix-vue.com/components/avatar.html
---

<ComponentPreview name="AvatarGroupPreview" />

## Usage

```vue
<script setup lang="ts">
import { AvatarGroup } from "wedges-vue";

const items = [
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop",
    alt: "Avatar 1",
  },
  {
    src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?q=80&w=250&h=250&auto=format&fit=crop",
    alt: "Avatar 2",
  },
  {
    src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=250&h=250&auto=format&fit=crop",
    alt: "Avatar 2",
  },
];
</script>

<template>
  <AvatarGroup
    :items
  />
</template>
```

For more advanced usage, `AvatarGroupRoot` component can be used to compose your own group of `AvatarGroupItem`.

```vue
<script setup lang="ts">
import { AvatarGroupItem, AvatarGroupLabel, AvatarGroupRoot } from "wedges-vue";
</script>

<template>
  <AvatarGroupRoot>
    <AvatarGroupItem
      alt="Avatar 1"
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop"
    />
    <AvatarGroupItem
      alt="Avatar 2"
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop"
    />
    <AvatarGroupItem
      alt="Avatar 3"
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop"
    />
    <AvatarGroupLabel>3,000 followers</AvatarGroupLabel>
  </AvatarGroupRoot>
</template>
```

## API Reference

### Props
<!-- @include: ../../meta/AvatarGroup.md -->

## Examples

The following example shows an Avatar component with an image, size set to lg, using initials 'MQ" as a fallback, and status and notification set to different colors.

<ComponentPreview name="AvatarGroupExampleOne" />

The following example shows more advanced usage of the `AvatarGroup` component and how you can customize it with Tailwind CSS classes.

<ComponentPreview name="AvatarGroupExampleTwo" />

For automatic inheritance of background color for borders in `AvatarGroup`, use the `wg-bg-{color}` utility class on parent element instead of `bg-{color}`. For example:

<ComponentPreview name="AvatarGroupExampleThree" />
