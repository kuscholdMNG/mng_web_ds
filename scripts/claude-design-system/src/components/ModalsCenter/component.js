/* ModalsCenter (MNG Web Design System, Modal Panels page, 3040:2262). Centered pop-up modal.
   Root = the screen with the 50% black overlay (each Figma variant is the whole screen); Content Frame =
   the dialog card (role="dialog", aria-modal, labelled by the title). By default the root is fixed over the
   viewport; `inline` renders it in flow at the Device's Figma size so previews and canvases show it. */
function ModalsCenter(props) {
  var device = props.device || 'Desktop';
  var inline = !!props.inline;
  var scroll = device === 'MobileScroll';
  var autoId = React.useId().replace(/[^A-Za-z0-9_-]/g, '');
  var titleId = 'mngds-mc-title-' + autoId, subId = 'mngds-mc-sub-' + autoId;
  var cardRef = React.useRef(null);
  var onClose = props.onClose;

  /* Modal behavior (not inline): focus moves into the card, Tab stays inside it, Esc closes,
     and focus returns to where it was when the modal closes. */
  React.useEffect(function () {
    if (inline || props.open === false) return;
    var prev = document.activeElement, card = cardRef.current;
    if (card) card.focus();
    function onKey(e) {
      if (e.key === 'Escape' && onClose) { e.stopPropagation(); onClose(e); }
      if (e.key === 'Tab' && card) {
        var f = card.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])');
        if (!f.length) { e.preventDefault(); return; }
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || document.activeElement === card)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', onKey);
    return function () { document.removeEventListener('keydown', onKey); if (prev && prev.focus) prev.focus(); };
  }, [inline, props.open]);

  if (props.open === false) return null;

  var close = h(ButtonModalClose, { className: 'mngds-modals-center__close', label: props.closeLabel || 'Close', onClick: onClose });
  var showIcon = props.showIcon !== false;
  var body = props.body !== undefined ? props.body : 'Body Section (As Needed)';
  var hasBody = body != null || props.children != null;
  var top = props.topLinkLabel !== undefined ? props.topLinkLabel : 'CTA Hyperlink';
  var bottom = props.bottomLinkLabel !== undefined ? props.bottomLinkLabel : 'CTA Hyperlink';
  var primary = props.primaryLabel !== undefined ? props.primaryLabel : 'CTA Button';
  var cta = props.actions !== undefined ? props.actions : [
    top != null ? h(ButtonLinkstyle, { key: 't', label: top, onClick: props.onTopLink, href: props.topLinkHref }) : null,
    primary != null ? h(ButtonPrimary, { key: 'p', label: primary, onClick: props.onPrimary, href: props.primaryHref }) : null,
    bottom != null ? h(ButtonLinkstyle, { key: 'b', label: bottom, onClick: props.onBottomLink, href: props.bottomLinkHref }) : null];

  var card = h('div', {
      ref: cardRef, className: 'mngds-modals-center__content', role: 'dialog', 'aria-modal': 'true',
      'aria-labelledby': titleId, 'aria-describedby': props.subtitle !== null ? subId : undefined, tabIndex: -1
    },
    h('div', { className: 'mngds-modals-center__header' },
      showIcon ? h('div', { className: 'mngds-modals-center__icon-container' },
        h(Icon, { name: props.iconName || 'notification', size: 16, className: 'mngds-modals-center__icon' })) : null,
      h('div', { className: 'mngds-modals-center__text' },
        h('h2', { id: titleId, className: 'mngds-modals-center__title' }, props.title != null ? props.title : 'Header Title'),
        props.subtitle !== null ? h('p', { id: subId, className: 'mngds-modals-center__subtitle' }, props.subtitle != null ? props.subtitle : 'Sub-Title Text') : null)),
    hasBody ? h('div', { className: 'mngds-modals-center__body' },
      body != null ? (typeof body === 'string' ? h('p', { className: 'mngds-modals-center__body-text' }, body) : body) : null,
      props.children) : null,
    props.message ? h('div', { className: 'mngds-modals-center__message' }, props.message) : null,
    cta && (!Array.isArray(cta) || cta.some(Boolean)) ? h('div', { className: 'mngds-modals-center__cta' }, cta) : null,
    scroll ? null : close);

  var used = ['device', 'inline', 'open', 'offsetTop', 'title', 'subtitle', 'showIcon', 'iconName', 'body', 'message', 'actions',
    'topLinkLabel', 'bottomLinkLabel', 'primaryLabel', 'onTopLink', 'onBottomLink', 'onPrimary', 'topLinkHref', 'bottomLinkHref',
    'primaryHref', 'onClose', 'closeLabel', 'className', 'style'];
  /* A click on the overlay (outside the card) closes. */
  function onOverlay(e) { if (onClose && !(cardRef.current && cardRef.current.contains(e.target)) && !e.target.closest('.mngds-modals-center__controls')) onClose(e); }
  return h('div', Object.assign(rest(props, used), {
      className: cx('mngds-modals-center', 'mngds-modals-center--' + slug(device), inline && 'mngds-modals-center--inline', props.className),
      style: Object.assign(inline ? {} : { top: (props.offsetTop || 0) + (typeof props.offsetTop === 'string' ? '' : 'px') }, props.style),
      onClick: onOverlay
    }),
    scroll ? h('div', { className: 'mngds-modals-center__controls' }, close) : null,
    scroll ? h('div', { className: 'mngds-modals-center__scroller' }, h('div', { className: 'mngds-modals-center__card' }, card))
           : h('div', { className: 'mngds-modals-center__card' }, card));
}
