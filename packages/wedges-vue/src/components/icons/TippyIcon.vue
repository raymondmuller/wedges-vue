<script setup lang="ts">
import type { IconProps } from "./types";

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
});

const titleId = props.title
  ? `wg-${Date.now()}-${Math.floor(Math.random() * 10000)}`
  : undefined;
</script>

<template>
  <svg
    :aria-labelledby="titleId"
    fill="currentColor"
    height="8"
    :width="size"
    viewBox="0 0 24 8"
  >
    <title v-if="title" :id="titleId">{{ title }}</title>
    <path
      d="M4.55486 0H19.586C17.0713 0 14.5567 3.5825 13.1681 5.95276C12.7242 6.71045 11.4928 6.67361 11.0817 5.89769C9.82569 3.52743 7.46729 0 4.55486 0Z"
    />
  </svg>
</template>
