<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  DropdownMenuItem,
  type DropdownMenuItemProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "DropdownMenuItem"
});

const props = defineProps<
  DropdownMenuItemProps & {
    class?: HTMLAttributes["class"];
    inset?: boolean;
    destructive?: boolean;
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex cursor-pointer select-none items-center gap-2 px-4 py-1 outline-none focus:bg-surface data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5 [&:has(>svg:first-child)]:pl-3',
        !destructive
          && 'text-surface-900 dark:text-surface-700 [&_svg]:text-surface-900 [&_svg]:opacity-40',
        destructive && 'text-destructive',
        'pl-[var(--wg-offset-padding-left,1rem)]',
        props.class,
      )
    "
  >
    <slot />
  </DropdownMenuItem>
</template>
