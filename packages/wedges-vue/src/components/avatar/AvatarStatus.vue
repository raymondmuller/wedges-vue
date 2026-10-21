<script setup lang="ts">
import { cn } from "@/lib/utils";
import { statusClasses } from "./variants";

defineOptions({
  name: "AvatarStatus",
});

const props = withDefaults(
  defineProps<{
    ring?: 1 | 2;
  }>(),
  {
    ring: 2,
  },
);

const ringSize = props.ring === 1 ? "ring-1" : "ring-2";
</script>

<template>
  <span :class="cn(statusClasses, `bg-wg-gray ${ringSize} ${$attrs.class}`)">
    <slot />
  </span>
</template>
