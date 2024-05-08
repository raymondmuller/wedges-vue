<!-- This file was automatic generated. Do not edit it manually -->

<PropsTable :data="[
  {
    'name': 'opts',
    'description': '',
    'type': 'Partial<OptionsType> | Ref<Partial<OptionsType>>',
    'required': false
  },
  {
    'name': 'orientation',
    'description': '',
    'type': '\'vertical\' | \'horizontal\'',
    'required': false,
    'default': '\'horizontal\''
  },
  {
    'name': 'plugins',
    'description': '',
    'type': 'CreatePluginType<LoosePluginType, {}>[] | Ref<CreatePluginType<LoosePluginType, {}>[]>',
    'required': false
  }
]" />

<EmitsTable :data="[
  {
    'name': 'init-api',
    'description': '',
    'type': '[payload: EmblaCarouselType]'
  }
]" />

<SlotsTable :data="[
  {
    'name': 'carouselRef',
    'description': '',
    'type': 'Ref<HTMLElement | undefined>'
  },
  {
    'name': 'carouselApi',
    'description': '',
    'type': 'Ref<EmblaCarouselType | undefined>'
  },
  {
    'name': 'canScrollPrev',
    'description': '',
    'type': 'Ref<boolean>'
  },
  {
    'name': 'canScrollNext',
    'description': '',
    'type': 'Ref<boolean>'
  },
  {
    'name': 'scrollPrev',
    'description': '',
    'type': ''
  },
  {
    'name': 'scrollNext',
    'description': '',
    'type': ''
  },
  {
    'name': 'orientation',
    'description': '',
    'type': '\'vertical\' | \'horizontal\' | undefined'
  }
]" />

<MethodsTable :data="[
  {
    'name': 'scrollPrev',
    'description': '',
    'type': '() => void'
  },
  {
    'name': 'scrollNext',
    'description': '',
    'type': '() => void'
  }
]" />
