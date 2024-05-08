<script setup lang="ts">
import { cn } from "@/lib/utils";

defineProps<{
  isDisabled?: boolean;
}>();
</script>

<template>
  <svg
    :class="
      cn(
        'aspect-square w-full scale-100',
        isDisabled && 'text-surface-200 dark:text-surface-100',
      )
    "
    fill="none"
    height="24"
    stroke="none"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      clip-rule="evenodd"
      d="M8 4C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8ZM15.7902 10.2702C16.0776 9.97186 16.0686 9.49708 15.7702 9.20976C15.4719 8.92244 14.9971 8.9314 14.7098 9.22977L10.9458 13.1385L9.31677 11.2588C9.04549 10.9458 8.57182 10.912 8.2588 11.1832C7.94579 11.4545 7.91195 11.9282 8.18323 12.2412L10.3499 14.7412C10.4879 14.9004 10.6864 14.9942 10.897 14.9997C11.1076 15.0053 11.3108 14.922 11.4569 14.7702L15.7902 10.2702Z"
      fill="currentColor"
      fill-rule="evenodd"
    />
  </svg>
</template>
