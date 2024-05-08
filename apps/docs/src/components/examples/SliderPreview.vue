<script setup lang="ts">
import { Slider } from "wedges-vue";
import { MinusIcon, PlusIcon } from "@iconicicons/vue3";
import { ref } from "vue";

const value = ref([50]);
</script>

<template>
  <div class="inline-flex w-full min-w-80 max-w-[400px] flex-col gap-y-12 text-surface-300">
    <Slider
      v-model="value"
      content="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      :default-value="[50]"
      description="(description)"
      helper-text="Helper text"
      label="Label"
    >
      <template #before>
        <MinusIcon class="size-6 text-surface-300 dark:text-gray-500" />
      </template>

      <template #after>
        <PlusIcon class="size-6 text-surface-300 dark:text-gray-500" />
      </template>
    </Slider>
  </div>
</template>
