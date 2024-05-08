<script setup lang="ts">
import type { ProgressBarVariants } from "./types";

defineOptions({
  name: "ProgressBarWrapper"
});

defineProps<{
  variant?: ProgressBarVariants["variant"];
}>();
</script>

<template>
  <template v-if="variant === 'default'">
    <div
      class="flex items-center justify-between gap-4 self-stretch flex-wrap gap-y-0"
    >
      <slot />
    </div>
  </template>
  <template v-else>
    <slot />
  </template>
</template>
