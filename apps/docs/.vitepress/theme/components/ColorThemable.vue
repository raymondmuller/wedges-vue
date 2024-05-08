<script setup lang="ts">
import { cn } from "wedges-vue/utils";

const props = defineProps({
  title: String,
  hex: String,
  class: String,
});
</script>

<template>
  <div class="group flex w-full flex-col">
    <div
      :class="cn('h-10 w-full rounded-sm ring-1 ring-inset ring-black/10 sm:h-12', props.class)"
    />

    <span class="mt-1.5 pl-1 text-xs text-surface-700">{{ title }}</span>
    <span v-if="hex" class="pl-1 font-mono text-[9px] text-surface-400">{{ hex }}</span>
  </div>
</template>
