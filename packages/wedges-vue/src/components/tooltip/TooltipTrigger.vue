<script setup lang="ts">
import type { TooltipTriggerProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import {
  TooltipTrigger as PrimitiveTrigger,

} from "radix-vue";
import { getCurrentInstance } from "vue";
import { cn } from "@/lib/utils";
import { InfoIcon } from "../icons";

defineOptions({
  name: "TooltipTrigger",
});

const props = defineProps<
  TooltipTriggerProps & { class?: HTMLAttributes["class"] }
>();

const emit = defineEmits({
  click: (e: MouseEvent) => e,
});

const hasClickEvent = getCurrentInstance?.()?.vnode.props?.onClick;

function onKeyDown(e: KeyboardEvent) {
  if (e.key === "Enter" || e.key === "Space")
    emit("click", e as unknown as MouseEvent);
}
</script>

<template>
  <PrimitiveTrigger v-bind="props">
    <slot>
      <span
        :class="
          cn(
            hasClickEvent ? 'cursor-pointer' : 'cursor-default',
            'inline-flex items-center justify-center rounded-full text-surface-200 transition-colors duration-100 focus:outline-none focus-visible:text-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary data-[state=delayed-open]:text-primary data-[state=instant-open]:!transition-none dark:hover:text-primary dark:focus-visible:text-primary [&:not([data-state=closed])]:text-primary',
            props.class,
          )
        "
        :tabIndex="0"
        :role="hasClickEvent ? 'button' : undefined"
        @click="emit('click', $event)"
        @keydown="onKeyDown"
      >
        <InfoIcon class="scale-100" />
      </span>
    </slot>
  </PrimitiveTrigger>
</template>
