<script setup lang="ts">
import { CheckboxGroup, CheckboxGroupItem } from "wedges-vue";
</script>

<template>
  <div class="m-auto w-fit text-left">
    <CheckboxGroup
      description="description"
      helper-text="Helper text"
      label="Label"
      required
      tooltip="Tooltip example"
    >
      <CheckboxGroupItem label="Option 1" />
      <CheckboxGroupItem label="Option 2" />
      <CheckboxGroupItem label="Option 3" />
      <CheckboxGroupItem label="Option 4" />
    </CheckboxGroup>
  </div>
</template>
