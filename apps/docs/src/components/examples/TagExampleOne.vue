<script setup lang="ts">
import { BookIcon, FileIcon, FolderIcon, TrashIcon } from "@iconicicons/vue3";
import { Avatar, Tag } from "wedges-vue";
import UKFlagIcon from "./TagUKFlagIcon.vue";
import USFlagIcon from "./TagUSFlagIcon.vue";
import DotIcon from "./TagDotIcon.vue";
</script>

<template>
  <div class="mx-auto flex max-w-fit flex-col items-start gap-4">
    <div class="flex flex-wrap items-center justify-start gap-4">
      <Tag closable>
        Pineapple
      </Tag>

      <Tag color="yellow" closable stroke>
        Lemons
      </Tag>

      <Tag closable>
        Watermelon
      </Tag>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Tag color="green">
        <template #before>
          <DotIcon />
        </template>
        Online
      </Tag>

      <Tag color="red">
        <template #before>
          <DotIcon />
        </template>
        Offline
      </Tag>

      <Tag>
        <template #before>
          <DotIcon class="text-surface-300" />
        </template>
        Suspended
      </Tag>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Tag
        closable
        shape="pill"
        stroke
      >
        <template #avatar>
          <Avatar src="https://github.com/ormanclark.png" />
        </template>

        @ormanclark
      </Tag>

      <Tag

        color="orange"
        shape="pill"
        stroke
      >
        <template #avatar>
          <Avatar src="https://github.com/lmsqueezy.png" />
        </template>
        Lemon Squeezy
      </Tag>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Tag color="blue" closable>
        <template #before>
          <FolderIcon />
        </template>
        Folders
      </Tag>

      <Tag color="blue">
        <template #before>
          <FileIcon />
        </template>
        Files
      </Tag>

      <Tag color="blue" closable>
        <template #before>
          <BookIcon />
        </template>
        Guides
      </Tag>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Tag color="yellow" closable stroke>
        New
      </Tag>

      <Tag color="orange" closable stroke>
        Pending
      </Tag>

      <Tag color="green" closable stroke>
        Active
      </Tag>

      <Tag color="red" closable stroke>
        Closed
      </Tag>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Tag color="primary" closable shape="pill">
        Free parking
      </Tag>

      <Tag color="primary" closable shape="pill">
        Pool
      </Tag>

      <Tag color="primary" closable shape="pill">
        Free WiFi
      </Tag>

      <Tag color="primary" closable shape="pill">
        Gym
      </Tag>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Tag closable>
        <template #before>
          <UKFlagIcon />
        </template>
        United Kingdom
      </Tag>

      <Tag closable>
        <template #before>
          <USFlagIcon />
        </template>
        United States
      </Tag>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Tag
        closable
        class="uppercase"

        color="orange"
        shape="pill"
        size="sm"
        stroke
      >
        <template #close-icon>
          <TrashIcon class="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />
        </template>

        ux
      </Tag>

      <Tag
        closable
        class="uppercase"
        color="orange"
        shape="pill"
        size="sm"
        stroke
      >
        <template #close-icon>
          <TrashIcon class="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />
        </template>
        ui
      </Tag>

      <Tag
        closable
        class="uppercase"
        color="orange"
        shape="pill"
        size="sm"
        stroke
      >
        <template #close-icon>
          <TrashIcon class="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />
        </template>
        motion
      </Tag>

      <Tag
        closable
        class="uppercase"
        color="orange"
        shape="pill"
        size="sm"
        stroke
      >
        <template #close-icon>
          <TrashIcon class="h-4 w-4 text-wg-orange-600 dark:text-wg-orange" />
        </template>
        graphics
      </Tag>
    </div>
  </div>
</template>
