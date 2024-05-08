---
title: Dropdown Menu
description: Displays a menu to the user — such as a set of actions or functions — triggered by a button.
source: packages/wedges-vue/src/components/dropdown-menu
primitive: https://www.radix-vue.com/components/dropdown-menu.html
---

<ComponentPreview name="DropdownMenuPreview" />

## Usage

```vue
<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "wedges-vue";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>Open</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
```

### API Reference

<br/>

#### DropdownMenu

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#root" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Root</a> primitive.

#### DropdownMenuTrigger

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#trigger" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Trigger</a> primitive.

#### DropdownMenuPortal

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#portal" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Portal</a> primitive.

#### DropdownMenuContent

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#content" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Content</a> primitive with custom configuration.

#### DropdownMenuItem

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#item" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Item</a> primitive with custom configuration.

#### DropdownMenuGroup

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#group" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Group</a> primitive.

#### DropdownMenuLabel

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#label" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Label</a> primitive with custom styling.

#### DropdownMenuCheckboxItem

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#checkboxitem" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Checkbox Item</a> primitive with custom configuration.

#### DropdownMenuRadioGroup

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#radiogroup" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Radio Group</a> primitive.

#### DropdownMenuRadioItem

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#radioitem" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Radio Item</a> primitive with custom configuration.

#### DropdownMenuSeparator

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#separator" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Radio Separator</a> primitive with custom styling.

#### DropdownMenuSub

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#sub" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu Sub</a> primitive with custom configuration.

#### DropdownMenuSubTrigger

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#subtrigger" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu SubTrigger</a> primitive with custom configuration.

#### DropdownMenuSubContent

Extends the <a href="https://www.radix-vue.com/components/dropdown-menu#subcontent" target="_blank" rel='nofollow noreferrer'>Radix Dropdown Menu SubContent</a> primitive with custom configuration.

## Examples

<ComponentPreview name="DropdownMenuExampleOne" />

<ComponentPreview name="DropdownMenuExampleTwo" />
