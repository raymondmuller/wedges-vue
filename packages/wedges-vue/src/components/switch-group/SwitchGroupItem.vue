<script setup lang="ts">
import type { LabelProps } from "radix-vue";
import { type HTMLAttributes, computed, inject } from "vue";
import type { SwitchProps } from "../switch/types";
import type { LabelHelperProps } from "../types";
import Switch from "../switch/Switch.vue";
import type { SwitchGroupContextProps } from "./types";
import { cn } from "@/lib/utils";

type SwitchGroupItemProps = Omit<SwitchProps, "alignLabel">;

defineOptions({
  name: "SwitchGroupItem"
});

const props = defineProps<
  SwitchGroupItemProps &
  LabelProps &
  LabelHelperProps & {
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

const delegatedProps = computed(() => {
  const { class: _, disabled: __, checked: ____, ...delegated } = props;
  return delegated;
});

const context = inject("SwitchGroupContext") as SwitchGroupContextProps;

const isDisabled = computed(() => context?.disabled || props.disabled);
</script>

<template>
  <Switch
    v-model:checked="checked"
    :align-label="context?.alignLabels"
    :disabled="isDisabled"
    :class="cn('wg-switch-group__item', props.class)"
    v-bind="delegatedProps"
  />
</template>
