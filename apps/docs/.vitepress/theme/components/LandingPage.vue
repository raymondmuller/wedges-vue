<script setup lang="ts">
import { buttonVariants } from "wedges-vue";
import { cn } from "wedges-vue/utils";
import Announcement from "../components/Announcement.vue";
import PageAction from "../components/PageAction.vue";
import PageHeader from "../components/PageHeader.vue";
import PageHeaderDescription from "../components/PageHeaderDescription.vue";
import PageHeaderHeading from "../components/PageHeaderHeading.vue";
import GitHubIcon from "~icons/radix-icons/github-logo";
</script>

<template>
  <PageHeader class="page-header pb-8">
    <Announcement />
    <PageHeaderHeading>Wedges</PageHeaderHeading>
    <PageHeaderDescription>
      An ever-expanding, open-source Vue UI library built with the Wedges Design System, Radix primitives, and Tailwind CSS.
    </PageHeaderDescription>

    <PageAction>
      <a
        href="/docs/introduction"
        :class="cn(buttonVariants(), 'rounded-[6px]')"
      >
        Get Started
      </a>
      <a
        href="https://github.com/raymondmuller/wedges-vue"
        target="_blank"
        :class="cn(
          buttonVariants({ variant: 'outline' }),
          'rounded-[6px]',
        )"
      >
        <GitHubIcon class="mr-2 h-4 w-4" />
        GitHub
      </a>
    </PageAction>
  </PageHeader>
  <section class="space-y-8 overflow-hidden rounded-lg border-2 border-primary dark:border-muted">
    <img priority src="/images/banner.webp" :width="616" height="411" alt="Wedges banner" class="block w-full rounded-lg object-cover border border-surface-100">
  </section>
</template>
