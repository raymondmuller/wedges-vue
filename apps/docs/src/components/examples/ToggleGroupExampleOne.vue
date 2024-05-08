<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from "wedges-vue";
import { ColumnsHorizontalIcon, GridIcon, GridMasonryIcon, RowsIcon, TableColumnsIcon, TableRowsIcon } from "@iconicicons/vue3";
</script>

<template>
  <div class="mx-auto flex max-w-fit flex-col items-center gap-6">
    <ToggleGroup type="single" default-value="days">
      <ToggleGroupItem value="days">
        Days
      </ToggleGroupItem>
      <ToggleGroupItem value="months">
        Months
      </ToggleGroupItem>
      <ToggleGroupItem value="years">
        Years
      </ToggleGroupItem>
    </ToggleGroup>

    <ToggleGroup type="single" size="sm" default-value="grid">
      <ToggleGroupItem value="grid">
        <template #before>
          <GridIcon />
        </template>
        Grid
      </ToggleGroupItem>

      <ToggleGroupItem value="column">
        <template #before>
          <ColumnsHorizontalIcon />
        </template>
        Column
      </ToggleGroupItem>

      <ToggleGroupItem value="row">
        <template #before>
          <RowsIcon />
        </template>
        Row
      </ToggleGroupItem>
    </ToggleGroup>

    <div class="flex items-center gap-6">
      <ToggleGroup orientation="vertical" size="md" default-value="grid" type="single">
        <ToggleGroupItem value="grid">
          <template #before>
            <GridIcon />
          </template>

          <ToggleGroupItem value="masonry">
            <template #before>
              <GridMasonryIcon />
            </template>
          </ToggleGroupItem>

          <ToggleGroupItem value="column">
            <template #before>
              <TableColumnsIcon />
            </template>
          </ToggleGroupItem>
          <ToggleGroupItem value="row">
            <template #before>
              <TableRowsIcon />
            </template>
          </ToggleGroupItem>
        </togglegroupitem>
      </ToggleGroup>

      <ToggleGroup orientation="vertical" size="sm" default-value="grid" type="single">
        <ToggleGroupItem value="grid">
          <template #before>
            <GridIcon />
          </template>
        </ToggleGroupItem>
        <ToggleGroupItem value="masonry">
          <template #before>
            <GridMasonryIcon />
          </template>
        </ToggleGroupItem>
        <ToggleGroupItem value="column">
          <template #before>
            <TableColumnsIcon />
          </template>
        </ToggleGroupItem>
        <ToggleGroupItem value="row">
          <template #before>
            <TableRowsIcon />
          </template>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  </div>
</template>
