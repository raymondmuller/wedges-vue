<script setup lang="ts">
import { CheckboxGroup, CheckboxGroupItem } from "wedges-vue";
</script>

<template>
  <div class="m-auto flex w-fit flex-col gap-8 text-left">
    <CheckboxGroup
      required
      description="(description)"
      helper-text="Helper text"
      label="Vertical"
      tooltip="Tooltip example"
    >
      <CheckboxGroupItem label="Option 1" />
      <CheckboxGroupItem default-checked label="Option 2" />
      <CheckboxGroupItem disabled label="Option 3" />
      <CheckboxGroupItem label="Option 4" />
      <CheckboxGroupItem label="Option 5" tooltip="Optional tooltip content" />
    </CheckboxGroup>

    <CheckboxGroup
      disabled
      description="(disabled)"
      helper-text="Helper text"
      label="Horizontal"
      orientation="horizontal"
      tooltip="Tooltip example"
    >
      <CheckboxGroupItem label="Option 1" />
      <CheckboxGroupItem default-checked label="Option 2" />
      <CheckboxGroupItem disabled label="Option 3" />
    </CheckboxGroup>
  </div>
</template>
