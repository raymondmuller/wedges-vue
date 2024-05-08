<script setup lang="ts">
import type { SwitchRootEmits } from "radix-vue";
import {
  SwitchRoot,
  SwitchThumb,
  useForwardPropsEmits,
  useId,
} from "radix-vue";
import type { HTMLAttributes } from "vue";
import { computed, inject } from "vue";
import type { SwitchGroupContextProps } from "../switch-group/types";
import SwitchLabel from "./SwitchLabel.vue";
import type { SwitchProps } from "./types";
import { cn } from "@/lib/utils";

defineOptions({
  name: "Switch"
});

const props = withDefaults(
  defineProps<
    SwitchProps & {
      class?: HTMLAttributes["class"];
      id?: HTMLAttributes["id"];
      ariaInvalid?: HTMLAttributes["aria-invalid"];
      description?: string;
      helperText?: string;
      tooltip?: string;
    }
  >(),
  {
    alignLabel: "end",
  },
);

const emits = defineEmits<SwitchRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const context = inject("SwitchGroupContext") as SwitchGroupContextProps;

const isInGroup = computed(() => context?.isInGroup);

const generatedId = useId();
const elId = props.id ?? generatedId;
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex items-start gap-4',
        isInGroup && alignLabel === 'start' && 'flex justify-between',
        !disabled
          && '[&:has([data-state=unchecked])_.wg-label]:text-surface-700',
      )
    "
  >
    <template v-if="alignLabel === 'start'">
      <SwitchLabel
        :id="`${elId}__label`"
        :is-in-group
        :description
        :disabled
        :label
        :html-for="elId"
        :required
        :tooltip
      />
    </template>

    <div class="wg-switch inline-flex min-h-6 shrink-0 items-center">
      <SwitchRoot
        v-bind="forwarded"
        :id="elId"
        :class="
          cn(
            'peer inline-flex h-4 w-7 items-center rounded-full bg-surface-200 outline-primary transition-colors duration-100 wg-antialiased hover:bg-surface-300 focus:outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none data-[state=checked]:bg-primary',
            disabled && 'bg-surface-100 data-[state=checked]:bg-surface-100',
            props.class,
          )
        "
        :disabled
        :required
      >
        <SwitchThumb
          :class="
            cn(
              'size-3 rounded-full bg-white transition-transform duration-200 data-[state=checked]:translate-x-[14px] data-[state=unchecked]:translate-x-0.5',
              disabled && 'dark:bg-surface-200',
            )
          "
        />
      </SwitchRoot>
    </div>

    <template v-if="alignLabel === 'end'">
      <SwitchLabel v-bind="forwarded" :id="elId" :is-in-group />
    </template>
  </div>
</template>
