<script setup lang="ts">
import { Slider } from "wedges-vue";
</script>

<template>
  <div class="inline-flex w-full min-w-80 max-w-[400px] flex-col items-stretch gap-12">
    <Slider
      after="100"
      before="0"
      content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      :default-value="[50]"
      description="(description)"
      helper-text="Helper text"
      label="Label"
      disabled
    />
  </div>
</template>
