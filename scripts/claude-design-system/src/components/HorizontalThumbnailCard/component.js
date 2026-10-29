/* Horizontal Thumbnail Card (WordPress Elements, Homepage, 3362:2992). Style = Standard x Device = Desktop / Mobile / Tablet;
   Show Gallery Icon. The Photos Block's secondary list item: a fixed-size thumbnail on the left (Desktop 110x74, Tablet 90x60,
   Mobile 90x51) with an optional Gallery Icon Badge (Small, 3.75px right / 5px bottom), the headline filling the rest
   (Noto Sans SemiBold 15/19; Mobile: clipped to the 51px row, two lines with an ellipsis), then a 1px color/gray/500 rule.
   The headline is the link when `href` is given. */
function HorizontalThumbnailCard(props) {
  var device = props.device || 'Mobile';
  var cardStyle = typeof props.style === 'string' ? props.style : 'Standard';
  var showBadge = props.showGalleryIcon !== false;
  var HL = 'h' + (props.headingLevel || 3);
  var headline = props.headline != null ? props.headline : 'Article Headline on News paper homepage in thumbnail list position';
  var root = Object.assign(rest(props, ['style', 'device', 'showGalleryIcon', 'headline', 'image', 'imageAlt', 'href', 'target',
    'headingLevel', 'galleryLabel', 'className']), {
    className: cx('mngds-horizontal-thumbnail-card', 'mngds-horizontal-thumbnail-card--' + slug(cardStyle),
      'mngds-horizontal-thumbnail-card--' + slug(device), props.className),
    style: typeof props.style === 'object' ? props.style : undefined
  });
  return h('div', root,
    h('div', { className: 'mngds-horizontal-thumbnail-card__content' },
      h('div', { className: 'mngds-horizontal-thumbnail-card__media' },
        h('div', { className: 'mngds-horizontal-thumbnail-card__image', 'aria-hidden': props.image ? undefined : 'true' },
          h(ArticleImage, { src: props.image, alt: props.imageAlt, className: 'mngds-horizontal-thumbnail-card__img' })),
        showBadge ? h(GalleryIconBadge, { size: 'Small', label: props.galleryLabel, className: 'mngds-horizontal-thumbnail-card__badge' }) : null),
      h(HL, { className: 'mngds-horizontal-thumbnail-card__headline' },
        h('span', { className: 'mngds-horizontal-thumbnail-card__text' },
          props.href ? h('a', { className: 'mngds-horizontal-thumbnail-card__link', href: props.href, target: props.target, rel: props.target ? 'noopener' : undefined }, headline) : headline))),
    h('div', { className: 'mngds-horizontal-thumbnail-card__rule', 'aria-hidden': 'true' }));
}
