One of the four homepage Zone 1 story cards that sit beside the Zone 1 lead (Editor's Picks). Pick the layout with `device`; the card fills its column.

```js
const { TopZoneArticleCard } = window.mng_web_design_system;
h(TopZoneArticleCard, { device: 'Desktop', headline: 'Storm closes I-70', image: url, imageAlt: '', href: '/news/storm' })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'Desktop'` (image over headline), `'1024'` (compact), `'1100'` (row, 280px image), `'Mobile'` (row, 100px image, bottom rule) | `'Mobile'` |
| `headline` | text or nodes | the Figma sample |
| `image`, `imageAlt` | image URL and alt text; the Article Image Placeholder shows without `image` | |
| `href`, `target` | the headline becomes the link | |
| `headingLevel` | 1–6 | `3` |

Renders a `div` with the image and an `h3` headline (the link inside it when `href` is given).
