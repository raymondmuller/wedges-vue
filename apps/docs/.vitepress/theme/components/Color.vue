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
      :class="cn('h-10 w-full group-first:rounded-l group-last:rounded-r', props.class)"
    />

    <span class="mt-1 pl-1 text-center text-xs text-surf ace-700 md:text-start">{{ title }}</span>
    <span class="hidden pl-1 font-mono text-[9px] text-surface-400 md:block">{{ hex }}</span>
  </div>
</template>
