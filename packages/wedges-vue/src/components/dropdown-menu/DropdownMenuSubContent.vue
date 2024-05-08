<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  DropdownMenuSubContent,
  type DropdownMenuSubContentEmits,
  type DropdownMenuSubContentProps,
  useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "DropdownMenuSubContent"
});

const props = withDefaults(
  defineProps<
    DropdownMenuSubContentProps & {
      class?: HTMLAttributes["class"];
      inset?: boolean;
      collisionPadding?: number;
      sideOffset?: number;
      alignOffset?: number;
    }
  >(),
  {
    collisionPadding: 8,
    sideOffset: -4,
    alignOffset: -9,
  },
);

const emits = defineEmits<DropdownMenuSubContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuSubContent
    v-bind="forwarded"
    :class="
      cn(
        // state animations
        'data-[side=bottom]:animate-wg-fade-in-down data-[side=left]:animate-wg-fade-in-left data-[side=right]:animate-wg-fade-in-right data-[side=top]:animate-wg-fade-in-up data-[state=closed]:animate-wg-fade-out',

        // base styles
        'z-50 flex min-w-[9rem] origin-[var(--radix-popper-transform-origin)] flex-col gap-2 rounded-lg bg-white py-2 shadow-wg-overlay dark:border dark:border-surface dark:bg-neutral-800 dark:shadow-none',

        // has checkbox or radio item - offset start padding
        inset && '[--wg-offset-padding-left:34px]',
        props.class,
      )
    "
  >
    <slot />
  </DropdownMenuSubContent>
</template>
