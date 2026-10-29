/* Tooltip (MNG Web Design System, Tooltips page, 7372:25744). Two types in one set:
   Type=Tooltip   short hover/focus label for an icon-only control (role="tooltip", Label);
   Type=Toggletip explanation opened by clicking an info button (Text, Show Close).
   Without `trigger` it renders the popup alone (documentation, or consumer-positioned). With `trigger`
   (one element, e.g. an icon button) it wires the spec's behavior: placement centered on the trigger with
   8px (spacing/100) to the caret tip, flip when there isn't room, show/hide rules and the aria links. */
function Tooltip(props) {
  var type = props.type || 'Tooltip';
  var isToggle = type === 'Toggletip';
  var autoId = React.useId();
  var id = props.id || 'mngds-tooltip-' + autoId.replace(/[^A-Za-z0-9_-]/g, '');
  var trigger = props.trigger;
  var stateOpen = React.useState(!!props.defaultOpen);
  var open = props.open != null ? props.open : stateOpen[0];
  var flipState = React.useState(null);
  var placement = flipState[0] || props.placement || 'Top';
  var anchorRef = React.useRef(null), popRef = React.useRef(null);

  function setOpen(v, returnFocus) {
    if (props.open == null) stateOpen[1](v);
    if (!v) flipState[1](null);
    if (props.onOpenChange) props.onOpenChange(v);
    if (!v && returnFocus && anchorRef.current) {
      var t = anchorRef.current.firstElementChild;
      if (t && t.focus) t.focus();
    }
  }

  /* Flip to the other Placement when the popup doesn't fit in the viewport. */
  React.useLayoutEffect(function () {
    if (!trigger || !open || props.flip === false || flipState[0] || !popRef.current) return;
    var r = popRef.current.getBoundingClientRect();
    var want = props.placement || 'Top';
    if (want === 'Top' && r.top < 0) flipState[1]('Bottom');
    else if (want === 'Bottom' && r.bottom > window.innerHeight) flipState[1]('Top');
  });

  /* Esc closes; for the toggletip a click outside closes too. */
  React.useEffect(function () {
    if (!trigger || !open) return;
    function onKey(e) { if (e.key === 'Escape') setOpen(false, isToggle); }
    function onDown(e) { if (anchorRef.current && !anchorRef.current.contains(e.target)) setOpen(false, false); }
    document.addEventListener('keydown', onKey);
    if (isToggle) document.addEventListener('mousedown', onDown);
    return function () { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown); };
  });

  var caret = h('span', { className: 'mngds-tooltip__caret', 'aria-hidden': 'true' },
    isToggle ? h('span', { className: 'mngds-tooltip__caret-border' }) : null,
    h('span', { className: 'mngds-tooltip__caret-fill' }));
  var showClose = props.showClose !== false;
  var box = isToggle
    ? h('div', { className: 'mngds-tooltip__box' },
        h('div', { className: 'mngds-tooltip__text-container' },
          h('p', { className: 'mngds-tooltip__text' }, props.text != null ? props.text : props.children != null ? props.children : 'Placeholder text with more information about this feature.')),
        showClose ? h(ButtonInLineClose, { className: 'mngds-tooltip__close', label: props.closeLabel || 'Close',
          onClick: function (e) { if (props.onClose) props.onClose(e); if (trigger) setOpen(false, true); } }) : null)
    : h('div', { className: 'mngds-tooltip__box' },
        h('span', { className: 'mngds-tooltip__label' }, props.label != null ? props.label : 'About this feed'));

  var popup = h('div', Object.assign(trigger ? {} : rest(props, ['type', 'placement', 'label', 'text', 'showClose', 'closeLabel', 'onClose', 'trigger', 'open', 'defaultOpen', 'onOpenChange', 'flip', 'id', 'className']), {
      id: id, ref: popRef,
      role: isToggle ? undefined : 'tooltip',
      className: cx('mngds-tooltip', 'mngds-tooltip--' + slug(type), 'mngds-tooltip--' + slug(placement), trigger && 'mngds-tooltip--anchored', trigger ? null : props.className)
    }),
    placement === 'Bottom' ? caret : null, box, placement === 'Top' ? caret : null);

  if (!trigger) return popup;

  /* Trigger wiring. Tooltip: hover (mouse only: not shown on touch) or focus; describes the trigger.
     Toggletip: click/tap toggles; aria-expanded + aria-controls. */
  var tp = trigger.props || {};
  function chain(a, b) { return function (e) { if (a) a(e); if (b) b(e); }; }
  var extra = isToggle
    ? { 'aria-expanded': open ? 'true' : 'false', 'aria-controls': id,
        onClick: chain(tp.onClick, function () { setOpen(!open, false); }) }
    : { 'aria-describedby': open ? id : undefined,
        onPointerEnter: chain(tp.onPointerEnter, function (e) { if (e.pointerType === 'mouse') setOpen(true); }),
        onPointerLeave: chain(tp.onPointerLeave, function (e) { if (e.pointerType === 'mouse') setOpen(false); }),
        onFocus: chain(tp.onFocus, function () { setOpen(true); }),
        onBlur: chain(tp.onBlur, function () { setOpen(false); }) };
  return h('span', Object.assign(rest(props, ['type', 'placement', 'label', 'text', 'showClose', 'closeLabel', 'onClose', 'trigger', 'open', 'defaultOpen', 'onOpenChange', 'flip', 'id', 'className']), {
      ref: anchorRef, className: cx('mngds-tooltip-anchor', props.className) }),
    React.cloneElement(trigger, extra),
    open ? popup : null);
}
