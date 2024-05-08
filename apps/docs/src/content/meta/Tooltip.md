<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'align',
    'description': '<p>The preferred alignment against the trigger.\nMay change when collisions occur.</p>\n',
    'type': '\'start\' | \'center\' | \'end\'',
    'required': false
  },
  {
    'name': 'alignOffset',
    'description': '<p>An offset in pixels from the <code>start</code> or <code>end</code> alignment options.</p>\n',
    'type': 'number',
    'required': false
  },
  {
    'name': 'ariaLabel',
    'description': '<p>By default, screenreaders will announce the content inside\nthe component. If this is not descriptive enough, or you have\ncontent that cannot be announced, use aria-label as a more\ndescriptive label.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'arrowPadding',
    'description': '<p>The padding between the arrow and the edges of the content.\nIf your content has border-radius, this will prevent it from\noverflowing the corners.</p>\n',
    'type': 'number',
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
    'name': 'asChild',
    'description': '<p>Change the default rendered element for the one passed as a child, merging their props and behavior.</p>\n<p>Read our <a href=\'https://www.radix-vue.com/guides/composition.html\'>Composition</a> guide for more details.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'avoidCollisions',
    'description': '<p>When <code>true</code>, overrides the side andalign preferences\nto prevent collisions with boundary edges.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'collisionBoundary',
    'description': '<p>The element used as the collision boundary. By default\nthis is the viewport, though you can provide additional\nelement(s) to be included in this check.</p>\n',
    'type': 'Element | (Element | null)[] | null',
    'required': false
  },
  {
    'name': 'collisionPadding',
    'description': '<p>The distance in pixels from the boundary edges where collision\ndetection should occur. Accepts a number (same for all sides),\nor a partial padding object, for example: { top: 20, left: 20 }.</p>\n',
    'type': 'number | Partial<Record<\'top\' | \'right\' | \'bottom\' | \'left\', number>>',
    'required': false
  },
  {
    'name': 'color',
    'description': '',
    'type': '\'primary\' | \'secondary\' | \'soft\'',
    'required': false,
    'default': '\'primary\''
  },
  {
    'name': 'content',
    'description': '',
    'type': 'string',
    'required': false
  },
  {
    'name': 'defaultOpen',
    'description': '<p>The open state of the tooltip when it is initially rendered.\nUse when you do not need to control its open state.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'delayDuration',
    'description': '<p>Override the duration given to the <code>Provider</code> to customise\nthe open delay for a specific tooltip.</p>\n',
    'type': 'number',
    'required': false,
    'default': '200'
  },
  {
    'name': 'disableClosingTrigger',
    'description': '<p>When <code>true</code>, clicking on trigger will not close the content.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'disabled',
    'description': '<p>When <code>true</code>, disable tooltip</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'disableHoverableContent',
    'description': '<p>Prevents Tooltip.Content from remaining open when hovering.\nDisabling this has accessibility consequences. Inherits\nfrom Tooltip.Provider.</p>\n',
    'type': 'boolean',
    'required': false,
    'default': 'false'
  },
  {
    'name': 'hideWhenDetached',
    'description': '<p>Whether to hide the content when the trigger becomes fully occluded.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'ignoreNonKeyboardFocus',
    'description': '<p>Prevent the tooltip from opening if the focus did not come from\nthe keyboard by matching against the <code>:focus-visible</code> selector.\nThis is useful if you want to avoid opening it when switching\nbrowser tabs or closing a dialog.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'open',
    'description': '<p>The controlled open state of the tooltip.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'side',
    'description': '<p>The preferred side of the trigger to render against when open.\nWill be reversed when collisions occur and avoidCollisions\nis enabled.</p>\n',
    'type': '\'top\' | \'right\' | \'bottom\' | \'left\'',
    'required': false
  },
  {
    'name': 'sideOffset',
    'description': '<p>The distance in pixels from the trigger.</p>\n',
    'type': 'number',
    'required': false
  },
  {
    'name': 'sticky',
    'description': '<p>The sticky behavior on the align axis. <code>partial</code> will keep the\ncontent in the boundary as long as the trigger is at least partially\nin the boundary whilst &quot;always&quot; will keep the content in the boundary\nregardless.</p>\n',
    'type': '\'partial\' | \'always\'',
    'required': false
  }
]" />
