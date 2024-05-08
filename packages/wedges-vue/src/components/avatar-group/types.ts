import type { HTMLAttributes } from "vue";
import type { AvatarProps } from "../avatar/types";
import type AvatarGroupRoot from "./AvatarGroupRoot.vue";

export type AvatarGroupAvatarProps = Omit<
  AvatarProps,
  "size" | "notification" | "status" | "asChild"
>;

export interface BaseAvatarGroupProps {
  /**
   * The items to display in the group.
   */
  items: AvatarGroupAvatarProps[];

  /**
   * The label to display at the end of the group.
   */
  moreLabel?: string;

  /**
   * Whether the previous item should be on top of the stack.
   * If false, the next item will be at the top of the stack.
   */
  previousOnTop?: boolean;
}

export interface AvatarMoreLabelProps {
  /**
   * The label to display.
   */
  label?: string;

  /**
   * The size of the element.
   */
  size?: AvatarProps["size"];

  /**
   * The class to apply to the element.
   */
  class?: HTMLAttributes["class"];
}

export type AvatarGroupElement = typeof AvatarGroupRoot | null;
export type AvatarGroupProps = BaseAvatarGroupProps & {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  class: HTMLAttributes["class"];
};
