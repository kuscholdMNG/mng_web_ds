/* Button Modal Close (MNG Web Design System, Buttons page, 5335:16196; exported as "Pop-Up Modal Close").
   Root = the 32px circle itself, a real <button> with an accessible name (icon-only control). */
function ButtonModalClose(props) {
  return h('button', Object.assign(rest(props, ['state', 'label', 'className', 'type']), {
      type: props.type || 'button',
      className: cx('mngds-pop-up-modal-close', stateClass(props.state), props.className),
      'aria-label': props['aria-label'] || props.label || 'Close'
    }),
    h(Icon, { name: 'close', size: 12, className: 'mngds-pop-up-modal-close__icon' }));
}
