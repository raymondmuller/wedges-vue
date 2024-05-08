<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "wedges-vue";
</script>

<template>
  <div class="m-auto w-fit text-left">
    <RadioGroup
      default-value="value-1"
      description="description"
      helper-text="Helper text"
      label="Label"
      required
      tooltip="Tooltip example"
    >
      <RadioGroupItem label="Value 1" value="value-1" />
      <RadioGroupItem label="Value 2" value="value-2" />
      <RadioGroupItem label="Value 3" value="value-3" />
      <RadioGroupItem label="Value 4" value="value-4" />
    </RadioGroup>
  </div>
</template>
