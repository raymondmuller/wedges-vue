import type { LabelProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import type { LabelHelperProps } from "../types";

export type InputElement = HTMLInputElement;
export type InputProps = LabelProps &
  LabelHelperProps & {
    ariaInvalid?: boolean;
    class?: HTMLAttributes["class"];
    id?: HTMLAttributes["id"];
    description?: string;
    destructive?: boolean;
    disabled?: boolean;
    required?: boolean;
  };
