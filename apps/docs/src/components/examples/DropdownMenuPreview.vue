<script setup lang="ts">
import { DownloadIcon, EyeOffIcon, MailIcon, PinIcon, RedoIcon } from "@iconicicons/vue3";
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "wedges-vue";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button>Open Menu</Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem disabled>
          <RedoIcon />
          <span>Reply</span>
          <DropdownMenuShortcut :keys="['option']">
            R
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <PinIcon />
          <span>Pin</span>
          <DropdownMenuShortcut :keys="['option']">
            P
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem>
          <DownloadIcon />
          <span>Save this message</span>
          <DropdownMenuShortcut :keys="['command']">
            S
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <EyeOffIcon />
          <span>Mark as unread</span>
          <DropdownMenuShortcut :keys="['command', 'option']">
            U
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <MailIcon />
          <span>Share via email</span>
          <DropdownMenuShortcut :keys="['command']">
            U
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
