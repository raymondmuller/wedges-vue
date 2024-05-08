<script setup lang="ts">
import { ProgressBar } from "wedges-vue";
import { SpinnerIcon } from "@iconicicons/vue3";
</script>

<template>
  <div class="inline-flex w-full max-w-[400px] flex-col gap-y-12">
    <ProgressBar
      helper-text="Helper text"
      indicator="50%"
      label="Label"
      tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      :value="50"
    >
      <template #afterIndicator>
        <SpinnerIcon class="animate-spin" />
      </template>
    </ProgressBar>

    <ProgressBar helper-text="Helper text" :value="50" />

    <ProgressBar
      variant="inline"
      indicator="50%"
      label="Label"
      tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      :value="50"
    >
      <template #afterIndicator>
        <SpinnerIcon class="animate-spin" />
      </template>
    </ProgressBar>
  </div>
</template>
