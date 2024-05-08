<script setup lang="ts">
import {
  DotsVerticalIcon,
  GridIcon,
  GridMasonryIcon,
  Monitor2Icon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  TableColumnsIcon,
  TableRowsIcon,
} from "@iconicicons/vue3";
import { ButtonGroup, ButtonGroupItem } from "wedges-vue";
</script>

<template>
  <div class="flex flex-col items-center gap-6">
    <!-- Example 1 } -->
    <ButtonGroup orientation="vertical">
      <ButtonGroupItem class="justify-start">
        <template #before>
          <SunIcon />
        </template>
        Light
      </ButtonGroupItem>

      <ButtonGroupItem class="justify-start">
        <template #before>
          <MoonIcon />
        </template>
        Dark
      </ButtonGroupItem>

      <ButtonGroupItem class="justify-start">
        <template #before>
          <Monitor2Icon />
        </template>
        System
      </ButtonGroupItem>
    </ButtonGroup>

    <!-- Example 2 } -->
    <ButtonGroup>
      <ButtonGroupItem>
        <template #after>
          <GridIcon />
        </template>
      </ButtonGroupItem>
      <ButtonGroupItem>
        <template #after>
          <GridMasonryIcon />
        </template>
      </ButtonGroupItem>
      <ButtonGroupItem>
        <template #after>
          <TableColumnsIcon />
        </template>
      </ButtonGroupItem>
      <ButtonGroupItem>
        <template #after>
          <TableRowsIcon />
        </template>
      </ButtonGroupItem>
    </ButtonGroup>

    <!-- Example 3 } -->
    <ButtonGroup>
      <ButtonGroupItem disabled>
        Publish Post
      </ButtonGroupItem>
      <ButtonGroupItem>Draft</ButtonGroupItem>
      <ButtonGroupItem>
        <template #before>
          <DotsVerticalIcon />
        </template>
      </ButtonGroupItem>
    </ButtonGroup>

    <!-- Example 4 } -->
    <ButtonGroup size="sm">
      <ButtonGroupItem destructive>
        <template #before>
          <PlusIcon />
        </template>

        Destructive
      </ButtonGroupItem>

      <ButtonGroupItem>
        <template #before>
          <PlusIcon />
        </template>
        Button
      </ButtonGroupItem>

      <ButtonGroupItem>
        <template #before>
          <PlusIcon />
        </template>
      </ButtonGroupItem>
    </ButtonGroup>
  </div>
</template>
