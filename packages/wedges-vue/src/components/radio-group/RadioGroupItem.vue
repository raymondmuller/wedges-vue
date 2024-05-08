<script setup lang="ts">
import type { RadioGroupItemProps } from "radix-vue";
import {
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardProps,
  useId,
} from "radix-vue";
import type { HTMLAttributes } from "vue";
import { computed, inject } from "vue";
import LabelHelper from "../label/LabelHelper.vue";
import Label from "../label/Label.vue";
import type { RadioGroupContextProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "RadioGroupItem"
});

const props = defineProps<
  RadioGroupItemProps & {
    class?: HTMLAttributes["class"];
    label?: string;
    helperText?: string;
    ariaInvalid?: boolean;
  }
>();

const delegatedProps = computed(() => {
  const { class: _, disabled: __, id: ___, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

const injected = inject("RadioGroup") as RadioGroupContextProps | null;

if (!injected)
  throw new Error("RadioGroupItem must be used within a RadioGroup");

const { disabled: ctxDisabled } = injected;

const isDisabled = computed(() => ctxDisabled || props.disabled);

const elId = props.id || useId();
</script>

<template>
  <div class="wg-radio-group__item flex gap-2">
    <RadioGroupItem
      :id="elId"
      :aria-labelledby="label ? `${elId}__label` : undefined"
      :class="
        cn(
          'group relative flex size-6 items-center justify-center rounded-full text-surface-200 outline-primary transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 [&:has([data-state=checked])_.wg-unchecked]:hidden',
          isDisabled
            && 'pointer-events-none text-surface-200 dark:text-surface-100',
          !isDisabled
            && 'hover:text-surface-300 data-[state=checked]:text-primary',
        )
      "
      :disabled="isDisabled"
      v-bind="forwardedProps"
    >
      <svg
        :class="
          cn('aspect-square w-full scale-100', isDisabled && 'fill-surface-50')
        "
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
          stroke="currentColor"
          stroke-width="1.5"
        />
      </svg>

      <RadioGroupIndicator as-child>
        <svg
          :class="
            cn(
              'absolute aspect-square w-full scale-100 text-primary',
              isDisabled && 'text-surface-200 dark:text-surface-100',
            )
          "
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
          <path
            d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
            fill="currentColor"
          />
        </svg>
      </RadioGroupIndicator>
    </RadioGroupItem>

    <div class="inline-flex flex-col">
      <Label
        v-if="label"
        :id="`${elId}__label`"
        class="font-normal"
        :disabled="isDisabled"
        :for="elId"
        v-bind="forwardedProps"
      >
        {{ label }}
      </Label>

      <LabelHelper
        v-if="helperText"
        :id="`${elId}__describer`"
        :aria-invalid="ariaInvalid"
        :disabled="isDisabled"
      >
        {{ helperText }}
      </LabelHelper>
    </div>
  </div>
</template>
