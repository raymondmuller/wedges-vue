<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Loading } from "wedges-vue";

const props = defineProps<{
  name: string;
}>();

const Component = defineAsyncComponent({
  loadingComponent: Loading,
  loader: () => import(`@/components/examples/${props.name}.vue`),
  timeout: 5000,
  suspensible: false,

});
</script>

<template>
  <Component :is="Component" />
</template>
