<script setup lang="ts">
import { SettingsSlidersIcon } from "@iconicicons/vue3";
import { DividerHorizontalIcon } from "@radix-icons/vue";
import { ProseCodeInline, ProseTable, ProseTd, ProseTh, ProseTr } from "../prose";

interface PropDef {
  name?: string;
  required?: boolean;
  default?: string | boolean;
  type: string;
  typeSimple: string;
  description?: string;
}

interface PropsTableProps {
  data: PropDef[];
}
const props = defineProps<PropsTableProps>();
</script>

<template>
  <ProseTable>
    <div class="absolute top-0 right-2 w-8 h-8 rounded-full border flex items-center justify-center text-[var(--vp-c-text-2)] bg-[var(--vp-button-alt-bg)] border-[var(--vp-c-gray-soft)]">
      <SettingsSlidersIcon />
    </div>
    <thead class="rounded-t-xl">
      <ProseTr class="">
        <ProseTh class="w-1/6">
          <span>Prop</span>
        </ProseTh>

        <ProseTh class="w-2/3">
          <span>Type</span>
        </ProseTh>
        <ProseTh class="w-1/6">
          <span>Default</span>
        </ProseTh>
      </ProseTr>
    </thead>

    <tbody>
      <ProseTr v-for="(prop, index) in props.data" :key="`${prop.name}-${index}`">
        <ProseTd>
          <div class="flex items-start h-full gap-1">
            <ProseCodeInline class="!text-[13px]">
              {{ prop.name }} <span v-if="prop.required">*</span>
            </ProseCodeInline>
          </div>
        </ProseTd>

        <ProseTd>
          <div class="flex items-center gap-1">
            <div>
              <ProseCodeInline variant="secondary">
                {{ prop.typeSimple ? prop.typeSimple : prop.type }}
              </ProseCodeInline>
            </div>
          </div>
        </ProseTd>

        <ProseTd>
          <div v-if="prop.default" class="flex items-start h-full gap-1">
            <ProseCodeInline variant="secondary">
              {{ prop.default }}
            </ProseCodeInline>
          </div>
          <template v-else-if="prop.type === 'boolean'">
            <ProseCodeInline variant="secondary">
              false
            </ProseCodeInline>
          </template>
          <template v-else>
            <div as="{AccessibleIcon}" label="No default value">
              <DividerHorizontalIcon />
            </div>
          </template>
        </ProseTd>
      </ProseTr>
    </tbody>
  </ProseTable>
</template>
