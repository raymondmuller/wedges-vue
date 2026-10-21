<script setup lang="ts">
import { EditIcon } from "@iconicicons/vue3";
import { useData } from "vitepress";
import { computed } from "vue";
import { Button } from "wedges-vue";

const { theme, page } = useData();

const link = computed(() => {
  const { text = "Edit this page", pattern = "" } = theme.value.editLink || {};
  let url: string;
  if (typeof pattern === "function")
    url = pattern(page.value);

  else
    url = pattern.replace(/:path/g, page.value.filePath);

  return { url, text };
});
</script>

<template>
  <Button as="a" :href="link.url" target="_blank" variant="transparent" class="underline mt-8">
    <EditIcon class="mr-2" />
    {{ link.text }}
  </Button>
</template>
