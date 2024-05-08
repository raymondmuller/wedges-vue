<script setup lang="ts">
import { GridIcon, GridMasonryIcon, TableColumnsIcon, TableRowsIcon } from "@iconicicons/vue3";
import { ToggleGroup, ToggleGroupItem } from "wedges-vue";
</script>

<template>
  <ToggleGroup orientation="horizontal" default-value="grid" type="single">
    <ToggleGroupItem value="grid">
      <GridIcon />
    </ToggleGroupItem>

    <ToggleGroupItem value="masonry">
      <GridMasonryIcon />
    </ToggleGroupItem>

    <ToggleGroupItem value="table-columns">
      <TableColumnsIcon />
    </ToggleGroupItem>

    <ToggleGroupItem value="rows">
      <TableRowsIcon />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
