export interface OneColArticleCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  /** Figma Style. Standard: 4:3 image, CardQuaternary headline, ExcerptCompact excerpt (section-highlight lead cards).
      Media Lead: 16:9 image, TitleMedia headline, Excerpt excerpt (the Photos lead). Default 'Standard'.
      An object is passed through as inline styles instead (Style then stays 'Standard'). */
  style?: 'Standard' | 'Media Lead' | React.CSSProperties;
  /** Figma "Show Image". Default true. */
  showImage?: boolean;
  /** Figma "Show Subscriber Badge": Article Status Badge (Type=Subscriber) between the image and the headline. Default false. */
  showSubscriberBadge?: boolean;
  /** Figma "Show Excerpt". Default true. */
  showExcerpt?: boolean;
  /** Figma "Show Meta": the relative time under the excerpt. Default false. */
  showMeta?: boolean;
  /** Headline. Default 'Article Headline on News paper homepage in first position on 1col section block'. */
  headline?: React.ReactNode;
  /** Excerpt. Default 'Vanroy Evan Smith, 39, of Long Beach is being held on $1 million bail.' */
  excerpt?: React.ReactNode;
  /** Meta text (relative publish time). Default '56 mins ago'. */
  time?: React.ReactNode;
  /** ISO publish time: the meta becomes a <time dateTime>. */
  dateTime?: string;
  /** Subscriber badge text (shown uppercase). Default 'Subscriber Only'. */
  badgeLabel?: React.ReactNode;
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
/** Single-column article card (Figma "1Col Article Card"). Fills its column (built at 296px). */
export declare function OneColArticleCard(props: OneColArticleCardProps): React.ReactElement;
