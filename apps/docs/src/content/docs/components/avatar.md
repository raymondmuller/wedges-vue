---
title: Avatar
description: An image element with a fallback for representing the user.
source: packages/wedges-vue/src/components/avatar
primitive: https://www.radix-vue.com/components/avatar.html
---

<ComponentPreview name="AvatarPreview" />

## Usage

```vue
<script setup lang="ts">
import { Avatar } from "wedges-vue";
</script>

<template>
  <Avatar
    alt="Image alt text"
    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop"
  />
</template>
```

## API Reference

#### Avatar

Represents an avatar image. Extends the <a href="https://www.radix-vue.com/components/avatar#image" rel="nofollow noreferrer" target="_blank">Radix Avatar Image</a> primitive and includes all of its props.

### Props
<!-- @include: ../../meta/Avatar.md -->

## Examples

The following example shows an Avatar component with an image, size set to lg, using initials "MQ" as a fallback, and status and notification set to different colors.

<ComponentPreview name="AvatarExampleOne" />

The following examples show different variants of the Avatar component.

<ComponentPreview name="AvatarExampleTwo" />

The following example shows more advanced usage of the Avatar component and how you can customize it with Tailwind CSS classes.

<ComponentPreview name="AvatarExampleThree" />
