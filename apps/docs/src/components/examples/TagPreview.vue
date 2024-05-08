<script setup lang="ts">
import { Tag } from "wedges-vue";

function close() {
  // eslint-disable-next-line no-alert
  alert("Custom onClose callback with preventDefault()");
}
</script>

<template>
  <Tag
    closable
    @close.prevent="close"
  >
    Tag
  </Tag>
</template>
