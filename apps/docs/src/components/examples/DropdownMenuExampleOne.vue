<script setup lang="ts">
import { DotsHorizontalIcon } from "@iconicicons/vue3";
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "wedges-vue";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button is-icon-only size="sm" variant="tertiary">
        <DotsHorizontalIcon />
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end" side="top">
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <span>Bold</span>
          <DropdownMenuShortcut :keys="['command']">
            B
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <span>Italic</span>
          <DropdownMenuShortcut :keys="['command']">
            I
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <span>Underline</span>
          <DropdownMenuShortcut :keys="['command']">
            U
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <span>Strikethrough</span>
          <DropdownMenuShortcut :keys="['command', 'option']">
            X
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <span>Create link</span>
          <DropdownMenuShortcut :keys="['command']">
            K
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem>
          <span>Bulleted list</span>
          <DropdownMenuShortcut :keys="['shift', 'command']">
            8
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <span>Numbered list</span>
          <DropdownMenuShortcut :keys="['command']">
            7
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
