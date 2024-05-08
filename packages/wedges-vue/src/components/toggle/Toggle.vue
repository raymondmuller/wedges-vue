<script setup lang="ts">
import {
  Toggle,
  type ToggleEmits,
  useForwardPropsEmits,
} from "radix-vue";
import { type HTMLAttributes, computed } from "vue";
import { Button } from "../button";
import type { ToggleProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "Toggle",
});

const props = withDefaults(
  defineProps<
    ToggleProps & {
      class?: HTMLAttributes["class"];
      variant?: ToggleProps["variant"];
      size?: ToggleProps["size"];
    }
  >(),
  {
    variant: "outline",
    size: "md",
    shape: "rounded",
    disabled: false,
  },
);

const emits = defineEmits<ToggleEmits>();

const delegatedProps = computed(() => {
  const {
    class: _,
    size: __,
    variant: ___,
    asChild: ____,
    ...delegated
  } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <Toggle as-child v-bind="forwarded">
    <Button
      :as-child
      :class="
        cn(
          'font-normal data-[state=on]:bg-surface-50 data-[state=on]:font-medium',
          props.class,
        )
      "
      :disabled
      :is-icon-only
      :shape
      :size
      :variant
    >
      <template #before>
        <slot name="before" />
      </template>
      <slot />

      <template #after>
        <slot name="after" />
      </template>
    </Button>
  </Toggle>
</template>
