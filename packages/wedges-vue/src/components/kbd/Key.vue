<script setup lang="ts">
import { type KbdKey, kbdKeysLabelMap, kbdKeysMap } from "./types";

defineOptions({
  name: "Key"
});

defineProps<{
  keyName: KbdKey | null;
}>();
</script>

<template>
  <abbr v-if="keyName" :title="kbdKeysLabelMap[keyName]">{{
    kbdKeysMap[keyName]
  }}</abbr>
</template>
