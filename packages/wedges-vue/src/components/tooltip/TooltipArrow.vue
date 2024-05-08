<script setup lang="ts">
import {
  TooltipArrow as PrimitiveArrow,
  type TooltipArrowProps,
} from "radix-vue";
import { TippyIcon } from "../icons";

defineOptions({
  name: "TooltipArrow"
});

const props = withDefaults(defineProps<TooltipArrowProps>(), {
  width: 24,
  height: 8,
});
</script>

<template>
  <PrimitiveArrow viewBox="0 0 24 8" v-bind="props">
    <slot>
      <TippyIcon class="text-background" />
    </slot>
  </PrimitiveArrow>
</template>
