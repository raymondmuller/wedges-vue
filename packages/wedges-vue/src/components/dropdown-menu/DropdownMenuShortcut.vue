<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "DropdownMenuShortcut"
});

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <span
    :class="
      cn(
        'shadow-0 ms-auto border-0 bg-transparent p-0 ps-4 text-xs text-surface-500 dark:bg-transparent dark:text-surface-500',
        props.class,
      )
    "
  >
    <slot />
  </span>
</template>
