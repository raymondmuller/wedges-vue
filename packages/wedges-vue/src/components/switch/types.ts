import type { LabelProps, SwitchRootProps } from "radix-vue";
import type { LabelHelperProps } from "../types";

export interface HasLabel {
  /**
   * Label displayed next to the switch. It can be a string, element, or any other
   * renderable node.
   */
  label: string;

  /**
   * Alignment of the labels: "start" (usually left) or "end" (usually right).
   */
  alignLabel?: "start" | "end";
}

export interface HasNoLabel {
  label?: never;

  /**
   * Alignment of the labels: "start" (usually left) or "end" (usually right).
   */
  alignLabel?: never;
}

export type SwitchProps = SwitchRootProps &
  LabelProps &
  Omit<LabelHelperProps, "label"> &
  (HasLabel | HasNoLabel);
