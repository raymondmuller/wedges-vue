import type { VariantProps } from "class-variance-authority";
import type { Primitive } from "radix-vue";
import type { HTMLAttributes } from "vue";
import type {
  avatarVariants,
  fallbackVariants,
  notificationVariants,
  statusVariants,
} from "./variants";

export interface AvatarProps {

  /**
   * Represents the alt text for the Avatar.
   *
   * - Used for accessibility purposes.
   */
  alt?: string;

  /**
   * Represents the initials displayed on the Avatar.
   *
   * - Supports single characters, two characters, or full words.
   * - For full words, initials will be derived from the first letter of the
   *   first word and the first letter of the last word.
   *
   * Example: "John Doe" => "JD"
   */

  initials?: string;

  /**
   * Represents the notification count displayed on the Avatar.
   *
   * - Used to indicate the number of unread messages, notifications, etc.
   */

  notification?: NotificationVariants["notification"];

  /**
   * Represents the size of the Avatar.
   *
   * - Used to determine the dimensions of the Avatar.
   */

  size?: AvatarVariants["size"];

  /**
   * Represents the source of the image displayed on the Avatar.
   *
   * - Used to display a user's profile picture, a group's logo, etc.
   */
  src?: string;

  /**
   * Represents the status displayed on the Avatar.
   *
   * - Used to indicate the availability or activity of a user.
   */

  status?: StatusVariants["status"];

  style?: HTMLAttributes["style"];
}

export type AvatarElement = typeof Primitive.Image | HTMLSpanElement;

export type AvatarVariants = VariantProps<typeof avatarVariants>;
export type NotificationVariants = VariantProps<typeof notificationVariants>;
export type StatusVariants = VariantProps<typeof statusVariants>;
export type FallbackVariants = VariantProps<typeof fallbackVariants>;
