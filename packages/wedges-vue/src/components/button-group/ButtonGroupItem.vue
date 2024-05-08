<script setup lang="ts">
import { Slot } from "radix-vue";
import { type HTMLAttributes, computed, inject, useSlots } from "vue";
import Button from "../button/Button.vue";
import type { ButtonGroupProviderProps } from "./types";
import { cn, hasSlotContent } from "@/lib/utils";

defineOptions({
  name: "ButtonGroupItem"
});

const props = withDefaults(
  defineProps<{
    asChild?: boolean;
    isIconOnly?: boolean;
    class?: HTMLAttributes["class"];
  }>(),
  {
    asChild: false,
  },
);

const provided = inject<ButtonGroupProviderProps>("ButtonGroup");

if (!provided)
  throw new Error("ButtonGroupItem must be used within a ButtonGroup");

const { size, disabled, orientation } = provided;

const slots = useSlots();

const isIcon = computed(() => {
  const hasDefaultSlot = hasSlotContent(slots.default);
  const hasBeforeSlot = hasSlotContent(slots.before);
  const hasAfterSlot = hasSlotContent(slots.after);

  return (
    (hasBeforeSlot && !hasAfterSlot && !hasDefaultSlot && size)
    ?? (hasAfterSlot && !hasBeforeSlot && !hasDefaultSlot && size)
    ?? props.isIconOnly === true
    ?? false
  );
});
</script>

<template>
  <Component
    :is="asChild ? Slot : Button"
    :class="
      cn(
        'flex items-center rounded-none bg-clip-padding focus-visible:z-10 focus-visible:-outline-offset-1',
        'last-of-type:[&+span]:hidden',
        orientation === 'horizontal'
          ? 'first-of-type:rounded-s-lg last-of-type:rounded-e-lg'
          : 'first-of-type:rounded-t-lg last-of-type:rounded-b-lg',

        size === 'sm' && 'max-h-[30px]',
        isIcon && size === 'sm' && 'px-2 py-6px [--wg-border-width:1px]',
        isIcon && size === 'md' && 'px-3 py-8px [--wg-border-width:1px]',

        props.class,
      )
    "
    :disabled
    :size
    variant="transparent"
  >
    <template #before>
      <slot name="before" />
    </template>
    <slot />

    <template #after>
      <slot name="after" />
    </template>
  </Component>
</template>
