<script setup lang="ts">
import { AvatarGroup, Checkbox, CheckboxRoot } from "wedges-vue";

const items = [
  {
    initials: "W",
  },
  {
    initials: "D",
  },
  {
    initials: "G",
  },
];
</script>

<template>
  <div class="m-auto flex w-fit flex-col gap-6 text-left">
    <CheckboxRoot
      as-child
      class="flex w-80 cursor-pointer items-center justify-between rounded-lg border border-surface-100 px-4 py-3 shadow-wg-xs outline-2 -outline-offset-1 outline-primary wg-bg-white dark:wg-bg-neutral-900 [&:has([data-state=checked])]:outline"
    >
      <label>
        <Checkbox />

        <div class="flex grow items-center justify-between text-sm">
          <span class="select-none">Share to 3 users</span>

          <AvatarGroup
            :items
            size="xs"
          />
        </div>
      </label>
    </CheckboxRoot>
  </div>
</template>
