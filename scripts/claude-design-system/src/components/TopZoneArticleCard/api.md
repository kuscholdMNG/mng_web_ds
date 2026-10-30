One of the four homepage Zone 1 story cards that sit beside the Zone 1 lead (Editor's Picks). Pick the layout with `device` for the screen range you're in (production switches at 640 / 800 / 1040 / 1280px); the card fills its column.

```js
const { TopZoneArticleCard } = window.mng_web_design_system;
h(TopZoneArticleCard, { device: 'XL', headline: 'Storm closes I-70', image: url, imageAlt: '', href: '/news/storm' })
```

| Prop | Values | Default |
|---|---|---|
| `device` | production's breakpoints for these cards: `'XL'` (1280px and up: image over headline), `'M'` (800–1039px: compact), `'L'` (1040–1279px: row, 280px image), `'S'` (640–799px: row, 97px image, bottom rule), `'XS'` (639px and below: row, 100px image, bottom rule). Full Figma values and the old names (Desktop, 1024, 1100, Mobile) also work | `'XS'` |
| `headline` | text or nodes | the Figma sample |
| `image`, `imageAlt` | image URL and alt text; the Article Image Placeholder shows without `image` | |
| `href`, `target` | the headline becomes the link | |
| `headingLevel` | 1–6 | `3` |

Renders a `div` with the image and an `h3` headline (the link inside it when `href` is given).
