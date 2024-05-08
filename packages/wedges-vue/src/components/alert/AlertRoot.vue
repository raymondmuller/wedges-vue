<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "AlertRoot",
});

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const defaultRootClasses
  = "wg-antialiased flex text-sm leading-6 bg-surface dark:bg-surface dark:text-surface-500 items-start";
</script>

<template>
  <div :class="cn(defaultRootClasses, props.class)" role="alert">
    <slot />
  </div>
</template>
