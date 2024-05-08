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
    'name': 'disableOutsidePointerEvents',
    'description': '<p>When <code>true</code>, hover/focus/click interactions will be disabled on elements outside\nthe <code>DismissableLayer</code>. Users will need to click twice on outside elements to\ninteract with them: once to close the <code>DismissableLayer</code>, and again to trigger the element.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'forceMount',
    'description': '<p>Used to force mounting when more control is needed. Useful when\ncontrolling animation with Vue animation libraries.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'trapFocus',
    'description': '<p>When <code>true</code>, focus cannot escape the <code>Content</code> via keyboard,\npointer, or a programmatic focus.</p>\n',
    'type': 'boolean',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'closeAutoFocus',
    'description': '',
    'type': '[event: Event]'
  },
  {
    'name': 'escapeKeyDown',
    'description': '',
    'type': '[event: KeyboardEvent]'
  },
  {
    'name': 'focusOutside',
    'description': '',
    'type': '[event: FocusOutsideEvent]'
  },
  {
    'name': 'interactOutside',
    'description': '',
    'type': '[event: PointerDownOutsideEvent | FocusOutsideEvent]'
  },
  {
    'name': 'openAutoFocus',
    'description': '',
    'type': '[event: Event]'
  },
  {
    'name': 'pointerDownOutside',
    'description': '',
    'type': '[event: PointerDownOutsideEvent]'
  }
]" />
