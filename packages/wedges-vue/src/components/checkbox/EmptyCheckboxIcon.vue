<script setup lang="ts">
import { cn } from "@/lib/utils";

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  isDisabled?: boolean;
}>();
</script>

<template>
  <svg
    :class="
      cn(
        'wg-unchecked aspect-square w-full scale-100',
        isDisabled && 'text-surface-100 dark:text-surface-50',
      )
    "
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <rect
      fill="none"
      height="14.5"
      rx="3"
      ry="3"
      stroke="currentColor"
      stroke-width="1.5"
      width="14.5"
      x="4.75"
      y="4.75"
    />
  </svg>
</template>
