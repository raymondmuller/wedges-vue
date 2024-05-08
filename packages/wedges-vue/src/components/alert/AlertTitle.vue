<script setup lang="ts">
import { Slot } from "radix-vue";
import { type HTMLAttributes, type Ref, onMounted, ref } from "vue";
import { type AlertTitleVariants, alertTitleVariants } from "./variants";
import { cn, refHasTextNode } from "@/lib/utils";

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
