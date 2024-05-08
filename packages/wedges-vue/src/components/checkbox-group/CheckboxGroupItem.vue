<script setup lang="ts">
import { inject } from "vue";
import { Checkbox, type CheckboxElementProps } from "../checkbox";
import type { CheckboxGroupContextProps } from "./types";

type CheckboxGroupItemProps = CheckboxElementProps;

defineOptions({
  name: "CheckboxGroupItem",
});

defineProps<CheckboxGroupItemProps>();

const injected = inject("CheckboxGroup") as CheckboxGroupContextProps | null;

if (!injected)
  throw new Error("CheckboxGroupItem must be used within a CheckboxGroup");

const { disabled: ctxDisabled } = injected;
</script>

<template>
  <Checkbox
    class="wg-checkbox-group__item"
    :disabled="disabled ?? ctxDisabled"
    :label
  />
</template>
