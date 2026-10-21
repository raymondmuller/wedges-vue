<script setup lang="ts">
import type { DropdownMenuCheckboxItemEmits, DropdownMenuCheckboxItemProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import {
  DropdownMenuCheckboxItem,

  DropdownMenuItemIndicator,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "@/lib/utils";
import { CheckIcon } from "../icons";

defineOptions({
  name: "DropdownMenuCheckboxItem",
});

const props = defineProps<
  DropdownMenuCheckboxItemProps & {
    class?: HTMLAttributes["class"];
    destructive?: boolean;
  }
>();
const emits = defineEmits<DropdownMenuCheckboxItemEmits>();

const delegatedProps = computed(() => {
  const { class: _, destructive: __, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuCheckboxItem
    v-bind="forwarded"
    :class="
      cn(
        'wg-dropdown-menu__checkbox-item relative flex cursor-pointer select-none items-center px-4 py-1 pl-[var(--wg-offset-padding-left,1rem)] outline-none focus:bg-surface data-[disabled]:pointer-events-none data-[disabled]:opacity-40 dark:focus:bg-white/5',
        !destructive
          && 'text-surface-900 dark:text-surface-700 [&_svg]:text-surface-900 [&_svg]:opacity-40',
        destructive && 'text-destructive',
        props.class,
      )
    "
  >
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <CheckIcon class="size-4" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItem>
</template>
