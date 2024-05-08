import type { LoadingVariants } from "./variants";

export function calcDimension(size: LoadingVariants["size"]) {
  switch (size) {
    case "xxs":
      return 16;
    case "xs":
      return 24;
    case "sm":
      return 32;
    case "md":
      return 48;
    case "lg":
      return 56;
    case "xl":
      return 64;
    case "xxl":
      return 88;
    default:
      return 48;
  }
}

export function calcStroke(size: LoadingVariants["size"]) {
  switch (size) {
    case "xxs":
      return 4;
    case "xs":
      return 4;
    case "sm":
      return 4;
    case "md":
      return 6;
    case "lg":
      return 6;
    case "xl":
      return 6;
    case "xxl":
      return 8;
    default:
      return 6;
  }
}
