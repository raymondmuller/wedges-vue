<script setup lang="ts">
import { PlusIcon } from "@iconicicons/vue3";
import { Button } from "wedges-vue";
</script>

<template>
  <div class="mx-auto flex max-w-fit items-start gap-10">
    <div class="flex flex-col gap-4">
      <Button variant="primary" size="sm">
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="secondary" size="sm">
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="tertiary" size="sm">
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="outline" size="sm">
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="transparent" size="sm">
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
      <Button size="sm">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="secondary" size="sm">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="tertiary" size="sm">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="outline" size="sm">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="transparent" size="sm">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="link" size="sm">
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
      <Button variant="primary" shape="pill" size="sm">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="secondary" shape="pill" size="sm">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="tertiary" shape="pill" size="sm">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="outline" shape="pill" size="sm">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="transparent" shape="pill" size="sm">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="link" shape="pill" size="sm">
        <template #after>
          <PlusIcon />
        </template>
      </Button>
    </div>

    <div class="flex flex-col gap-4">
      <Button shape="pill" size="sm">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="secondary" shape="pill" size="sm">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="tertiary" shape="pill" size="sm">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="outline" shape="pill" size="sm">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="transparent" shape="pill" size="sm">
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="link" shape="pill" size="sm">
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
