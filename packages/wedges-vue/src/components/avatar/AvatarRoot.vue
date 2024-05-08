<script setup lang="ts">
import { AvatarRoot } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { rootClasses } from "./variants";
import { cn } from "@/lib/utils";

defineOptions({
  name: "AvatarRoot"
});

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <AvatarRoot :class="cn(rootClasses, props.class)">
    <slot />
  </AvatarRoot>
</template>
