<script setup lang="ts">
import { MoonIcon, SunIcon } from "@iconicicons/vue3";
import { ref } from "vue";
import { Button, Switch, Toggle, ToggleGroup, ToggleGroupItem, Tooltip } from "wedges-vue";

const theme = ref<"light" | "dark">("light");

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>

<template>
  <div class="m-auto flex w-fit flex-col items-center gap-8 text-left">
    <!-- Example 1 } -->
    <Tooltip
      :side-offset="8"
      :content="`Click to switch to the ${
        typeof theme !== 'undefined' && theme === 'dark' ? 'light' : 'dark'
      } theme`"
    >
      <Button
        variant="transparent"
        is-icon-only
        @click="toggleTheme"
      >
        <SunIcon v-if="theme === 'light'" />
        <MoonIcon v-else />
      </Button>
    </Tooltip>

    <!-- Example 2 } -->
    <ToggleGroup size="sm" type="single" default-value="light">
      <ToggleGroupItem value="light">
        Light
      </ToggleGroupItem>
      <ToggleGroupItem value="dark">
        Dark
      </ToggleGroupItem>
      <ToggleGroupItem value="System">
        System
      </ToggleGroupItem>
    </ToggleGroup>

    <!-- Example 3 } -->
    <Toggle shape="pill">
      Dark theme
    </Toggle>

    <!-- Example 4 } -->
    <Switch label="Dark theme" />
  </div>
</template>
