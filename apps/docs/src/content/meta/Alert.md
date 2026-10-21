<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'closable',
    'description': '<p>Is the alert closable? If true, a close icon will be displayed.\nIs the alert closable? If true, a close button will be displayed and\nwhen clicked on it will hide the alert element</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'color',
    'description': '',
    'type': '\'gray\' | \'primary\' | \'info\' | \'success\' | \'error\' | \'warning\' | null',
    'required': false
  },
  {
    'name': 'onClose',
    'description': '<p>An optional callback function to be called when the close icon is clicked.\nThis can be used to handle the removal of the tag.\nIf provided, the close icon will be displayed.</p>\n',
    'type': '((e: MouseEvent) => void) | (((e: MouseEvent) => void) & ((e: MouseEvent) => void))',
    'required': false
  },
  {
    'name': 'title',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'variant',
    'description': '',
    'type': '\'inline\' | \'expanded\' | null',
    'required': false,
    'default': '\'inline\''
  }
]" />
