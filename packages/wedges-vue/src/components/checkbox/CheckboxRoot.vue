<script setup lang="ts">
import { Slot } from "radix-vue";
import { type HTMLAttributes, useSlots } from "vue";
import { cn, hasSlotContent } from "@/lib/utils";

defineOptions({
  name: "CheckboxRoot"
});

const props = defineProps<{
  asChild?: boolean;
  class?: HTMLAttributes["class"];
}>();

const slots = useSlots();
const useAsChild = props.asChild && hasSlotContent(slots.default);
</script>

<template>
  <Component
    :is="useAsChild ? Slot : 'div'"
    :class="cn('wg-checkbox flex gap-2', props.class)"
  >
    <slot />
  </Component>
</template>
