<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "wedges-vue";
</script>

<template>
  <div class="m-auto flex w-fit flex-col gap-8 text-left">
    <RadioGroup
      required
      description="(description)"
      helper-text="Helper text"
      label="Vertical"
      tooltip="Tooltip example"
    >
      <RadioGroupItem value="option-1" label="Option 1" />
      <RadioGroupItem value="option-2" label="Option 2" />
      <RadioGroupItem value="option-3" label="Option 3" />
      <RadioGroupItem
        value="option-4"
        description="(description)"
        helper-text="Helper text"
        label="Option 4"
        tooltip="Tooltip example"
      >
        children?
      </RadioGroupItem>
    </RadioGroup>

    <RadioGroup
      disabled
      description="(disabled)"
      helper-text="Helper text"
      label="Horizontal"
      orientation="horizontal"
      tooltip="Tooltip example"
    >
      <RadioGroupItem value="option-1" label="Option 1" />
      <RadioGroupItem value="option-2" label="Option 2" />
      <RadioGroupItem value="option-3" label="Option 3" />
    </RadioGroup>
  </div>
</template>
