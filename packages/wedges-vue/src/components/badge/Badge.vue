<script setup lang="ts">
import { Slot } from "radix-vue";
import type { BadgeProps } from "./types";
import { badgeVariants, iconVariants } from "./variants";
import { cn, hasSlotContent } from "@/lib/utils";

defineOptions({
  name: "Badge",
});

withDefaults(defineProps<BadgeProps>(), {
  color: "gray",
  shape: "rounded",
  size: "md",
  stroke: false,
});
</script>

<template>
  <div :class="cn(badgeVariants({ color, shape, size, stroke }))">
    <Slot :class="[cn(iconVariants({ color })), $attrs.class]">
      <slot name="before" />
    </Slot>
    <span
      v-if="hasSlotContent($slots.default)"
      :class="{
        'px-0.5': size === 'sm',
        'px-1': size === 'md',
      }"
    >
      <slot />
    </span>
    <slot name="after" />
  </div>
</template>
