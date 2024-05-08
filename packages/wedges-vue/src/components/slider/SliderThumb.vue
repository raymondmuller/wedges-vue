<script setup lang="ts">
import type { SliderThumbProps } from "radix-vue";
import { SliderThumb, useForwardProps } from "radix-vue";
import { type HTMLAttributes, computed, ref } from "vue";
import TooltipProvider from "../tooltip/TooltipProvider.vue";
import TooltipRoot from "../tooltip/TooltipRoot.vue";
import TooltipTrigger from "../tooltip/TooltipTrigger.vue";
import TooltipContent from "../tooltip/TooltipContent.vue";
import type { DataOrientation } from "../types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "SliderThumb"
});

const props = withDefaults(
  defineProps<
    SliderThumbProps & {
      class?: HTMLAttributes["class"];
      tooltip?: string;
      showTooltip?: "always" | "hover" | "never";
      orientation?: DataOrientation;
      ariaDisabled?: boolean;

      onPointerDown?: (event: PointerEvent) => void;
      onPointerUp?: (event: PointerEvent) => void;
      onFocus?: (event: FocusEvent) => void;
      onBlur?: (event: FocusEvent) => void;
      onPointerEnter?: (event: PointerEvent) => void;
      onPointerLeave?: (event: PointerEvent) => void;
    }
  >(),
  {
    orientation: "horizontal",
    showTooltip: "hover",
  },
);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

const isPointerDown = ref(false);
const isHovering = ref(false);
const disabled = props.ariaDisabled ?? false;

const shouldShowTooltip = computed(
  () =>
    (props.showTooltip === "always" && !!props.tooltip)
    || (props.showTooltip === "hover"
    && (isPointerDown.value || isHovering.value)
    && !!props.tooltip),
);

function onPointerDown(event: PointerEvent) {
  isPointerDown.value = true;
  props.onPointerDown?.(event);
}

function onPointerUp(event: PointerEvent) {
  isPointerDown.value = false;
  props.onPointerUp?.(event);
}

function onFocus(event: FocusEvent) {
  isPointerDown.value = true;
  props.onFocus?.(event);
}

function onBlur(event: FocusEvent) {
  isPointerDown.value = false;
  props.onBlur?.(event);
}

function onPointerEnter(event: PointerEvent) {
  isHovering.value = true;
  props.onPointerEnter?.(event);
}

function onPointerLeave(event: PointerEvent) {
  isHovering.value = false;
  props.onPointerLeave?.(event);
}
</script>

<template>
  <TooltipProvider>
    <TooltipRoot :delay-duration="0" :open="shouldShowTooltip">
      <TooltipTrigger as-child>
        <SliderThumb
          :data-state="isPointerDown ? 'active' : 'inactive'"
          :class="
            cn(
              'block size-5 cursor-grab rounded-full border border-surface-200 bg-white shadow-wg-sm disabled:hidden',

              // focus
              'focus:outline-none focus-visible:border-primary dark:focus-visible:border-white',

              // active state
              'data-[state=active]:cursor-grabbing data-[state=active]:border-primary dark:data-[state=active]:border-white',

              // disabled
              disabled && 'hidden',

              props.class,
            )
          "
          v-bind="forwardedProps"
          @pointerdown="onPointerDown"
          @pointerup="onPointerUp"
          @focus="onFocus"
          @blur="onBlur"
          @pointerenter="onPointerEnter"
          @pointerleave="onPointerLeave"
        >
          <TooltipContent
            v-if="tooltip"
            :side="orientation === 'horizontal' ? 'top' : 'left'"
            :content="tooltip"
            class="px-2 py-1 text-xs leading-4"
          />
        </SliderThumb>
      </TooltipTrigger>
    </TooltipRoot>
  </TooltipProvider>
</template>
