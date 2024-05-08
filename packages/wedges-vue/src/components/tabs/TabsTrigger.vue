<script setup lang="ts">
import {
  Slot,
  TabsTrigger,
  type TabsTriggerProps,
  useForwardProps,
} from "radix-vue";
import {
  type HTMLAttributes,
  type Ref,
  computed,
  inject,
  onMounted,
  ref,
} from "vue";
import type { TabsContextProps } from "./types";
import { tabVariants } from "./variants";
import { cn, refHasTextNode } from "@/lib/utils";

defineOptions({
  name: "TabsTrigger",
});

const props = defineProps<
  TabsTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);

const context = inject<TabsContextProps>("TabsContext");

const triggerRef = ref<Ref | null>(null);

const isText = ref(false);

onMounted(() => {
  if (triggerRef.value)
    isText.value = refHasTextNode(triggerRef);
});
</script>

<template>
  <TabsTrigger
    ref="triggerRef"
    v-bind="forwardedProps"
    :class="
      cn(
        // base
        'inline-flex items-center justify-center gap-1 whitespace-nowrap text-surface-500 outline-primary transition-colors duration-100 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60',

        tabVariants({ variant: context?.variant }),
        props.class,
      )
    "
  >
    <component :is="isText ? 'span' : Slot" :class="{ 'px-1': isText }">
      <slot name="before" />
      <slot />
    </component>
    <slot name="after" />
  </TabsTrigger>
</template>
