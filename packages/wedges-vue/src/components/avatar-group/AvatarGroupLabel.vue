<script setup lang="ts">
import { Avatar } from "../avatar";
import type { AvatarMoreLabelProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "AvatarGroupLabel"
});

const props = defineProps<AvatarMoreLabelProps>();
</script>

<template>
  <Avatar
    :class="
      cn(
        'aspect-auto h-full bg-surface-200 px-2 font-medium text-white ring-2 ring-background dark:text-white',
        props.class,
      )
    "
    :size
  >
    <slot>
      <span>{{ label }}</span>
    </slot>
  </Avatar>
</template>
