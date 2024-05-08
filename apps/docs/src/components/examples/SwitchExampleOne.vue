<script setup lang="ts">
import { Switch } from "wedges-vue";
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="mx-auto flex max-w-fit flex-col items-start gap-6 text-start">
      <!-- Example 1 } -->
      <Switch label="Label" tooltip="Tooltip example" />

      <!-- Example 2 -->
      <Switch
        description="(disabled)"
        helper-text="Helper text"
        label="Label"
        tooltip="Tooltip example"
        disabled
      />
    </div>

    <div class="mx-auto flex max-w-fit flex-col items-start gap-6 text-start">
      <!-- Example 3 -->
      <Switch align-label="start" label="Label" tooltip="Tooltip example" />

      <!-- Example 4 -->
      <Switch
        align-label="start"
        description="(disabled)"
        helper-text="Helper text"
        label="Label"
        tooltip="Tooltip example"
        disabled
      />
    </div>
  </div>
</template>
