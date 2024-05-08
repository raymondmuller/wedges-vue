<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <svg
    :class="cn('!opacity-100', props.class)"
    fill="none"
    height="24"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M7.75 12.75L10 15.25L16.25 8.75"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    />
  </svg>
</template>
