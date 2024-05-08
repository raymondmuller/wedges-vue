<script setup lang="ts">
import { ref } from "vue";
import { ButtonGroup, ButtonGroupItem, CheckboxGroup, CheckboxGroupItem, Popover, PopoverContent, PopoverPortal, PopoverTrigger } from "wedges-vue";
import { ChevronDownIcon, CopyIcon, DownloadIcon } from "@iconicicons/vue3";

const container = ref<HTMLElement | null>(null);
</script>

<template>
  <div id="popover-example-1" ref="container">
    <ButtonGroup>
      <ButtonGroupItem is-icon-only>
        <CopyIcon />
      </ButtonGroupItem>

      <ButtonGroupItem is-icon-only>
        <DownloadIcon />
      </ButtonGroupItem>

      <Popover>
        <PopoverTrigger as-child>
          <ButtonGroupItem is-icon-only>
            <ChevronDownIcon />
          </ButtonGroupItem>
        </PopoverTrigger>

        <PopoverPortal v-if="container" :container>
          <PopoverContent align="end" class="min-w-[130px]">
            <CheckboxGroup label="Group Label">
              <CheckboxGroupItem label="Option 1" />
              <CheckboxGroupItem label="Option 2" />
              <CheckboxGroupItem label="Option 3" />
              <CheckboxGroupItem label="Option 4" />
            </CheckboxGroup>
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </ButtonGroup>
  </div>
</template>
