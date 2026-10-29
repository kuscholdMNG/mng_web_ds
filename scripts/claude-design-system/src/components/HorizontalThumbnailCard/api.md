The compact thumbnail row of the Photos Block's secondary list. The headline is the link. Consumer supplies the article's `href`, `headline`, the thumbnail `image` with `imageAlt`, whether it's a gallery (`showGalleryIcon`), and the layout's `device`. Stack rows directly (no gap); each row draws its own bottom rule.

```js
const { HorizontalThumbnailCard } = window.mng_web_design_system;
h('div', null, stories.map(s => h(HorizontalThumbnailCard, { key: s.id, device: 'Desktop', href: s.url,
  headline: s.title, image: s.thumb, imageAlt: s.alt, showGalleryIcon: s.isGallery })))
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'Desktop'`, `'Tablet'`, `'Mobile'` | `'Mobile'` |
| `style` | `'Standard'` | `'Standard'` |
| `showGalleryIcon` | boolean | `true` |
| `headline` | text (Mobile: two lines, then an ellipsis) | `'Article Headline on News paper homepage in thumbnail list position'` |
| `image`, `imageAlt` | URL (cover); alt text | placeholder |
| `href`, `target` | makes the headline a link | |
| `headingLevel` | 1–6 | `3` |
| `galleryLabel` | badge's accessible name; `null` = decorative | `'Photo gallery'` |

Thumbnail: Desktop 110×74, Tablet 90×60, Mobile 90×51. Nested components: `GalleryIconBadge` (Small, 3.75px from the right and 5px from the bottom of the thumbnail) and the runtime `ArticleImage`.
