<script setup lang="ts">
import { computed } from "vue";
import type { LoadingVariants } from "./variants";
import { calcDimension } from "./utils";

defineOptions({
  name: "LoadingDots"
});

const props = defineProps<{
  size?: LoadingVariants["size"];
}>();

const delegatedProps = computed(() => {
  const { size: _, ...delegated } = props;

  return delegated;
});

const circlesXXL = [
  { cx: 44, cy: 6, r: 6, opacity: 1 },
  { cx: 63, cy: 11, r: 6, opacity: 0.05 },
  { cx: 77, cy: 25, r: 6, opacity: 0.1 },
  { cx: 82, cy: 44, r: 6, opacity: 0.1 },
  { cx: 77, cy: 63, r: 6, opacity: 0.2 },
  { cx: 63, cy: 77, r: 6, opacity: 0.3 },
  { cx: 44, cy: 82, r: 6, opacity: 0.4 },
  { cx: 25, cy: 77, r: 6, opacity: 0.5 },
  { cx: 11, cy: 63, r: 6, opacity: 0.6 },
  { cx: 6, cy: 44, r: 6, opacity: 0.7 },
  { cx: 11, cy: 25, r: 6, opacity: 0.8 },
  { cx: 25, cy: 11, r: 6, opacity: 0.9 },
];

const circlesXL = [
  { cx: 32, cy: 4, r: 4, opacity: 1 },
  { cx: 46, cy: 8, r: 4, opacity: 0.05 },
  { cx: 56, cy: 18, r: 4, opacity: 0.1 },
  { cx: 60, cy: 32, r: 4, opacity: 0.1 },
  { cx: 56, cy: 46, r: 4, opacity: 0.2 },
  { cx: 46, cy: 56, r: 4, opacity: 0.3 },
  { cx: 32, cy: 60, r: 4, opacity: 0.4 },
  { cx: 18, cy: 56, r: 4, opacity: 0.5 },
  { cx: 8, cy: 46, r: 4, opacity: 0.6 },
  { cx: 4, cy: 32, r: 4, opacity: 0.7 },
  { cx: 8, cy: 18, r: 4, opacity: 0.8 },
  { cx: 18, cy: 8, r: 4, opacity: 0.9 },
];

const circlesLG = [
  { cx: 28, cy: 3, r: 3, opacity: 1 },
  { cx: 40.5, cy: 6.5, r: 3, opacity: 0.05 },
  { cx: 49.5, cy: 15.5, r: 3, opacity: 0.1 },
  { cx: 53, cy: 28, r: 3, opacity: 0.1 },
  { cx: 49.5, cy: 40.5, r: 3, opacity: 0.2 },
  { cx: 40.5, cy: 49.5, r: 3, opacity: 0.3 },
  { cx: 28, cy: 53, r: 3, opacity: 0.4 },
  { cx: 15.5, cy: 49.5, r: 3, opacity: 0.5 },
  { cx: 6.5, cy: 40.5, r: 3, opacity: 0.6 },
  { cx: 3, cy: 28, r: 3, opacity: 0.7 },
  { cx: 6.5, cy: 15.5, r: 3, opacity: 0.8 },
  { cx: 15.5, cy: 6.5, r: 3, opacity: 0.9 },
];

const circlesMD = [
  { cx: 24, cy: 3, r: 3, opacity: 1 },
  { cx: 34.5, cy: 5.75, r: 3, opacity: 0.05 },
  { cx: 42.25, cy: 13.5, r: 3, opacity: 0.1 },
  { cx: 45, cy: 24, r: 3, opacity: 0.1 },
  { cx: 42.25, cy: 34.5, r: 3, opacity: 0.2 },
  { cx: 34.5, cy: 42.25, r: 3, opacity: 0.3 },
  { cx: 24, cy: 45, r: 3, opacity: 0.4 },
  { cx: 13.5, cy: 42.25, r: 3, opacity: 0.5 },
  { cx: 5.75, cy: 34.5, r: 3, opacity: 0.6 },
  { cx: 3, cy: 24, r: 3, opacity: 0.7 },
  { cx: 5.75, cy: 13.5, r: 3, opacity: 0.8 },
  { cx: 13.5, cy: 5.75, r: 3, opacity: 0.9 },
];

const circlesSM = [
  { cx: 16, cy: 2, r: 2, opacity: 1 },
  { cx: 23, cy: 4, r: 2, opacity: 0.05 },
  { cx: 28, cy: 9, r: 2, opacity: 0.1 },
  { cx: 30, cy: 16, r: 2, opacity: 0.1 },
  { cx: 28, cy: 23, r: 2, opacity: 0.2 },
  { cx: 23, cy: 28, r: 2, opacity: 0.3 },
  { cx: 16, cy: 30, r: 2, opacity: 0.4 },
  { cx: 9, cy: 28, r: 2, opacity: 0.5 },
  { cx: 4, cy: 23, r: 2, opacity: 0.6 },
  { cx: 2, cy: 16, r: 2, opacity: 0.7 },
  { cx: 4, cy: 9, r: 2, opacity: 0.8 },
  { cx: 9, cy: 4, r: 2, opacity: 0.9 },
];

const circlesXS = [
  { cx: 12, cy: 1.5, r: 1.5, opacity: 1 },
  { cx: 17.25, cy: 3, r: 1.5, opacity: 0.05 },
  { cx: 21, cy: 6.75, r: 1.5, opacity: 0.1 },
  { cx: 22.5, cy: 12, r: 1.5, opacity: 0.1 },
  { cx: 21, cy: 17.25, r: 1.5, opacity: 0.2 },
  { cx: 17.25, cy: 21, r: 1.5, opacity: 0.3 },
  { cx: 12, cy: 22.5, r: 1.5, opacity: 0.4 },
  { cx: 6.75, cy: 21, r: 1.5, opacity: 0.5 },
  { cx: 3, cy: 17.25, r: 1.5, opacity: 0.6 },
  { cx: 1.5, cy: 12, r: 1.5, opacity: 0.7 },
  { cx: 3, cy: 6.75, r: 1.5, opacity: 0.8 },
  { cx: 6.75, cy: 3, r: 1.5, opacity: 0.9 },
];

const circlesXXS = [
  { cx: 8, cy: 1.5, r: 1.5, opacity: 1 },
  { cx: 12.5, cy: 3.5, r: 1.5, opacity: 0.05 },
  { cx: 14.5, cy: 8, r: 1.5, opacity: 0.1 },
  { cx: 12.5, cy: 12.5, r: 1.5, opacity: 0.3 },
  { cx: 8, cy: 14.5, r: 1.5, opacity: 0.4 },
  { cx: 3.5, cy: 12.5, r: 1.5, opacity: 0.6 },
  { cx: 1.5, cy: 8, r: 1.5, opacity: 0.7 },
  { cx: 3.5, cy: 3.5, r: 1.5, opacity: 0.8 },
];

const dimension = calcDimension(props.size);
</script>

<template>
  <svg :viewBox="`0 0 ${dimension} ${dimension}`" v-bind="delegatedProps">
    <template v-if="size === 'xxs'">
      <circle
        v-for="(circle, index) in circlesXXS"
        :key="index"
        fill="currentColor"
        stroke="none"
        v-bind="circle"
      />
    </template>

    <template v-else-if="size === 'xs'">
      <circle
        v-for="(circle, index) in circlesXS"
        :key="index"
        fill="currentColor"
        stroke="none"
        v-bind="circle"
      />
    </template>

    <template v-else-if="size === 'sm'">
      <circle
        v-for="(circle, index) in circlesSM"
        :key="index"
        fill="currentColor"
        stroke="none"
        v-bind="circle"
      />
    </template>

    <template v-else-if="size === 'md'">
      <circle
        v-for="(circle, index) in circlesMD"
        :key="index"
        fill="currentColor"
        stroke="none"
        v-bind="circle"
      />
    </template>

    <template v-else-if="size === 'lg'">
      <circle
        v-for="(circle, index) in circlesLG"
        :key="index"
        fill="currentColor"
        stroke="none"
        v-bind="circle"
      />
    </template>

    <template v-else-if="size === 'xl'">
      <circle
        v-for="(circle, index) in circlesXL"
        :key="index"
        fill="currentColor"
        stroke="none"
        v-bind="circle"
      />
    </template>

    <template v-else-if="size === 'xxl'">
      <circle
        v-for="(circle, index) in circlesXXL"
        :key="index"
        fill="currentColor"
        stroke="none"
        v-bind="circle"
      />
    </template>
  </svg>
</template>
