import type { LabelProps, RadioGroupRootProps } from "radix-vue";
import type { LabelHelperProps } from "../types";

export type RadioGroupProps = RadioGroupRootProps &
  LabelProps &
  LabelHelperProps;

export interface RadioGroupContextProps {
  disabled?: RadioGroupProps["disabled"];
}
