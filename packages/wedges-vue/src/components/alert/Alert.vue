<script setup lang="ts">
import { type HTMLAttributes, ref } from "vue";
import { Slot } from "radix-vue";
import { InfoIcon } from "../icons";
import {
  type AlertVariants,
  alertIconVariants,
  alertVariants,
} from "./variants";
import AlertRoot from "./AlertRoot.vue";
import AlertCloseButton from "./AlertCloseButton.vue";
import AlertTitle from "./AlertTitle.vue";
import AlertDescription from "./AlertDescription.vue";
import type { ClosableProps, NotClosableProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "Alert",
});

const props = withDefaults(
  defineProps<
    {
      class?: HTMLAttributes["class"];
      color?: AlertVariants["color"];
      closable?: boolean;
      title?: string;
      onClose?: (e: MouseEvent) => void;
      variant?: AlertVariants["variant"];
    } & (ClosableProps | NotClosableProps)
  >(),
  {
    variant: "inline",
  },
);

const visible = ref(true);

/**
 * Handle the close event.
 * @param e - The event object
 */
function handleClose(e: MouseEvent) {
  // Do not close if the event is prevented by the onClose callback
  if (!e.defaultPrevented)
    visible.value = false;

  if (props.onClose)
    props.onClose(e);
}
</script>

<template>
  <AlertRoot
    v-if="visible"
    :class="cn(alertVariants({ variant, color }), props.class)"
    role="alert"
  >
    <Slot
      :class="{
        'pl-1': variant === 'inline',
      }"
    >
      <slot name="before">
        <InfoIcon
          :class="
            cn('size-6 shrink-0', alertIconVariants({ color }), props.class)
          "
        />
      </slot>
    </Slot>

    <div
      :class="
        cn(
          'flex grow flex-col items-start',
          variant === 'expanded' && 'items-start gap-3 px-2',
          variant === 'inline' && 'px-2 sm:flex-row sm:items-center sm:gap-2',
          variant === 'inline' && closable && 'pr-1',
        )
      "
    >
      <div
        :class="
          cn(
            'flex grow flex-col items-start',
            variant === 'expanded' && 'items-start',
            variant === 'inline' && 'sm:flex-row sm:items-center sm:gap-2',
          )
        "
      >
        <AlertTitle :color>
          <slot name="title">
            {{ title }}
          </slot>
        </AlertTitle>
        <AlertDescription v-if="$slots.default">
          <slot />
        </AlertDescription>
      </div>
      <Slot
        :class="{
          'mt-3 sm:ml-auto sm:mt-0': variant === 'inline',
        }"
      >
        <slot name="after" />
      </Slot>
    </div>

    <AlertCloseButton
      v-if="closable"
      :class="{
        'pr-1': variant === 'inline',
      }"
      @click="handleClose"
    />
  </AlertRoot>
</template>
