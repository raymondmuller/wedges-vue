<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import Avatar from "../avatar/Avatar.vue";
import type { AvatarProps } from "../avatar";
import { cn } from "@/lib/utils";

defineOptions({
  name: "AvatarGroupItem"
});

const props = defineProps<AvatarProps & { class?: HTMLAttributes["class"] }>();
</script>

<template>
  <Avatar
    :class="cn('ring-2 ring-background backdrop-blur-3xl')"
    v-bind="props"
  >
    <slot />
  </Avatar>
</template>
