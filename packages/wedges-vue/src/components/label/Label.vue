<script setup lang="ts">
import { Label as LabelPrimitive, type LabelProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { computed, useSlots } from "vue";
import { Tooltip } from "../tooltip";
import { cn, hasSlotContent } from "@/lib/utils";

defineOptions({
  name: "Label"
});

const props = defineProps<
  LabelProps & {
    class?: HTMLAttributes["class"];
    /** Tooltip text to display when hovering over the label */
    tooltip?: string;

    /** Additional description text, shown next to the primary label */
    description?: string;

    /** Indicates if the label is associated with a required field */
    required?: boolean;

    /** Indicates if the label is associated with a disabled field */
    disabled?: boolean;
  }
>();

const delegatedProps = computed(() => {
  const { class: _, asChild: __, ...delegated } = props;

  return delegated;
});

const slots = useSlots();

const useAsChild = props.asChild && hasSlotContent(slots.default);
</script>

<template>
  <div
    class="wg-label inline-flex shrink-0 items-center gap-1 text-surface-900 wg-antialiased"
  >
    <LabelPrimitive
      :as-child="useAsChild"
      :class="
        cn(
          'wg-label inline-flex cursor-pointer items-center gap-1 text-sm font-normal leading-6',
          props.disabled && 'pointer-events-none text-surface-300',
          props.class,
        )
      "
      v-bind="delegatedProps"
    >
      <!-- {innerContent} -->
      <template v-if="useAsChild">
        <slot />
        <template v-if="required">
          <span class="text-destructive">*</span>
        </template>
      </template>

      <template v-else>
        <template v-if="$slots.default">
          <span><slot /></span>
        </template>

        <span
          v-if="description"
          :class="
            cn('font-normal text-surface-500', props.disabled && 'text-current')
          "
        >
          {{ props.description }}
        </span>

        <span v-if="required" class="font-normal text-destructive">*</span>
      </template>
    </LabelPrimitive>

    <Tooltip v-if="tooltip" :content="tooltip" />
  </div>
</template>
