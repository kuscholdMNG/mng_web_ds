export interface TopZoneArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device. Desktop (336, image over headline, CardTertiary 20/23.6), 1024 (197, CardTertiaryCompact 16/18.88),
      1100 (507 row: 280x157 image, 20px gap, CardTertiaryRow 18/21.6), Mobile (340 row: 100x67 image, 8px gap,
      18px headline, 1px bottom rule). Default 'Mobile' (the Figma default). */
  device?: 'Desktop' | '1024' | '1100' | 'Mobile';
  /** Headline. Default 'Article Headline on News paper homepage in second zone position'. */
  headline?: React.ReactNode;
  /** Image URL (cover). Without it the Article Image Placeholder shows. */
  image?: string;
  /** Alt text for `image`. */
  imageAlt?: string;
  /** Article URL: the headline becomes the link. */
  href?: string;
  target?: string;
  /** Heading level of the headline. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** One of the four homepage Zone 1 story cards beside the Zone 1 lead. Fills its column. */
export declare function TopZoneArticleCard(props: TopZoneArticleCardProps): React.ReactElement;
