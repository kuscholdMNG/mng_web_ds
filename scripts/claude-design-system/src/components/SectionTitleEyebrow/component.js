/* Section Title / Eyebrow (WordPress Elements, Homepage, 3333:42278).
   An h2 title row (theme eyebrow type, uppercase, 3.5% tracking + optional 16px arrow-right chevron), the 2px
   theme-primary underline (Style=Underline only), and an optional subhead row with a 12px info button. */
function SectionTitleEyebrow(props) {
  var style = props.style || 'Underline';
  var chevron = props.chevron == null ? true : !!props.chevron;
  var showSubhead = !!props.showSubhead;
  var showInfo = props.showInfo == null ? true : !!props.showInfo;
  var title = props.title != null ? props.title : props.children != null ? props.children : 'Latest Headlines';
  var Level = props.headingLevel || 'h2';
  var content = [
    h('span', { key: 't', className: 'mngds-section-title-eyebrow__title' }, title),
    chevron ? h('span', { key: 'c', className: 'mngds-section-title-eyebrow__chevron' }, h(Icon, { name: 'arrow-right', size: 16 })) : null
  ];
  return h('div', Object.assign(rest(props, ['style', 'chevron', 'showSubhead', 'subhead', 'showInfo', 'title', 'href', 'headingLevel',
      'onInfoClick', 'infoExpanded', 'infoControls', 'infoLabel', 'infoState', 'className', 'rootStyle']), {
      className: cx('mngds-section-title-eyebrow', 'mngds-section-title-eyebrow--' + slug(style), props.className),
      style: props.rootStyle
    }),
    h(Level, { className: 'mngds-section-title-eyebrow__title-row' },
      props.href ? h('a', { className: 'mngds-section-title-eyebrow__link', href: props.href }, content) : content),
    style === 'Underline' ? h('span', { className: 'mngds-section-title-eyebrow__underline', 'aria-hidden': 'true' }) : null,
    showSubhead ? h('p', { className: 'mngds-section-title-eyebrow__subhead-row' },
      h('span', { className: 'mngds-section-title-eyebrow__subhead' }, props.subhead != null ? props.subhead : 'Based on what you read.'),
      showInfo ? h('button', {
        type: 'button', className: cx('mngds-section-title-eyebrow__info', stateClass(props.infoState)),
        'aria-label': props.infoLabel || 'About this feed',
        'aria-expanded': props.infoExpanded != null ? (props.infoExpanded ? 'true' : 'false') : undefined,
        'aria-controls': props.infoControls || undefined,
        onClick: props.onInfoClick
      }, h(Icon, { name: 'info', size: 12 })) : null) : null);
}
