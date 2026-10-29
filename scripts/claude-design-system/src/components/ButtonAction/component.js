/* Button Action (MNG Web Design System, Buttons page, 7075:6357; exported as "Action Button").
   Root = the variant frame (hugs, 4px corners); Button = the 32px control: 8px padding, 16px icon + 4px + 12px bold label.
   No box at rest; a 1px color/gray/min box (inside stroke, drawn as an inset shadow) on Hover, Pressed and InFocus.
   The Figma set's hidden "Icon Right" is never shown, so it is not rendered. */
function ButtonAction(props) {
  var iconName = props.iconName || 'content_copy';
  var Tag = props.href ? 'a' : 'button';
  var ctl = {
    className: cx('mngds-action-button__button', stateClass(props.state)),
    onClick: props.onClick,
    disabled: Tag === 'button' ? props.disabled : undefined
  };
  if (Tag === 'a') { ctl.href = props.href; if (props.target) { ctl.target = props.target; ctl.rel = 'noopener'; } }
  else ctl.type = props.type || 'button';
  if (props['aria-label']) ctl['aria-label'] = props['aria-label'];
  return h('div', Object.assign(rest(props, ['state', 'iconName', 'label', 'href', 'target', 'onClick', 'disabled', 'type', 'aria-label', 'className']), {
      className: cx('mngds-action-button', props.className)
    }),
    h(Tag, ctl,
      h('span', { className: 'mngds-action-button__content' },
        h(Icon, { name: iconName, size: 16, className: 'mngds-action-button__icon' }),
        h('span', { className: 'mngds-action-button__label' }, props.label != null ? props.label : props.children != null ? props.children : 'Copy Link'))));
}
