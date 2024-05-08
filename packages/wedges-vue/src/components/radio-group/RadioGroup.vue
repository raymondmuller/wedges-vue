<script setup lang="ts">
import { computed, provide } from "vue";
import type { HTMLAttributes } from "vue";
import {
  RadioGroupRoot,
  type RadioGroupRootEmits,
  useForwardPropsEmits,
  useId,
} from "radix-vue";
import Label from "../label/Label.vue";
import LabelHelper from "../label/LabelHelper.vue";
import type { RadioGroupContextProps, RadioGroupProps } from "./types";
import { cn, hasSlotContent } from "@/lib/utils";

defineOptions({
  name: "RadioGroup"
});

const props = defineProps<
  RadioGroupProps & {
    class?: HTMLAttributes["class"];
    id?: HTMLAttributes["id"];
    description?: string;
    helperText?: string;
    ariaInvalid?: boolean;
  }
>();
const emits = defineEmits<RadioGroupRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

provide<RadioGroupContextProps>("RadioGroup", {
  disabled: props.disabled,
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const elId = props.id ?? useId();
</script>

<template>
  <RadioGroupRoot
    :class="cn('flex flex-col gap-4', props.class)"
    v-bind="forwarded"
  >
    <div
      v-if="label ?? description ?? tooltip ?? helperText"
      class="inline-flex flex-col"
    >
      <Label
        :id="`${elId}__label`"
        class="cursor-auto"
        :description
        :disabled
        :for="elId"
        :required
        :tooltip
      >
        {{ label }}
      </Label>

      <LabelHelper
        :id="`${elId}__describer`"
        :aria-invalid="ariaInvalid"
        :disabled="disabled"
      >
        {{ helperText }}
      </LabelHelper>
    </div>

    <div
      v-if="hasSlotContent($slots.default)"
      :class="
        cn(
          'flex flex-col gap-2',
          orientation === 'horizontal' && 'flex-row gap-6',
        )
      "
    >
      <slot />
    </div>
  </RadioGroupRoot>
</template>
