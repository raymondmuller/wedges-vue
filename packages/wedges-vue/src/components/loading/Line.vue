<script setup lang="ts">
import { computed } from "vue";
import { calcDimension, calcStroke } from "./utils";
import type { LoadingVariants } from "./variants";

defineOptions({
  name: "LoadingLine"
});

const props = defineProps<{
  size: LoadingVariants["size"];
}>();

const delegatedProps = computed(() => {
  const { size: _, ...delegated } = props;

  return delegated;
});

const dimension = calcDimension(props.size);
const stroke = calcStroke(props.size);
const radius = dimension / 2 - stroke / 2;
const circumference = 2 * Math.PI * radius;

function calcPercCircumference(perc: number) {
  return (perc / 100) * circumference;
}

const style = {
  "strokeDasharray": `${circumference}`,
  "--wg-dashoffset-97": `${calcPercCircumference(97)}px`,
  "--wg-dashoffset-25": `${calcPercCircumference(25)}px`,
} as Record<string, string>; // Type assertion
</script>

<template>
  <svg :viewBox="`0 0 ${dimension} ${dimension}`" v-bind="delegatedProps">
    <circle
      class="origin-center animate-wg-line-spinner"
      :cx="dimension / 2"
      :cy="dimension / 2"
      :r="dimension / 2 - stroke / 2"
      stroke="currentColor"
      stroke-linecap="round"
      :stroke-width="stroke"
      :style
      fill="none"
    />
  </svg>
</template>
