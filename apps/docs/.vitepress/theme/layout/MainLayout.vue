<script setup lang="ts">
import { useMagicKeys } from "@vueuse/core";
import { Content, useRoute, useRouter } from "vitepress";
import { ref, watch } from "vue";
import { Button } from "wedges-vue";
import Logo from "../components/Logo.vue";
import MobileNav from "../components/MobileNav.vue";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "../components/ui/command";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Toaster as DefaultToaster, Toaster as NewYorkSonner, Toaster as NewYorkToaster } from "../components/ui/toast";
import { type NavItem, docsConfig } from "../config/docs";

import Kbd from "../components/Kbd.vue";

import SimpleIconsGithubLogo from "~icons/simple-icons/github";
import SimpleIconsTwitterLogo from "~icons/simple-icons/x";

import Circle from "~icons/radix-icons/circle";
import File from "~icons/radix-icons/file";

defineOptions({
  inheritAttrs: false,
});

const $route = useRoute();
const $router = useRouter();

const links = [
  {
    name: "GitHub",
    href: "https://github.com/raymondmuller/wedges-vue",
    icon: SimpleIconsGithubLogo,
  },
  {
    name: "X",
    href: "https://twitter.com/raymondmuller",
    icon: SimpleIconsTwitterLogo,
  },
];

const isOpen = ref(false);

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey))
      e.preventDefault();
  },
});

watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1])
    isOpen.value = true;
});

function handleSelectLink(item: NavItem) {
  if (item.external)
    window.open(item.href, "_blank");
  else
    $router.go(item.href);

  isOpen.value = false;
}

watch(() => $route.path, (_) => {
  // @ts-expect-error View Transition API not supported by all the browser yet
  if (document.startViewTransition) {
    // @ts-expect-error View Transition API not supported by all the browser yet
    document.startViewTransition(() => {
    });
  }
});
</script>

<template>
  <div v-if="$route.data.frontmatter.layout === false">
    <Content :key="$route.path" />
  </div>
  <div v-else class="flex flex-col min-h-screen bg-background">
    <header class="sticky top-0 z-40 border-b bg-primary-600 backdrop-blur-lg border-border">
      <div
        class="container min-h-[72px] gap-6 md:grid md:min-h-[88px] md:grid-cols-[1fr_auto_1fr] mx-auto flex items-center h-14 max-w-screen-xl"
      >
        <div class="hidden mr-4 md:mr-1 md:flex">
          <Logo />
        </div>

        <div>
          <nav
            class="flex items-center space-x-6 text-sm font-medium max-lg:space-x-4"
          >
            <a
              v-for="route in docsConfig.mainNav"
              :key="route.title"
              :href="route.href"
              :target="route.external ? '_target' : undefined"
              class="transition-colors hover:text-white/80 text-white/70"
              :class="{
                'font-semibold !text-white': $route.path === `${route.href}.html`,
                'hidden lg:block': route?.href?.includes('github'),
              }"
            >
              {{ route.title }}
            </a>
          </nav>
        </div>
        <MobileNav />

        <div class="flex items-center justify-between flex-1 space-x-2 md:justify-end">
          <div class="flex-1 w-full md:w-auto md:flex-none">
            <Button
              variant="tertiary"
              class="relative h-8 w-full justify-start sm:pr-12 md:w-40 lg:w-64"
              @click="isOpen = true"
            >
              <span class="hidden lg:inline-flex">Search documentation...</span>
              <span class="inline-flex lg:hidden">Search...</span>
              <Kbd class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span class="text-xs">⌘</span>K
              </Kbd>
            </Button>
          </div>

          <nav class="flex items-center text-white">
            <Button
              v-for="link in links"
              :key="link.name"
              as="a"
              class="w-9 h-9"
              :href="link.href" target="_blank"
              variant="link"
              size="xs-icon"
            >
              <component :is="link.icon" class="size-5 text-white" />
            </Button>
          </nav>
        </div>
      </div>
    </header>

    <div class="flex-1 bg-background max-w-screen-xl mx-auto w-full">
      <Transition name="fade" mode="out-in">
        <component :is="'docs'" v-if="$route.path.includes('docs')">
          <Transition name="fade" mode="out-in">
            <Content :key="$route.path" />
          </Transition>
        </component>
        <component :is="'examples'" v-else-if="$route.path.includes('examples')">
          <Transition name="fade" mode="out-in">
            <Content :key="$route.path" />
          </Transition>
        </component>
        <component :is="$route.data.frontmatter.layout" v-else-if="$route.data.frontmatter.layout">
          <slot />
        </component>
        <main v-else class="container">
          <Transition name="fade" mode="out-in">
            <Content :key="$route.path" />
          </Transition>
        </main>
      </Transition>
    </div>

    <footer class="py-6 md:px-8 md:py-0">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div class="text-sm leading-loose text-center text-muted-foreground md:text-left">
          <span class="inline-block">
            Built and designed by
            <a
              href="https://lemonsqueezy.com"
              target="_blank"
              class="font-bold underline underline-offset-4 decoration-foreground"
            >
              lemon squeezy
            </a>
          </span>
          <span class="ml-0.5"> . </span>
          <span class="inline-block ml-2">
            Ported to Vue by
            <a
              href="https://twitter.com/raymondmuller"
              target="_blank"
              class="font-bold underline underline-offset-4 decoration-foreground"
            >
              raymondmuller
            </a>
          </span>
          <span class="ml-0.5"> . </span>
          <span class="inline-block ml-2">
            The code source is available on
            <a
              href="https://github.com/raymondmuller/wedges-vue"
              target="_blank"
              class="font-bold underline underline-offset-4 decoration-foreground"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>

    <Dialog v-model:open="isOpen">
      <DialogContent class="p-0">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandEmpty>
            No results found.
          </CommandEmpty>
          <CommandList
            @escape-key-down=" isOpen = false"
          >
            <CommandGroup heading="Links">
              <CommandItem
                v-for="item in docsConfig.mainNav"
                :key="item.title"
                :heading="item.title"
                :value="item.title"
                class="py-3"
                @select="handleSelectLink(item)"
              >
                <File class="w-5 h-5 mr-2" />
                <span>{{ item.title }}</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup v-for="item in docsConfig.sidebarNav" :key="item.title" :heading="item.title">
              <CommandItem
                v-for="subItem in item.items"
                :key="subItem.title"
                :heading="subItem.title"
                :value="subItem.title"
                class="py-3"
                @select="
                  handleSelectLink(subItem)"
              >
                <Circle class="w-4 h-4 mr-2" />
                <span>{{ subItem.title }}</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
    <DefaultToaster />
    <NewYorkSonner :theme="'system'" />
    <NewYorkToaster />
  </div>
</template>
