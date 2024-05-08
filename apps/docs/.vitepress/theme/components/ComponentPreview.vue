<script setup lang="ts">
import { CodeIcon, EyeIcon, MoonIcon, SunIcon } from "@iconicicons/vue3";
import { useToggle } from "@vueuse/core";
import { codeToHtml } from "shiki";
import { useData } from "vitepress";
import { onMounted, ref, watch } from "vue";
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "wedges-vue";
import { cn } from "wedges-vue/utils";
import { cssVariables } from "../config/shiki";
import ComponentLoader from "./ComponentLoader.vue";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{
  name: string;
  align?: "center" | "start" | "end";
}>(), { align: "center" });

const rawString = ref("");

const codeHtml = ref("");

const { isDark } = useData();

const toggleDark = function () {
  useToggle(isDark)();
};

onMounted(async () => {
  try {
    rawString.value = await import(`@/components/examples/${props.name}.vue?raw`).then(m => m.default);
    codeHtml.value = `<button title=\"Copy Code\" class=\"copy\"></button><span class="lang">vue</span>` + `${await codeToHtml(rawString.value, {
      lang: "vue",
      theme: cssVariables,
    })}`;
  }
  catch (err) {
    console.error(err);
  }
});
</script>

<template>
  <div
    class="relative flex flex-col my-4 space-y-2 not-docs group"
  >
    <Tabs default-value="preview" class="relative w-full mr-auto">
      <div class="flex items-center justify-between pb-3">
        <TabsList class="justify-start w-full p-0 bg-transparent border-b rounded-none">
          <TabsTrigger
            value="preview"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            <EyeIcon class="size-6 mr-1.5" />
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            <CodeIcon class="size-6 mr-1.5" />
            Code
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent
        value="preview" class="relative border rounded-md"
        :class="{
          dark: isDark,
        }"
      >
        <div
          class="relative flex min-h-[300px] w-full items-center overflow-x-auto p-10  bg-background" :class="{
            'items-center': align === 'center',
            'items-start': align === 'start',
            'items-end': align === 'end',
          }"
        >
          <div
            :class="cn('preview vp-raw not-docs mx-auto block w-full min-w-fit text-center')"
          >
            <ComponentLoader v-bind="$attrs" :name />
          </div>
          <Button is-icon-only class="absolute top-3 right-3 z-10 dark:text-white" size="sm" variant="transparent" @click="toggleDark">
            <MoonIcon v-if="isDark" />
            <SunIcon v-else />
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="code" class="!relative">
        <div v-if="codeHtml" class="language-vue" style="flex: 1;" v-html="codeHtml" />
        <slot v-else />
      </TabsContent>
    </Tabs>
  </div>
</template>
