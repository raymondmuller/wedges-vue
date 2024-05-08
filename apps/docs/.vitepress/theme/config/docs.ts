export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
}

export type SidebarNavItem = NavItem & {
  items: SidebarNavItem[];
};

export type NavItemWithChildren = NavItem & {
  items: NavItemWithChildren[];
};

interface DocsConfig {
  mainNav: NavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs/introduction",
    },
    {
      title: "Components",
      href: "/docs/components/alert",
    },
    {
      title: "Figma",
      href: "https://www.lemonsqueezy.com/wedges/figma",
      external: true,
    },
    {
      title: "GitHub",
      href: "https://github.com/raymondmuller/wedges-vue",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
        {
          title: "Requirements",
          href: "/docs/requirements",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Default",
          href: "/docs/installation/default",
          items: [],
        },
        {
          title: "Laravel",
          href: "/docs/installation/laravel",
          items: [],
        },
      ],
    },
    {
      title: "Theming",
      items: [
        {
          title: "Tailwind Plugin",
          href: "/docs/theming/tailwind-css-plugin",
          items: [],
        },
        {
          title: "Color System",
          href: "/docs/theming/color-system",
          items: [],
        },
        {
          title: "Default Themes",
          href: "/docs/theming/default-themes",
          items: [],
        },
        {
          title: "Custom Themes",
          href: "/docs/theming/custom-themes",
          items: [],
        },
        {
          title: "Additional Utilities",
          href: "/docs/theming/additional-utilities",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Alert",
          href: "/docs/components/alert",
          items: [],
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          items: [],
        },
        {
          title: "Avatar Group",
          href: "/docs/components/avatar-group",
          items: [],
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Button Group",
          href: "/docs/components/button-group",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "Checkbox Group",
          href: "/docs/components/checkbox-group",
          items: [],
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "Kbd",
          href: "/docs/components/kbd",
          label: "New",
          items: [],
        },
        {
          title: "Label",
          href: "/docs/components/label",
          items: [],
        },
        {
          title: "Loading",
          href: "/docs/components/loading",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          items: [],
        },
        {
          title: "Progress Bar",
          href: "/docs/components/progress-bar",
          label: "New",
          items: [],
        },
        {
          title: "Progress Circle",
          href: "/docs/components/progress-circle",
          label: "New",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: [],
        },
        {
          title: "Slider",
          href: "/docs/components/slider",
          label: "New",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "Switch Group",
          href: "/docs/components/switch-group",
          items: [],
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          items: [],
        },
        {
          title: "Tag",
          href: "/docs/components/tag",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
          items: [],
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle",
          items: [],
        },
        {
          title: "Toggle Group",
          href: "/docs/components/toggle-group",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
      ],
    },
  ],
};
