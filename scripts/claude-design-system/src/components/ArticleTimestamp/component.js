/* Article Timestamp (WordPress Elements, Homepage, 3621:38794).
   Clock icon (Icons access-time, 11px, color/gray/200) + relative time (Noto Sans Regular 13, line height auto, color/gray/200), 4px apart. */
function ArticleTimestamp(props) {
  var text = props.time != null ? props.time : props.children != null ? props.children : '56 mins ago';
  return h('span', Object.assign(rest(props, ['time', 'dateTime', 'className']), {
      className: cx('mngds-article-timestamp', props.className)
    }),
    h(Icon, { name: 'access-time', size: 'var(--mng-article-timestamp-base-clock-icon-width)', className: 'mngds-article-timestamp__icon' }),
    props.dateTime
      ? h('time', { className: 'mngds-article-timestamp__time', dateTime: props.dateTime }, text)
      : h('span', { className: 'mngds-article-timestamp__time' }, text));
}
