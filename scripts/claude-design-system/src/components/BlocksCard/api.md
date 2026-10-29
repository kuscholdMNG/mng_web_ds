The article card of the Blocks grid (For You tab). The whole card is one link. Consumer supplies the article's `href`, `section`, `headline`, `author`, `time` (and `dateTime`), the `image` URL with `imageAlt`, and whether it's a gallery (`showGalleryIcon`). The card fills its column; the grid around it is the consumer's: 16px gaps, 3-up from 800px, 2-up at 640–799px, 1-up below 640px.

```js
const { BlocksCard } = window.mng_web_design_system;
h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--mng-spacing-200)' } },
  stories.map(s => h(BlocksCard, { key: s.id, href: s.url, section: s.section, headline: s.title,
    author: s.author, time: s.ago, dateTime: s.iso, image: s.img, imageAlt: s.alt, showGalleryIcon: s.isGallery })))
```

| Prop | Values | Default |
|---|---|---|
| `state` | `'Default'`, `'Hover'`, `'Focus'` (documentation only) | unset |
| `showGalleryIcon` | boolean | `true` |
| `section` | text | `'Crime and Public Safety'` |
| `headline` | text (clamped to 5 lines) | `'Norte fire that destroyed homes in South Orange County is at 80% containment'` |
| `author` | text | `'Ruby Gonzales'` |
| `time`, `dateTime` | relative time text; ISO time | `'56 mins ago'` |
| `image`, `imageAlt` | URL (16:9, cover); alt text | placeholder |
| `href`, `target` | renders the card as one `<a>` | |
| `headingLevel` | 1–6 | `3` |
| `galleryLabel` | badge's accessible name; `null` = decorative | `'Photo gallery'` |

Nested components: `ArticleSectionKicker`, `ArticleAuthor`, `ArticleTimestamp`, `GalleryIconBadge` (Large, 5px in from the image's bottom-right corner) and the runtime `ArticleImage`. The body is space-between, so cards stretched to the same height in a grid row keep their footers aligned.
