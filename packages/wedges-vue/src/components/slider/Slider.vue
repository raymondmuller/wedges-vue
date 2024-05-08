<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from "radix-vue";
import {
  SliderRange,
  SliderRoot,
  SliderTrack,
  useForwardPropsEmits,
  useId,
} from "radix-vue";
import type { HTMLAttributes } from "vue";
import { computed, ref } from "vue";
import Label from "../label/Label.vue";
import LabelHelper from "../label/LabelHelper.vue";
import SliderThumb from "./SliderThumb.vue";
import { cn, hasSlotContent } from "@/lib/utils";

defineOptions({
  name: "Slider"
});

const props = defineProps<
  Omit<SliderRootProps, "asChild"> & {
    /**
     * Should tooltip be shown always, when hoverign, or never.
     */
    showTooltip?: "always" | "hover" | "never";

    /**
     * Tooltip render function.
     */
    renderTooltip?: (value: number) => string;

    class?: HTMLAttributes["class"];

    id?: HTMLAttributes["id"];
    after?: string;
    before?: string;
    label?: string;
    tooltip?: string;
    description?: string;
    disabled?: boolean;
    helperText?: string;
    required?: boolean;
  }
>();

const emits = defineEmits<SliderRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, id: ___, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const tooltipValue = ref<number[]>(props.defaultValue ?? [0]);
const generatedId = useId();
const elId = props.id ?? generatedId;

function onValueChange(value: number[] | undefined) {
  tooltipValue.value = value === undefined ? [0] : value;
  // emits["update:modelValue"](value);
}
</script>

<template>
  <div :class="cn('flex flex-col gap-2', disabled && 'text-surface-300')">
    <Label
      :id="`${elId}__label`"
      :description
      :disabled
      :for="elId"
      :required
      :tooltip
    >
      {{ label }}
    </Label>

    <div
      :class="
        cn(
          'flex justify-between gap-4 self-stretch',
          orientation === 'vertical' && 'flex-col items-start',
          orientation !== 'vertical' && 'items-center',
        )
      "
    >
      <span v-if="hasSlotContent($slots.before) || props.before">
        <slot name="before">
          {{ props.before }}
        </slot>
      </span>
      <SliderRoot
        :id="elId"
        :class="
          cn(
            'relative flex w-full touch-none select-none items-center',
            'data-[orientation=horizontal]:min-h-6',
            'data-[orientation=vertical]:w-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:justify-center data-[orientation=vertical]:px-3',
            props.class,
          )
        "
        v-bind="forwarded"
        @update:model-value="onValueChange"
      >
        <SliderTrack
          :class="
            cn(
              'relative h-2 w-full grow overflow-hidden rounded-full bg-surface-100',
              'data-[orientation=vertical]:h-72 data-[orientation=vertical]:w-2',
              props.class,
            )
          "
        >
          <SliderRange
            :class="
              cn(
                'absolute rounded-full bg-primary',
                'data-[orientation=vertical]:left-0 data-[orientation=vertical]:w-full',
                'data-[orientation=horizontal]:l-0 data-[orientation=horizontal]:h-full',
                disabled && 'bg-surface-200',
              )
            "
            :aria-disabled="disabled"
          />
        </SliderTrack>
        <SliderThumb
          v-for="(value, index) in tooltipValue"
          :key="index"
          :aria-disabled="disabled"
          :orientation
          :show-tooltip
          :tooltip="
            showTooltip && showTooltip !== 'never'
              ? renderTooltip?.(value)
              : undefined
          "
        />
        <slot />
      </SliderRoot>

      <span v-if="hasSlotContent($slots.after) || props.after">
        <slot name="after">
          {{ props.after }}
        </slot>
      </span>
    </div>

    <LabelHelper :id="`${elId}__describer`" :disabled>
      {{ helperText }}
    </LabelHelper>
  </div>
</template>
