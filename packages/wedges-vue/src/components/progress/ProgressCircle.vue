<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { sizeMapping } from "./sizes";
import { progressCircleVariants } from "./variants";
import type { ProgressCircleProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "ProgressCircle"
});

const props = withDefaults(
  defineProps<ProgressCircleProps & { class?: HTMLAttributes["class"] }>(),
  {
    color: "primary",
    size: "md",
    max: 100,
    value: 0,
  },
);

const { svgSize, stroke } = sizeMapping[props.size as keyof typeof sizeMapping];

const radius = (svgSize - stroke) / 2;
const circumference = 2 * Math.PI * radius;

// Adjust the value to be a percentage of the max
const adjustedValue = (props.value / props.max) * 100;

function defaultLabelValue(value: number, max: number) {
  return `${Math.round((value / max) * 100)}%`;
}

const labelValue = computed(() => {
  return props.getLabelValue
    ? props.getLabelValue(props.value, props.max)
    : props.value !== undefined
      ? defaultLabelValue(props.value, props.max)
      : "";
});
</script>

<template>
  <div
    :class="cn('relative', disabled && 'opacity-50')"
    :style="{ width: svgSize, height: svgSize }"
  >
    <svg
      :width="svgSize"
      :height="svgSize"
      :viewBox="`0 0 ${svgSize} ${svgSize}`"
      :class="cn(progressCircleVariants({ size, color }), props.class)"
      role="progressbar"
      :aria-valuenow="value"
      :aria-valuemin="0"
      :aria-valuemax="max"
      fill="none"
      :data-max="max"
      :data-value="value ?? null"
      :data-state="
        value === undefined
          ? 'indeterminate'
          : adjustedValue < 100
            ? 'loading'
            : 'complete'
      "
    >
      <!-- {/* Background Circle */} -->
      <circle
        :cx="svgSize / 2"
        :cy="svgSize / 2"
        :r="radius"
        class="stroke-inherit"
        :stroke-width="stroke"
        fill="none"
      />

      <!-- Foreground Circle -->
      <circle
        :cx="svgSize / 2"
        :cy="svgSize / 2"
        :r="radius"
        stroke="currentColor"
        :stroke-width="stroke"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference - (value / 100) * circumference"
        stroke-linecap="round"
        :class="
          cn(
            'h-full',
            !disableAnimation && 'transition-all duration-300 ease-linear',
          )
        "
        :transform="`rotate(-90 ${svgSize / 2} ${svgSize / 2})`"
        fill="none"
      />
    </svg>

    <span
      v-if="['xl', 'lg', 'md'].includes(size as string)"
      :class="
        cn(
          'absolute inset-0 flex items-center justify-center',
          size === 'xl' && 'text-2xl',
          size === 'lg' && 'text-base',
          size === 'md' && 'text-xs',
        )
      "
    >
      {{ labelValue }}
    </span>
  </div>
</template>
