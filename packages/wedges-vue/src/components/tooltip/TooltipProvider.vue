<script setup lang="ts">
import type { TooltipProviderProps } from "radix-vue";
import { TooltipProvider } from "radix-vue";

defineOptions({
  name: "TooltipProvider",
});

const props = defineProps<TooltipProviderProps>();
</script>

<template>
  <TooltipProvider v-bind="props">
    <slot />
  </TooltipProvider>
</template>
