<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'afterIndicator',
    'description': '<p>A string to be rendered after the indicator.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'color',
    'description': '<p>The color of the progress bar.</p>\n',
    'type': '\'primary\' | \'green\' | \'yellow\' | \'red\' | \'purple\' | \'orange\' | \'pink\' | \'blue\' | \'secondary\' | null',
    'required': false,
    'default': '\'primary\''
  },
  {
    'name': 'description',
    'description': '<p>The description to be rendered below the label.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'disableAnimation',
    'description': '<p>If <code>true</code>, the progress bar CSS transition will be disabled.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>If <code>true</code>, the progress bar will be disabled.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'getValueLabel',
    'description': '<p>A function to get the accessible label text representing the current value in a human-readable format.</p>\n<p>If not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\n',
    'type': '((value: number, max: number) => string)',
    'required': false
  },
  {
    'name': 'helperText',
    'description': '<p>Additional text or information to guide the user. This can be an instruction,\na hint, or any other supplementary information. It is rendered below label.\nThe helper text to be rendered below the progress bar.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'id',
    'description': '<p>The id of the progress bar.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'indicator',
    'description': '<p>The indicator to be rendered to the right of the progress bar.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'label',
    'description': '<p>Main label displayed above radio buttons. As a prop you will need to pass it as a string.\nIf you want to render an element or any other renderable node, you will need to use the named slot.\nThe label to be rendered above the progress bar.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'max',
    'description': '<p>The maximum progress value.</p>\n',
    'type': 'number',
    'required': false,
    'default': '100'
  },
  {
    'name': 'tooltip',
    'description': '<p>Tooltip displayed next to the label. As a prop you will need to pass it as a string.\nIf you want to render an element or any other renderable node, you will need to use the named slot.\nThe tooltip to be rendered on the label.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'value',
    'description': '<p>The progress value.</p>\n',
    'type': 'number | null',
    'required': true,
    'default': 'null'
  },
  {
    'name': 'variant',
    'description': '<p>The variant of the progress bar.</p>\n',
    'type': '\'inline\' | \'default\' | null',
    'required': false,
    'default': '\'default\''
  }
]" />
