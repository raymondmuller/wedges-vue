import type { ToggleGroupRootProps } from "radix-vue";
import type { DataOrientation } from "../types";

export type ToggleGroupProps = ToggleGroupRootProps & {
  /**
   * The size of the buttons in group.
   */
  size?: "sm" | "md";
};

export interface ToggleGroupContextProps {
  size?: "sm" | "md";
  disabled?: boolean;
  orientation?: DataOrientation;
}
