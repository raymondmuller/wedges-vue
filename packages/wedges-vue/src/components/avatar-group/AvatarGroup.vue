<script setup lang="ts">
import AvatarGroupItem from "./AvatarGroupItem.vue";
import AvatarGroupLabel from "./AvatarGroupLabel.vue";
import AvatarGroupRoot from "./AvatarGroupRoot.vue";
import type { AvatarGroupProps } from "./types";
import { avatarGroupVariants } from "./variants";
import { cn, hasSlotContent } from "@/lib/utils";

defineOptions({
  name: "AvatarGroup"
});

const props = defineProps<AvatarGroupProps>();
</script>

<template>
  <AvatarGroupRoot :class="cn(avatarGroupVariants({ size }), props.class)">
    <AvatarGroupItem
      v-for="(item, i) in items"
      :key="`avatar-${i}`"
      v-bind="item"
      :size
      :style="[
        { zIndex: previousOnTop ? items.length - i : undefined },
        item.style,
      ]"
    />

    <slot />

    <AvatarGroupLabel
      v-if="moreLabel?.length || hasSlotContent($slots.moreLabel)"
      :label="moreLabel"
      v-bind="props"
    >
      <slot name="moreLabel" />
    </AvatarGroupLabel>
  </AvatarGroupRoot>
</template>
