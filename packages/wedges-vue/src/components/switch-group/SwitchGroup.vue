<script setup lang="ts">
import { useId } from "radix-vue";
import { computed, provide } from "vue";
import Label from "../label/Label.vue";
import LabelHelper from "../label/LabelHelper.vue";
import type { SwitchGroupContextProps, SwitchGroupProps } from "./types";
import { hasSlotContent } from "@/lib/utils";

defineOptions({
  name: "SwitchGroup"
});

const props = defineProps<SwitchGroupProps>();

const delegatedProps = computed(() => {
  const { class: _, ariaInvalid: __, ...delegated } = props;
  return delegated;
});

provide<SwitchGroupContextProps>("SwitchGroupContext", {
  alignLabels: props.alignLabels,
  disabled: props.disabled,
  isInGroup: true,
});

const generatedId = useId();
const elId = props.id ?? generatedId;
const ariaInvalid = props.ariaInvalid;
</script>

<template>
  <div
    :aria-describedby="helperText ? `${elId}__describer` : undefined"
    :aria-labelledby="label ? `${elId}__label` : undefined"
    class="flex flex-col gap-4"
    role="group"
    v-bind="delegatedProps"
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

    <div v-if="hasSlotContent($slots.default)" class="flex flex-col gap-2">
      <slot />
    </div>
  </div>
</template>
