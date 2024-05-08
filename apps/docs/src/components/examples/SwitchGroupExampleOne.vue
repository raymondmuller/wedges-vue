<script setup lang="ts">
import { SwitchGroup, SwitchGroupItem } from "wedges-vue";
</script>

<template>
  <div class="mx-auto flex w-fit flex-col gap-8 text-left">
    <!-- Example 1 -->
    <SwitchGroup
      align-labels="end"
      description="(description)"
      helper-text="Helper text"
      label="Group Label"
      tooltip="Tooltip example"
    >
      <SwitchGroupItem default-checked label="Option 1" />
      <SwitchGroupItem disabled label="Option 2" />
      <SwitchGroupItem label="Option 3" />
      <SwitchGroupItem
        description="(description)"
        helper-text="Helper text"
        label="Option 4"
        tooltip="Tooltip example"
      />
    </SwitchGroup>

    <!-- Example 2 -->
    <SwitchGroup
      align-labels="start"
      description="(description)"
      helper-text="Helper text"
      label="Group Label"
      tooltip="Tooltip example"
    >
      <SwitchGroupItem default-checked label="Option 1" />
      <SwitchGroupItem disabled label="Option 2" />
      <SwitchGroupItem label="Option 3" />
      <SwitchGroupItem
        description="(description)"
        helper-text="Helper text"
        label="Option 4"
        tooltip="Tooltip example"
      />
    </SwitchGroup>
  </div>
</template>
