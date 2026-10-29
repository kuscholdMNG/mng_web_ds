export interface ButtonTertiaryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Breakpoint. Desktop (>=640px) hugs its label; Mobile (<=639px) fills the container. Default 'Desktop'. */
  breakpoint?: 'Desktop' | 'Mobile';
  /** Figma Icon. Default 'None'. */
  icon?: 'None' | 'Left' | 'Right';
  /** Icon font name for Icon=Left/Right. Default 'new-tab' (the Figma default). */
  iconName?: string;
  /** Forced Figma State for documentation; leave unset in real layouts. */
  state?: 'Default' | 'Hover' | 'Pressed' | 'InFocus';
  /** Button text (Figma "Label"). Children work too. Default 'Tertiary Button'. */
  label?: React.ReactNode;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
export declare function ButtonTertiary(props: ButtonTertiaryProps): React.ReactElement;
