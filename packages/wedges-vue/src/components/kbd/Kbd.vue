<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import Key from "./Key.vue";
import type { KbdKey } from "./types";
import { type KbdVariants, kbdVariants } from "./variants";
import { cn } from "@/lib/utils";

defineOptions({
  name: "Kbd"
});

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    keys?: KbdKey | KbdKey[];
    size?: KbdVariants["size"];
  }>(),
  { size: "xs" },
);
</script>

<template>
  <kbd :class="cn(kbdVariants({ size }), props.class)">
    <Key v-for="key in keys" :key="key" :key-name="key as KbdKey" />
    <slot />
  </kbd>
</template>
