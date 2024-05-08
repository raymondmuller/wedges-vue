<script setup lang="ts">
import { Textarea } from "wedges-vue";
</script>

<template>
  <div class="m-auto flex max-w-sm flex-col gap-10 text-left">
    <Textarea
      class="resize-none"
      placeholder="Placeholder"
      label="Label"
      tooltip="Hello world"
      value="Value in disabled state"
      disabled
    />

    <Textarea
      class="resize-none"
      description="(description)"
      helper-text="Helper text"
      label="Label"
    />
  </div>
</template>
