<script setup lang="ts">
import {
  BookmarkIcon,
  CheckIcon,
  CloseIcon,
  EmojiHappyIcon,
  FlagIcon,
  HashtagIcon,
  HeartIcon,
  LockIcon,
  MinusIcon,
  PinIcon,
  PlayIcon,
  ShieldTickIcon,
  SpinnerIcon,
  UndoIcon,
  WifiIcon,
} from "@iconicicons/vue3";
import { Avatar, Badge } from "wedges-vue";
</script>

<template>
  <div class="flex flex-col items-start gap-4 mx-auto max-w-fit">
    <div class="flex flex-wrap items-center justify-start gap-4">
      <Badge color="green" shape="pill">
        <template #before>
          <CheckIcon />
        </template>
        Paid
      </Badge>

      <Badge color="green" stroke>
        <template #before>
          <CheckIcon />
        </template>
        Active
      </Badge>

      <Badge color="green" shape="pill">
        <template #before>
          <CheckIcon />
        </template>
        Paid
      </Badge>

      <Badge color="green" stroke shape="pill">
        <template #before>
          <CheckIcon />
        </template>
        200
      </Badge>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Badge color="red" shape="pill">
        <template #before>
          <CloseIcon />
        </template>
        Rejected
      </Badge>

      <Badge color="red" stroke>
        <template #before>
          <CloseIcon />
        </template>
        Chargeback
      </Badge>

      <Badge color="red" shape="pill" stroke>
        <template #before>
          <MinusIcon />
        </template>
        Disconnected
      </Badge>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Badge shape="pill">
        <template #before>
          <CloseIcon />
        </template>
        Void
      </Badge>

      <Badge stroke>
        <template #before>
          <CloseIcon />
        </template>
        Expired
      </Badge>

      <Badge>
        <template #before>
          <CloseIcon />
        </template>
        Draft
      </Badge>

      <Badge shape="pill" stroke>
        <template #before>
          <svg class="text-wg-green" fill="none" height="24" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" r="4" fill="currentColor" />
          </svg>
        </template>
        Online
      </Badge>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Badge color="blue" shape="pill">
        <template #before>
          <SpinnerIcon />
        </template>
        Processing
      </Badge>

      <Badge color="blue" stroke>
        <template #before>
          <FlagIcon />
        </template>
        Flagged
      </Badge>

      <Badge color="blue" shape="pill" stroke>
        Washington D.C.
      </Badge>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Badge color="pink" shape="pill">
        Special
      </Badge>

      <Badge color="pink" stroke>
        Trial
      </Badge>

      <Badge color="pink">
        <template #before>
          <BookmarkIcon />
        </template>
        Bookmarked
      </Badge>

      <Badge color="pink" shape="pill" stroke>
        <template #before>
          <HashtagIcon />
        </template>
        Live
      </Badge>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Badge color="yellow" shape="pill">
        <template #before>
          <UndoIcon />
        </template>
        Moved
      </Badge>

      <Badge color="yellow" stroke>
        New
      </Badge>

      <Badge color="yellow">
        <template #before>
          <ShieldTickIcon />
        </template>
        Secure
      </Badge>

      <Badge color="yellow" shape="pill" stroke>
        <template #before>
          <LockIcon />
        </template>
        Locked
      </Badge>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Badge color="orange" shape="pill">
        Beta
      </Badge>

      <Badge color="orange" stroke>
        <template #before>
          <EmojiHappyIcon />
        </template>
        Hello!
      </Badge>

      <Badge color="orange">
        <template #before>
          <PlayIcon />
        </template>
        1m 30s
      </Badge>

      <Badge color="orange" shape="pill" stroke>
        <template #before>
          <PinIcon />
        </template>
        Pinned
      </Badge>

      <Badge color="orange" shape="pill" stroke>
        4
      </Badge>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-4">
      <Badge color="primary" shape="pill">
        <template #before>
          <HeartIcon />
        </template>
        Design Systems
      </Badge>

      <Badge color="primary" shape="pill">
        <template #before>
          <Avatar size="xxs" src="https://github.com/ormanclark.png" />
        </template>
        @ormanclark
      </Badge>

      <Badge color="primary" shape="pill">
        <template #before>
          <WifiIcon />
        </template>
        Free Wi-Fi
      </Badge>
    </div>
  </div>
</template>
