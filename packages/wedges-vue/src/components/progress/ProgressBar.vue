<script setup lang="ts">
import { computed } from "vue";

import {
  ProgressIndicator,
  ProgressRoot as ProgressPrimitiveRoot,
  useId,
} from "radix-vue";
import Label from "../label/Label.vue";
import LabelHelper from "../label/LabelHelper.vue";
import ProgressBarWrapper from "./ProgressBarWrapper.vue";
import type { ProgressBarProps } from "./types";
import { progressBarVariants } from "./variants";
import { cn } from "@/lib/utils";

defineOptions({
  name: "ProgressBar"
});

const props = withDefaults(defineProps<ProgressBarProps>(), {
  max: 100,
  value: null,
  variant: "default",
  color: "primary",
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const generatedId = useId();
const elId = props.id ?? generatedId;
</script>

<template>
  <div :class="progressBarVariants({ variant })">
    <ProgressBarWrapper :variant>
      <Label
        v-if="label ?? tooltip ?? description"
        :id="`${elId}__label`"
        class="shrink-0 cursor-default"
        :description
        :disabled
        :tooltip
      >
        {{ label }}
      </Label>
      <span v-else-if="variant === 'default'" />

      <span
        v-if="
          indicator
            || afterIndicator
            || $slots.indicator
            || $slots.afterIndicator
        "
        :class="
          cn(
            'flex shrink-0 items-center gap-1',
            disabled && 'opacity-50',
            variant === 'inline' && 'order-3',
          )
        "
      >
        <span v-if="indicator || $slots.indicator">
          <slot name="indicator">
            {{ indicator }}
          </slot>
        </span>

        <span
          v-if="afterIndicator || $slots.afterIndicator"
          class="flex items-center justify-center text-surface-400"
        >
          <slot name="afterIndicator">
            {{ afterIndicator }}
          </slot>
        </span>
      </span>
    </ProgressBarWrapper>

    <ProgressPrimitiveRoot
      v-bind="delegatedProps"
      :class="
        cn(
          'shrink-1 relative h-2 w-full overflow-hidden rounded-full bg-surface-100',
          disabled && 'opacity-50',
          props.class,
        )
      "
    >
      <ProgressIndicator
        :style="`transform: translateX(-${100 - (props.value ?? 0)}%);`"
        :class="
          cn(
            'size-full flex-1 bg-primary transition-all',
            progressBarVariants({ color }),
          )
        "
      />
    </ProgressPrimitiveRoot>

    <LabelHelper
      v-if="variant === 'default'"
      :id="`${elId}__describer`"
      :disabled
      class="w-fit shrink-0"
    >
      <slot name="helperText">
        {{ helperText }}
      </slot>
    </LabelHelper>
  </div>
</template>
