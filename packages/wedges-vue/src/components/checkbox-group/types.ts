import type { LabelProps } from "radix-vue";
import type { DataOrientation, LabelHelperProps } from "../types";

export type CheckboxGroupProps = LabelProps &
  LabelHelperProps & {
    orientation?: DataOrientation;
  };

export interface CheckboxGroupContextProps {
  disabled?: boolean;
}
