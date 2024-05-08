<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'after',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'as',
    'description': '<p>The element or component this component should render as. Can be overwrite by <code>asChild</code></p>\n',
    'type': 'AsTag | Component',
    'required': false,
    'default': '\'div\''
  },
  {
    'name': 'before',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'defaultValue',
    'description': '<p>The value of the slider when initially rendered. Use when you do not need to control the state of the slider.</p>\n',
    'type': 'number[]',
    'required': false
  },
  {
    'name': 'description',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'dir',
    'description': '<p>The reading direction of the combobox when applicable. &lt;br&gt; If omitted, inherits globally from <code>DirectionProvider</code> or assumes LTR (left-to-right) reading mode.</p>\n',
    'type': '\'ltr\' | \'rtl\'',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>When <code>true</code>, prevents the user from interacting with the slider.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'helperText',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'id',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'inverted',
    'description': '<p>Whether the slider is visually inverted.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'label',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'max',
    'description': '<p>The maximum value for the range.</p>\n',
    'type': 'number',
    'required': false
  },
  {
    'name': 'min',
    'description': '<p>The minimum value for the range.</p>\n',
    'type': 'number',
    'required': false
  },
  {
    'name': 'minStepsBetweenThumbs',
    'description': '<p>The minimum permitted steps between multiple thumbs.</p>\n',
    'type': 'number',
    'required': false
  },
  {
    'name': 'modelValue',
    'description': '<p>The controlled value of the slider. Can be bind as <code>v-model</code>.</p>\n',
    'type': 'number[]',
    'required': false
  },
  {
    'name': 'name',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'orientation',
    'description': '<p>The orientation of the slider.</p>\n',
    'type': '\'horizontal\' | \'vertical\'',
    'required': false
  },
  {
    'name': 'renderTooltip',
    'description': '<p>Tooltip render function.</p>\n',
    'type': '((value: number) => string)',
    'required': false
  },
  {
    'name': 'required',
    'description': '',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'showTooltip',
    'description': '<p>Should tooltip be shown always, when hoverign, or never.</p>\n',
    'type': '\'always\' | \'hover\' | \'never\'',
    'required': false
  },
  {
    'name': 'step',
    'description': '<p>The stepping interval.</p>\n',
    'type': 'number',
    'required': false
  },
  {
    'name': 'tooltip',
    'description': '',
    'type': 'string',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '',
    'type': '[payload: number[]]'
  },
  {
    'name': 'valueCommit',
    'description': '',
    'type': '[payload: number[]]'
  }
]" />
