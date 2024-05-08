import type { CheckboxRoot, CheckboxRootProps } from "radix-vue";
import type { LabelHelperProps } from "../types";

export type CheckboxElement = typeof CheckboxRoot;
export type CheckboxElementProps = CheckboxRootProps &
  LabelHelperProps & {
    isIndeterminate?: boolean;
  };
