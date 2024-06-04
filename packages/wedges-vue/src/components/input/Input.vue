<script setup lang="ts">
import { useId } from "radix-vue";
import LabelHelper from "../label/LabelHelper.vue";
import { Label } from "../label";
import type { InputProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "Input"
});

const props = defineProps<InputProps>();

const modelValue = defineModel("modelValue");

const generatedId = useId();
const elId = props.id ?? generatedId;
const ariaInvalid = props.ariaInvalid ?? props.destructive;
</script>

<template>
  <div class="flex flex-col gap-2 wg-antialiased">
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

    <div class="relative flex items-center">
      <input
        v-model="modelValue"
        :id="elId"
        :aria-describedby="helperText ? `${elId}__describer` : undefined"
        :aria-invalid
        :aria-labelledby="label ? `${elId}__label` : undefined"
        :class="
          cn(
            'flex grow rounded-lg border bg-background px-4 py-2 text-sm leading-6 shadow-wg-xs transition-colors duration-100 placeholder:text-surface-500',
            'outline-primary focus:outline focus:outline-2 focus:-outline-offset-1',
            !disabled
              && 'text-surface-900 hover:border-surface-300 dark:hover:border-surface-200',
            disabled
              && 'cursor-not-allowed bg-surface-50 text-surface-300 placeholder:text-surface-300/dark:bg-white 5 dark:text-surface-200 dark:placeholder:text-surface-200',
            ariaInvalid
              && 'border-destructive outline-destructive hover:border-destructive dark:hover:border-destructive',
            !ariaInvalid && 'border-surface-200 dark:border-surface-100',
            props.class,
          )
        "
        :disabled
        v-bind="$attrs"
      >
    </div>

    <LabelHelper :id="`${elId}__describer`" :aria-invalid :disabled>
      {{ helperText }}
    </LabelHelper>
  </div>
</template>
