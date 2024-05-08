import type { HTMLAttributes } from "vue";
import type { LabelProps } from "radix-vue";
import type { LabelHelperProps } from "../types";

export type SwitchGroupProps = LabelProps &
  LabelHelperProps & {
    /**
     * Alignment of the labels: "start" (usually left) or "end" (usually right).
     * @default "end"
     */
    alignLabels?: "start" | "end";

    /**
     * A unique id for the switch group.
     */
    id?: HTMLAttributes["id"];

    /**
     * Aria invalid attribute.
     */

    ariaInvalid?: HTMLAttributes["aria-invalid"];

    description?: string;

    /**
     * Additional class names.
     */
    class?: HTMLAttributes["class"];

    /**
     * Helper text.
     */

    helperText?: string;

    /**
     * Label for the switch group.
     */

    label?: string;

    /**
     * Tooltip for the switch group.
     */

    tooltip?: string;

    /**
     * Whether the switch group is disabled.
     */

    disabled?: boolean;

    /**
     * Whether the switch group is required.
     */

    required?: boolean;
  };

export interface SwitchGroupContextProps {
  alignLabels?: SwitchGroupProps["alignLabels"];
  disabled?: SwitchGroupProps["disabled"];
  isInGroup: boolean;
}
