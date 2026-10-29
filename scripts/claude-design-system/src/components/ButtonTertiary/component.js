/* Button Tertiary (MNG Web Design System, Buttons page, 5333:16089).
   Root = the variant frame (8px side margin, Desktop hugs / Mobile fills); Button = the 40px control
   with a 1px gray inside stroke that changes color by state (an inset shadow, so it adds no width, as in Figma). */
function ButtonTertiary(props) {
  var bp = props.breakpoint || 'Desktop';
  var icon = props.icon || 'None';
  var iconName = props.iconName || 'new-tab';
  var Tag = props.href ? 'a' : 'button';
  var ctl = {
    className: cx('mngds-button-tertiary__button', stateClass(props.state)),
    onClick: props.onClick,
    disabled: Tag === 'button' ? props.disabled : undefined
  };
  if (Tag === 'a') { ctl.href = props.href; if (props.target) { ctl.target = props.target; ctl.rel = 'noopener'; } }
  else ctl.type = props.type || 'button';
  if (props['aria-label']) ctl['aria-label'] = props['aria-label'];
  return h('div', Object.assign(rest(props, ['breakpoint', 'icon', 'iconName', 'state', 'label', 'href', 'target', 'onClick', 'disabled', 'type', 'aria-label', 'className']), {
      className: cx('mngds-button-tertiary', 'mngds-button-tertiary--' + slug(bp), props.className)
    }),
    h(Tag, ctl,
      h('span', { className: 'mngds-button-tertiary__content' },
        icon === 'Left' ? h(Icon, { name: iconName, size: 16, className: 'mngds-button-tertiary__icon mngds-button-tertiary__icon--left' }) : null,
        h('span', { className: 'mngds-button-tertiary__label' }, props.label != null ? props.label : props.children != null ? props.children : 'Tertiary Button'),
        icon === 'Right' ? h(Icon, { name: iconName, size: 16, className: 'mngds-button-tertiary__icon mngds-button-tertiary__icon--right' }) : null)));
}
