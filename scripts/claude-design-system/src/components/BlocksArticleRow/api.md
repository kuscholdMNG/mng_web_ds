The article row of the Blocks feed (For You tab). The whole row is one link. Consumer supplies the article's `href`, `section`, `headline`, `author`, `time` (and `dateTime`), `image` with `imageAlt`, `showGalleryIcon`, and the layout's `device`: `'Mobile'` below 640px, `'Tablet'` or `'Desktop'` at 640px and up (the same design; Figma builds them at the 768 and 1280 feed widths). Rows fill the feed column and stack 16px apart (`spacing/200`, set by the feed).

```js
const { BlocksArticleRow } = window.mng_web_design_system;
const device = window.innerWidth < 640 ? 'Mobile' : 'Desktop';
h('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--mng-spacing-200)' } },
  stories.map(s => h(BlocksArticleRow, { key: s.id, device, href: s.url, section: s.section, headline: s.title,
    author: s.author, time: s.ago, image: s.img, imageAlt: s.alt, showGalleryIcon: s.isGallery })))
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'Mobile'`, `'Tablet'`, `'Desktop'` | `'Mobile'` |
| `state` | `'Default'`, `'Hover'`, `'Focus'` (documentation only) | unset |
| `showGalleryIcon` | boolean | `true` |
| `section` | text | `'Transportation'` |
| `headline` | text (not clamped) | `'Plans to address cracks, compromised cliff along PCH at Crystal Cove outlined'` |
| `author` | text | `'Laylan Connelly'` |
| `time`, `dateTime` | relative time text; ISO time | `'3 days ago'` |
| `image`, `imageAlt` | URL (cover); alt text | placeholder |
| `href`, `target` | renders the row as one `<a>` | |
| `headingLevel` | 1–6 | `3` |
| `galleryLabel` | badge's accessible name; `null` = decorative | `'Photo gallery'` |

Nested components: `ArticleSectionKicker`, `ArticleAuthor`, `ArticleTimestamp` (side by side, 12px apart), `GalleryIconBadge` (Large on the 220px image, 5px in; Small on the 90px image, 3.75px right / 5px bottom) and the runtime `ArticleImage`.
