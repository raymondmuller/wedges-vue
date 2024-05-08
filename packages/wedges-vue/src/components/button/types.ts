import type { PrimitiveProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from "./variants";

export interface ButtonProps extends PrimitiveProps {
  /**
   * The variant of the button.
   */
  variant: ButtonVariants["variant"];
  /**
   * The size of the button.
   */
  size?: ButtonVariants["size"];
  /**
   * The shape of the button.
   */
  shape?: ButtonVariants["shape"];
  /**
   * Specifies whether this button has a destructive action.
   * If `true`, the button should be styled differently to indicate that it will perform a destructive action.
   */
  destructive?: boolean;

  class?: HTMLAttributes["class"];

  /** Specifies if the button only contains an icon */
  isIconOnly?: boolean;

  /**
   * Specifies whether the button is disabled.
   */
  disabled?: boolean;

  /**
   * Specifies whether the button is loading.
   */
  href?: string;
}

export type Size = "md" | "sm" | "xs-icon";
