<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  DropdownMenuContent,
  type DropdownMenuContentEmits,
  type DropdownMenuContentProps,
  DropdownMenuPortal,
  useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "DropdownMenuContent"
});

const props = withDefaults(
  defineProps<DropdownMenuContentProps & { class?: HTMLAttributes["class"] }>(),
  {
    sideOffset: 8,
    align: "start",
    collisionPadding: 8,
    inset: false,
  },
);
const emits = defineEmits<DropdownMenuContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="forwarded"
      :class="
        cn(
          // state animations
          'data-[side=bottom]:animate-wg-fade-in-down data-[side=left]:animate-wg-fade-in-left data-[side=right]:animate-wg-fade-in-right data-[side=top]:animate-wg-fade-in-up',

          // base styles
          'flex origin-[var(--radix-popper-transform-origin)] flex-col gap-2 rounded-lg bg-white py-2 text-sm leading-6 text-surface-900 shadow-wg-overlay wg-antialiased dark:border dark:border-surface dark:bg-neutral-800 dark:text-surface-700 dark:shadow-none',

          // has checkbox or radio item - offset start padding
          props.inset && '[--wg-offset-padding-left:32px]',

          props.class,
        )
      "
      :collision-padding
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
