<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { PaginationFirst, type PaginationFirstProps } from "radix-vue";
import { ChevronLeftIcon } from "@iconicicons/vue3";
import { cn } from "wedges-vue/utils";
import {
  Button,
} from "../button";

const props = withDefaults(defineProps<PaginationFirstProps & { class?: HTMLAttributes["class"] }>(), {
  asChild: true,
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationFirst v-bind="delegatedProps">
    <Button :class="cn('w-10 h-10 p-0', props.class)" variant="outline">
      <slot>
        <ChevronLeftIcon class="w-4 h-4" />
      </slot>
    </Button>
  </PaginationFirst>
</template>../../../../../.vitepress/theme/components/ui/button
