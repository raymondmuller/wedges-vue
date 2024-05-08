<script setup lang="ts">
import { AvatarFallback as Fallback } from "radix-vue";

import { UserIcon } from "@iconicicons/vue3";
import { type HTMLAttributes, computed, useSlots } from "vue";
import LemonSqueezyIcon from "../icons/LemonSqueezyIcon.vue";
import AvatarFallback from "./AvatarFallback.vue";
import AvatarImage from "./AvatarImage.vue";
import AvatarNotification from "./AvatarNotification.vue";
import AvatarRoot from "./AvatarRoot.vue";
import AvatarStatus from "./AvatarStatus.vue";
import type { AvatarProps } from "./types";
import {
  avatarVariants,
  fallbackVariants,
  notificationVariants,
  statusVariants,
} from "./variants";
import {
  cn,
  getElementFromHash,
  hasSlotContent,
  stringToHash,
} from "@/lib/utils";

defineOptions({
  name: "Avatar"
});

const props = withDefaults(
  defineProps<AvatarProps & { class?: HTMLAttributes["class"] }>(),
  {
    initials: "",
  },
);

const bgColor = computed(() => {
  // Get a random color for initial variant.
  const randomColors = [
    "bg-wg-blue",
    "bg-wg-pink",
    "bg-wg-purple",
    "bg-wg-green",
    "bg-wg-orange",
    "bg-wg-yellow",
    "bg-wg-red",
  ];

  const identifier
    = (props.initials ?? "")
    + (props.size ?? "")
    + (props.status ?? "")
    + (props.notification ?? "")
    + (props.src ?? "");
  const color = getElementFromHash(stringToHash(identifier), randomColors);

  return color ?? !randomColors[0];
});

const hasDefaultSlot = hasSlotContent(useSlots().default);
</script>

<template>
  <AvatarRoot
    :class="
      cn(
        avatarVariants({ size }),
        !src && !initials && hasDefaultSlot && 'aspect-auto w-auto',
      )
    "
  >
    <template v-if="src">
      <AvatarImage v-bind="props" :src />
    </template>

    <template v-if="hasDefaultSlot">
      <AvatarFallback
        :aria-label="alt"
        :class="props.class"
        :style="$attrs.style"
      >
        <slot />
      </AvatarFallback>
    </template>

    <template v-if="!hasDefaultSlot && src && !initials">
      <AvatarFallback
        :aria-label="alt"
        :class="cn('text-surface-300', props.class)"
        :style="$attrs.style"
      >
        <LemonSqueezyIcon
          aria-hidden="true"
          class="mr-[-4.5%] w-auto fill-current stroke-none"
          :class="cn(fallbackVariants({ size }))"
        />
      </AvatarFallback>
    </template>

    <template v-if="!hasDefaultSlot && initials">
      <Fallback
        :aria-label="alt"
        :class="
          cn(
            'flex aspect-square grow select-none items-center justify-center rounded-full uppercase text-white',
            bgColor,
            props.class,
          )
        "
        :style="$attrs.style"
      >
        {{ initials }}
      </Fallback>
    </template>

    <AvatarFallback
      v-if="!hasDefaultSlot && !src && !initials"
      :aria-label="alt"
      role="img"
      :class="props.class"
    >
      <UserIcon :class="fallbackVariants({ size })" />
    </AvatarFallback>

    <!-- Status and Notification -->
    <AvatarStatus
      v-if="status"
      :class="statusVariants({ status })"
      :ring="size === 'xxs' ? 1 : 2"
    />

    <AvatarNotification
      v-if="notification"
      :class="notificationVariants({ notification })"
      :ring="size === 'xxs' ? 1 : 2"
    />
  </AvatarRoot>
</template>
