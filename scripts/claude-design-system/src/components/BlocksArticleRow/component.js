/* Blocks Article Row (WordPress Elements, Homepage, 3663:31214). State = Default / Hover / Focus x Device = Mobile / Tablet / Desktop;
   Show Gallery Icon. The whole row is one link (root <a> when `href` is given). Image pinned top-left (Tablet/Desktop: 220px wide,
   filling the row height, min 132; Mobile: 90x54), then the body: Article Section Kicker + headline
   (Editorial/Titles/CardTertiaryCompact, not clamped) and a footer with Article Author and Article Timestamp side by side. */
function BlocksArticleRow(props) {
  var device = props.device || 'Mobile';
  var showBadge = props.showGalleryIcon !== false;
  var Tag = props.href ? 'a' : 'div';
  var HL = 'h' + (props.headingLevel || 3);
  var root = Object.assign(rest(props, ['state', 'device', 'showGalleryIcon', 'section', 'headline', 'author', 'time', 'dateTime',
    'image', 'imageAlt', 'href', 'target', 'headingLevel', 'galleryLabel', 'className']), {
    className: cx('mngds-blocks-article-row', 'mngds-blocks-article-row--' + slug(device), stateClass(props.state), props.className)
  });
  if (Tag === 'a') { root.href = props.href; if (props.target) { root.target = props.target; root.rel = 'noopener'; } }
  return h(Tag, root,
    h('div', { className: 'mngds-blocks-article-row__media' },
      h('div', { className: 'mngds-blocks-article-row__image', 'aria-hidden': props.image ? undefined : 'true' },
        h(ArticleImage, { src: props.image, alt: props.imageAlt, className: 'mngds-blocks-article-row__img' })),
      showBadge ? h(GalleryIconBadge, { size: device === 'Mobile' ? 'Small' : 'Large', label: props.galleryLabel, className: 'mngds-blocks-article-row__badge' }) : null),
    h('div', { className: 'mngds-blocks-article-row__body' },
      h('div', { className: 'mngds-blocks-article-row__headline-container' },
        h(ArticleSectionKicker, { section: props.section != null ? props.section : 'Transportation' }),
        h(HL, { className: 'mngds-blocks-article-row__headline' },
          props.headline != null ? props.headline : 'Plans to address cracks, compromised cliff along PCH at Crystal Cove outlined')),
      h('div', { className: 'mngds-blocks-article-row__footer' },
        h(ArticleAuthor, { author: props.author != null ? props.author : 'Laylan Connelly' }),
        h(ArticleTimestamp, { time: props.time != null ? props.time : '3 days ago', dateTime: props.dateTime }))));
}
