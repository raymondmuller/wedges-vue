<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import { Badge } from "wedges-vue";
import { ChevronRightIcon, CodeIcon, LinkIcon } from "@iconicicons/vue3";
import { ScrollArea } from "../components/ui/scroll-area";
import { docsConfig } from "../config/docs";
import TableOfContentVue from "../components/TableOfContent.vue";
import EditLink from "../components/EditLink.vue";

const $route = useRoute();
const { frontmatter } = useData();

const sourceLink = "https://github.com/raymondmuller/wedges-vue/tree/main/";
</script>

<template>
  <div class="border-b">
    <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
      <aside
        class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto"
      >
        <ScrollArea orientation="vertical" class="relative h-full py-6 pr-6 overflow-hidden lg:py-8" :type="'auto'">
          <div class="w-full">
            <div v-for="docsGroup in docsConfig.sidebarNav" :key="docsGroup.title" class="pb-4">
              <h4
                class="px-2 py-1 mb-1 text-sm font-semibold rounded-md"
              >
                {{ docsGroup.title }}
              </h4>

              <div
                v-for="doc in docsGroup.items "
                :key="doc.title"
                class="relative [&>a]:first:after:top-4 [&>a]:last:after:bottom-4"
              >
                <a
                  v-if="doc.href"
                  :disabled="doc.disabled"
                  :href="doc.href"
                  class="flex w-full items-center gap-2 rounded-md py-1 pl-9 pr-3 !outline-0 hover:bg-surface text-gray-500 hover:text-slate-600 focus-visible:bg-surface-50 focus-visible:text-slate-600 before:pointer-events-none before:absolute before:left-[9px] before:top-1/2 before:z-10 before:h-[5px] before:w-[5px] before:-translate-y-1/2 before:rounded-full after:absolute after:bottom-0 after:left-[11px] after:top-0 after:w-[1px] after:bg-gray-100 dark:after:bg-gray-800 before:bg-slate-300"
                  :class="{
                    '!font-medium !text-primary before:bg-primary': $route.path === `${doc.href}.html`,
                  }"
                >
                  {{ doc.title }}

                  <Badge v-if="doc.label" color="primary" size="sm" class="ml-2 no-underline group-hover:no-underline">
                    {{ doc.label }}
                  </Badge>
                </a>
              </div>
            </div>
          </div>
        </ScrollArea>
      </aside>

      <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_250px]">
        <div class="w-full min-w-0 mx-auto">
          <div class="block xl:hidden">
            <TableOfContentVue />
          </div>

          <div class="flex items-center mb-4 space-x-1 text-sm text-muted-foreground">
            <div class="overflow-hidden text-ellipsis whitespace-nowrap">
              Docs
            </div>
            <ChevronRightIcon class="w-4 h-4" />
            <div class="font-medium text-foreground">
              {{ frontmatter.title }}
            </div>
          </div>

          <div class="space-y-2">
            <h1 class="text-4xl font-bold tracking-tight scroll-m-20">
              {{ frontmatter.title }}
            </h1>
            <p class="text-lg text-muted-foreground">
              {{ frontmatter.description }}
            </p>
          </div>

          <div class="flex items-center pt-4 space-x-2">
            <a v-if="frontmatter.docs" :href="frontmatter.docs" target="_blank" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none border-transparent bg-surface text-foreground hover:bg-surface-100">
              <LinkIcon class="mr-1" />
              Docs
            </a>
            <a v-if="frontmatter.source" :href="sourceLink + frontmatter.source" target="_blank" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none border-transparent bg-surface text-foreground hover:bg-surface-100">
              <CodeIcon class="mr-1" />
              Component Source
            </a>
            <a v-if="frontmatter.primitive" :href="frontmatter.primitive" target="_blank" class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none border-transparent bg-surface text-foreground hover:bg-surface-100">
              Primitive API Reference
            </a>
          </div>

          <div class="vp-doc not-prose">
            <slot />
          </div>

          <EditLink />
        </div>

        <div class="hidden text-sm xl:block">
          <div class="sticky top-16 -mt-5 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
            <TableOfContentVue />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
