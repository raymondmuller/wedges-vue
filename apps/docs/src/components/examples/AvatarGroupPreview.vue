<script setup lang="ts">
import { AvatarGroup } from "wedges-vue";

const items = [{
  src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=250&h=250&auto=format&fit=crop",
  alt: "Avatar 1",
}, {
  src: "https://images.unsplash.com/photo-1579613832107-64359da23b0c?w=250&h=250&auto=format&fit=crop",
  alt: "Avatar 2",
}, {
  src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=250&h=250&auto=format&fit=crop",
  alt: "Avatar 2",
}];
</script>

<template>
  <div class="flex items-center justify-center">
    <AvatarGroup
      :items
      more-label="+3"
      size="lg"
    />
  </div>
</template>
