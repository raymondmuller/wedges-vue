<script setup lang="ts">
import { computed } from "vue";
import Dots from "./Dots.vue";

import Line from "./Line.vue";
import Spinner from "./Spinner.vue";
import { loadingVariants } from "./variants";
import type { LoadingProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "Loading"
});

const props = withDefaults(defineProps<LoadingProps>(), {
  color: "primary",
  size: "md",
  type: "line",
});

const delegatedProps = computed(() => {
  const { class: _, color: __, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <div
    :class="cn(loadingVariants({ color, size, type }), props.class)"
    v-bind="delegatedProps"
  >
    <template v-if="type === 'line'">
      <Line class="size-full animate-spin will-change-transform" :size />
    </template>

    <template v-else-if="type === 'spinner'">
      <Spinner
        class="size-full animate-[spin_.6s_ease-in-out_infinite] will-change-transform"
        :size
      />
    </template>

    <template v-else-if="type === 'dots'">
      <Dots
        class="size-full animate-[spin_1.25s_linear_infinite] will-change-transform"
        :size
      />
    </template>
  </div>
</template>
