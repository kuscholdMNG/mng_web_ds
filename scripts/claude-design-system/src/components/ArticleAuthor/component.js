/* Article Author (WordPress Elements, Homepage, 3609:39115).
   Author name in card and row footers and the lead byline: Noto Sans Medium 12/16, color/gray/min, one line, hugs its text. */
function ArticleAuthor(props) {
  var text = props.author != null ? props.author : props.children != null ? props.children : 'Ruby Gonzales';
  return h('span', Object.assign(rest(props, ['author', 'className']), {
    className: cx('mngds-article-author', props.className)
  }), text);
}
