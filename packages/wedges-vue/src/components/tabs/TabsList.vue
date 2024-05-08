<script setup lang="ts">
import { TabsList, type TabsListProps } from "radix-vue";
import { type HTMLAttributes, computed, inject } from "vue";
import type { TabsContextProps } from "./types";
import { tabListVariants } from "./variants";
import { cn } from "@/lib/utils";

defineOptions({
  name: "TabsList",
});

const props = defineProps<
  TabsListProps & {
    class?: HTMLAttributes["class"];
    /**
     * Should the tabs stretch to fill the available space?
     */
    stretch?: boolean;
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const context = inject<TabsContextProps>("TabsContext");
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="
      cn(
        'flex items-center text-sm',
        stretch && 'w-full grow',
        (context?.variant === 'contained-bottom'
          || context?.variant === 'contained-top')
          && !stretch
          && 'w-fit',
        stretch && '[&>*]:grow',
        tabListVariants({ variant: context?.variant }),
        props.class,
      )
    "
  >
    <slot />
  </TabsList>
</template>
