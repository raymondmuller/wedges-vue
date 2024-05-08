<script setup lang="ts">
import { Button, CheckboxGroup, CheckboxGroupItem, Popover, PopoverContent, PopoverTrigger } from "wedges-vue";
import { ChevronDownIcon } from "@iconicicons/vue3";
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="tertiary" size="sm" shape="pill">
        Show Popover
        <template #after>
          <ChevronDownIcon />
        </template>
      </Button>
    </PopoverTrigger>

    <PopoverContent class="min-w-[140px]">
      <CheckboxGroup label="Group Label">
        <CheckboxGroupItem label="Option 1" />
        <CheckboxGroupItem label="Option 2" />
        <CheckboxGroupItem label="Option 3" />
        <CheckboxGroupItem label="Option 4" />
      </CheckboxGroup>
    </PopoverContent>
  </Popover>
</template>
