---
title: Installation
description: How to install dependencies and structure your app.
---

Straightforward setup guides are available for popular frameworks, as well as a manual installation guide suitable for any framework that supports Vue and Tailwind CSS.

<script setup>
  import { Tooltip } from "wedges-vue"
 </script>

<div class='grid grid-cols-2 md:grid-cols-3 mt-[3em] gap-4'>

<LinkCard href="/docs/installation/default">
    <Logomark class='-mx-2 size-10' aria-label="Manual"/>
    <p class='font-medium flex items-center gap-1 text-sm'>
        <span>Default</span>
        <Tooltip content="For any setup with Vue + Tailwind CSS."/>
    </p>
</LinkCard>

<LinkCard href="/docs/installation/laravel">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Laravel Logo" class="h-10">
  <p class='font-medium text-sm'>Laravel</p>
</LinkCard>

</div>
