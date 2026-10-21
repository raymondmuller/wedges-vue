<script setup lang="ts">
import type { ToggleGroupItemProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import type { ToggleGroupContextProps } from "./types";
import {
  ToggleGroupItem,

  useForwardProps,
} from "radix-vue";
import { computed, inject } from "vue";
import { cn } from "@/lib/utils";
import Toggle from "../toggle/Toggle.vue";

defineOptions({
  name: "ToggleGroupItem",
});

const props = defineProps<
  ToggleGroupItemProps & {
    class?: HTMLAttributes["class"];
    size?: ToggleGroupContextProps["size"];
  }
>();

const context = inject<ToggleGroupContextProps>("toggleGroup");

const delegatedProps = computed(() => {
  const { class: _, size: __, asChild: ___, ...delegated } = props;
  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <ToggleGroupItem v-bind="forwardedProps" as-child>
    <Toggle
      :as-child
      :class="
        cn(
          'flex items-center rounded-none bg-clip-padding focus-visible:z-10 focus-visible:-outline-offset-1 data-[state=on]:bg-surface-50',
          props.class,
          context?.orientation === 'horizontal'
            ? 'first-of-type:rounded-s-lg last-of-type:rounded-e-lg'
            : 'first-of-type:rounded-t-lg last-of-type:rounded-b-lg',
        )
      "
      variant="transparent"
      :size
      shape="rounded"
    >
      <template #before>
        <slot name="before" />
      </template>
      <slot />

      <template #after>
        <slot name="after" />
      </template>
    </Toggle>
  </ToggleGroupItem>
</template>
