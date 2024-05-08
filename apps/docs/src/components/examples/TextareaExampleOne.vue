<script setup lang="ts">
import { Textarea } from "wedges-vue";
</script>

<template>
  <div class="m-auto max-w-sm text-left">
    <Textarea
      destructive
      required
      description="(description)"
      helper-text="Helper text"
      label="Label"
      placeholder="Placeholder"
      tooltip="Tooltip example"
      class="max-h-64"
    />
  </div>
</template>
