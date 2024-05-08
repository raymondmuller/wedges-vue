import type { VariantProps } from "class-variance-authority";
import type { tabVariants } from "./variants";

export type Variants = VariantProps<typeof tabVariants>;

export interface TabsContextProps {
  variant?: Variants["variant"];
}
