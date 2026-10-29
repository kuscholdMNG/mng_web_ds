export interface ShowMoreAffordanceProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Label (text, uppercased by style). Default 'Load More'; 'Show More Photos' in Photos Block. Children work too. */
  label?: React.ReactNode;
  /** Forced production state for documentation; leave unset in real layouts. */
  state?: 'Default' | 'Hover' | 'Focus';
  /** Renders an <a> (e.g. to the section front) instead of a <button>. */
  href?: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}
export declare function ShowMoreAffordance(props: ShowMoreAffordanceProps): React.ReactElement;
