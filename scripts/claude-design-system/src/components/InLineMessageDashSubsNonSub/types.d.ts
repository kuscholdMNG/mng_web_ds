export interface InLineMessageDashSubsNonSubProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device. Desktop 546px (24px padding, 16px gaps); Mobile 328px and FOLD 308px (16px padding, 8px gaps). Default 'Desktop'. */
  device?: 'Desktop' | 'Mobile' | 'FOLD';
  /** Title next to the notification2 icon (Noto Sans Bold 16, color/feedback/medium). Default 'Subscribe to the news.' */
  title?: React.ReactNode;
  /** Description (Noto Sans Regular 16). Children work too. Default 'Get access to the news and other exclusive features.' */
  description?: React.ReactNode;
  /** Button Primary label. Default 'Subscribe Now'. */
  buttonLabel?: string;
  onButtonClick?: (e: React.MouseEvent) => void;
  /** Makes the button a link. */
  buttonHref?: string;
  /** Renders the title as a heading of this level (h2–h6); default a paragraph. */
  headingLevel?: 2 | 3 | 4 | 5 | 6;
}
export declare function InLineMessageDashSubsNonSub(props: InLineMessageDashSubsNonSubProps): React.ReactElement;
