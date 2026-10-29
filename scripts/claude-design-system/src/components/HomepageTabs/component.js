/* Homepage Tabs (WordPress Elements, Menus and Parts, 3629:44974).
   Full-width color/gray/max bar with a 1px color/gray/300 bottom rule; Nav (1200 max, centered, 24px sides at Desktop,
   none at Mobile) holding a ul[role=tablist] of HomepageTab (24px apart, sideways scroll with the scrollbar hidden).
   Controlled with `selectedIndex` + `onChange`, or uncontrolled from `defaultSelectedIndex`. */
function HomepageTabs(props) {
  var bp = props.breakpoint || 'Desktop';
  var tabs = props.tabs || [{ label: "Editor's Picks" }, { label: 'For You' }];
  var inner = React.useState(props.defaultSelectedIndex || 0);
  var selected = props.selectedIndex != null ? props.selectedIndex : inner[0];
  function pick(i, e) {
    if (props.selectedIndex == null) inner[1](i);
    if (props.onChange) props.onChange(i, e);
  }
  return h('div', Object.assign(rest(props, ['breakpoint', 'tabs', 'selectedIndex', 'defaultSelectedIndex', 'onChange', 'aria-label', 'className']), {
      className: cx('mngds-homepage-tabs', 'mngds-homepage-tabs--' + slug(bp), props.className)
    }),
    h('div', { className: 'mngds-homepage-tabs__nav' },
      h('ul', { className: 'mngds-homepage-tabs__tab-list', role: 'tablist', 'aria-label': props['aria-label'] || undefined },
        tabs.map(function (t, i) {
          var on = i === selected;
          return h('li', { key: t.id || i, role: 'presentation', className: 'mngds-homepage-tabs__item' },
            h(HomepageTab, {
              id: t.id, label: t.label, controls: t.panelId, selected: on,
              onClick: function (e) { pick(i, e); }
            }));
        }))),
    h('span', { className: 'mngds-homepage-tabs__bottom-border', 'aria-hidden': 'true' }));
}
