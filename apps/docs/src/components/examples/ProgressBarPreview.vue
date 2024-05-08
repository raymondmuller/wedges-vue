<script setup lang="ts">
import { SpinnerIcon } from "@iconicicons/vue3";
import { onMounted, ref } from "vue";
import { ProgressBar } from "wedges-vue";

const value = ref(1);

onMounted(() => {
  const interval = setInterval(() => {
    value.value = (value.value + 1) % 101;
  }, 150);

  return () => clearInterval(interval);
});
</script>

<template>
  <div class="inline-block w-full max-w-[400px]">
    <ProgressBar
      helper-text="Helper text"
      :indicator="`${value}%`"
      label="Label"
      tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      :value
      :max="100"
    >
      <template #afterIndicator>
        <SpinnerIcon class="animate-spin" />
      </template>
    </ProgressBar>
  </div>
</template>
