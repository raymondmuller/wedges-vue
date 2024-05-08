<script setup lang="ts">
import type { TooltipContentProps, TooltipRootProps } from "radix-vue";
import TooltipContent from "./TooltipContent.vue";
import TooltipProvider from "./TooltipProvider.vue";
import TooltipRoot from "./TooltipRoot.vue";
import TooltipTrigger from "./TooltipTrigger.vue";

defineOptions({
  name: "Tooltip"
});

const props = withDefaults(
  defineProps<
    TooltipRootProps &
    TooltipContentProps & {
      asChild?: boolean;
      content?: string;
      color?: "primary" | "secondary" | "soft";
      defaultOpen?: boolean;
      delayDuration?: number;
      disableHoverableContent?: boolean;
      onOpenChange?: (e: MouseEvent) => void;
    }
  >(),
  {
    color: "primary",
    defaultOpen: false,
    delayDuration: 200,
    disableHoverableContent: false,
  },
);
</script>

<template>
  <TooltipProvider>
    <TooltipRoot
      :default-open="defaultOpen"
      :delay-duration="delayDuration"
      :disable-hoverable-content="disableHoverableContent"
      :on-open-change="onOpenChange"
    >
      <TooltipContent v-if="content" v-bind="props" />
      <TooltipTrigger :as-child="true" @click="onOpenChange">
        <slot />
      </TooltipTrigger>
    </TooltipRoot>
  </TooltipProvider>
</template>
