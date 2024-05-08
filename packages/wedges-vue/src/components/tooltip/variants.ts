import { type VariantProps, cva } from "class-variance-authority";

export const tooltipVariant = cva(
  "z-50 rounded-md text-start text-white wg-antialiased",
  {
    variants: {
      size: {
        sm: "max-w-xs px-3 py-2 text-xs",
        md: "max-w-[350px] p-4 text-sm",
      },
      color: {
        primary: "text-white wg-bg-primary",
        secondary: "text-white wg-bg-secondary dark:text-secondary-900 ",
        soft: "border border-transparent text-wg-gray-700 shadow-wg-overlay wg-bg-white dark:border-surface dark:bg-neutral-800 dark:text-surface-700 dark:shadow-none",
      },
    },
    defaultVariants: {
      size: "sm",
      color: "primary",
    },
  },
);

export type TooltipVariant = VariantProps<typeof tooltipVariant>;
