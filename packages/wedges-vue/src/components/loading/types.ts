import type { HTMLAttributes } from "vue";
import type { LoadingVariants } from "./variants";

export type LoadingElement = HTMLDivElement;

export interface LoadingProps {
  class?: HTMLAttributes["class"];
  size?: LoadingVariants["size"];
  color?: LoadingVariants["color"];
  type?: LoadingVariants["type"];
}
