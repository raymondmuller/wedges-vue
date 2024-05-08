<script setup lang="ts">
import { Alert, Button } from "wedges-vue";
</script>

<template>
  <Alert
    closable
    color="primary"
    title="The data export you requested is ready!"
    variant="expanded"
  >
    <template #after>
      <div class="flex items-center gap-3">
        <Button variant="outline" size="sm" class="light:bg-white">
          View the data
        </Button>

        <Button variant="link" size="sm" class="text-surface-500 hover:text-surface-900">
          Maybe later
        </Button>
      </div>
    </template>
  </Alert>
</template>
