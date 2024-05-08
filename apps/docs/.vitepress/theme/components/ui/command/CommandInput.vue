<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { SearchIcon } from "@iconicicons/vue3";
import { ComboboxInput, type ComboboxInputProps, useForwardProps } from "radix-vue";
import { cn } from "wedges-vue/utils";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes["class"];
}>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <div class="flex items-center px-3 border-b" cmdk-input-wrapper>
    <SearchIcon class="w-4 h-4 mr-2 opacity-50 shrink-0" />
    <ComboboxInput
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      :class="cn('flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    />
  </div>
</template>
