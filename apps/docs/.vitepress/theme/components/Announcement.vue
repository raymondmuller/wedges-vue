<script setup lang="ts">
import { ArrowRightIcon } from "@iconicicons/vue3";
import { announcementConfig } from "../config/site";
import { Separator } from "./ui/separator";
</script>

<template>
  <a
    :href="announcementConfig.link"
    class="inline-flex items-center px-3 py-1 text-sm font-medium rounded-lg bg-muted"
  >
    {{ announcementConfig.icon }} <Separator class="h-4 mx-2" orientation="vertical" />
    <span class="sm:hidden">{{ announcementConfig.title }}</span>
    <span class="hidden sm:inline">
      {{ announcementConfig.title }}
    </span>
    <ArrowRightIcon class="w-4 h-4 ml-1" />
  </a>
</template>
