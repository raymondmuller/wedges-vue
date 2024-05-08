<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  DropdownMenuSeparator,
  type DropdownMenuSeparatorProps,
} from "radix-vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "DropdownMenuSeparator"
});

const props = defineProps<
  DropdownMenuSeparatorProps & {
    class?: HTMLAttributes["class"];
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <DropdownMenuSeparator
    v-bind="delegatedProps"
    :class="cn('h-px bg-surface-100 dark:bg-white/5', props.class)"
  />
</template>
