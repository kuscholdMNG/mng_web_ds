The single-column article card: section-highlight lead cards (`style: 'Standard'`) and the Photos lead (`style: 'Media Lead'`). The headline is the link. Consumer supplies the article's `href`, `headline`, `excerpt`, the `image` URL with `imageAlt`, and which optional parts show (`showSubscriberBadge` for subscriber-only stories, `showMeta` with `time` / `dateTime`). The card fills its column; the grid around it is the consumer's.

```js
const { OneColArticleCard } = window.mng_web_design_system;
h(OneColArticleCard, { href: s.url, headline: s.title, excerpt: s.dek, image: s.img, imageAlt: s.alt })
h(OneColArticleCard, { style: 'Media Lead', href: g.url, headline: g.title, excerpt: g.dek, image: g.img, imageAlt: g.alt })
h(OneColArticleCard, { showSubscriberBadge: true, showMeta: true, time: '56 mins ago', dateTime: s.iso, href: s.url, headline: s.title })
```

| Prop | Values | Default |
|---|---|---|
| `style` | `'Standard'`, `'Media Lead'` | `'Standard'` |
| `showImage` | boolean | `true` |
| `showSubscriberBadge` | boolean | `false` |
| `showExcerpt` | boolean | `true` |
| `showMeta` | boolean | `false` |
| `headline` | text | `'Article Headline on News paper homepage in first position on 1col section block'` |
| `excerpt` | text | `'Vanroy Evan Smith, 39, of Long Beach is being held on $1 million bail.'` |
| `time`, `dateTime` | meta text; ISO time | `'56 mins ago'` |
| `badgeLabel` | badge text | `'Subscriber Only'` |
| `image`, `imageAlt` | URL (cover; 4:3 Standard, 16:9 Media Lead); alt text | placeholder |
| `href`, `target` | makes the headline a link | |
| `headingLevel` | 1–6 | `3` |

Parts, top to bottom, 8px apart: image, Subscriber badge, headline, excerpt, meta, then a 1px `color/gray/500` rule and 16px of bottom padding. Uses the runtime `ArticleImage`.
