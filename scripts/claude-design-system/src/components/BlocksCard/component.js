/* Blocks Card (WordPress Elements, Homepage, 3663:31072). State = Default / Hover / Focus; Show Gallery Icon.
   The whole card is one link (root <a> when `href` is given). 16:9 image (ArticleImage placeholder when no `image`),
   then the body: Article Section Kicker + headline (Editorial/Titles/CardTertiaryCompact, max 5 lines), and a footer
   with Article Author over Article Timestamp. Body is space-between so footers line up in a row of cards. */
function BlocksCard(props) {
  var showBadge = props.showGalleryIcon !== false;
  var Tag = props.href ? 'a' : 'div';
  var HL = 'h' + (props.headingLevel || 3);
  var root = Object.assign(rest(props, ['state', 'showGalleryIcon', 'section', 'headline', 'author', 'time', 'dateTime',
    'image', 'imageAlt', 'href', 'target', 'headingLevel', 'galleryLabel', 'className']), {
    className: cx('mngds-blocks-card', stateClass(props.state), props.className)
  });
  if (Tag === 'a') { root.href = props.href; if (props.target) { root.target = props.target; root.rel = 'noopener'; } }
  return h(Tag, root,
    h('div', { className: 'mngds-blocks-card__media' },
      h('div', { className: 'mngds-blocks-card__image', 'aria-hidden': props.image ? undefined : 'true' },
        h(ArticleImage, { src: props.image, alt: props.imageAlt, className: 'mngds-blocks-card__img' })),
      showBadge ? h(GalleryIconBadge, { size: 'Large', label: props.galleryLabel, className: 'mngds-blocks-card__badge' }) : null),
    h('div', { className: 'mngds-blocks-card__body' },
      h('div', { className: 'mngds-blocks-card__headline-container' },
        h(ArticleSectionKicker, { section: props.section != null ? props.section : 'Crime and Public Safety' }),
        h(HL, { className: 'mngds-blocks-card__headline' },
          props.headline != null ? props.headline : 'Norte fire that destroyed homes in South Orange County is at 80% containment')),
      h('div', { className: 'mngds-blocks-card__footer' },
        h(ArticleAuthor, { author: props.author != null ? props.author : 'Ruby Gonzales' }),
        h(ArticleTimestamp, { time: props.time != null ? props.time : '56 mins ago', dateTime: props.dateTime }))));
}
