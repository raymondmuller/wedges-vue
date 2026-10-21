<script setup lang="ts">
import type { DropdownMenuRootEmits, DropdownMenuRootProps } from "radix-vue";
import {
  DropdownMenuRoot,

  useForwardPropsEmits,
} from "radix-vue";

defineOptions({
  name: "DropdownMenu",
});

const props = defineProps<DropdownMenuRootProps>();

const emits = defineEmits<DropdownMenuRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <DropdownMenuRoot v-bind="forwarded">
    <slot />
  </DropdownMenuRoot>
</template>
