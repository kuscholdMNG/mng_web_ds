export interface ButtonModalCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Forced Figma State for documentation; leave unset in real layouts (:hover, :active, :focus-visible apply). */
  state?: 'Default' | 'Hover' | 'Pressed' | 'InFocus';
  /** Accessible name of the icon-only button (aria-label). Default 'Close'. */
  label?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}
/** Button Modal Close: 32px circular close (X) for pop-up modals. */
export declare function ButtonModalClose(props: ButtonModalCloseProps): React.ReactElement;
