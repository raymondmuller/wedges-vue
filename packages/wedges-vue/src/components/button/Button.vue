<script setup lang="ts">
import { Primitive, Slot } from "radix-vue";
import { computed, useSlots } from "vue";
import type { ButtonProps, Size } from "./types";
import { buttonVariants, iconVariants } from "./variants";
import { cn, hasSlotContent } from "@/lib/utils";

defineOptions({
  name: "Button",
});

const props = withDefaults(defineProps<ButtonProps>(), {
  as: "button",
  variant: "primary",
  size: "md",
  shape: "rounded",
});

const iconOnlyPadding: Record<Size, string | boolean> = {
  "md": "p-8px",
  "sm": "p-6px",
  "xs-icon": "p-2px",
};

const slots = useSlots();

const isVariantLinkOutlineTertiaryTransparent = computed(() =>
  ["link", "outline", "tertiary", "transparent"].includes(
    props.variant as string,
  ),
);

const isIcon = computed(() => {
  const hasDefaultSlot = (slots.default?.() ?? [])?.length > 0;
  const hasBeforeSlot = (slots.before?.() ?? [])?.length > 0;
  const hasAfterSlot = (slots.after?.() ?? [])?.length > 0;

  return (
    !!(hasBeforeSlot && !hasAfterSlot && !hasDefaultSlot && props.size)
    || (hasAfterSlot && !hasBeforeSlot && !hasDefaultSlot && props.size)
    || props.isIconOnly === true
    || false
  );
});

const isNonDestructiveIconOnly
  = isVariantLinkOutlineTertiaryTransparent.value
  && isIcon.value
  && !props.destructive;
</script>

<template>
  <Primitive
    :as
    :as-child
    :class="
      cn(
        buttonVariants({ size, variant, shape, destructive }),
        variant === 'link'
          && hasSlotContent($slots.default)
          && 'focus-visible:outline-0',
        isIcon && size && iconOnlyPadding[size as Size],
        props.class,
      )
    "
    :disabled
  >
    <Slot
      :class="[
        cn(iconVariants({ size, variant, destructive })),
        {
          'group-hover:opacity-70': isNonDestructiveIconOnly,
          'opacity-100': destructive,
        },
      ]"
    >
      <slot name="before" />
    </Slot>
    <slot />

    <Slot
      :class="[cn(iconVariants({ size, variant, destructive })), props.class]"
    >
      <slot name="after" />
    </Slot>
  </Primitive>
</template>
