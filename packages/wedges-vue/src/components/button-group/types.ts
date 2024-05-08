import type { HTMLAttributes } from "vue";
import type { DataOrientation } from "../types";
import type { ButtonProps } from "../button/types";

export interface ButtonGroupProps {
  /**
   * The size of the buttons in group.
   */
  size?: "sm" | "md";

  /**
   * Disable all actions on buttons within this group.
   */
  disabled?: boolean;

  /**
   * Orientation of the group.
   */
  orientation?: DataOrientation;

  /**
   * Additional classes to apply to the group.
   */
  class?: HTMLAttributes["class"];
}

export interface ButtonGroupProviderProps {
  size?: ButtonGroupProps["size"];
  disabled?: ButtonGroupProps["disabled"];
  orientation?: ButtonGroupProps["orientation"];
}

export type ButtonGroupElement = HTMLDivElement;

export type ButtonGroupItemProps = Omit<
  ButtonProps,
  "variant" | "shape" | "size"
>;
