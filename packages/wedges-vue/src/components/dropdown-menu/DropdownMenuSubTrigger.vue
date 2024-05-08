<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  DropdownMenuSubTrigger,
  type DropdownMenuSubTriggerProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "DropdownMenuSubTrigger"
});

const props = defineProps<
  DropdownMenuSubTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex cursor-pointer select-none items-center gap-2 px-4 py-1 leading-6 text-surface-900 outline-none focus:bg-surface data-[disabled]:pointer-events-none data-[state=open]:bg-surface data-[disabled]:opacity-50 dark:text-surface-700 dark:focus:bg-white/5 dark:data-[state=open]:bg-white/5',
        '[&_svg]:text-surface-900 [&_svg]:opacity-40',
        props.class,
      )
    "
  >
    <slot />
    <svg
      class="ms-auto size-6 text-surface-500"
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </DropdownMenuSubTrigger>
</template>
