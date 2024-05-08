<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
  type DropdownMenuRadioItemEmits,
  type DropdownMenuRadioItemProps,
  useForwardPropsEmits,
} from "radix-vue";
import { CircleIcon } from "../icons";
import { cn } from "@/lib/utils";

defineOptions({
  name: "DropdownMenuRadioItem"
});

const props = defineProps<
  DropdownMenuRadioItemProps & {
    class?: HTMLAttributes["class"];
    destructive?: boolean;
  }
>();

const emits = defineEmits<DropdownMenuRadioItemEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <DropdownMenuRadioItem
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
    <span class="flex items-center justify-center">
      <DropdownMenuItemIndicator class="flex items-center justify-center">
        <CircleIcon class="absolute left-2" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
