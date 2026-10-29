/* ModalsOffset (MNG Web Design System, Modal Panels page, 6497:6263). Sign-in panel for logged-out
   readers ("Sign in to [site] with Apple / Google"). Device = XLDesktop (Location=Float: floats over the page),
   SMMobile / XSFold (Location=FixedFooter: fixed to the bottom of the screen, 16px from each side).
   Options = OneTapCTA (Sign in with Apple button), GOTcustom (Google account chooser), AllOptions (both).
   The Google account chooser is Google's own UI, drawn for reference. Non-blocking: no overlay, so the
   panel is a non-modal dialog (role="dialog", aria-modal="false") labelled by its title. */
function ModalsOffset(props) {
  var device = props.device || 'XLDesktop';
  var location = props.location || (device === 'XLDesktop' ? 'Float' : 'FixedFooter');
  var options = props.options || 'OneTapCTA';
  var inline = !!props.inline;
  var footer = location === 'FixedFooter';
  var autoId = React.useId().replace(/[^A-Za-z0-9_-]/g, '');
  var titleId = 'mngds-mo-title-' + autoId;
  var site = props.site || 'fakevilledailynews.com';
  var defaults = {
    OneTapCTA: 'Sign in to ' + site + ' with your apple ID',
    GOTcustom: 'Sign in to ' + site + ' with Google',
    AllOptions: 'Sign in to ' + site + ' with Apple or Google'
  };
  var mark = { OneTapCTA: 'appleinc', GOTcustom: 'google-color', AllOptions: 'padlock' }[options] || 'appleinc';
  var showApple = options !== 'GOTcustom', showGoogle = options !== 'OneTapCTA';
  var accounts = props.accounts || [
    { name: 'Karl Uschold', email: 'kuschold@medianewsgroup.com', avatar: 'unknown', selected: true },
    { name: 'Phillip Phanatic', email: 'philly76@gmail.com', avatar: 'image' },
    { name: 'Gritty McGee', email: 'gritty@gmail.com', avatar: 'monogram', initials: 'GM' }];
  var more = props.moreAccountsLabel !== undefined ? props.moreAccountsLabel : '1 more account';

  /* Long domains wrap after a dot ("fakevilledailynews." / "com"), as in the Figma XSFold variants. */
  function wrapDots(t) {
    if (typeof t !== 'string') return t;
    var parts = t.split(/(\.)(?=\w)/), out = [];
    parts.forEach(function (p, i) { out.push(p); if (p === '.') out.push(h('wbr', { key: 'w' + i })); });
    return out;
  }
  function avatar(a) {
    var kind = a.avatar || (a.image ? 'image' : a.initials ? 'monogram' : 'unknown');
    return h('span', { className: cx('mngds-modals-offset__avatar', 'mngds-modals-offset__avatar--' + kind), 'aria-hidden': 'true' },
      kind === 'image' && a.image ? h('img', { src: a.image, alt: '' }) :
      kind === 'monogram' ? (a.initials || '') :
      kind === 'unknown' ? h(Icon, { name: 'user', size: 16, className: 'mngds-modals-offset__avatar-icon' }) : null);
  }
  var chooser = showGoogle ? h('div', { className: 'mngds-modals-offset__chooser' },
    h('div', { className: 'mngds-modals-offset__accounts' },
      accounts.map(function (a, i) {
        return h(React.Fragment, { key: i },
          h('button', { type: 'button', className: cx('mngds-modals-offset__account', a.selected && 'is-selected'),
              onClick: props.onAccount ? function (e) { props.onAccount(a, i, e); } : undefined },
            avatar(a),
            h('span', { className: 'mngds-modals-offset__account-text' },
              h('span', { className: 'mngds-modals-offset__account-name' }, a.name),
              h('span', { className: 'mngds-modals-offset__account-email' }, a.email))),
          h('span', { className: 'mngds-modals-offset__divider', 'aria-hidden': 'true' }));
      }),
      more != null ? h('button', { type: 'button', className: 'mngds-modals-offset__more', onClick: props.onMoreAccounts }, more) : null),
    footer ? h('span', { className: 'mngds-modals-offset__scrollbar', 'aria-hidden': 'true' }, h('span', { className: 'mngds-modals-offset__scroll-indicator' })) : null) : null;

  var pay = showApple ? h('button', { type: 'button', className: 'mngds-modals-offset__pay', onClick: props.onApple },
    h('span', { className: 'mngds-modals-offset__pay-box' },
      h(Icon, { name: 'appleinc', size: 24, className: 'mngds-modals-offset__pay-icon' }),
      h('span', { className: 'mngds-modals-offset__pay-label' }, props.appleLabel || 'Sign in with Apple'))) : null;

  var used = ['device', 'location', 'options', 'inline', 'open', 'site', 'title', 'accounts', 'moreAccountsLabel', 'onAccount',
    'onMoreAccounts', 'appleLabel', 'onApple', 'onClose', 'closeLabel', 'className'];
  if (props.open === false) return null;
  return h('div', Object.assign(rest(props, used), {
      role: 'dialog', 'aria-modal': 'false', 'aria-labelledby': titleId,
      className: cx('mngds-modals-offset', 'mngds-modals-offset--' + slug(device), 'mngds-modals-offset--' + slug(location),
        'mngds-modals-offset--' + slug(options), inline && 'mngds-modals-offset--inline', props.className)
    }),
    h(ButtonInLineClose, { className: 'mngds-modals-offset__close', label: props.closeLabel || 'Close', onClick: props.onClose }),
    h('div', { className: 'mngds-modals-offset__contents' },
      h('div', { className: 'mngds-modals-offset__title' },
        h('span', { className: 'mngds-modals-offset__mark' }, mark === 'google-color'
          /* Four-color Google mark: the icon font's four layered glyphs (tokens/icons/icons.json "layers"). */
          ? h('span', { className: 'mngds-icon mngds-modals-offset__mark-icon mngds-modals-offset__google', 'aria-hidden': 'true', 'data-icon': 'google-color' },
              ['ea25', 'ea2c', 'ea2d', 'ea2e'].map(function (cp) { return h('span', { key: cp, className: 'mngds-modals-offset__google-' + cp }, String.fromCodePoint(parseInt(cp, 16))); }))
          : h(Icon, { name: mark, size: 16, className: 'mngds-modals-offset__mark-icon' })),
        h('h2', { id: titleId, className: 'mngds-modals-offset__title-text' }, wrapDots(props.title != null ? props.title : defaults[options]))),
      pay ? h('div', { className: 'mngds-modals-offset__main' }, pay) : null,
      chooser));
}
