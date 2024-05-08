<script setup lang="ts">
import { Slider } from "wedges-vue";
import { EmojiHappyIcon, EmojiSadIcon, MoonIcon, StarIcon, SunIcon } from "@iconicicons/vue3";
</script>

<template>
  <div class="inline-flex w-full min-w-80 max-w-[400px] flex-col gap-y-20">
    <Slider
      :default-value="[5]"
      description="(1-10)"
      helper-text="How happy are you with the level of service?"
      label="Rating"
      :max="10"
      :min="1"
      show-tooltip="hover"
    >
      <template #before>
        <div class="flex items-center gap-4">
          <EmojiSadIcon class="size-6 opacity-50" />
          <span>1</span>
        </div>
      </template>

      <template #after>
        <div class="flex items-center gap-4">
          <span>10</span>
          <EmojiHappyIcon class="size-6 opacity-50" />
        </div>
      </template>
    </Slider>

    <Slider
      :default-value="[50]"
      label="Brightness"
      :max="100"
      :min="1"
      show-tooltip="always"
      :render-tooltip="(val) => val <= 25 ? 'Dark' : val <= 50 ? 'Dim' : val <= 75 ? 'Bright' : 'Very Bright'"
    >
      <template #before>
        <MoonIcon class="size-6 opacity-50" />
      </template>

      <template #after>
        <SunIcon class="size-6 opacity-50" />
      </template>
    </Slider>

    <Slider
      after="$10,000"
      before="$1,000"
      :default-value="[2500, 5000]"
      label="Price Range"
      :max="10000"
      :min="1000"
      :render-tooltip="(val) => `$${val.toLocaleString('en-US')}`"
      show-tooltip="hover"
      :step="100"
    />

    <Slider
      after="10"
      :default-value="[6]"
      :max="10"
      :min="1"
    >
      <template #before>
        <StarIcon class="size-6 opacity-50" />
      </template>
    </Slider>

    <Slider :default-value="[50]" />
  </div>
</template>
