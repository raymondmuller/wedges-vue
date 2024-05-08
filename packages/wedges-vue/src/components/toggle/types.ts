import type { ToggleProps as TogglePrimitiveProps } from "radix-vue";
import type { ButtonProps } from "../button";

export type ToggleProps = TogglePrimitiveProps &
  Omit<ButtonProps, "variant"> & {
    variant?: "outline" | "transparent";
  };
