<script setup lang="ts">
import type { CheckboxRootEmits } from "radix-vue";
import { useId } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { provide, useAttrs } from "vue";
import Label from "../label/Label.vue";
import LabelHelper from "../label/LabelHelper.vue";
import type { CheckboxGroupContextProps, CheckboxGroupProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "CheckboxGroup",
});

const props = defineProps<
  CheckboxGroupProps & {
    class?: HTMLAttributes["class"];
    disabled?: boolean;
    required?: boolean;
    label?: string;
    description?: string;
    helperText?: string;
    tooltip?: string;
  }
>();

defineEmits<CheckboxRootEmits>();

provide<CheckboxGroupContextProps>("CheckboxGroup", {
  disabled: props.disabled,
});

const elId = useId();

const ariaInvalid = useAttrs()["aria-invalid"];
</script>

<template>
  <div
    :aria-describedby="helperText ? `${elId}__describer` : undefined"
    :aria-labelledby="label ? `${elId}__label` : undefined"
    class="flex flex-col gap-4"
    role="group"
  >
    <div
      v-if="label ?? helperText ?? description ?? tooltip"
      class="flex flex-col"
    >
      <div class="inline-flex flex-col">
        <Label
          :id="`${elId}__label`"
          class="cursor-default"
          :description
          :disabled
          :for="elId"
          :required
          :tooltip
        >
          {{ label }}
        </Label>

        <LabelHelper :id="`${elId}__describer`" :aria-invalid :disabled>
          {{ helperText }}
        </LabelHelper>
      </div>
    </div>

    <div
      v-if="$slots.default"
      :class="
        cn(
          'flex flex-col gap-2',
          orientation === 'horizontal' && 'flex-row gap-6',
        )
      "
    >
      <slot />
    </div>
  </div>
</template>
