<script setup lang="ts">
import { Slider } from "wedges-vue";
</script>

<template>
  <div class="inline-flex w-full min-w-80 max-w-[400px] flex-row items-center justify-center gap-12 text-surface-300">
    <Slider :default-value="[25]" show-tooltip="hover" orientation="vertical" />
    <Slider :default-value="[50]" show-tooltip="hover" orientation="vertical" />
    <Slider :default-value="[75]" show-tooltip="hover" orientation="vertical" />
  </div>
</template>
