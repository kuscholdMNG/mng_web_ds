/* Button In-Line Close (MNG Web Design System, Buttons page, 5335:16200; exported as "In-Line Close").
   Root = the 40px hit area (Figma "Button"), a real <button>; Box = the 28px square that gets a fill and
   border on Hover/Pressed; Icon = 12px "close". Icon-only, so it carries an aria-label. */
function ButtonInLineClose(props) {
  return h('button', Object.assign(rest(props, ['state', 'label', 'className', 'type']), {
      type: props.type || 'button',
      className: cx('mngds-in-line-close', stateClass(props.state), props.className),
      'aria-label': props['aria-label'] || props.label || 'Close'
    }),
    h('span', { className: 'mngds-in-line-close__box' },
      h(Icon, { name: 'close', size: 12, className: 'mngds-in-line-close__icon' })));
}
