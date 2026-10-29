/* Gallery Icon Badge (WordPress Elements, Homepage, 3665:32148). Size = Small / Large x State = Default / Hover.
   color/gray/min circle, 1px color/gray/max border inside, 85% opacity, white icomoon "slideshow" icon centered.
   Not a control: it labels the image as a photo gallery (role img + aria-label), or is decorative with label={null}. */
function GalleryIconBadge(props) {
  var size = props.size || 'Small';
  var label = props.label === undefined ? 'Photo gallery' : props.label;
  var s = slug(size);
  return h('span', Object.assign(rest(props, ['size', 'state', 'label', 'className']), {
      className: cx('mngds-gallery-icon-badge', 'mngds-gallery-icon-badge--' + s, stateClass(props.state), props.className),
      role: label ? 'img' : undefined,
      'aria-label': label || undefined,
      'aria-hidden': label ? undefined : 'true'
    }),
    h(Icon, { name: 'slideshow', size: 'var(--mng-gallery-icon-badge-size-' + s + '-icons-width)', className: 'mngds-gallery-icon-badge__icon' }));
}
