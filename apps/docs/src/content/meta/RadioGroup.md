<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'ariaInvalid',
    'description': '',
    'type': 'boolean',
    'required': true
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
    'name': 'defaultValue',
    'description': '<p>The value of the radio item that should be checked when initially rendered.</p>\n<p>Use when you do not need to control the state of the radio items.</p>\n',
    'type': 'string',
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
    'description': '<p>When <code>true</code>, prevents the user from interacting with radio items.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'for',
    'description': '<p>The id of the element the label is associated with.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'helperText',
    'description': '<p>Additional text or information to guide the user. This can be an instruction,\na hint, or any other supplementary information. It is rendered below label.</p>\n',
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
    'name': 'label',
    'description': '<p>Main label displayed above radio buttons. As a prop you will need to pass it as a string.\nIf you want to render an element or any other renderable node, you will need to use the named slot.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'loop',
    'description': '<p>When <code>true</code>, keyboard navigation will loop from last item to first, and vice versa.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'modelValue',
    'description': '<p>The controlled value of the radio item to check. Can be binded as <code>v-model</code>.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'name',
    'description': '<p>The name of the group. Submitted with its owning form as part of a name/value pair.</p>\n',
    'type': 'string',
    'required': false
  },
  {
    'name': 'orientation',
    'description': '<p>The orientation of the component.</p>\n',
    'type': '\'horizontal\' | \'vertical\'',
    'required': false
  },
  {
    'name': 'required',
    'description': '<p>When <code>true</code>, indicates that the user must check a radio item before the owning form can be submitted.</p>\n',
    'type': 'boolean',
    'required': false
  },
  {
    'name': 'tooltip',
    'description': '<p>Tooltip displayed next to the label. As a prop you will need to pass it as a string.\nIf you want to render an element or any other renderable node, you will need to use the named slot.</p>\n',
    'type': 'string',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'update:modelValue',
    'description': '',
    'type': '[payload: string]'
  }
]" />
