/* Ad Blocks (WordPress Elements, Ads and Sponsored, 517:4304): an ad slot placeholder of one production unit and size.
   `name` is the Figma Name ("Top Leaderboard 970x250"); the size comes from that variant's tokens. In production the
   slot is an empty Google Publisher Tag container of the same size: pass `children` (the real ad) to fill it.
   Mobile Adhesion units (except 300x50, which has none in Figma) get the close button; `fixed` pins one to the
   bottom of the viewport. */
var AD_UNITS = ['Sponsorship 1 320x50', 'Sponsorship 1 300x50', 'Top Leaderboard 970x250', 'Top Leaderboard 970x90',
  'Top Leaderboard 728x90', 'Top Leaderboard 320x100', 'Top Leaderboard 320x50', 'Top Leaderboard 300x50',
  'Sponsorship 2 970x250', 'Sponsorship 2 970x90', 'Sponsorship 2 728x90', 'Sponsorship 2 320x50', 'Sponsorship 2 300x50',
  'Cube 1 RRail ATF 300x1050', 'Cube 1 RRail ATF 300x600', 'Cube 1 RRail ATF 300x250', 'Cube 1 RRail ATF 160x600',
  'Cube 2 RRail Mid 300x600', 'Cube 2 RRail Mid 300x250', 'Cube 3 RRail Lower 300x600', 'Cube 3 RRail Lower 300x250',
  'Cube Article 300x250', 'Sidebar Rectangle 300x250', 'Outstream Video 480x360', 'Outstream Video 300x250',
  'Mid-Article Banner 728x90', 'Mid-Article Banner 300x250', 'Bottom Leaderboard 970x250', 'Bottom Leaderboard 970x90',
  'Bottom Leaderboard 728x90', 'Bottom Leaderboard 320x100', 'Bottom Leaderboard 320x50', 'Bottom Leaderboard 300x50',
  'Mobile Adhesion 728x90', 'Mobile Adhesion 320x50', 'Mobile Adhesion 300x50', 'PLACE HOLDER'];

function AdBlocks(props) {
  var name = props.name || 'Top Leaderboard 970x250';
  if (AD_UNITS.indexOf(name) < 0 && typeof console !== 'undefined') console.warn('[mng_web_design_system] AdBlocks: unknown name "' + name + '". Names: AdBlocks.names.');
  var s = slug(name);
  var adhesion = /^Mobile Adhesion /.test(name);
  var hasClose = adhesion && name !== 'Mobile Adhesion 300x50' && props.showClose !== false;
  var closed = React.useState(false);
  if (closed[0]) return null;
  var size = { width: 'var(--mng-ad-blocks-name-' + s + '-root-width)', height: 'var(--mng-ad-blocks-name-' + s + '-root-height)' };
  var labelVar = name === 'PLACE HOLDER' ? 'place-holder' : s + '-advertisement';
  var label = name === 'PLACE HOLDER' ? ['PLACE HOLDER'] : [name, 'ADVERTISEMENT'];
  function close(e) { if (props.onClose) props.onClose(e); if (!e || !e.defaultPrevented) closed[1](true); }
  return h('div', Object.assign(rest(props, ['name', 'device', 'fixed', 'onClose', 'showClose', 'className', 'style']), {
      className: cx('mngds-ad-blocks', props.children ? 'mngds-ad-blocks--filled' : null, props.fixed && adhesion && 'mngds-ad-blocks--fixed', props.className),
      style: Object.assign({}, size, props.style),
      'data-ad-unit': name,
      role: props.children ? undefined : 'img',
      'aria-label': props.children ? undefined : (props['aria-label'] || 'Ad placeholder: ' + name)
    }),
    props.children || h(React.Fragment, null,
      h('svg', { className: 'mngds-ad-blocks__x', viewBox: '0 0 100 100', preserveAspectRatio: 'none', 'aria-hidden': 'true', focusable: 'false' },
        h('line', { x1: 0, y1: 0, x2: 100, y2: 100, vectorEffect: 'non-scaling-stroke' }),
        h('line', { x1: 100, y1: 0, x2: 0, y2: 100, vectorEffect: 'non-scaling-stroke' })),
      h('span', { className: 'mngds-ad-blocks__label', 'aria-hidden': 'true', style: { letterSpacing: 'var(--mng-ad-blocks-name-' + s + '-' + labelVar + '-letter-spacing)' } },
        label.map(function (t, i) { return h('span', { key: i, className: 'mngds-ad-blocks__line' }, t); }))),
    hasClose ? h('button', { type: 'button', className: 'mngds-ad-blocks__close', 'aria-label': props.closeLabel || 'Close ad', onClick: close },
      h('span', { className: 'mngds-ad-blocks__close-dot', 'aria-hidden': 'true' })) : null);
}
AdBlocks.names = AD_UNITS;
