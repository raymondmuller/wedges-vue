<script setup lang="ts">
import { Slot } from "radix-vue";
import { type HTMLAttributes, useAttrs } from "vue";
import { cn, hasSlotContent } from "@/lib/utils";

defineOptions({
  name: "LabelHelper"
});

const props = defineProps<{
  /** Whether the helper text is in an error state. */
  error?: boolean;

  /** Whether the helper text is disabled. */
  disabled?: boolean;

  /** The class to apply to the helper text. */
  class?: HTMLAttributes["class"];
}>();

const ariaInvalid = useAttrs()["aria-invalid"];
</script>

<template>
  <Component
    :is="hasSlotContent($slots.default) ? 'span' : Slot"
    :class="
      cn(
        'wg-label__helper text-start text-sm leading-6 text-surface-500 wg-antialiased',
        (ariaInvalid ?? props.error) && 'text-destructive',
        disabled && 'text-surface-300',
        props.class,
      )
    "
    :role="ariaInvalid ? 'alert' : undefined"
  >
    <slot />
  </Component>
</template>
