<script setup lang="ts">
import { computed, ref } from "vue";
import { Slider } from "wedges-vue";

const value = ref<number[] | undefined>([2500, 5000]);

function renderTooltip(val: number) {
  if (val)
    return `$${val.toLocaleString("en-US")}`;

  return "";
}

function onValueChange(val: number[] | undefined) {
  value.value = val;
}

const helperText = computed(() => value.value ? `Selected range: $${value.value[0]?.toLocaleString("en-us")} - $${value.value[1]?.toLocaleString("en-us")}` : undefined);
</script>

<template>
  <Slider
    after="$10,000"
    before="$1,000"
    :default-value="[2500, 5000]"
    label="Price Range"
    :max="10000"
    :min="1000"
    show-tooltip="hover"
    :step="100"
    :helper-text
    :render-tooltip="renderTooltip"
    @update:model-value="onValueChange"
  />
</template>
