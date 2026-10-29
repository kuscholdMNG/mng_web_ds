export interface ArticleAuthorProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma "Author" text: the author's name as published. Children work too. Default 'Ruby Gonzales'. */
  author?: React.ReactNode;
}
/** Author name for card footers, rows and the lead byline. One line, hugs its text, no padding. */
export declare function ArticleAuthor(props: ArticleAuthorProps): React.ReactElement;
