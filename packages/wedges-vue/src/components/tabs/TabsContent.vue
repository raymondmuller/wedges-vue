<script setup lang="ts">
import type { TabsContentProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { TabsContent } from "radix-vue";
import { computed } from "vue";
import { cn } from "@/lib/utils";

defineOptions({
  name: "TabsContent",
});

const props = defineProps<
  TabsContentProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <TabsContent
    :class="
      cn(
        'outline-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        props.class,
      )
    "
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
