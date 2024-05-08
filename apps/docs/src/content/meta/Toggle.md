<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'div\''
  },
  {
    'name': 'asChild',
    'description': '<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href=\'https://www.radix-vue.com/guides/composition.html\'>Composition</a> guide for more details.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'defaultValue',
    'description': '<p>The pressed state of the toggle when it is initially rendered. Use when you do not need to control its open state.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'destructive',
    'description': '<p>Specifies whether this button has a destructive action.\nIf <code>true</code>, the button should be styled differently to indicate that it will perform a destructive action.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>When <code>true</code>, prevents the user from interacting with the toggle.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'isIconOnly',
    'description': '',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'pressed',
    'description': '<p>The controlled pressed state of the toggle. Can be bind as <code>v-model</code>.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'shape',
    'description': '',
    'type': '\'rounded\' | \'pill\' | null',
    'required': false,
    'default': '\'rounded\''
  },
  {
    'name': 'size',
    'description': '',
    'type': '\'sm\' | \'md\' | \'xs-icon\' | null',
    'required': false,
    'default': '\'md\''
  },
  {
    'name': 'variant',
    'description': '',
    'type': '\'outline\' | \'transparent\'',
    'required': false,
    'default': '\'outline\''
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:pressed',
    'description': '',
    'type': '[value: boolean]'
  }
]" />
