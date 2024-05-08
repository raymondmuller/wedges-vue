<script setup lang="ts">
import { PlusIcon } from "@iconicicons/vue3";
import { Button } from "wedges-vue";
</script>

<template>
  <div class="mx-auto flex max-w-fit items-start gap-10">
    <div class="flex flex-col gap-4">
      <Button variant="primary" destructive>
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="secondary" destructive>
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="tertiary" destructive>
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="outline" destructive>
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="transparent" destructive>
        <template #before>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="link" destructive>
        <template #before>
          <PlusIcon />
        </template>
      </Button>
    </div>

    <div class="flex flex-col gap-4">
      <Button destructive>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="secondary" destructive>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="tertiary" destructive>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="outline" destructive>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="transparent" destructive>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="link" destructive>
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
      <Button variant="primary" shape="pill" destructive>
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="secondary" shape="pill" destructive>
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="tertiary" shape="pill" destructive>
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="outline" shape="pill" destructive>
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="transparent" shape="pill" destructive>
        <template #after>
          <PlusIcon />
        </template>
      </Button>
      <Button variant="link" shape="pill" destructive>
        <template #after>
          <PlusIcon />
        </template>
      </Button>
    </div>

    <div class="flex flex-col gap-4">
      <Button shape="pill" destructive>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="secondary" shape="pill" destructive>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="tertiary" shape="pill" destructive>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="outline" shape="pill" destructive>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="transparent" shape="pill" destructive>
        <template #before>
          <PlusIcon />
        </template>
        Button
        <template #after>
          <PlusIcon />
        </template>
      </Button>

      <Button variant="link" shape="pill" destructive>
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
