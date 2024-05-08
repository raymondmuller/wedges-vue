<script setup lang="ts">
import {
  ToggleGroupRoot,
  type ToggleGroupRootEmits,
  useForwardPropsEmits,
} from "radix-vue";
import { type HTMLAttributes, computed, provide } from "vue";
import type { ToggleGroupContextProps, ToggleGroupProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "ToggleGroup",
});

const props = withDefaults(
  defineProps<
    ToggleGroupProps & {
      class?: HTMLAttributes["class"];
    }
>(),
  {
    size: "md",
    disabled: false,
    orientation: "horizontal",
    type: "single",
  },
);

const emits = defineEmits<ToggleGroupRootEmits>();

provide<ToggleGroupContextProps>("toggleGroup", {
  disabled: props.disabled,
  size: props.size,
  orientation: props.orientation,
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ToggleGroupRoot
    v-bind="forwarded"
    :class="
      cn(
        'dark:shadow:none inline-flex flex-wrap items-stretch divide-surface-100 rounded-[9px] border border-surface-200 shadow-wg-xs dark:border-surface-100',
        orientation === 'vertical' && 'flex-col divide-y',
        orientation === 'horizontal' && 'divide-x',
        props.class,
      )
    "
    :type
  >
    <slot />
  </ToggleGroupRoot>
</template>
