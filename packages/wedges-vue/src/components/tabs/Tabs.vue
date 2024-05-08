<script setup lang="ts">
import type { TabsRootEmits, TabsRootProps } from "radix-vue";
import { TabsRoot, useForwardPropsEmits } from "radix-vue";
import { type HTMLAttributes, provide } from "vue";

import type { TabsContextProps, Variants } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "Tabs",
});

const props = withDefaults(
  defineProps<
    TabsRootProps & {
      class?: HTMLAttributes["class"];
      variant?: Variants["variant"];
    }
  >(),
  {
    variant: "fill",
    orientation: "horizontal",
  },
);
const emits = defineEmits<TabsRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);

provide<TabsContextProps>("TabsContext", {
  variant: props.variant as Variants["variant"],
});
</script>

<template>
  <TabsRoot
    :class="
      cn(
        'wg-antialiased',
        orientation === 'vertical' && 'flex flex-wrap space-x-6',
        orientation === 'horizontal' && 'space-y-6',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <slot />
  </TabsRoot>
</template>
