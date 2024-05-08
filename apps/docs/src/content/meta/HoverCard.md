<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'closeDelay',
    'description': '<p>The duration from when the mouse leaves the trigger or content until the hover card closes.</p>\n',
    'type': 'number',
    'required': false
  },
  {
    'name': 'defaultOpen',
    'description': '<p>The open state of the hover card when it is initially rendered. Use when you do not need to control its open state.</p>\n',
    'type': 'false',
    'required': false
  },
  {
    'name': 'open',
    'description': '<p>The controlled open state of the hover card. Can be binded as <code>v-model:open</code>.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'openDelay',
    'description': '<p>The duration from when the mouse enters the trigger until the hover card opens.</p>\n',
    'type': 'number',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:open',
    'description': '',
    'type': '[value: boolean]'
  }
]" />
