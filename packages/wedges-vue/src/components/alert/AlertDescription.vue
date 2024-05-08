<script setup lang="ts">
import { type HTMLAttributes, type Ref, onMounted, ref } from "vue";
import { Slot } from "radix-vue";
import { cn, refHasTextNode } from "@/lib/utils";

defineOptions({
  name: "AlertDescription",
});

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const descriptionRef = ref<Ref | null>(null);
const isText = ref(false);

onMounted(() => {
  if (descriptionRef.value)
    isText.value = refHasTextNode(descriptionRef);
});
</script>

<template>
  <component
    :is="isText ? 'p' : Slot"
    ref="descriptionRef"
    :class="cn('text-start', props.class)"
  >
    <slot />
  </component>
</template>
