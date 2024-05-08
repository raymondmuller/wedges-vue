export interface ClosableProps {
  /**
   * Is the alert closable? If true, a close icon will be displayed.
   * @default true
   */
  closable?: true;

  /**
   * An optional callback function to be called when the close icon is clicked.
   * This can be used to handle the removal of the tag.
   * If provided, the close icon will be displayed.
   */
  onClose?: (e: MouseEvent) => void;
}

export interface NotClosableProps {
  /**
   * Is the alert closable? If true, a close button will be displayed and
   * when clicked on it will hide the alert element
   * @default true
   */
  closable?: false;
}
