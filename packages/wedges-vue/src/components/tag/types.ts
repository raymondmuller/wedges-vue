import type { BadgeProps } from "../badge";

export interface ClosableProps {
  /**
   * Is the alert closable? If true, a close icon will be displayed.
   * @default true
   */
  closable: true;

  /**
   * An optional callback function to be called when the close icon is clicked.
   * This can be used to handle the removal of the tag.
   * If provided, the close icon will be displayed.
   */
  onClose?: Function;
}

interface NotClosableProps {
  /**
   * Is the alert closable? If true, a close icon will be displayed.
   * @default true
   */
  closable?: false;

  /**
   * An optional callback function to be called when the close icon is clicked.
   * This can be used to handle the removal of the tag.
   * If provided, the close icon will be displayed.
   */
  onClose?: never;
}

export type TagProps = BadgeProps & (ClosableProps | NotClosableProps);
