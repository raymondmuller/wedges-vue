<script setup lang="ts">
import { AvatarFallback, type AvatarFallbackProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<
  AvatarFallbackProps & { class?: HTMLAttributes["class"] }
>();
</script>

<template>
  <AvatarFallback
    :class="
      cn(
        'flex items-center justify-center rounded-full aspect-square grow bg-surface-100 text-surface-400 dark:bg-neutral-800',
        props.class,
      )
    "
  >
    <slot />
  </AvatarFallback>
</template>
