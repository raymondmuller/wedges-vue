<script setup lang="ts">
import { ArrowUpRightIcon, CheckIcon, EmojiSadIcon } from "@iconicicons/vue3";
import { Alert, Button } from "wedges-vue";
</script>

<template>
  <div class="flex flex-col gap-6">
    <!--  Example 1 -->
    <Alert color="success" title="Successfully uploaded!" closable>
      <template #before>
        <CheckIcon />
      </template>
    </Alert>

    <!--  Example 2 -->
    <Alert
      title="You have no credits left!"
      color="warning"
    >
      Upgrade to continue.
      <template #after>
        <Button
          variant="link"
          class="text-inherit hover:text-surface-900 dark:text-wg-yellow-500 dark:hover:text-yellow-300"
        >
          Upgrade
        </Button>
      </template>
    </Alert>

    <!--  Example 3 -->
    <Alert
      color="error"
      title="There was a problem with your submission"
      variant="expanded"
    >
      <template #before>
        <EmojiSadIcon />
      </template>
      <div>
        <p>Must include at least 1 number</p>
        <p>Must include at least 2 uppercase letters</p>
      </div>
    </Alert>

    <!-- Example 4 -->
    <Alert
      title="A new software update is available. See what's new."
      closable
      color="info"
      variant="expanded"
    >
      <template #after>
        <Button
          variant="outline"
          class="light:bg-white"
          size="sm"
        >
          View the changelog
          <template #after>
            <ArrowUpRightIcon />
          </template>
        </Button>
      </template>
    </Alert>
  </div>
</template>
