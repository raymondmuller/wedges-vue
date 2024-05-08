<PropsTable hide-required :data="[
  {
    'name': 'fontSmooth',
    'description': 'Font smoothing of Wedges components',
    'type': `'antialiased' | 'inherit'`,
    'default': 'antialiased',
  },
  {
    name: 'prefix',
    description: 'The prefix for Wedges CSS variables',
    type: 'string',
    default: 'wg',
  },
  {
    name: 'themes',
    description: 'Themes configuration',
    type: 'ConfigThemes',
    default: '{}'
  },
  {
    name: 'defaultTheme',
    description: 'The default theme to use. Any key of a theme defined in the `wedgesTW` plugin or `light` or `dark`',
    type: 'DefaultThemeType',
    default: 'light'
  },
  {
    name: 'defaultExtendTheme',
    description: 'The default theme to extend when creating a new theme',
    type: `'light'|'dark'`,
    default: 'light'
  }
  ]"
/>
