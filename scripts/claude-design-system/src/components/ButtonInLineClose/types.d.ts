export interface ButtonInLineCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Forced Figma State for documentation; leave unset in real layouts (:hover, :active, :focus-visible apply). */
  state?: 'Default' | 'Hover' | 'Pressed' | 'InFocus';
  /** Accessible name of the icon-only button (aria-label). Default 'Close'. */
  label?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}
/** Button In-Line Close: 40px close (X) hit area for in-line panels, alerts and toggletips. */
export declare function ButtonInLineClose(props: ButtonInLineCloseProps): React.ReactElement;
