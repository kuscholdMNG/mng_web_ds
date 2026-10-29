export interface ButtonActionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Forced Figma State for documentation; leave unset in real layouts. */
  state?: 'Default' | 'Hover' | 'Pressed' | 'InFocus';
  /** Icon font name for the leading icon. Default 'content_copy' (the Figma sample). */
  iconName?: string;
  /** Button text (Figma "Label"). Children work too. Default 'Copy Link'. */
  label?: React.ReactNode;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
export declare function ButtonAction(props: ButtonActionProps): React.ReactElement;
