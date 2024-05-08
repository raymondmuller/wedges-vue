<script setup lang="ts">
import { CloseIcon } from "@iconicicons/vue3";
import { Slot } from "radix-vue";
import { h, ref, useSlots } from "vue";
import type { AvatarProps } from "../avatar";
import Badge from "../badge/Badge.vue";
import Button from "../button/Button.vue";
import type { TagProps } from "./types";

defineOptions({
  name: "Tag"
});

const props = withDefaults(defineProps<TagProps>(), {
  closable: true,
});

const visible = ref(true);

function handleClose(event: MouseEvent) {
  if (props.onClose)
    props.onClose(event);

  if (!event.defaultPrevented)
    visible.value = false;
}

const slots = useSlots();

function renderAvatar() {
  return slots.avatar?.()[0]
    ? h(slots.avatar()[0], { size: "xxs" } as Partial<AvatarProps>)
    : null;
}
</script>

<template>
  <Badge v-if="visible" v-bind="props">
    <template #before>
      <Slot class="size-4">
        <slot name="before" />
      </Slot>
      <component :is="renderAvatar()" />
    </template>

    <slot />

    <template #after>
      <Button
        v-if="props.closable"
        class="duration-180 size-auto !p-0 text-wg-gray-400 transition-colors hover:text-wg-gray-600 focus:outline-1 dark:text-wg-white-500 dark:hover:text-wg-white-700 [&>svg]:!opacity-100"
        shape="pill"
        size="xs-icon"
        variant="link"
        @click="handleClose"
      >
        <slot name="close-icon">
          <CloseIcon aria-label="Close" class="size-4" />
        </slot>
      </Button>
    </template>
  </Badge>
</template>
