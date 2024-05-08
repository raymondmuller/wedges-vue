import type { HTMLAttributes } from "vue";
import type { ProgressRoot } from "radix-vue";
import type { VariantProps } from "class-variance-authority";
import type { LabelHelperProps } from "../types";
import type { progressBarVariants } from "./variants";
import type { sizeMapping } from "./sizes";

export type ProgressBarVariants = VariantProps<typeof progressBarVariants>;

export type ProgressBarElement = typeof ProgressRoot;
export type ProgressBarProps = LabelHelperProps & {
  class?: HTMLAttributes["class"];
  /** The progress value.  */
  value: number | null;
  /** The maximum progress value. */
  max?: number;
  /**
   * A function to get the accessible label text representing the current value in a human-readable format.
   *
   *  If not provided, the value label will be read as the numeric value as a percentage of the max value.
   */
  getValueLabel?: (value: number, max: number) => string;

  /**
   * The indicator to be rendered to the right of the progress bar.
   */
  indicator?: string;

  /**
   * A string to be rendered after the indicator.
   */
  afterIndicator?: string;

  /**
   * If `true`, the progress bar CSS transition will be disabled.
   */
  disableAnimation?: boolean;

  /**
   * The variant of the progress bar.
   * @default default
   */

  variant?: ProgressBarVariants["variant"];

  /**
   * The color of the progress bar.
   * @default primary
   */

  color?: ProgressBarVariants["color"];

  /** If `true`, the progress bar will be disabled. */
  disabled?: boolean;

  /** The helper text to be rendered below the progress bar. */
  helperText?: string;

  /** The label to be rendered above the progress bar. */
  label?: string;

  /** The tooltip to be rendered on the label. */
  tooltip?: string;

  /** The description to be rendered below the label. */
  description?: string;

  /** The id of the progress bar. */
  id?: HTMLAttributes["id"];
};

export type ProgressCircleElement = SVGSVGElement;

export interface ProgressCircleProps {
  /**
   * The progress value.
   */
  value?: number;

  /**
   * The maximum progress value.
   */
  max?: number;

  /**
   * A function to get the accessible label text representing the current value in a human-readable format.
   * If not provided, the value label will be read as the numeric value as a percentage of the max value.
   */
  getLabelValue?: (value: number, max: number) => string;

  /**
   * If `true`, the additional styles will be applied to indicate that the progress bar is disabled.
   */
  disabled?: boolean;

  /**
   * If `true`, the progress bar CSS transition will be disabled.
   */
  disableAnimation?: boolean;

  /**
   * The size of the progress circle.
   */
  size?: keyof typeof sizeMapping;

  /**
   * The color of the progress circle.
   */
  color?:
    | "primary"
    | "purple"
    | "green"
    | "blue"
    | "orange"
    | "pink"
    | "yellow"
    | "red"
    | "secondary";
}
