<script setup lang="ts">
import { Slider } from "wedges-vue";
import { MinusIcon, PlusIcon } from "@iconicicons/vue3";
import { computed, ref } from "vue";

const value = ref<number[]>([16]);

function decrementValue() {
  value.value = value.value && value.value.length > 0 ? [Math.max(value.value[0] - 2, 12)] : value.value;
}

function incrementValue() {
  value.value = value.value && value.value.length > 0 ? [Math.min(value.value[0] + 2, 48)] : value.value;
}

const helperText = computed(() => value.value ? `Font size: ${value.value[0]}px` : undefined);

function onValueChange(val: number[]) {
  value.value = val;
}
</script>

<template>
  <Slider
    :default-value="value"
    :helper-text
    label="Font Size"
    :max="48"
    :min="12"
    :render-tooltip="() => `${value.toString()}px`"
    show-tooltip="hover"
    :step="2"
    :model-value="value"
    @update:model-value="onValueChange"
  >
    <template #before>
      <Button size="sm" is-icon-only variant="transparent" @click="decrementValue">
        <MinusIcon />
      </Button>
    </template>

    <template #after>
      <Button size="sm" is-icon-only variant="transparent" @click="incrementValue">
        <PlusIcon />
      </Button>
    </template>
  </slider>
</template>
