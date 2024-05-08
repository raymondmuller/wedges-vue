<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Fragment } from "vue";
import Label from "../label/Label.vue";
import LabelHelper from "../label/LabelHelper.vue";
import type { SwitchProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "SwitchLabel"
});

const props = defineProps<
  SwitchProps & {
    class?: HTMLAttributes["class"];
    id?: HTMLAttributes["id"];
    ariaInvalid?: HTMLAttributes["aria-invalid"];
    description?: string;
    helperText?: string;
    tooltip?: string;
    isInGroup?: boolean;
  }
>();

const LabelWrapComponent = props.label ?? props.helperText ? "div" : Fragment;
</script>

<template>
  <component :is="LabelWrapComponent" class="inline-flex flex-col">
    <Label
      :id="`${id}__label`"
      :class="cn(isInGroup && 'font-normal')"
      :description
      :disabled
      :for="id"
      :required
      :tooltip
    >
      <slot>
        {{ label }}
      </slot>
    </Label>

    <LabelHelper
      v-if="helperText"
      :id="`${id}__describer`"
      :aria-invalid
      :disabled
    >
      {{ helperText }}
    </LabelHelper>
  </component>
</template>
