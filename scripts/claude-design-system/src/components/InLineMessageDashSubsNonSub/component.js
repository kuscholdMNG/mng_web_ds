/* InLineMessage DashSubsNonSub (MNG Web Design System, In-Line Content Containers page; the InLineMessage set's
   Priority=Medium, Location=DashSubsNonSub, PanelType=Alert variants, 3421:643 / 3421:658 / 3421:673).
   The locked-feature panel inviting a non-subscriber to subscribe (For You tab). Close button hidden here. */
function InLineMessageDashSubsNonSub(props) {
  var device = props.device || 'Desktop';
  var T = props.headingLevel ? 'h' + props.headingLevel : 'p';
  return h('div', Object.assign(rest(props, ['device', 'title', 'description', 'buttonLabel', 'onButtonClick', 'buttonHref', 'headingLevel', 'className']), {
      className: cx('mngds-inline-message-dashsubsnonsub', 'mngds-inline-message-dashsubsnonsub--' + slug(device), props.className)
    }),
    h('div', { className: 'mngds-inline-message-dashsubsnonsub__content' },
      h('div', { className: 'mngds-inline-message-dashsubsnonsub__header' },
        h(T, { className: 'mngds-inline-message-dashsubsnonsub__title' },
          h(Icon, { name: 'notification2', size: 16, className: 'mngds-inline-message-dashsubsnonsub__icon' }),
          h('span', null, props.title != null ? props.title : 'Subscribe to the news.'))),
      h('p', { className: 'mngds-inline-message-dashsubsnonsub__description' },
        props.description != null ? props.description : props.children != null ? props.children : 'Get access to the news and other exclusive features.'),
      h(ButtonPrimary, { className: 'mngds-inline-message-dashsubsnonsub__button', label: props.buttonLabel || 'Subscribe Now',
        onClick: props.onButtonClick, href: props.buttonHref })));
}
