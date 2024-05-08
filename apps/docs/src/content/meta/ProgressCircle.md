<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'color',
    'description': '<p>The color of the progress circle.</p>\n',
    'type': '\'primary\' | \'green\' | \'yellow\' | \'red\' | \'purple\' | \'orange\' | \'pink\' | \'blue\' | \'secondary\'',
    'required': false,
    'default': '\'primary\''
  },
  {
    'name': 'disableAnimation',
    'description': '<p>If <code>true</code>, the progress bar CSS transition will be disabled.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>If <code>true</code>, the additional styles will be applied to indicate that the progress bar is disabled.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'getLabelValue',
    'description': '<p>A function to get the accessible label text representing the current value in a human-readable format.\nIf not provided, the value label will be read as the numeric value as a percentage of the max value.</p>\n',
    'type': '((value: number, max: number) => string)',
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
    'name': 'size',
    'description': '<p>The size of the progress circle.</p>\n',
    'type': '\'xs\' | \'sm\' | \'md\' | \'lg\' | \'xl\'',
    'required': false,
    'default': '\'md\''
  },
  {
    'name': 'value',
    'description': '<p>The progress value.</p>\n',
    'type': 'number',
    'required': false,
    'default': '0'
  }
]" />
