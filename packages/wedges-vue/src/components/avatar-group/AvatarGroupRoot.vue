<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { defaultAvatarGroupClasses } from "./variants";
import { cn } from "@/lib/utils";

defineOptions({
  name: "AvatarGroupRoot"
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
