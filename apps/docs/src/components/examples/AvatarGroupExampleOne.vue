<script setup lang="ts">
import { AvatarGroup } from "wedges-vue";

const items = [
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop&crop=face",
    alt: "Avatar 1",
  },
  {
    src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?w=250&h=250&auto=format&fit=crop&crop=face",
    alt: "Avatar 2",
  },
  {
    src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=250&h=250&auto=format&fit=crop&crop=face",
    alt: "Avatar 2",
  },
];
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="flex items-center justify-center gap-6">
      <AvatarGroup
        size="sm"
        :items
        more-label="+3"
      />

      <AvatarGroup
        size="sm"
        previous-on-top
        :items
        more-label="+3"
      />
    </div>

    <div class="flex items-center justify-center gap-6">
      <AvatarGroup
        size="md"
        :items
        more-label="+3"
      />

      <AvatarGroup
        size="md"
        previous-on-top
        :items
        more-label="+3"
      />
    </div>

    <div class="flex items-center justify-center gap-6">
      <AvatarGroup
        size="lg"
        :items
        more-label="+3"
      />

      <AvatarGroup
        size="lg"
        previous-on-top
        :items
        more-label="+3"
      />
    </div>

    <div class="flex items-center justify-center gap-6">
      <AvatarGroup
        size="xl"
        :items
        more-label="+3"
      />

      <AvatarGroup
        size="xl"
        previous-on-top
        :items
        more-label="+3"
      />
    </div>
  </div>
</template>
