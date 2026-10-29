export interface ArticleSectionKickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma "Section" text: the article's section (articleSection) as written; shown uppercase by style. Children work too. Default 'Crime and Public Safety'. */
  section?: React.ReactNode;
}
/** Section label above an article headline. One line (ellipsis if it doesn't fit), hugs its text, no padding. */
export declare function ArticleSectionKicker(props: ArticleSectionKickerProps): React.ReactElement;
