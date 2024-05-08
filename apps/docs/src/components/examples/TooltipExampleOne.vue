<script setup lang="ts">
import { Tooltip } from "wedges-vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6 mx-auto">
    <div class="flex items-center gap-4">
      <Tooltip content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element." />

      <Tooltip
        color="secondary"
        content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element."
      />

      <Tooltip
        color="soft"
        content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element."
        :arrow="false"
        :side-offset="10"
      />
    </div>

    <div class="flex items-center gap-4">
      <Tooltip
        content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element. It typically contains brief, helpful text or instructions relevant to the trigger's context."
        size="md"
      />

      <Tooltip
        color="secondary"
        content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element. It typically contains brief, helpful text or instructions relevant to the trigger's context."
        size="md"
      />

      <Tooltip
        color="soft"
        content="A tooltip is a compact, informational box that becomes visible upon hovering the trigger element. It typically contains brief, helpful text or instructions relevant to the trigger's context."
        :arrow="false"
        :side-offset="10"
        size="md"
      />
    </div>
  </div>
</template>
