import { cva } from "class-variance-authority";
/* -------------------------------- Variants -------------------------------- */
const defaultAvatarGroupClasses
  = "wg-antialiased flex flex-wrap items-center gap-y-1 -space-x-3";

const avatarGroupVariants = cva(defaultAvatarGroupClasses, {
  variants: {
    size: {
      "xs": "-space-x-1",
      "sm": "-space-x-2",
      "md": "-space-x-3",
      "lg": "-space-x-4",
      "xl": "-space-x-5",
      "2xl": "-space-x-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export { avatarGroupVariants, defaultAvatarGroupClasses };
