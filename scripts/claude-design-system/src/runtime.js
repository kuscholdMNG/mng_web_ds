/* ---- Runtime shared by every component (scripts/claude-design-system/src/runtime.js) */
var React = window.React;
var h = React.createElement;

/* Icon font map from tokens/icons/icons.json: production name -> codepoint (hex). */
var ICONS = /*ICONS*/{};
var ICON_CATEGORIES = /*ICON_CATEGORIES*/{};
var ICON_META = /*ICON_META*/{};

function cx() {
  var out = [];
  for (var i = 0; i < arguments.length; i++) {
    var a = arguments[i];
    if (!a) continue;
    if (typeof a === 'string') out.push(a);
    else if (typeof a === 'object') for (var k in a) if (a[k]) out.push(k);
  }
  return out.join(' ');
}

/* Figma variant value -> CSS class slug: "InFocus" -> "infocus", "Media Lead" -> "media-lead". */
function slug(v) {
  return String(v).replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase()
    .replace(/^in-focus$/, 'infocus');
}

/* A forced documentation state ("Hover", "Pressed", "InFocus", "Focus", "Disabled"...) as a class.
   Leave `state` unset in real layouts: :hover, :active and :focus-visible then apply on their own. */
function stateClass(state) {
  return state && state !== 'Default' ? 'is-' + slug(state) : null;
}

/* Pass through the props a consumer may add to the root element. */
function rest(props, used) {
  var out = {};
  for (var k in props) if (used.indexOf(k) < 0 && k !== 'children') out[k] = props[k];
  return out;
}

function Icon(props) {
  var name = props.name;
  var cp = ICONS[name];
  if (!cp && typeof console !== 'undefined') console.warn('[mng_web_design_system] Unknown icon "' + name + '". Names: tokens/icons/icons.json.');
  var size = props.size == null ? 16 : props.size;
  var label = props.label;
  var layers = ICON_META[name] && ICON_META[name].layers;
  var style = Object.assign({ fontSize: typeof size === 'number' ? size + 'px' : size }, props.color ? { color: props.color } : null, props.style);
  return h('span', Object.assign(rest(props, ['name', 'size', 'color', 'label', 'className', 'style']), {
    className: cx('mngds-icon', layers && 'mngds-icon--layered', props.className),
    style: style,
    role: label ? 'img' : undefined,
    'aria-label': label || undefined,
    'aria-hidden': label ? undefined : 'true',
    'data-icon': name
  }), layers ? layers.map(function (l, i) {
      return h('span', { key: i, className: 'mngds-icon__layer', style: { color: l[1] } }, String.fromCodePoint(parseInt(l[0], 16)));
    }) : cp ? String.fromCodePoint(parseInt(cp, 16)) : '');
}
Icon.names = Object.keys(ICONS);
Icon.categories = ICON_CATEGORIES;
Icon.meta = ICON_META;

/* Article image: the real image when `src` is given, else WordPress Elements' Article Image Placeholder
   (3334:42380: #E1A1FF fill, 2px color/gray/min edge, two diagonals, "GRAPHIC / IMAGE" in Noto Serif Bold 16, 10% tracking). */
function ArticleImage(props) {
  var cls = cx('mngds-image', props.className);
  var hidden = props['aria-hidden'] === true || props['aria-hidden'] === 'true';
  if (props.src) {
    return h('div', { className: cls, style: props.style, 'aria-hidden': hidden ? 'true' : undefined },
      h('img', { src: props.src, alt: hidden ? '' : (props.alt || ''), className: 'mngds-image__img' }));
  }
  return h('div', { className: cx(cls, 'mngds-image--placeholder'), style: props.style,
    role: hidden ? undefined : 'img', 'aria-label': hidden ? undefined : (props.alt || 'Article image'), 'aria-hidden': hidden ? 'true' : undefined },
    h('svg', { className: 'mngds-image__x', viewBox: '0 0 100 100', preserveAspectRatio: 'none', 'aria-hidden': 'true' },
      h('line', { x1: 0, y1: 0, x2: 100, y2: 100, vectorEffect: 'non-scaling-stroke' }),
      h('line', { x1: 100, y1: 0, x2: 0, y2: 100, vectorEffect: 'non-scaling-stroke' })),
    props.hideLabel ? null : h('span', { className: 'mngds-image__label', 'aria-hidden': 'true' }, 'GRAPHIC / IMAGE'));
}

/* Documentation helper for previews: labeled samples on the color/gray/500 stage with 16px padding,
   the convention of the Figma documentation containers (CLAUDE.md). Not a component. */
function Specimen(props) {
  var items = props.items || [];
  return h('div', { className: cx('mngds-specimen', props.className), style: props.columns ? { gridTemplateColumns: 'repeat(' + props.columns + ', minmax(0, max-content))' } : null },
    items.map(function (it, i) {
      return h('figure', { key: i, className: 'mngds-specimen__item' },
        h('figcaption', { className: 'mngds-specimen__label' }, it.label),
        h('div', { className: cx('mngds-specimen__stage', it.white && 'mngds-specimen__stage--white'), style: it.width ? { width: typeof it.width === 'number' ? it.width + 'px' : it.width } : null }, it.node));
    }));
}
function SpecimenSection(props) {
  return h('section', { className: 'mngds-specimen-section' },
    props.title ? h('h3', { className: 'mngds-specimen-section__title' }, props.title) : null,
    props.note ? h('p', { className: 'mngds-specimen-section__note' }, props.note) : null,
    props.children);
}

var internal = { h: h, cx: cx, slug: slug, stateClass: stateClass, rest: rest, ArticleImage: ArticleImage, Specimen: Specimen, SpecimenSection: SpecimenSection };
