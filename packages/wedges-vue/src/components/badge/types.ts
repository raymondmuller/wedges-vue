import type { BadgeVariants } from "./variants";

export interface BadgeProps {
  /**
   * Whether the badge has border or not.
   */
  stroke?: boolean;

  /**
   * The color of the badge.
   */
  color?: BadgeVariants["color"];

  /**
   * The shape of the badge.
   */
  shape?: BadgeVariants["shape"];

  /**
   * The size of the badge.
   */

  size?: BadgeVariants["size"];
}
