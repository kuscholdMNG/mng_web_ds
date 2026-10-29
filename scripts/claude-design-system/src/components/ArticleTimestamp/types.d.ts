export interface ArticleTimestampProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma "Time" text: relative publish time ("56 mins ago", "2 hours ago", "3 days ago", "1 week ago"). Children work too. Default '56 mins ago'. */
  time?: React.ReactNode;
  /** Machine-readable publish time (ISO 8601). When given, the text is a <time dateTime> element. */
  dateTime?: string;
}
/** Clock icon (access-time, decorative) + relative time. One line, hugs its content, no padding. */
export declare function ArticleTimestamp(props: ArticleTimestampProps): React.ReactElement;
