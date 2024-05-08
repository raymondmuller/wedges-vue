<script setup lang="ts">
import { ChevronDownIcon, CopyIcon, DownloadIcon, EditIcon } from "@iconicicons/vue3";
import { ButtonGroup, ButtonGroupItem, Tooltip } from "wedges-vue";
</script>

<template>
  <ButtonGroup size="sm">
    <Tooltip
      align="center"
      :animation="false"
      content="View raw code"
      :delay-duration="0"
      side="top"
    >
      <ButtonGroupItem>Raw</ButtonGroupItem>
    </Tooltip>

    <Tooltip align="center" :animation="false" content="Copy" :delay-duration="0">
      <ButtonGroupItem is-icon-only>
        <CopyIcon />
      </ButtonGroupItem>
    </Tooltip>

    <Tooltip content="Download" :delay-duration="0">
      <ButtonGroupItem is-icon-only>
        <DownloadIcon />
      </ButtonGroupItem>
    </Tooltip>

    <Tooltip align="center" :animation="false" content="Edit" :delay-duration="0">
      <ButtonGroupItem is-icon-only>
        <EditIcon />
      </ButtonGroupItem>
    </Tooltip>

    <Tooltip align="center" :animation="false" content="More" :delay-duration="0">
      <ButtonGroupItem is-icon-only>
        <ChevronDownIcon />
      </ButtonGroupItem>
    </Tooltip>
  </ButtonGroup>
</template>
