<script setup lang="ts">
import { PlusIcon } from "@iconicicons/vue3";
import { ButtonGroup, ButtonGroupItem } from "wedges-vue";
</script>

<template>
  <ButtonGroup>
    <ButtonGroupItem>
      <template #before>
        <PlusIcon />
      </template>
      Button
      <template #after>
        <PlusIcon />
      </template>
    </ButtonGroupItem>

    <ButtonGroupItem>
      <template #before>
        <PlusIcon />
      </template>
      Button
      <template #after>
        <PlusIcon />
      </template>
    </ButtonGroupItem>

    <ButtonGroupItem>
      <template #before>
        <PlusIcon />
      </template>
      Button
      <template #after>
        <PlusIcon />
      </template>
    </ButtonGroupItem>
  </ButtonGroup>
</template>
