<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "radix-vue";
import {
  CheckboxIndicator,
  CheckboxRoot as CheckboxPrimitive,
  useForwardPropsEmits,
  useId,
} from "radix-vue";
import type { HTMLAttributes } from "vue";
import { computed, inject, useAttrs } from "vue";
import { LabelHelper } from "../label";
import Label from "../label/Label.vue";
import CheckboxIndeterminate from "./CheckboxIndeterminate.vue";
import CheckboxRoot from "./CheckboxRoot.vue";
import CheckedBoxIcon from "./CheckedBoxIcon.vue";
import EmptyCheckboxIcon from "./EmptyCheckboxIcon.vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "Checkbox"
});

const props = defineProps<
  CheckboxRootProps & {
    class?: HTMLAttributes["class"];
    label?: string;
    description?: string;
    helperText?: string;
    tooltip?: string;
  }
>();

const emits = defineEmits<CheckboxRootEmits>();

const labelId = useId();

const isIndeterminate = computed(() => props.checked === "indeterminate");

const isInGroup = !!inject("CheckboxGroup", false);

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const ariaInvalid = useAttrs()["aria-invalid"];
</script>

<template>
  <CheckboxRoot>
    <CheckboxPrimitive
      v-bind="forwarded"
      :id="labelId"
      :aria-labelledby="label ? `${labelId}__label` : undefined"
      :class="
        cn(
          'group relative flex size-6 items-center justify-center rounded-lg text-surface-200 outline-primary transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 [&:has([data-state=checked])_.wg-unchecked]:hidden',
          disabled
            && 'pointer-events-none text-surface-200 dark:text-surface-100',
          !disabled && !isIndeterminate && 'hover:text-surface-300',
          !disabled && isIndeterminate && 'text-primary',
          props.class,
        )
      "
      :disabled
    >
      <template v-if="isIndeterminate">
        <CheckboxIndeterminate />
      </template>
      <template v-else>
        <EmptyCheckboxIcon />
      </template>

      <CheckboxIndicator as-child class="absolute text-primary">
        <CheckboxIndeterminate v-if="isIndeterminate" />
        <CheckedBoxIcon v-else />
      </CheckboxIndicator>
    </CheckboxPrimitive>
    <slot>
      <div class="inline-flex flex-col">
        <Label
          :id="`${labelId}__label`"
          :class="cn(isInGroup && 'font-normal')"
          :description
          :disabled
          :for="labelId"
          :required
          :tooltip
        >
          {{ label }}
        </Label>

        <LabelHelper
          :style="`${labelId}__describer`"
          :aria-invalid="ariaInvalid"
          :disabled
        >
          {{ helperText }}
        </LabelHelper>
      </div>
    </slot>
  </CheckboxRoot>
</template>
