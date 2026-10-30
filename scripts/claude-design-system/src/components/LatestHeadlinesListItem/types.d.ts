export interface LatestHeadlinesListItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Type. First: no rule. Standard: 1px color/gray/500 rule above, 16px to the content. Sponsored: rule above,
      Sponsored content badge, headline, "By <sponsor>" and the sponsor logo. First and Standard set the time inline
      after the headline. Default 'First' (the Figma default). */
  type?: 'First' | 'Standard' | 'Sponsored';
  /** Headline (theme heading family, Bold 15 / 19px, color/gray/black). Default: the Figma sample for the type. */
  headline?: React.ReactNode;
  /** Relative time after the headline (First, Standard). Default '56 mins ago' (First) or '57 mins ago' (Standard). */
  time?: React.ReactNode;
  /** Machine-readable publish time (ISO 8601): the time becomes a <time dateTime> element. */
  dateTime?: string;
  /** Article URL: the headline becomes the link. */
  href?: string;
  target?: string;
  /** Heading level of the headline. Default 3 (production h3). */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Sponsored: sponsor name after "By ". Default 'Xcel Energy' (the Figma sample). */
  sponsor?: React.ReactNode;
  /** Sponsored: sponsor logo URL, drawn in a 60x12 box. Without it an empty color/gray/600 box shows. */
  sponsorLogo?: string;
  /** Alt text for `sponsorLogo`. Default '' (the byline already names the sponsor). */
  sponsorLogoAlt?: string;
  /** Sponsored: badge text (shown uppercase). Default 'Sponsored content'. */
  badgeLabel?: React.ReactNode;
}
/** One headline in the Zone 1 Latest Headlines list. Renders an <article>; put it in an <li> (LatestHeadlines does). */
export declare function LatestHeadlinesListItem(props: LatestHeadlinesListItemProps): React.ReactElement;
