---
title: Additional Utilities
description: A collection of Wedges design system utility classes.
breadcrumbs:
  - Theming
---

### Font Size

The following font size utilities are available with Wedges.
<!--
<PropsTable
  isUtility
  sort={false}
  content={[
    [
      { value: "text-xxs" },
      {
        value: (
          <div>
            <span>font-size: 0.625rem</span>
            <span>line-height: 1rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-xs" },
      {
        value: (
          <div>
            <span>font-size: 0.75rem</span>
            <span>line-height: 1rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-sm" },
      {
        value: (
          <div>
            <span>font-size: 0.875rem</span>
            <span>line-height: 1.25rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-base" },
      {
        value: (
          <div>
            <span>font-size: 1rem</span>
            <span>line-height: 1.5rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-lg" },
      {
        value: (
          <div>
            <span>font-size: 1.125rem</span>
            <span>line-height: 1.75rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-xl" },
      {
        value: (
          <div>
            <span>font-size: 1.25rem</span>
            <span>line-height: 1.75rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-2xl" },
      {
        value: (
          <div>
            <span>font-size: 1.5rem</span>
            <span>line-height: 2rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-3xl" },
      {
        value: (
          <div>
            <span>font-size: 1.875rem</span>
            <span>line-height: 2.25rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-4xl" },
      {
        value: (
          <div>
            <span>font-size: 2.25rem</span>
            <span>line-height: 2.5rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-5xl" },
      {
        value: (
          <div>
            <span>font-size: 3rem</span>
            <span>line-height: 3.5rem</span>
            <span>letter-spacing: -0.075rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-6xl" },
      {
        value: (
          <div>
            <span>font-size: 3.75rem</span>
            <span>line-height: 4.5rem</span>
            <span>letter-spacing: -0.09375rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-7xl" },
      {
        value: (
          <div>
            <span>font-size: 4.5rem</span>
            <span>line-height: 5rem</span>
            <span>letter-spacing: -0.1125rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-8xl" },
      {
        value: (
          <div>
            <span>font-size: 6rem</span>
            <span>line-height: 6.5rem</span>
            <span>letter-spacing: -0.15rem</span>
          </div>
        ),
      },
    ],
    [
      { value: "text-9xl" },
      {
        value: (
          <div>
            <span>font-size: 8rem</span>
            <span>line-height: 8rem</span>
            <span>letter-spacing: -0.2rem</span>
          </div>
        ),
      },
    ],
  ]}
/> -->

### Box Shadow

The additional box shadow utilities are available with the `shadow-wg-{scale}` classes.
<!--
<PropsTable
  isUtility
  sort={false}
  content={[
    [
      { value: "shadow-wg-xs" },
      {
        value: (
          <div>
            <span>box-shadow: "0 1px 2px 0 rgba(18, 18, 23, 0.05)"</span>
          </div>
        ),
      },
    ],
    [
      { value: "shadow-wg-sm" },
      {
        value: (
          <div>
            <span>
              box-shadow: "0 1px 3px 0 rgba(18, 18, 23, 0.1), 0 1px 2px 0 rgba(18, 18, 23, 0.06)"
            </span>
          </div>
        ),
      },
    ],
    [
      { value: "shadow-wg-md" },
      {
        value: (
          <div>
            <span>
              box-shadow: "0px 2px 4px -1px rgba(18, 18, 23, 0.06), 0px 4px 6px -1px rgba(18, 18,
              23, 0.08)"
            </span>
          </div>
        ),
      },
    ],
    [
      { value: "shadow-wg-lg" },
      {
        value: (
          <div>
            <span>
              box-shadow: "0px 4px 6px -2px rgba(18, 18, 23, 0.05), 0px 10px 15px -3px rgba(18, 18,
              23, 0.08)"
            </span>
          </div>
        ),
      },
    ],
    [
      { value: "shadow-wg-xl" },
      {
        value: (
          <div>
            <span>
              box-shadow: "0px 10px 10px -5px rgba(18, 18, 23, 0.04), 0px 20px 25px -5px rgba(18,
              18, 23, 0.10)"
            </span>
          </div>
        ),
      },
    ],
    [
      { value: "shadow-wg-2xl" },
      {
        value: (
          <div>
            <span>box-shadow: "0px 25px 50px -12px rgba(18, 18, 23, 0.25)"</span>
          </div>
        ),
      },
    ],
    [
      { value: "shadow-wg-overlay" },
      {
        value: (
          <div>
            <span>
              box-shadow: "0px 2px 4px 0px rgba(18, 18, 23, 0.04), 0px 5px 8px 0px rgba(18, 18, 23,
              0.04), 0px 10px 18px 0px rgba(18, 18, 23, 0.03), 0px 24px 48px 0px rgba(18, 18, 23,
              0.03), 0px 0px 0px 1px rgba(18, 18, 23, 0.10)"
            </span>
          </div>
        ),
      },
    ],
  ]}
/> -->

### Animations

Wedges introduces a set of simple fade animation utilities. These animations are used across Wedges components, making them smoother and more visually appealing. Use them with the `animation-wg-{name}` utility.

- **Fade in up**: `wg-fade-in-up`
- **Fade in down**: `wg-fade-in-down`
- **Fade in left**: `wg-fade-in-left`
- **Fade in right**: `wg-fade-in-right`
- **Fade out**: `wg-fade-out`

Keyframes for these animations are defined as follows:

```js showLineNumbers
 keyframes: {
    fadeInUp: {
        "0%": {
            opacity: "0",
            transform: "translateY(5px) scale(.97)",
        },
        "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
        },
    },
    fadeInDown: {
        "0%": {
            opacity: "0",
            transform: "translateY(-5px) scale(.97)",
        },
        "100%": {
            opacity: "1",
            transform: "translateY(0px) scale(1)",
        },
    },
    fadeInLeft: {
        "0%": {
            opacity: "0",
            transform: "translateX(5px) scale(.97)",
        },
        "100%": {
            opacity: "1",
            transform: "translateX(0px) scale(1)",
        },
    },
    fadeInRight: {
        "0%": {
            opacity: "0",
            transform: "translateX(-5px) scale(.97)",
        },
        "100%": {
            opacity: "1",
            transform: "translateX(0px) scale(1)",
        },
    },
    fadeOut: {
        "0%": {
            opacity: "1",
            transform: "scale(1)",
        },
        "100%": {
            opacity: "0",
            transform: "scale(.97)",
        },
    },
},
```
