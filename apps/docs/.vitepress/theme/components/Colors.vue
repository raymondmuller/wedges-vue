<script setup lang="ts">
import { computed } from "vue";
import { cn } from "wedges-vue/utils";

const props = defineProps({
  title: String,
  class: String,
});

const delegatedProps = computed(() => {
  const { title: _, class: __, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <div class="my-8">
    <div v-if="title" class="mb-3 mt-2 flex items-center gap-2 text-sm font-medium text-surface-900">
      <span>{{ title }}</span>
      <span class="select-none text-xs text-surface-200">•</span>
      <span class="not-prose font-mono text-xs text-surface-500">{{ `wg-${title.toLowerCase()}` }}</span>
    </div>

    <div :class="cn('grid grid-cols-10', props.class)" v-bind="delegatedProps">
      <slot />
    </div>
  </div>
</template>
