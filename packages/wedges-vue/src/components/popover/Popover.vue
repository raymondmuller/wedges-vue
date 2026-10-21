<script setup lang="ts">
import type { PopoverRootEmits, PopoverRootProps } from "radix-vue";
import { PopoverRoot, useForwardPropsEmits } from "radix-vue";

defineOptions({
  name: "Popover",
});

const props = defineProps<PopoverRootProps>();
const emits = defineEmits<PopoverRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <PopoverRoot v-bind="forwarded">
    <slot />
  </PopoverRoot>
</template>
