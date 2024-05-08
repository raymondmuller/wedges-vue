import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const loadingVariants = cva(
  "relative inline-flex items-center justify-center border-0",
  {
    variants: {
      color: {
        primary: "stroke-surface-100 text-primary",
        secondary: "stroke-surface-100 text-secondary",
      },
      size: {
        xxs: "size-4",
        xs: "size-6",
        sm: "size-8",
        md: "size-12 [--wg-loading-stroke-width:6px]",
        lg: "size-14",
        xl: "size-16",
        xxl: "size-[88px]",
      },
      type: {
        line: "",
        spinner: "-rotate-45",
        dots: "",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      type: "line",
    },
  },
);

export type LoadingVariants = VariantProps<typeof loadingVariants>;
