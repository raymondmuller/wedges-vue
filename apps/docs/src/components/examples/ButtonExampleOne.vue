<script setup lang="ts">
import { PlusIcon } from "@iconicicons/vue3";
import { Button } from "wedges-vue";
</script>

<template>
  <div class="mx-auto flex max-w-fit items-start gap-10">
    <div class="flex flex-col gap-4">
      <Button variant="primary">
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="secondary">
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="tertiary">
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="outline">
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="transparent">
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="link">
        <template #before>
          <PlusIcon />
        </template>
      </Button>
    </div>

    <div class="flex flex-col gap-4">
      <Button>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="secondary">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="tertiary">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="outline">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="transparent">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="link">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>
    </div>

    <div class="flex flex-col gap-4">
      <Button variant="primary" shape="pill">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="secondary" shape="pill">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="tertiary" shape="pill">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="outline" shape="pill">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="transparent" shape="pill">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="link" shape="pill">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
    </div>

    <div class="flex flex-col gap-4">
      <Button shape="pill">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="secondary" shape="pill">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="tertiary" shape="pill">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="outline" shape="pill">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="transparent" shape="pill">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="link" shape="pill">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>
    </div>
  </div>
</template>
