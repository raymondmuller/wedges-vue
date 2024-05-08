<script setup lang="ts">
import { Loading } from "wedges-vue";
</script>

<template>
  <div class="flex items-center justify-center gap-10">
    <Loading type="spinner" color="secondary" size="xs" />
    <Loading type="line" class="text-wg-red" size="sm" />
    <Loading type="dots" class="text-wg-green" size="md" />
  </div>
</template>
