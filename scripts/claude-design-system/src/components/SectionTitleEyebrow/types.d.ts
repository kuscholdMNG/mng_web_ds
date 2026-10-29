export interface SectionTitleEyebrowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  /** Figma Style. Underline: color/gray/100 title, 22px line height, 2px theme-primary underline. Bold: theme-primary title, no underline. Default 'Underline'.
   *  (This is the Figma variant, not the CSS style attribute: use `rootStyle` for inline styles.) */
  style?: 'Underline' | 'Bold';
  /** Figma Chevron: 16px arrow-right icon after the title, color/theme/primary. Default true. */
  chevron?: boolean;
  /** Figma Show Subhead (For You feed header). Default false. */
  showSubhead?: boolean;
  /** Figma Subhead text. Default 'Based on what you read.' */
  subhead?: React.ReactNode;
  /** Figma Show Info: 12px info button after the subhead (opens the Tooltip, Type=Toggletip, Placement=Bottom). Default true; shown only with the subhead. */
  showInfo?: boolean;
  /** Title text (uppercased by style). Default 'Latest Headlines'. Children work too. */
  title?: React.ReactNode;
  /** Section front URL: the title and chevron become one link inside the heading. */
  href?: string;
  /** Heading element. Default 'h2' (spec). */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Info button click (open / close the toggletip). */
  onInfoClick?: (e: React.MouseEvent) => void;
  /** Toggletip open state, set as aria-expanded on the info button. */
  infoExpanded?: boolean;
  /** id of the toggletip box (aria-controls). */
  infoControls?: string;
  /** Info button accessible name. Default 'About this feed' (Tooltip's Label default). */
  infoLabel?: string;
  /** Forced info button state for documentation ('Focus'). */
  infoState?: 'Default' | 'Focus';
  /** Inline style for the root element. */
  rootStyle?: React.CSSProperties;
}
export declare function SectionTitleEyebrow(props: SectionTitleEyebrowProps): React.ReactElement;
