export interface HyperlinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Forced Figma State for documentation; leave unset in real layouts. */
  state?: 'Default' | 'Hover' | 'Pressed' | 'InFocus';
  /** Link text (Figma "Label"). Children work too. Default '...hyperlink text...'. */
  label?: React.ReactNode;
  /** Link target URL. Default '#'. */
  href?: string;
}
export declare function Hyperlink(props: HyperlinkProps): React.ReactElement;
