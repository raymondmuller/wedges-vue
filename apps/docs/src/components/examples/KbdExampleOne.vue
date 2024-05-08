<script setup lang="ts">
import { Kbd } from "wedges-vue";
</script>

<template>
  <div class="inline-flex items-center gap-4">
    <Kbd :keys="['option', 'command']" size="xs">
      W
    </Kbd>

    <Kbd :keys="['option', 'command']" size="sm">
      D
    </Kbd>

    <Kbd :keys="['option', 'command']" size="md">
      G
    </Kbd>

    <Kbd :keys="['option', 'command']" size="lg">
      S
    </Kbd>
  </div>
</template>
