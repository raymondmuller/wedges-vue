<script setup lang="ts">
import { cn } from "wedges-vue/utils";

defineProps<{
  loading?: boolean;
}>();
</script>

<template>
  <svg
    fill="#FFC233"
    height="28"
    viewBox="0 0 21 28"
    width="21"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      :class="cn(loading && 'animate-[flash_1s_infinite_600ms]')"
      clip-rule="evenodd"
      d="M6.92833 17.1856L14.4396 20.6583C15.3706 21.0889 16.0278 21.8116 16.3826 22.6406C17.2803 24.7399 16.0535 26.8869 14.1276 27.6591C12.2014 28.4309 10.1486 27.9342 9.2152 25.7511L5.94628 18.0866C5.69297 17.4925 6.32931 16.9087 6.92833 17.1856"
      fill-rule="evenodd"
    />
    <path
      :class="cn(loading && 'animate-[flash_1s_infinite_400ms]')"
      clip-rule="evenodd"
      d="M7.37955 14.9376L15.1332 12.0066C17.7101 11.0325 20.525 12.8756 20.487 15.5536C20.4864 15.5886 20.4858 15.6235 20.4849 15.6588C20.4292 18.2666 17.6926 20.0194 15.1723 19.0968L7.38689 16.2473C6.76584 16.0201 6.76126 15.1713 7.37955 14.9376"
      fill-rule="evenodd"
    />
    <path
      :class="cn(loading && 'animate-[flash_1s_infinite_200ms]')"
      clip-rule="evenodd"
      d="M6.94499 13.9224L14.5671 10.6837C17.0999 9.60736 17.7427 6.37695 15.759 4.51043C15.733 4.48585 15.707 4.46156 15.6807 4.43728C13.7358 2.63207 10.5208 3.26767 9.41358 5.64539L5.99323 12.9915C5.72033 13.5773 6.3371 14.1806 6.94499 13.9224"
      fill-rule="evenodd"
    />
    <path
      :class="cn(loading && 'animate-[flash_1s_infinite_0ms]')"
      clip-rule="evenodd"
      d="M4.98349 12.6426L7.75465 5.04415C8.09822 4.102 8.03458 3.1412 7.67939 2.3122C6.77994 0.21378 4.34409 -0.463579 2.41853 0.309741C0.493284 1.08336 -0.594621 2.84029 0.340622 5.02253L3.63095 12.6787C3.8861 13.272 4.76261 13.2486 4.98349 12.6426"
      fill-rule="evenodd"
    />
  </svg>
</template>
