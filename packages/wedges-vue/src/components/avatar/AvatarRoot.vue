<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { AvatarRoot } from "radix-vue";
import { cn } from "@/lib/utils";
import { rootClasses } from "./variants";

defineOptions({
  name: "AvatarRoot",
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
