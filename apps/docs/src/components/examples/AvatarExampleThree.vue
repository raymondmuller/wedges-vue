<script setup lang="ts">
import { AvatarFallback, AvatarImage, AvatarRoot, AvatarStatus } from "wedges-vue";
</script>

<template>
  <div class="flex items-center justify-center gap-6">
    <!-- <Tooltip content="Max Quest" side-offset="{8}"> -->
    <AvatarRoot class="justify-center w-16 h-16 rounded-full outline outline-offset-2 outline-wg-red">
      <AvatarImage
        class="rounded-full"
        src="https://images.unsplash.com/photo-1560800452-f2d475982b96?auto=format&fit=crop&w=250&h=250"
      />
      <AvatarFallback class="rounded-full" />
      <span class="absolute flex items-center justify-center w-10 h-10 text-white rounded-full bg-neutral-700/50 backdrop-blur-sm">
        MQ
      </span>
      <AvatarStatus class="left-1 bg-wg-red" />
    </AvatarRoot>
    <!-- </Tooltip> -->
  </div>
</template>
