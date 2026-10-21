<script setup lang="ts">
import type { PopoverTriggerProps } from "radix-vue";
import { PopoverTrigger } from "radix-vue";

defineOptions({
  name: "PopoverTrigger",
});

const props = defineProps<PopoverTriggerProps>();
</script>

<template>
  <PopoverTrigger v-bind="props">
    <slot />
  </PopoverTrigger>
</template>
