<script setup lang="ts">
import { computed } from "vue";

import { cn } from "wedges-vue/utils";

const props = defineProps<{
  class?: string;
  href?: string;
}>();

const delegatedProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <a
    :class="cn(
      '!text-inherit !no-underline not-prose flex min-h-[140px] w-full flex-col items-center justify-center gap-4 rounded-xl border border-surface-100 bg-white p-6 text-surface-400 shadow-wg-xs outline-primary transition-colors duration-75 hover:border-surface-200/70 hover:bg-surface-50/50 hover:text-surface-900 sm:p-10 [&>p]:text-center',
      props.class,
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </a>
</template>
