<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'alignOffset',
    'description': '<p>The offset of the tooltip arrow from the edge of the tooltip</p>\n',
    'type': 'number',
    'required': false,
    'default': '-12'
  },
  {
    'name': 'animation',
    'description': '<p>Whether to animate the tooltip when it opens/closes</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'true'
  },
  {
    'name': 'arrow',
    'description': '<p>Whether to show an arrow pointing to the target element</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'true'
  },
  {
    'name': 'arrowPadding',
    'description': '<p>The offset of the tooltip arrow from the edge of the tooltip</p>\n',
    'type': 'number',
    'required': false,
    'default': '12'
  },
  {
    'name': 'collisionPadding',
    'description': '<p>The offset of the tooltip arrow from the edge of the tooltip</p>\n',
    'type': 'number | Partial<Record<\'top\' | \'right\' | \'bottom\' | \'left\', number>>',
    'required': false,
    'default': '12'
  },
  {
    'name': 'color',
    'description': '<p>The color of the tooltip</p>\n',
    'type': '\'primary\' | \'secondary\' | \'soft\' | null',
    'required': false
  },
  {
    'name': 'content',
    'description': '<p>The content to display inside the tooltip</p>\n',
    'type': 'any',
    'required': true
  },
  {
    'name': 'sideOffset',
    'description': '<p>The offset of the tooltip arrow from the edge of the tooltip</p>\n',
    'type': 'number',
    'required': false,
    'default': '2'
  },
  {
    'name': 'size',
    'description': '<p>The size of the tooltip</p>\n',
    'type': '\'sm\' | \'md\' | null',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'escapeKeyDown',
    'description': '',
    'type': '[event: KeyboardEvent]'
  },
  {
    'name': 'pointerDownOutside',
    'description': '',
    'type': '[event: Event]'
  }
]" />
