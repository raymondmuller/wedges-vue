---
title: Alert
description: Displays a callout for user attention.
---

<ComponentPreview name="AlertPreview"  />

## Usage

```vue
<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "wedges-vue";
</script>

<template>
  <Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
</template>
```
## API Reference
### Props
<!-- @include: ../../meta/Alert.md -->

### Slots
<SlotsTable :data="[
  {
    'name': 'default',
    'description': 'Is the alert closable? If true, a close button will be displayed and when clicked on it will hide the alert element.',
  },
  {
    'name': 'before',
    'description': 'Render something before the alert description.',
  },
  {
    'name': 'after',
    'description': 'Render something after the alert description.',
  },
]" />

### Emits
<EmitsTable :data="[
  {
    'name': 'close',
    'description': 'If the alert is closable, you can use this to trigger a function when the alert gets closed.'
  }
]" />

## Examples

### Default
<ComponentPreview name="AlertExampleOne"  />
### Destructive

<ComponentPreview name="AlertExampleTwo"  />
