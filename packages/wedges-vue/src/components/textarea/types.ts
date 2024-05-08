import type { LabelProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import type { LabelHelperProps } from "../types";

export type TextareaProps = LabelProps &
  LabelHelperProps & {
    ariaInvalid?: boolean;
    class?: HTMLAttributes["class"];
    id?: HTMLAttributes["id"];
    destructive?: boolean;
    required?: boolean;
    disabled?: boolean;
    description?: string;
  };
