<script setup lang="ts">
import { Alert, Button } from "wedges-vue";
</script>

<template>
  <Alert title="Alert title">
    Alert content

    <template #after>
      <Button variant="link">
        Button
      </Button>
    </template>
  </Alert>
</template>
