<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ProseCodeInline, ProseTable, ProseTd, ProseTh, ProseTr } from "../prose";

interface PropDef {
  name?: string;
  required?: boolean;
  description?: string;
};

interface SlotsTableProps {
  data: PropDef[];
}
const props = defineProps<SlotsTableProps>();
</script>

<template>
  <ProseTable>
    <div class="absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]">
      <Icon icon="ph:square-logo-light" />
    </div>
    <thead class="">
      <ProseTr class="">
        <ProseTh class="w-1/3">
          <span>Slot</span>
        </ProseTh>
        <ProseTh>
          <span>Description</span>
        </ProseTh>
      </ProseTr>
    </thead>
    <tbody>
      <ProseTr v-for="(prop, index) in props.data" :key="`${prop.name}-${index}`">
        <ProseTd>
          <div class="flex h-full items-start gap-1">
            <ProseCodeInline class=" !text-[13px]">
              {{ prop.name }}
            </ProseCodeInline>
          </div>
        </ProseTd>
        <ProseTd>
          {{ prop.description }}
        </ProseTd>
      </ProseTr>
    </tbody>
  </ProseTable>
</template>
