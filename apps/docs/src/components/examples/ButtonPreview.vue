<script setup lang="ts">
import { PlusIcon } from "@iconicicons/vue3";
import { Button } from "wedges-vue";
</script>

<template>
  <Button>
    <template #before>
      <PlusIcon />
    </template>

    Button

    <template #after>
      <PlusIcon />
    </template>
  </Button>
</template>
