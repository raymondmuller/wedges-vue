<script setup lang="ts">
import { BellIcon, BookIcon, ChevronDownIcon, HelpCircleIcon, LockIcon, LogOutIcon, MoonIcon, SettingsIcon, UserIcon } from "@iconicicons/vue3";
import { ref } from "vue";
import { Avatar, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, Switch } from "wedges-vue";

const darkMode = ref(false);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
}
</script>

<template>
  <div class="flex items-center justify-center">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <span class="group flex shrink cursor-pointer select-none items-center justify-center gap-1 rounded-lg p-1.5 px-2 text-sm text-surface-600 transition-colors duration-100 wg-antialiased hover:bg-surface dark:hover:bg-white/5">
          <Avatar
            size="xs"
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&h=250&auto=format&fit=crop&crop=face"
            status="green"
          />

          <span class=" ms-2 flex flex-col">
            <span class="font-medium">John Doe</span>
          </span>

          <ChevronDownIcon class="trigger-icon h-5 w-5 text-surface-400" />
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" class="min-w-[140px]">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            <span>Account</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SettingsIcon />
            <span>Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <LockIcon />
            <span>Privacy</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <BellIcon />
            <span>Notifications</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BookIcon />
            <span>Help Guide</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <HelpCircleIcon />
            <span>Help Center</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem
            @select.prevent="toggleDarkMode"
          >
            <MoonIcon />
            <span>Dark Mode</span>
            <Switch :checked="darkMode" class="pointer-events-none ml-2" />
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LogOutIcon />
            <span>Log Out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
