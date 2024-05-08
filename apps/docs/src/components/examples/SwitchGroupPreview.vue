<script setup lang="ts">
import { SwitchGroup, SwitchGroupItem } from "wedges-vue";
</script>

<template>
  <div class="m-auto w-fit text-left">
    <SwitchGroup
      align-labels="end"
      description="(description)"
      helper-text="Helper text"
      label="Group Label"
      tooltip="Tooltip example"
    >
      <SwitchGroupItem label="Option 1" />
      <SwitchGroupItem label="Option 2" />
      <SwitchGroupItem label="Option 3" />
      <SwitchGroupItem label="Option 4" />
    </SwitchGroup>
  </div>
</template>
