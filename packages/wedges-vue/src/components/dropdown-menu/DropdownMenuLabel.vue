<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  DropdownMenuLabel,
  type DropdownMenuLabelProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "DropdownMenuLabel"
});

const props = defineProps<
  DropdownMenuLabelProps & { class?: HTMLAttributes["class"]; inset?: boolean }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    :class="
      cn(
        'flex select-none items-center gap-1 px-4 py-1 text-xxs font-medium uppercase tracking-wider opacity-50',
        'pl-[var(--wg-offset-padding-left,1rem)]',
        props.class,
      )
    "
  >
    <slot />
  </DropdownMenuLabel>
</template>
