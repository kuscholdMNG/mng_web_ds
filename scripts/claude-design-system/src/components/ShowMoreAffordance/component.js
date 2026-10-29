/* Show More Affordance (WordPress Elements, Homepage, 3634:49423). Production values on purpose (Karl, 2026-10-23).
   The whole affordance is the control (production .load-more): a 1px rule along the top, the rotated notch on it,
   and the centered uppercase label with 40px above and below (97px tall). Fills its column. */
function ShowMoreAffordance(props) {
  var Tag = props.href ? 'a' : 'button';
  var attrs = rest(props, ['label', 'state', 'href', 'target', 'type', 'className']);
  var ctl = Object.assign(attrs, { className: cx('mngds-show-more-affordance', stateClass(props.state), props.className) });
  if (Tag === 'a') { ctl.href = props.href; if (props.target) { ctl.target = props.target; ctl.rel = 'noopener'; } }
  else ctl.type = props.type || 'button';
  return h(Tag, ctl,
    h('span', { className: 'mngds-show-more-affordance__rule', 'aria-hidden': 'true' }),
    h('span', { className: 'mngds-show-more-affordance__notch', 'aria-hidden': 'true' }),
    h('span', { className: 'mngds-show-more-affordance__label' }, props.label != null ? props.label : props.children != null ? props.children : 'Load More'));
}
