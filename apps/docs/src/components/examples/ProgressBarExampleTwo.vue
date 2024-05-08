<script setup lang="ts">
import { CloseCircleIcon, CloseIcon, SpinnerIcon } from "@iconicicons/vue3";
import { ProgressBar } from "wedges-vue";
</script>

<template>
  <div class="inline-flex w-full max-w-[400px] flex-col gap-y-12">
    <ProgressBar

      helper-text="27MB of 60MB"
      indicator="50%"
      label="Uploading..."
      tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      :value="50"
    >
      <template #afterIndicator>
        <SpinnerIcon class="animate-spin" />
      </template>
    </ProgressBar>

    <ProgressBar
      color="green"
      helper-text="60MB of 60MB"
      indicator="100%"
      label="Uploading Complete"
      tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      :value="100"
    >
      <template #afterIndicator>
        <CheckCircleIcon class="text-wg-green" />
      </template>
    </ProgressBar>

    <ProgressBar

      color="red"

      label="Uploading Failed"
      tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      :value="100"
    >
      <template #helperText>
        <span class="text-destructive">
          Oops, something went wrong
        </span>
      </template>
      <template #afterIndicator>
        <CloseCircleIcon class="text-wg-red" />
      </template>
    </ProgressBar>

    <ProgressBar
      color="green"
      indicator="368"
      label="Class A"
      :max="500"
      :value="368"
      variant="inline"
    />

    <ProgressBar
      color="orange"
      indicator="211"
      label="Class B"
      :max="500"
      :value="211"
      variant="inline"
    />

    <ProgressBar
      color="red"
      indicator="96"
      label="Class C"
      :max="500"
      :value="96"
      variant="inline"
    />

    <ProgressBar

      color="secondary"
      description="(23.6MB)"

      label="design system.fig"
      tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      :value="50"
    >
      <template #indicator>
        <span class="text-surface-500">50% (9 sec left)</span>
      </template>

      <template #afterIndicator>
        <CloseIcon />
      </template>
    </ProgressBar>

    <ProgressBar indicator="70%" label="Please wait..." :value="70" color="secondary" />

    <ProgressBar

      indicator="50%"
      label="Progress"
      tooltip="A tooltip is a small box that appears when hovering over a UI element, providing additional information."
      :value="50"
      variant="inline"
    >
      <template #afterIndicator>
        <SpinnerIcon class="animate-spin" />
      </template>
    </ProgressBar>

    <ProgressBar indicator="50% Complete" :value="50" variant="inline" color="blue" />

    <ProgressBar

      description="35%"
      :value="35"
      variant="inline"
      color="yellow"
    >
      <template #afterIndicator>
        <CloseIcon />
      </template>
    </ProgressBar>

    <ProgressBar :value="70" color="pink" helper-text="(650MB/1.12GB) · 17 seconds remaining" />
  </div>
</template>
