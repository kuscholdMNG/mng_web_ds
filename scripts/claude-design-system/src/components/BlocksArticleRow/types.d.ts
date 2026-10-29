export interface BlocksArticleRowProps extends React.HTMLAttributes<HTMLElement> {
  /** Forced Figma State for documentation; leave unset in real layouts (:hover and :focus-visible apply on their own). */
  state?: 'Default' | 'Hover' | 'Focus';
  /** Figma Device. Mobile below 640px (90x54 image, Small badge, 12px body padding); Tablet and Desktop at 640px and up
      (220px image filling the row height, min 132; Large badge; 16px padding). Default 'Mobile' (the Figma default). */
  device?: 'Mobile' | 'Tablet' | 'Desktop';
  /** Figma "Show Gallery Icon": Gallery Icon Badge on the image's bottom-right corner. Default true. */
  showGalleryIcon?: boolean;
  /** Article Section Kicker text. Default 'Transportation'. */
  section?: React.ReactNode;
  /** Headline (not clamped). Default 'Plans to address cracks, compromised cliff along PCH at Crystal Cove outlined'. */
  headline?: React.ReactNode;
  /** Article Author text. Default 'Laylan Connelly'. */
  author?: React.ReactNode;
  /** Article Timestamp text. Default '3 days ago'. */
  time?: React.ReactNode;
  /** ISO publish time for the timestamp's <time dateTime>. */
  dateTime?: string;
  /** Image URL (cover). Without it the Article Image Placeholder shows. */
  image?: string;
  imageAlt?: string;
  /** Article URL: the whole row becomes one <a>. */
  href?: string;
  target?: string;
  /** Heading level of the headline. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Accessible name of the gallery badge. Default 'Photo gallery'; null hides it from assistive tech. */
  galleryLabel?: string | null;
}
/** Article row for the Blocks feed (For You). Fills the feed column (built at 340 / 720 / 848). */
export declare function BlocksArticleRow(props: BlocksArticleRowProps): React.ReactElement;
