/* TopZone Article Card (WordPress Elements, Homepage, 3336:46079). Device = Desktop / 1024 / 1100 / Mobile.
   The four Zone 1 story cards beside the Zone 1 lead. Desktop (336) and 1024 (197) stack the image over the headline;
   1100 (507) and Mobile (340) are thumbnail rows (image beside the headline), Mobile with a 1px color/gray/500 bottom rule.
   The headline is the link when `href` is given. The Article Status Badge is hidden in every Figma variant and isn't drawn. */
function TopZoneArticleCard(props) {
  var device = props.device || 'Mobile';
  var row = device === 'Mobile' || device === '1100';
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
    device === 'Mobile' ? h('div', { className: 'mngds-topzone-article-card__rule', 'aria-hidden': 'true' }) : null);
}
