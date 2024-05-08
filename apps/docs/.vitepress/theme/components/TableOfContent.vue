<script setup lang="ts">
import { onContentUpdated } from "vitepress";
import { shallowRef } from "vue";
import { buttonVariants } from "wedges-vue";
import type { TableOfContents, TableOfContentsItem } from "../types/docs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ScrollArea } from "./ui/scroll-area";

import TableOfContentTree from "./TableOfContentTree.vue";

const headers = shallowRef<TableOfContents>();

function getHeadingsWithHierarchy(divId: string) {
  const div = document.querySelector(divId);
  if (!div)
    return { items: [] };

  const headings: HTMLHeadingElement[] = Array.from(
    div.querySelectorAll("h2, h3"),
  );
  const hierarchy: TableOfContents = { items: [] };
  let currentLevel: TableOfContentsItem | undefined;

  headings.forEach((heading: HTMLHeadingElement) => {
    const level = Number.parseInt(heading.tagName.charAt(1));
    if (!heading.id) {
      const newId = heading.textContent?.replaceAll(/[^a-zA-Z0-9 ]/g, "").replaceAll(" ", "-").toLowerCase();
      heading.id = `${newId}`;
    }

    const item: TableOfContentsItem = {
      title: heading.textContent || "",
      url: `#${heading.id}`,
      items: [],
    };

    if (level === 2) {
      hierarchy.items.push(item);
      currentLevel = item;
    }
    else if (level === 3 && currentLevel?.items) {
      currentLevel.items.push(item);
    }
    else {
      hierarchy.items.push(item);
    }
  });
  return hierarchy;
}

onContentUpdated(() => {
  headers.value = getHeadingsWithHierarchy(".vp-doc");
});
</script>

<template>
  <template v-if="headers?.items.length">
    <div class="hidden xl:block">
      <ScrollArea orientation="vertical" class="h-[calc(100vh-6.5rem)] z-30 md:block overflow-y-auto" type="hover">
        <div class="space-y-2">
          <p class="font-medium">
            On This Page
          </p>
          <TableOfContentTree :tree="headers" :level="1" />
        </div>
      </ScrollArea>
    </div>

    <div class="block mb-6 xl:hidden">
      <Collapsible>
        <CollapsibleTrigger :class="buttonVariants({ variant: 'outline' })">
          On This Page
        </CollapsibleTrigger>
        <CollapsibleContent class="pl-4 mt-4 text-sm border-l">
          <TableOfContentTree :tree="headers" :level="1" />
        </CollapsibleContent>
      </Collapsible>
    </div>
  </template>
</template>
