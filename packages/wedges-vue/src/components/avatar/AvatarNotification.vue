<script setup lang="ts">
import { cn } from "@/lib/utils";
import { notificationClasses } from "./variants";

defineOptions({
  name: "AvatarNotification",
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
  <span
    :class="cn(notificationClasses, `bg-wg-gray ${ringSize} ${$attrs.class}`)"
  >
    <slot />
  </span>
</template>
