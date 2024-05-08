<script setup lang="ts">
import { Checkbox } from "wedges-vue";
</script>

<template>
  <div class="m-auto flex w-fit flex-col gap-6 text-left">
    <Checkbox label="Required" required />

    <Checkbox
      description="(optional)"
      helper-text="Helper text"
      label="Label"
      tooltip="Tooltip example"
    />

    <Checkbox
      helper-text="Indeterminate"
      label="Label"
      tooltip="Tooltip example"
      checked="indeterminate"
    />

    <Checkbox default-checked disabled description="Disabled" tooltip="Tooltip example" />
  </div>
</template>
