<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { defaultAvatarGroupClasses } from "./variants";

defineOptions({
  name: "AvatarGroupRoot",
});

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn(defaultAvatarGroupClasses, props.class)">
    <slot />
  </div>
</template>
