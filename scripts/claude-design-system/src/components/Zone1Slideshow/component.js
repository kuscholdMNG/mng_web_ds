/* Zone 1 Slideshow (WordPress Elements, Homepage, 3640:50278). Used by Zone 1 Lead Article Card (Gallery=Slideshow).
   Image Area (16:9, photo letterboxed and centered, Previous / Next Slideshow Arrows at its edges) over the Caption Block
   (optional credit, slide count announced with aria-live, caption; 3px color/gray/500 rule below).
   Breakpoint sets the size; `controls` follows production's 800px breakpoint (Large at 800px and up, Small below).
   Pass `slides` to let the component page through them (it loops); without `slides` it shows the single
   `image` / `slideCount` / `caption` / `credit` and reports arrow clicks through onPrevious / onNext. */
function Zone1Slideshow(props) {
  var bp = props.breakpoint || 'Desktop';
  var controls = props.controls || (bp === 'Desktop' ? 'Large' : 'Small');
  var slides = props.slides && props.slides.length ? props.slides : null;
  var n = slides ? slides.length : 0;
  var inner = React.useState(props.defaultIndex || 0);
  var idx = props.index != null ? props.index : inner[0];
  if (slides) idx = ((idx % n) + n) % n;
  var cur = slides ? slides[idx] : {};
  var prevRef = React.useRef(null);
  var drag = React.useRef(null);

  function go(step, e) {
    if (slides) {
      var next = (idx + step + n) % n;
      if (props.index == null) inner[1](next);
      if (props.onChange) props.onChange(next, e);
    }
    if (step < 0 && props.onPrevious) props.onPrevious(e);
    if (step > 0 && props.onNext) props.onNext(e);
  }
  /* Drag / swipe the image strip: a mostly horizontal move at least one arrow-width long pages the slideshow. */
  function down(e) {
    if (e.button != null && e.button !== 0) return;
    if (e.target.closest && e.target.closest('button')) return;
    drag.current = { x: e.clientX, y: e.clientY };
  }
  function up(e) {
    var d = drag.current; drag.current = null;
    if (!d) return;
    var dx = e.clientX - d.x, dy = e.clientY - d.y;
    var min = prevRef.current ? prevRef.current.offsetWidth : 0;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) >= min && min > 0) go(dx < 0 ? 1 : -1, e);
  }

  var image = slides ? cur.image : props.image;
  var imageAlt = slides ? cur.imageAlt : props.imageAlt;
  var caption = slides ? cur.caption : props.caption != null ? props.caption
    : 'Los Angeles Chargers quarterback Justin Herbert, right, sits on the ground after being sacked and losing the ball on the last play of the game as members of the Denver Broncos celebrate during the second half of an NFL football game.';
  var credit = slides ? cur.credit : props.credit != null ? props.credit : 'AP Photo/Gregory Bull';
  var count = slides ? (idx + 1) + ' of ' + n : props.slideCount != null ? props.slideCount : '1 of 29';
  var showCredit = !!props.showCredit && credit != null && credit !== '';
  var arrowCls = stateClass(props.arrowState);

  return h('div', Object.assign(rest(props, ['breakpoint', 'controls', 'fill', 'showCredit', 'credit', 'slideCount', 'caption', 'image', 'imageAlt',
      'slides', 'index', 'defaultIndex', 'onChange', 'onPrevious', 'onNext', 'arrowState', 'className']), {
      className: cx('mngds-zone-1-slideshow', 'mngds-zone-1-slideshow--' + slug(bp), 'mngds-zone-1-slideshow--' + slug(controls),
        props.fill && 'mngds-zone-1-slideshow--fill', props.className)
    }),
    h('div', { className: 'mngds-zone-1-slideshow__image-area', onPointerDown: down, onPointerUp: up, onPointerCancel: function () { drag.current = null; } },
      image
        ? h(ArticleImage, { src: image, alt: imageAlt, className: 'mngds-zone-1-slideshow__photo' })
        : h(ArticleImage, { alt: imageAlt, className: 'mngds-zone-1-slideshow__placeholder' }),
      h('button', { type: 'button', ref: prevRef, className: cx('mngds-zone-1-slideshow__arrow', 'mngds-zone-1-slideshow__arrow--previous', arrowCls),
          'aria-label': 'Previous', onClick: function (e) { go(-1, e); } },
        h(Icon, { name: 'arrow-left', size: 'var(--mngds-z1s-icon)' })),
      h('button', { type: 'button', className: cx('mngds-zone-1-slideshow__arrow', 'mngds-zone-1-slideshow__arrow--next', arrowCls),
          'aria-label': 'Next', onClick: function (e) { go(1, e); } },
        h(Icon, { name: 'arrow-right', size: 'var(--mngds-z1s-icon)' }))),
    h('div', { className: 'mngds-zone-1-slideshow__caption-block' },
      showCredit ? h('span', { className: 'mngds-zone-1-slideshow__credit' }, credit) : null,
      h('span', { className: 'mngds-zone-1-slideshow__slide-count', 'aria-live': 'polite' }, count),
      caption != null && caption !== '' ? h('span', { className: 'mngds-zone-1-slideshow__caption' }, caption) : null));
}
