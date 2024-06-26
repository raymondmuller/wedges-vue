<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'defaultOpen',
    'description': '<p>The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'dir',
    'description': '<p>The reading direction of the combobox when applicable.</p>\n<p>If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n',
    'type': '\'ltr\' | \'rtl\'',
    'required': false
  },
  {
    'name': 'modal',
    'description': '<p>The modality of the dropdown menu.</p>\n<p>When set to <code>true</code>, interaction with outside elements will be disabled and only menu content will be visible to screen readers.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'open',
    'description': '<p>The controlled open state of the menu. Can be used as <code>v-model:open</code>.</p>\n',
    'type': 'boolean',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:open',
    'description': '',
    'type': '[payload: boolean]'
  }
]" />
