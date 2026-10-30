export interface TopZoneArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device: production's breakpoints for these cards. XL (1280px and up; built 336, image over headline,
      CardTertiary 20/23.6), M (800–1039px; 197, CardTertiaryCompact 16/18.88), L (1040–1279px; 507 row: 280x157 image,
      20px gap, CardTertiaryRow 18/21.6), S (640–799px; 330 row: 97x54 image, 20px gap, CardTertiaryCompact 16/18.88,
      1px bottom rule), XS (639px and below; 340 row: 100x67 image, 8px gap, 18px headline, 1px bottom
      rule). The full Figma values ('XL (≥1280px)') and the old names (Desktop, 1024, 1100, Mobile) are accepted.
      Default 'XS' (the Figma default). */
  device?: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XS (≤639px)' | 'S (640–799px)' | 'M (800–1039px)' | 'L (1040–1279px)' | 'XL (≥1280px)' | 'Desktop' | '1024' | '1100' | 'Mobile';
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
