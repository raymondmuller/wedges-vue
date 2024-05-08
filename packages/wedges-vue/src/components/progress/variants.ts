import { cva } from "class-variance-authority";

export const progressBarVariants = cva(
  "flex w-full text-sm wg-antialiased disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "flex-col gap-2",
        inline:
          "min-w-[200px] flex-wrap items-center gap-2 xs:flex-nowrap xs:gap-4",
      },
      color: {
        primary: ["bg-primary"],
        purple: ["bg-wg-purple"],
        green: ["bg-wg-green"],
        blue: ["bg-wg-blue"],
        orange: ["bg-wg-orange"],
        pink: ["bg-wg-pink"],
        yellow: ["bg-wg-yellow"],
        red: ["bg-wg-red"],
        secondary: ["bg-secondary"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const progressCircleVariants = cva(
  "scale-100 fill-none stroke-surface-100",
  {
    variants: {
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
      color: {
        primary: ["text-primary"],
        purple: ["text-wg-purple"],
        green: ["text-wg-green"],
        blue: ["text-wg-blue"],
        orange: ["text-wg-orange"],
        pink: ["text-wg-pink"],
        yellow: ["text-wg-yellow"],
        red: ["text-wg-red"],
        secondary: ["text-secondary"],
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
    },
  },
);
