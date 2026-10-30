/* TopZone Article Card (WordPress Elements, Homepage, 3336:46079). Device = production's breakpoints for these cards:
   XS (639px and below), M (800–1039px), L (1040–1279px), XL (1280px and up). The four Zone 1 story cards beside the Zone 1
   lead. XL (built 336) and M (197) stack the image over the headline; L (507) and XS (340) are thumbnail rows (image beside
   the headline), XS with a 1px color/gray/500 bottom rule. Production's 640–799px layout has no Figma variant yet.
   The headline is the link when `href` is given. The Article Status Badge is hidden in every Figma variant and isn't drawn. */
function TopZoneArticleCard(props) {
  /* Short names, the full Figma values ('XL (≥1280px)') and the names used before 2026-10-30 (Desktop, 1024, 1100, Mobile) all work. */
  var d = String(props.device || 'XS');
  var device = ({ Desktop: 'XL', '1024': 'M', '1100': 'L', Mobile: 'XS' })[d] || d.split(' ')[0];
  var row = device === 'XS' || device === 'L';
  var HL = 'h' + (props.headingLevel || 3);
  var headline = props.headline != null ? props.headline : 'Article Headline on News paper homepage in second zone position';
  var root = Object.assign(rest(props, ['device', 'headline', 'image', 'imageAlt', 'href', 'target', 'headingLevel', 'className']), {
    className: cx('mngds-topzone-article-card', 'mngds-topzone-article-card--' + slug(device), row && 'mngds-topzone-article-card--row', props.className)
  });
  var image = h('div', { className: 'mngds-topzone-article-card__image', 'aria-hidden': props.image ? undefined : 'true' },
    h(ArticleImage, { src: props.image, alt: props.imageAlt, label: row ? 'IMAGE' : undefined, className: 'mngds-topzone-article-card__img' }));
  var title = h(HL, { className: 'mngds-topzone-article-card__headline' },
    props.href ? h('a', { className: 'mngds-topzone-article-card__link', href: props.href, target: props.target, rel: props.target ? 'noopener' : undefined }, headline) : headline);
  return h('div', root,
    row ? h('div', { className: 'mngds-topzone-article-card__content' }, image, h('div', { className: 'mngds-topzone-article-card__text' }, title))
      : h(React.Fragment, null, image, title),
    device === 'XS' ? h('div', { className: 'mngds-topzone-article-card__rule', 'aria-hidden': 'true' }) : null);
}
