<script setup lang="ts">
import { Switch } from "wedges-vue";
</script>

<template>
  <div class="m-auto w-fit text-left">
    <Switch
      required
      align-label="end"
      description="(description)"
      :disabled="false"
      helper-text="Helper Text"
      label="Label"
      tooltip="Tooltip example"
    />
  </div>
</template>
