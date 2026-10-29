The inline slideshow a Zone 1 lead shows in place of its image when the story is a photo gallery (nested by Zone 1 Lead Article Card, Gallery=Slideshow). Consumer supplies the photos (`slides`, or one `image` + `slideCount` + `caption`), the layout's `breakpoint`, and `controls` / `fill` where the card's layout calls for them.

```js
const { Zone1Slideshow } = window.mng_web_design_system;
// Pages through the gallery itself; loops; the count is announced (aria-live="polite").
h(Zone1Slideshow, { breakpoint: 'Desktop', showCredit: true,
  slides: [{ image: url1, imageAlt: alt1, caption: c1, credit: 'AP Photo/Gregory Bull' }, /* … */] })
// One slide, your own paging:
h(Zone1Slideshow, { breakpoint: 'Mobile', image: url, imageAlt: alt, slideCount: '1 of 29', caption: text, onNext: next, onPrevious: prev })
// One-column lead: fill the column, keep 16:9.
h(Zone1Slideshow, { breakpoint: 'Desktop', controls: 'Small', fill: true, slides })
```

| Prop | Values | Default |
|---|---|---|
| `breakpoint` | `'Desktop'` (356), `'Tablet'` (358), `'Mobile'` (340) | `'Desktop'` |
| `controls` | `'Large'` (800px and up), `'Small'` (below 800px) | Large for Desktop, else Small |
| `fill` | fill the column, 16:9 image area | `false` |
| `showCredit` | boolean | `false` |
| `slides` | `[{ image?, imageAlt?, caption?, credit? }]` | |
| `index` / `defaultIndex` / `onChange` | current slide (with `slides`) | `0` |
| `image`, `imageAlt`, `slideCount`, `caption`, `credit` | single-slide content | Figma sample text |
| `onPrevious`, `onNext` | arrow callbacks | |
| `arrowState` | `'Default'`, `'Focus'` (documentation only) | unset |

Layout per lead width (set by the card): two columns (lead about 700px or wider) use Desktop (356) or Tablet filling the 358 column; one column (narrower lead) puts the slideshow full width after the text (`fill`). Controls follow production's 800px breakpoint, not the card's: Tablet uses Small at 768 and Large from 800 to 1023px. The root includes the 12px space below the slideshow. The arrows' focus outline extends 5px past the image area's left and right edges.
