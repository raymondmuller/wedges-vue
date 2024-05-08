export interface LabelHelperProps {
  /**
   * Main label displayed above radio buttons. As a prop you will need to pass it as a string.
   * If you want to render an element or any other renderable node, you will need to use the named slot.
   */
  label?: string;

  /**
   * Additional text or information to guide the user. This can be an instruction,
   * a hint, or any other supplementary information. It is rendered below label.
   */
  helperText?: string;

  /**
   * Tooltip displayed next to the label. As a prop you will need to pass it as a string.
   * If you want to render an element or any other renderable node, you will need to use the named slot.
   */
  tooltip?: string;
}

export type DataOrientation = "horizontal" | "vertical";
