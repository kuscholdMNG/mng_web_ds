export interface BlocksLeadArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Forced Figma State for documentation; leave unset in real layouts (the headline link's :hover applies Hover).
      'Focus' (not a Figma variant) forces the headline link's focus outline. */
  state?: 'Default' | 'Hover' | 'Focus';
  /** Figma Device. Mobile (below 640px): one column, 25/29 headline. Tablet (640px and up, 768 template) and Desktop
      (1280 template): two columns, 29/33 headline. Default 'Mobile' (the Figma default). */
  device?: 'Mobile' | 'Tablet' | 'Desktop';
  /** Figma Gallery. Image (default) or Slideshow (the Zone 1 Slideshow replaces the image). */
  gallery?: 'Image' | 'Slideshow';
  /** Article Section Kicker text. Default 'Crime and Public Safety'. */
  section?: React.ReactNode;
  /** Headline. Default 'Norte fire that destroyed homes in South Orange County is at 80% containment'. */
  headline?: React.ReactNode;
  /** Excerpt. Default 'The Norte Fire broke out in the area of Portico Del Norte in San Clemente shortly after 11:30 a.m. on Friday. Oct. 16.' */
  excerpt?: React.ReactNode;
  /** Article Author text. Default 'Ruby Gonzales'. */
  author?: React.ReactNode;
  /** Article Timestamp text. Default '56 mins ago'. */
  time?: React.ReactNode;
  /** ISO publish time for the timestamp's <time dateTime>. */
  dateTime?: string;
  /** Image URL (Gallery=Image; cover). Without it the Article Image Placeholder shows. */
  image?: string;
  imageAlt?: string;
  /** Props passed to Zone1Slideshow for Gallery=Slideshow (slideCount, caption, showCredit...); its breakpoint follows `device`. */
  slideshow?: Record<string, unknown>;
  /** Article URL: the headline becomes the link. */
  href?: string;
  target?: string;
  /** Heading level of the headline. Default 2. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** The featured (lead) story at the top of the Blocks feed (For You). */
export declare function BlocksLeadArticleCard(props: BlocksLeadArticleCardProps): React.ReactElement;
