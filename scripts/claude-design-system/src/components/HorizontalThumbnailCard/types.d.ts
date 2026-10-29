export interface HorizontalThumbnailCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Figma Style. One value (Standard), kept so existing instances don't change. An object is passed through as inline styles. */
  style?: 'Standard' | React.CSSProperties;
  /** Figma Device: thumbnail size and spacing. Desktop 110x74 (8px padding, 12px gap), Tablet 90x60 (8px, 12px),
      Mobile 90x51 (6px padding, 15px gap; headline clipped to two lines). Default 'Mobile' (the Figma default). */
  device?: 'Desktop' | 'Mobile' | 'Tablet';
  /** Figma "Show Gallery Icon": Gallery Icon Badge (Size=Small) on the thumbnail's bottom-right corner. Default true. */
  showGalleryIcon?: boolean;
  /** Headline. Default 'Article Headline on News paper homepage in thumbnail list position'. */
  headline?: React.ReactNode;
  /** Thumbnail URL (cover). Without it the Article Image Placeholder shows. */
  image?: string;
  /** Alt text for `image`. */
  imageAlt?: string;
  /** Article URL: the headline becomes the link. */
  href?: string;
  target?: string;
  /** Heading level of the headline. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Accessible name of the gallery badge. Default 'Photo gallery'; null hides it from assistive tech. */
  galleryLabel?: string | null;
}
/** Compact thumbnail list item (Photos Block secondary list). Fills its column (built at 336 / 358px). */
export declare function HorizontalThumbnailCard(props: HorizontalThumbnailCardProps): React.ReactElement;
