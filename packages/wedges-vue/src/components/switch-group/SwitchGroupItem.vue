<script setup lang="ts">
import type { LabelProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import type { SwitchProps } from "../switch/types";
import type { LabelHelperProps } from "../types";
import type { SwitchGroupContextProps } from "./types";
import { computed, inject } from "vue";
import { cn } from "@/lib/utils";
import Switch from "../switch/Switch.vue";

type SwitchGroupItemProps = Omit<SwitchProps, "alignLabel">;

defineOptions({
  name: "SwitchGroupItem",
});

const props = defineProps<
  SwitchGroupItemProps
  & LabelProps
  & LabelHelperProps & {
    /**
     * Alignment of the labels: "start" (usually left) or "end" (usually right).
     * @default "end"
     */
    class?: HTMLAttributes["class"];
    description?: string;
  }
>();

const checked = defineModel("checked", {
  type: Boolean,
  default: false,
});

const context = inject("SwitchGroupContext") as SwitchGroupContextProps;

const isDisabled = computed(() => context?.disabled || props.disabled);

const switchProps = computed(() => {
  const { class: itemClass, disabled: _disabled, checked: _checked, ...delegated } = props;
  const shared = {
    ...delegated,
    disabled: isDisabled.value,
    class: cn("wg-switch-group__item", itemClass),
  };

  if (typeof shared.label === "string") {
    return {
      ...shared,
      label: shared.label,
      alignLabel: context?.alignLabels,
    };
  }

  const { label: _label, ...withoutLabel } = shared;
  return withoutLabel;
});
</script>

<template>
  <Switch
    v-model:checked="checked"
    v-bind="switchProps"
  />
</template>
