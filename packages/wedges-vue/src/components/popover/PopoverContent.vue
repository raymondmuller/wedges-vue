<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  PopoverContent,
  type PopoverContentEmits,
  type PopoverContentProps,
  PopoverPortal,
  useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "PopoverContent",
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<PopoverContentProps & { class?: HTMLAttributes["class"] }>(),
  {
    align: "center",
    sideOffset: 8,
    collisionPadding: 8,
  },
);
const emits = defineEmits<PopoverContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <PopoverPortal>
    <PopoverContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="
        cn(
          'data-[side=top]:wg-animate-fade-in-down data-[side=bottom]:animate-wg-fade-in-up data-[side=left]:animate-wg-fade-in-left data-[side=right]:animate-wg-fade-in-right data-[state=closed]:animate-wg-fade-out',
          // base styles
          'flex origin-[var(--radix-popper-transform-origin)] flex-col gap-2 rounded-lg bg-white p-4 text-sm leading-6 text-surface-900 shadow-wg-overlay wg-antialiased dark:border dark:border-surface dark:bg-neutral-800 dark:text-surface-700 dark:shadow-none',
          props.class,
        )
      "
    >
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
