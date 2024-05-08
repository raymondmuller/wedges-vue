---
title: Default Themes
description: Adding dark and light themes to your application.
breadcrumbs:
  - Theming
---

Wedges supports dark and light themes out of the box. By default, the light theme is applied if no specific theme classes are added. The default theme can be changed with <a href="/theming/tailwind-css-plugin/#configuration">wedgesTW configuration</a>.

### Using Default Themes

To apply a dark theme, simply add the `dark` class to a parent element, usually the `html` or `body`. For other themes, add the appropriate class, like `light` for light theme.

```html showLineNumbers /dark/
<html class="dark">
  ...
</html>
```

This approach enables the dark theme for the entire app. To apply different themes to individual sections, add the corresponding theme class to each section's container.

```html showLineNumbers /dark/ /light/ /orange-blue/
<html class="dark">
  ...
  <div class="light">...</div>
  <div class="orange-blue">...</div>
  <!-- custom theme -->
</html>
```

### Customization

<!-- See <a href="/theming/color-system/#customization-1">Colors Customization</a>. -->

### Theme Switching

If you need to toggle between different themes consider using a theme switching library, or a custom solution for this functionality.

#### Switcher Examples

The following examples show how you could use Wedges components to create a theme switcher component.

<ComponentPreview name="ThemingDarkMode" />
