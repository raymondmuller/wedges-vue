<script setup lang="ts">
import { useForwardPropsEmits, useId } from "radix-vue";
import { computed } from "vue";
import Label from "../label/Label.vue";
import LabelHelper from "../label/LabelHelper.vue";
import type { TextareaProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "Textarea"
});

const props = defineProps<TextareaProps>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const delegatedProps = computed(() => {
  const {
    ariaInvalid: _,
    class: __,
    destructive: ___,
    id: ____,
    ...delegated
  } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const modelValue = defineModel("modelValue", {
  type: String,
  default: "",
});

const generatedId = useId();
const elId = props.id ?? generatedId;
const isAriaInvalid = computed(() => props.ariaInvalid ?? props.destructive);
</script>

<template>
  <div class="flex flex-col gap-2 wg-antialiased">
    <Label
      id="{`${elId}__label`}"
      :description
      :disabled
      for="{elId}"
      :required
      :tooltip
    >
      {{ label }}
    </Label>

    <textarea
      v-model="modelValue"
      v-bind="forwarded"
      :aria-describedby="helperText ? `${elId}__describer` : undefined"
      :aria-invalid="isAriaInvalid"
      :aria-labelledby="label ? `${elId}__label` : undefined"
      :class="
        cn(
          'flex min-h-[112px] rounded-lg border bg-background px-4 py-2 text-sm leading-6 shadow-wg-xs transition-colors duration-100 placeholder:text-surface-500',
          'outline-primary focus:outline focus:outline-2 focus:-outline-offset-1',
          !disabled
            && 'text-surface-900 hover:border-surface-300 dark:hover:border-surface-200',
          disabled
            && 'cursor-not-allowed bg-surface-50 text-surface-300 placeholder:text-surface-300 dark:bg-white/5 dark:text-surface-200 dark:placeholder:text-surface-200',
          isAriaInvalid
            && 'border-destructive outline-destructive hover:border-destructive dark:hover:border-destructive',
          !isAriaInvalid && 'border-surface-200 dark:border-surface-100',
          props.class,
        )
      "
    />

    <LabelHelper
      :id="`${elId}__describer`"
      :aria-invalid="isAriaInvalid"
      :disabled
    >
      {{ helperText }}
    </LabelHelper>
  </div>
</template>
