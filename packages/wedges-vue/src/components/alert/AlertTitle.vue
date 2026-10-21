<script setup lang="ts">
import type { HTMLAttributes, Ref } from "vue";
import type { AlertTitleVariants } from "./variants";
import { Slot } from "radix-vue";
import { onMounted, ref } from "vue";
import { cn, refHasTextNode } from "@/lib/utils";
import { alertTitleVariants } from "./variants";

defineOptions({
  name: "AlertTitle",
});

withDefaults(
  defineProps<{
    color?: AlertTitleVariants["color"];
    class?: HTMLAttributes["class"];
  }>(),
  {
    color: "gray",
  },
);

const titleRef = ref<Ref | null>(null);
const isText = ref(false);

onMounted(() => {
  if (titleRef.value)
    isText.value = refHasTextNode(titleRef);
});
</script>

<template>
  <component
    :is="isText ? 'p' : Slot"
    ref="titleRef"
    :class="cn(alertTitleVariants({ color }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
