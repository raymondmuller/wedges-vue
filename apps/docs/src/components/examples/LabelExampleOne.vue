<script setup lang="ts">
import { Label, LabelHelper } from "wedges-vue";
</script>

<template>
  <div class="mx-auto flex max-w-fit flex-col items-start text-start">
    <Label description="description" required tooltip="Tooltip example">
      Label
    </Label>

    <LabelHelper error>
      There are errors in your form.
    </LabelHelper>
  </div>
</template>
