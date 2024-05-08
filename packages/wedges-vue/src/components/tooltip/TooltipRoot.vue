<script setup lang="ts">
import type { TooltipRootEmits, TooltipRootProps } from "radix-vue";
import {
  TooltipRoot as TooltipPrimitiveRoot,
  useForwardPropsEmits,
} from "radix-vue";

defineOptions({
  name: "TooltipRoot"
});

const props = withDefaults(defineProps<TooltipRootProps>(), {
  delayDuration: 200,
});

const emits = defineEmits<TooltipRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <TooltipPrimitiveRoot v-bind="forwarded">
    <slot />
  </TooltipPrimitiveRoot>
</template>
