/* Hyperlink (MNG Web Design System, Buttons page, 6282:5568; exported as "Non-Button Hyperlink").
   A plain in-text link: brand-primary 16.5px text over a 1px bottom border (dashed at rest, solid on Hover/Pressed).
   InFocus wraps the dashed underline (the inner "Underline" frame) in a 2px brand-primary box with 4px corners
   that is part of the layout (intentional, matches production). */
function Hyperlink(props) {
  var el = Object.assign(rest(props, ['state', 'label', 'href', 'className']), {
    className: cx('mngds-non-button-hyperlink', stateClass(props.state), props.className),
    href: props.href != null ? props.href : '#'
  });
  if (el.target === '_blank' && !el.rel) el.rel = 'noopener';
  return h('a', el,
    h('span', { className: 'mngds-non-button-hyperlink__underline' },
      h('span', { className: 'mngds-non-button-hyperlink__label' }, props.label != null ? props.label : props.children != null ? props.children : '...hyperlink text...')));
}
