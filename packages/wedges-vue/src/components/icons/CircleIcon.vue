<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <svg
    :class="cn('!opacity-100', props.class)"
    fill="currentColor"
    height="24"
    stroke="none"
    viewBox="0 0 24 24"
    width="24"
  >
    <circle cx="12" cy="12" fill="currentColor" r="2.5" />
  </svg>
</template>
