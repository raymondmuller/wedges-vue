<script setup lang="ts">
import {
  TooltipContent as TooltipPrimitiveContent,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";
import type { HTMLAttributes } from "vue";
import type { TooltipContentEmits, TooltipContentProps } from "radix-vue";
import TooltipArrow from "./TooltipArrow.vue";
import { type TooltipVariant, tooltipVariant } from "./variants";
import { cn } from "@/lib/utils";

defineOptions({
  name: "TooltipContent",
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    /**
     * Whether to animate the tooltip when it opens/closes
     */
    animation?: boolean;

    /**
     * Whether to show an arrow pointing to the target element
     */
    arrow?: boolean;

    /**
     * The content to display inside the tooltip
     */
    content: any;

    /**
     * The size of the tooltip
     */

    size?: TooltipVariant["size"];

    /**
     * The color of the tooltip
     */

    color?: TooltipVariant["color"];

    /**
     * Additional classes to apply to the tooltip
     */
    class?: HTMLAttributes["class"];

    /**
     * The offset of the tooltip arrow from the edge of the tooltip
     */

    arrowPadding?: TooltipContentProps["arrowPadding"];

    /**
     * The offset of the tooltip arrow from the edge of the tooltip
     */

    alignOffset?: TooltipContentProps["alignOffset"];

    /**
     * The offset of the tooltip arrow from the edge of the tooltip
     */

    collisionPadding?: TooltipContentProps["collisionPadding"];

    /**
     * The offset of the tooltip arrow from the edge of the tooltip
     */

    sideOffset?: TooltipContentProps["sideOffset"];
  }>(),
  {
    alignOffset: -12,
    animation: true,
    arrow: true,
    arrowPadding: 12,
    collisionPadding: 12,
    sideOffset: 2,
  },
);

const emits = defineEmits<TooltipContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const TOOLTIP_ANIMATION_CLASSES = [
  // transform-origin
  "origin-[var(--radix-popper-transform-origin)]",

  // state animations
  "data-[side=bottom]:animate-fade-in-down data-[side=top]:animate-wg-fade-in-up data-[side=left]:animate-wg-fade-in-left data-[side=right]:animate-wg-fade-in-right data-[state=closed]:animate-wg-fade-out",

  // instant-open
  "data-[state=instant-open]:!animate-none",
];
</script>

<template>
  <TooltipPrimitiveContent
    :class="[
      cn(tooltipVariant({ size, color }), props.class),
      {
        [TOOLTIP_ANIMATION_CLASSES.join(' ')]: animation,
      },
    ]"
    v-bind="forwarded"
  >
    <template v-if="!!$slots.default">
      <slot />
    </template>
    <template v-else>
      {{ content }}
    </template>

    <TooltipArrow v-if="arrow" />
  </TooltipPrimitiveContent>
</template>
