export interface BlocksCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Forced Figma State for documentation; leave unset in real layouts (:hover and :focus-visible apply on their own). */
  state?: 'Default' | 'Hover' | 'Focus';
  /** Figma "Show Gallery Icon": Gallery Icon Badge (Size=Large) on the image's bottom-right corner. Default true. */
  showGalleryIcon?: boolean;
  /** Article Section Kicker text. Default 'Crime and Public Safety'. */
  section?: React.ReactNode;
  /** Headline (max 5 lines). Default 'Norte fire that destroyed homes in South Orange County is at 80% containment'. */
  headline?: React.ReactNode;
  /** Article Author text. Default 'Ruby Gonzales'. */
  author?: React.ReactNode;
  /** Article Timestamp text. Default '56 mins ago'. */
  time?: React.ReactNode;
  /** ISO publish time for the timestamp's <time dateTime>. */
  dateTime?: string;
  /** Image URL (16:9, cover). Without it the Article Image Placeholder shows. */
  image?: string;
  /** Alt text for `image`. */
  imageAlt?: string;
  /** Article URL: the whole card becomes one <a>. */
  href?: string;
  target?: string;
  /** Heading level of the headline. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Accessible name of the gallery badge. Default 'Photo gallery'; null hides it from assistive tech. */
  galleryLabel?: string | null;
}
/** Article card for Blocks (For You grid). Fills its column (built at 296px). */
export declare function BlocksCard(props: BlocksCardProps): React.ReactElement;
