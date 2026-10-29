The photo-gallery (slideshow) badge on an article image's bottom-right corner. Consumer picks `size` for the image it sits on and positions it: the badge has no position of its own.

```js
const { GalleryIconBadge } = window.mng_web_design_system;
// on a card or lead image (>=640px rows too): 5px in from the right and bottom edges
h('div', { style: { position: 'relative' } }, img,
  h(GalleryIconBadge, { size: 'Large', style: { position: 'absolute', right: 5, bottom: 5 } }))
// on a thumbnail up to ~120px wide: 3.75px from the right, 5px from the bottom
h(GalleryIconBadge, { size: 'Small', style: { position: 'absolute', right: 3.75, bottom: 5 } })
```

| Prop | Values | Default |
|---|---|---|
| `size` | `'Small'`, `'Large'` | `'Small'` |
| `state` | `'Default'`, `'Hover'` (documentation only) | unset |
| `label` | accessible name; `null` or `''` = decorative | `'Photo gallery'` |
| `className`, `style`, other attributes | passed to the root `<span>` | |

Hover (its own `:hover`, or `state: 'Hover'`) turns circle and border `color/theme/primary`. The Blocks components keep the default badge while their card is hovered (spec), so they don't forward card hover to it.
