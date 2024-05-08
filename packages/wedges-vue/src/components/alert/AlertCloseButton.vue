<script setup lang="ts">
import { Button } from "../button";
import { CloseIcon } from "../icons";

defineOptions({
  name: "AlertCloseButton",
});
</script>

<template>
  <Button shape="rounded" size="xs-icon" variant="link">
    <template #after>
      <slot>
        <CloseIcon />
      </slot>
    </template>
  </Button>
</template>
