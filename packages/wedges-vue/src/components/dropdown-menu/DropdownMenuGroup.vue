<script setup lang="ts">
import type { DropdownMenuGroupProps } from "radix-vue";
import { DropdownMenuGroup } from "radix-vue";

defineOptions({
  name: "DropdownMenuGroup",
});

const props = defineProps<DropdownMenuGroupProps>();
</script>

<template>
  <DropdownMenuGroup v-bind="props">
    <slot />
  </DropdownMenuGroup>
</template>
