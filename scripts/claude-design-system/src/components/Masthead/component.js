/* Masthead (WordPress Elements, Menus and Parts, 456:2572). Page = Home for now (Karl, 2026-10-30: Home first).
   Top of the page (Default / AdFree) in flow; the condensed 64px bar (Scrolled / AdFree-Scrolled) sticks to the top
   of the scroll area once the reader scrolls (production: headroom.js .headroom--not-top). The device comes from the
   rendered width (WordPress grid: 1040 / 800 / 640 / 360) unless `device` forces one. Parts drawn here: SectionMenu
   (closed), AccountMenu (closed: UserStatus, UserPic, the search button), Weather Bug, Ad Blocks. */
var MASTHEAD_NAV = ['News', 'Fakeville Local', 'Sportsball', 'Stuff Happening', 'Obituaries', 'Sponsored Content',
  'Public Notices', 'Business', 'Politics', 'Entertainment', 'Suburbs'];
var MASTHEAD_TRENDING = ['Dragon sightings near Fakeville shire', 'Pseudonyms up 3-1', 'Fire Storms in the forecast',
  'New Castle Complex Building Stalled'];
/* Weather Bug's "tornado" glyph (an external Figma library icon, not in the MNG icon font), exported 2026-10-30. */
var MASTHEAD_TORNADO = 'M1.82 3.98C1.70 3.77 1.62 3.52 1.62 3.25C1.62 2.82 1.81 2.47 2.04 2.21C2.26 1.96 2.56 1.75 2.87 1.58C3.50 1.24 4.36 0.96 5.34 0.73C7.33 0.27 10.04 0 13 0C15.95 0 18.66 0.27 20.65 0.73C21.63 0.96 22.49 1.24 23.12 1.58C23.43 1.75 23.73 1.96 23.95 2.21C24.18 2.47 24.37 2.82 24.37 3.25C24.37 4.89 23.80 5.86 23.34 6.66C23.27 6.77 23.21 6.88 23.15 6.99C22.92 7.41 22.73 7.81 22.64 8.30C22.57 8.68 22.55 9.15 22.62 9.75C22.87 9.72 23.13 9.79 23.32 9.98C23.64 10.30 23.64 10.81 23.32 11.13C23.22 11.23 23.10 11.34 22.97 11.45C23.30 13.26 23.11 14.68 22.48 15.86C21.75 17.22 20.48 18.10 19.20 18.87C18.87 19.07 18.53 19.27 18.19 19.46C15.85 20.82 13.44 22.21 12.12 25.48C12.03 25.71 11.84 25.89 11.60 25.96C11.37 26.03 11.11 25.99 10.91 25.85L10.91 25.85L10.90 25.85L10.90 25.84L10.88 25.83C10.87 25.82 10.85 25.81 10.82 25.79C10.78 25.76 10.72 25.71 10.64 25.64C10.49 25.52 10.29 25.33 10.07 25.09C9.62 24.62 9.09 23.90 8.73 22.95C8.49 22.33 8.34 21.62 8.32 20.85C8.20 20.70 8.12 20.51 8.12 20.31L8.12 20.30L8.12 20.30L8.12 20.29L8.12 20.28C8.12 20.27 8.12 20.26 8.12 20.24C8.12 20.22 8.13 20.19 8.13 20.15C8.14 20.08 8.16 19.99 8.20 19.89C8.25 19.77 8.33 19.64 8.44 19.52C8.59 18.73 8.88 17.87 9.37 16.97C9.19 16.87 9.04 16.71 8.97 16.50C8.83 16.08 9.06 15.62 9.49 15.47C9.85 15.35 10.18 15.28 10.49 15.24C10.57 15.13 10.65 15.03 10.74 14.92C11.20 14.35 11.39 13.89 11.45 13.53C11.50 13.18 11.43 12.86 11.25 12.52C10.84 11.78 9.92 11.05 8.63 10.20C8.31 9.99 7.98 9.78 7.64 9.56C7.57 9.52 7.51 9.48 7.44 9.43C6.67 9.27 5.99 9.08 5.43 8.89C5.00 8.75 4.77 8.29 4.91 7.86C4.93 7.82 4.94 7.78 4.96 7.74C4.84 7.64 4.71 7.55 4.59 7.45C3.43 6.51 2.37 5.39 1.82 3.98ZM5.03 5.68C5.21 5.85 5.41 6.02 5.61 6.18C6.38 6.80 7.22 7.36 8.07 7.91C10.58 8.42 13.98 8.72 16.90 8.14C17.34 8.05 17.77 8.33 17.85 8.77C17.94 9.21 17.66 9.64 17.22 9.73C15.24 10.12 13.09 10.15 11.11 9.98C11.76 10.51 12.32 11.09 12.67 11.74C13.00 12.35 13.16 13.02 13.05 13.77C12.97 14.30 12.76 14.83 12.42 15.37C12.54 15.40 12.66 15.43 12.77 15.45L12.79 15.46C13.57 15.65 14.19 15.80 15.18 15.47C15.60 15.33 16.06 15.56 16.20 15.99C16.35 16.41 16.12 16.87 15.69 17.02C14.25 17.50 13.24 17.25 12.40 17.04L12.39 17.03C12.03 16.94 11.70 16.86 11.35 16.83C10.74 17.73 10.37 18.54 10.17 19.27C10.40 19.34 10.65 19.44 10.92 19.58C11.32 19.78 11.48 20.27 11.28 20.67C11.08 21.07 10.60 21.23 10.19 21.03C10.11 20.99 10.03 20.95 9.95 20.92C9.97 21.48 10.09 21.96 10.25 22.37C10.47 22.97 10.80 23.46 11.10 23.82C12.72 20.72 15.30 19.24 17.42 18.03C17.75 17.84 18.06 17.66 18.37 17.48C19.62 16.72 20.54 16.03 21.05 15.09C21.40 14.45 21.59 13.62 21.47 12.46C20.17 13.17 18.37 13.81 16.25 13.81C15.80 13.81 15.43 13.44 15.43 13C15.43 12.55 15.80 12.18 16.25 12.18C18.34 12.18 20.06 11.45 21.15 10.77C21.14 10.75 21.14 10.73 21.14 10.72C20.92 9.62 20.91 8.76 21.04 8.01C21.18 7.26 21.46 6.69 21.73 6.20C21.80 6.07 21.87 5.95 21.94 5.83C22.05 5.65 22.15 5.47 22.24 5.30C21.77 5.47 21.23 5.63 20.65 5.76C18.66 6.22 15.95 6.5 13 6.5C10.04 6.5 7.33 6.22 5.34 5.76C5.24 5.74 5.13 5.71 5.03 5.68ZM22.69 3.25C22.62 3.18 22.51 3.10 22.34 3.01C21.90 2.77 21.21 2.53 20.28 2.31C18.45 1.89 15.87 1.62 13 1.62C10.12 1.62 7.54 1.89 5.71 2.31C4.78 2.53 4.09 2.77 3.65 3.01C3.48 3.10 3.37 3.18 3.30 3.25C3.37 3.31 3.48 3.39 3.65 3.48C4.09 3.72 4.78 3.96 5.71 4.18C7.54 4.60 10.12 4.87 13 4.87C15.87 4.87 18.45 4.60 20.28 4.18C21.21 3.96 21.90 3.72 22.34 3.48C22.51 3.39 22.62 3.31 22.69 3.25Z';

function mastheadLink(item, i, cls) {
  var it = typeof item === 'string' ? { label: item } : item;
  return h('li', { key: it.id || i, className: cls + '-item' },
    h('a', { className: cls + '-link', href: it.href || '#', onClick: it.onClick }, it.label));
}

/* SectionMenu, View = Closed: the hamburger, with "All Sections" at 1040px and up. */
function MastheadSectionToggle(p) {
  var showTitle = p.device === 'XL-Desktop';
  return h('button', { type: 'button', className: 'mngds-masthead__menu-toggle', 'aria-expanded': p.menuOpen ? 'true' : 'false',
      'aria-controls': p.menuId || undefined, 'aria-label': showTitle ? undefined : p.label, onClick: p.onClick },
    h('span', { className: 'mngds-masthead__menu-icon' }, h(Icon, { name: 'hamburger', size: 16 })),
    showTitle ? h('span', { className: 'mngds-masthead__menu-title' }, p.label) : null);
}

/* UserPic / UserImage (Size = small, 30px): the reader's photo, initials (monogram) or the generic person (unknown). */
function MastheadAvatar(p) {
  var u = p.user || {};
  if (p.unknown) return h('span', { className: 'mngds-masthead__avatar mngds-masthead__avatar--unknown', 'aria-hidden': 'true' }, h(Icon, { name: 'user', size: 16 }));
  if (u.imageSrc) return h('span', { className: 'mngds-masthead__avatar', 'aria-hidden': 'true' }, h('img', { src: u.imageSrc, alt: '' }));
  var initials = u.initials || String(u.name || 'Reader').split(/\s+/).map(function (w) { return w.charAt(0); }).join('').slice(0, 2).toUpperCase();
  return h('span', { className: 'mngds-masthead__avatar mngds-masthead__avatar--monogram', 'aria-hidden': 'true' }, initials);
}

/* AccountMenu, View = Closed (UserStatus inside), plus the SearchBar (Status = Default) slot. */
function MastheadAccount(p) {
  var xl = p.device === 'XL-Desktop';
  var search = h('button', { type: 'button', className: 'mngds-masthead__search', 'aria-label': p.searchLabel || 'Search', onClick: p.onSearchClick },
    h(Icon, { name: 'search', size: 20 }));
  var status;
  if (!p.adFree && xl) {
    status = h('span', { className: 'mngds-masthead__buttons' },
      h(ButtonPrimary, { label: p.subscribeLabel || 'Subscribe', href: p.subscribeHref, onClick: p.onSubscribe }),
      h(ButtonPrimary, { label: p.logInLabel || 'Log In', href: p.logInHref, onClick: p.onLogIn }));
  } else {
    var name = p.adFree ? 'Account menu' + (p.user && p.user.name ? ', ' + p.user.name : '') : 'Log in or subscribe';
    status = h('button', { type: 'button', className: 'mngds-masthead__account', 'aria-haspopup': 'true', 'aria-expanded': 'false',
        'aria-label': p.accountLabel || name, onClick: p.onAccountClick },
      h(MastheadAvatar, { user: p.user, unknown: !p.adFree }),
      h('span', { className: 'mngds-masthead__chevron' }, h(Icon, { name: 'arrow-down', size: 10 })));
  }
  return h('div', { className: 'mngds-masthead__account-menu' }, status, search);
}

function MastheadAd(p) {
  var name = { 'XL-Desktop': 'Top Leaderboard 970x250', 'LG-TabletH': 'Top Leaderboard 970x250', 'MD-TabletV': 'Top Leaderboard 728x90',
    'SM-Mobile': 'Top Leaderboard 320x50', 'XS-Fold': 'Top Leaderboard 320x100' }[p.device];
  return h('div', { className: 'mngds-masthead__ad' }, p.renderAd ? p.renderAd(name) : h(AdBlocks, { name: name }));
}

/* The 64px row: hamburger (+ All Sections), logo, account. Used at the top of the page below 1040px and as the
   condensed bar at every width. */
function MastheadBar(p) {
  var big = p.device === 'XL-Desktop' || p.device === 'LG-TabletH';
  return h('div', { className: 'mngds-masthead__bar' },
    h('div', { className: 'mngds-masthead__bar-start' }, h(MastheadSectionToggle, p.toggle)),
    h('a', { className: 'mngds-masthead__logo-link' + (big ? ' mngds-masthead__logo-link--large' : ''), href: p.homeHref || '/', 'aria-label': p.siteName },
      p.logo || h(PlaceholderLogo, { className: 'mngds-masthead__logo', decorative: true })),
    h('div', { className: 'mngds-masthead__bar-end' }, h(MastheadAccount, p.account)));
}

function Masthead(props) {
  var page = props.page || 'Home';
  if (page !== 'Home' && typeof console !== 'undefined') console.warn('[mng_web_design_system] Masthead: only Page=Home is built so far; "' + page + '" renders as Home.');
  var dv = useDevice(props.device);
  var device = dv[0];
  var forced = props.state;
  var adFree = forced ? forced.indexOf('AdFree') === 0 : !!props.adFree;
  var showAds = !adFree && props.ads !== false;
  var xl = device === 'XL-Desktop';
  var siteName = props.siteName || 'Fakeville Daily News';
  var stuck = React.useState(false);
  var sentinel = React.useRef(null);
  var sticky = !forced && props.sticky !== false;

  React.useEffect(function () {
    if (!sticky || !sentinel.current || !window.IntersectionObserver) return undefined;
    var io = new IntersectionObserver(function (es) {
      var e = es[es.length - 1];
      var top = e.rootBounds ? e.rootBounds.top : 0;
      stuck[1](!e.isIntersecting && e.boundingClientRect.top < top);
    }, { root: props.scrollRoot || null, threshold: 0 });
    io.observe(sentinel.current);
    return function () { io.disconnect(); };
  }, [sticky, props.scrollRoot, device]);

  var common = {
    device: device, siteName: siteName, logo: props.logo, homeHref: props.homeHref,
    toggle: { device: device, label: props.sectionsLabel || 'All Sections', onClick: props.onMenuClick, menuOpen: props.menuOpen, menuId: props.menuId },
    account: { device: device, adFree: adFree, user: props.user, onSearchClick: props.onSearchClick, onSubscribe: props.onSubscribe, onLogIn: props.onLogIn,
      subscribeHref: props.subscribeHref, logInHref: props.logInHref, onAccountClick: props.onAccountClick }
  };
  var cls = cx('mngds-masthead', 'mngds-masthead--' + slug(device), adFree && 'mngds-masthead--ad-free', props.className);

  /* Forced condensed states (previews): just the bar, with its rule and shadow. */
  if (forced === 'Scrolled' || forced === 'AdFree-Scrolled') {
    return h('header', Object.assign(rest(props, ['page', 'device', 'state', 'adFree', 'ads', 'sticky', 'scrollRoot', 'scrollThreshold', 'navItems', 'trending', 'date', 'temperature', 'eEditionLabel', 'eEditionHref', 'sectionsLabel', 'onMenuClick', 'menuOpen', 'menuId', 'onSearchClick', 'onSubscribe', 'onLogIn', 'subscribeHref', 'logInHref', 'onAccountClick', 'user', 'logo', 'siteName', 'homeHref', 'renderAd', 'className']), {
      ref: dv[1], className: cx(cls, 'mngds-masthead--scrolled') }), h(MastheadBar, common));
  }

  var top;
  if (xl) {
    var nav = props.navItems || MASTHEAD_NAV;
    var trending = props.trending || MASTHEAD_TRENDING;
    top = h(React.Fragment, null,
      h('div', { className: 'mngds-masthead__menus' },
        h('div', { className: 'mngds-masthead__bar-start' }, h(MastheadSectionToggle, common.toggle)),
        h('div', { className: 'mngds-masthead__menus-middle' }),
        h('div', { className: 'mngds-masthead__bar-end' }, h(MastheadAccount, common.account))),
      h('div', { className: 'mngds-masthead__weather-row' },
        h('div', { className: 'mngds-masthead__weather' },
          h('div', { className: 'mngds-masthead__temp' },
            h('span', { className: 'mngds-masthead__temp-value' }, props.temperature || '87°F'),
            h('svg', { className: 'mngds-masthead__weather-icon', viewBox: '0 0 26 26', 'aria-hidden': 'true', focusable: 'false' }, h('path', { d: MASTHEAD_TORNADO, fill: 'currentColor' }))),
          h('div', { className: 'mngds-masthead__date' },
            h('span', { className: 'mngds-masthead__date-text' }, props.date || 'Wednesday, September 25th, 2022'),
            h('a', { className: 'mngds-masthead__e-edition', href: props.eEditionHref || '#' }, props.eEditionLabel || 'Today’s E Edition'))),
        h('a', { className: 'mngds-masthead__logo-link mngds-masthead__logo-link--large', href: props.homeHref || '/', 'aria-label': siteName },
          props.logo || h(PlaceholderLogo, { className: 'mngds-masthead__logo', decorative: true })),
        h('div', { className: 'mngds-masthead__sponsorship' },
          showAds ? (props.renderAd ? props.renderAd('Sponsorship 1 320x50') : h(AdBlocks, { name: 'Sponsorship 1 320x50' })) : null)),
      h('nav', { className: 'mngds-masthead__nav', 'aria-label': props.navLabel || 'Main' },
        h('ul', { className: 'mngds-masthead__nav-list' }, nav.map(function (it, i) { return mastheadLink(it, i, 'mngds-masthead__nav'); }))),
      h('div', { className: 'mngds-masthead__rule' }),
      h('div', { className: 'mngds-masthead__trending' },
        h('span', { className: 'mngds-masthead__trending-label', id: props.id ? props.id + '-trending' : undefined }, props.trendingLabel || 'Trending:'),
        h('ul', { className: 'mngds-masthead__trending-list', 'aria-label': 'Trending' }, trending.map(function (it, i) { return mastheadLink(it, i, 'mngds-masthead__trending'); }))));
  } else {
    top = h(React.Fragment, null, h(MastheadBar, common), h('div', { className: 'mngds-masthead__rule' }));
  }

  var used = ['page', 'device', 'state', 'adFree', 'ads', 'sticky', 'scrollRoot', 'scrollThreshold', 'navItems', 'navLabel', 'trending', 'trendingLabel', 'date', 'temperature', 'eEditionLabel', 'eEditionHref', 'sectionsLabel', 'onMenuClick', 'menuOpen', 'menuId', 'onSearchClick', 'onSubscribe', 'onLogIn', 'subscribeHref', 'logInHref', 'onAccountClick', 'user', 'logo', 'siteName', 'homeHref', 'renderAd', 'className'];
  var threshold = props.scrollThreshold != null ? props.scrollThreshold : (xl ? 450 : 1);
  return h(React.Fragment, null,
    h('header', Object.assign(rest(props, used), { ref: dv[1], className: cls }),
      sticky ? h('span', { ref: sentinel, className: 'mngds-masthead__sentinel', style: { top: threshold + 'px' }, 'aria-hidden': 'true' }) : null,
      top,
      showAds ? h(MastheadAd, { device: device, renderAd: props.renderAd }) : null),
    sticky ? h('div', { className: cx('mngds-masthead', 'mngds-masthead--' + slug(device), 'mngds-masthead--scrolled', 'mngds-masthead__sticky', stuck[0] && 'is-stuck'),
      'aria-hidden': stuck[0] ? undefined : 'true' }, h(MastheadBar, common)) : null);
}
