<script setup lang="ts">
import { AvatarImage, type AvatarImageProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "AvatarImage"
});

const props = defineProps<
  AvatarImageProps & { class?: HTMLAttributes["class"] }
>();
</script>

<template>
  <AvatarImage
    :class="
      cn(
        'object-cover object-center w-full rounded-full aspect-square grow',
        props.class,
      )
    "
    v-bind="props"
  />
</template>
