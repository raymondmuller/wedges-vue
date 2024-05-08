<script setup lang="ts">
import { TabsContent } from "wedges-vue";

withDefaults(defineProps<{
  title?: string;
}>(), {
  title: "",
});
</script>

<template>
  <TabsContent :value="title" class="relative space-y-10">
    <slot />
  </TabsContent>
</template>
