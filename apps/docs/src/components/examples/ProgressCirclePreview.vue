<script setup lang="ts">
import { onMounted, ref } from "vue";
import { ProgressCircle } from "wedges-vue";

const value = ref(0);

onMounted(() => {
  setInterval(() => {
    value.value = (value.value + 1) % 101;
  }, 100);
});
</script>

<template>
  <div class="inline-block">
    <ProgressCircle :color="value < 33 ? 'red' : value < 66 ? 'orange' : 'green'" :value />
  </div>
</template>
