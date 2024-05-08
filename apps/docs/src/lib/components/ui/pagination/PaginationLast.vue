<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { PaginationLast, type PaginationLastProps } from "radix-vue";
import { ChevronRightIcon } from "@iconicicons/vue3";
import { cn } from "wedges-vue/utils";
import {
  Button,
} from "../button";

const props = withDefaults(defineProps<PaginationLastProps & { class?: HTMLAttributes["class"] }>(), {
  asChild: true,
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <PaginationLast v-bind="delegatedProps">
    <Button :class="cn('w-10 h-10 p-0', props.class)" variant="outline">
      <slot>
        <ChevronRightIcon class="h-4 w-4" />
      </slot>
    </Button>
  </PaginationLast>
</template>../../../../../.vitepress/theme/components/ui/button
