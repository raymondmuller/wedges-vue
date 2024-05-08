<script setup lang="ts">
import {
  DropdownMenuTrigger,
  type DropdownMenuTriggerProps,
  useForwardProps,
} from "radix-vue";

defineOptions({
  name: "DropdownMenuTrigger"
});

const props = defineProps<DropdownMenuTriggerProps>();

const forwardedProps = useForwardProps(props);
</script>

<template>
  <DropdownMenuTrigger v-bind="forwardedProps">
    <slot />
  </DropdownMenuTrigger>
</template>
