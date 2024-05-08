<script setup lang="ts">
import { provide } from "vue";
import type { ButtonGroupProps, ButtonGroupProviderProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "ButtonGroup"
});

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  size: "md",
  disabled: false,
  orientation: "horizontal",
});

provide<ButtonGroupProviderProps>("ButtonGroup", {
  size: props.size,
  disabled: props.disabled,
  orientation: props.orientation,
});
</script>

<template>
  <div
    :class="
      cn(
        'dark:shadow:none inline-flex flex-wrap items-stretch divide-surface-100 rounded-[9px] border border-surface-200 shadow-wg-xs dark:border-surface-100',
        props.orientation === 'vertical' && 'flex-col divide-y',
        props.orientation === 'horizontal' && 'divide-x',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
