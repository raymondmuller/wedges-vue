import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const kbdVariants = cva(
  "border-1 inline-flex cursor-default items-center rounded-full border border-surface-200 px-2 font-sans text-surface-500 wg-antialiased dark:border-surface-100 [&>abbr]:no-underline",
  {
    variants: {
      size: {
        xs: "text-xs leading-6",
        sm: "text-sm leading-6",
        md: "py-0.5 text-base leading-6",
        lg: "py-0.5 text-lg",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  },
);

export type KbdVariants = VariantProps<typeof kbdVariants>;
