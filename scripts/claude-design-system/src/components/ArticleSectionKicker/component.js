/* Article Section Kicker (WordPress Elements, Homepage, 3609:39112).
   The article's section above a headline: Noto Sans Bold 10/12.5, uppercase, color/theme/primary, one line, hugs its text.
   Nested by BlocksCard, BlocksArticleRow, BlocksLeadArticleCard (and the 1Col, Horizontal Thumbnail and Zone 1 lead cards). */
function ArticleSectionKicker(props) {
  var text = props.section != null ? props.section : props.children != null ? props.children : 'Crime and Public Safety';
  return h('span', Object.assign(rest(props, ['section', 'className']), {
    className: cx('mngds-article-section-kicker', props.className)
  }), text);
}
