The relative publish time with a clock icon, in card and row footers and the lead's byline. Consumer supplies the relative time text (`time`) and, ideally, the ISO publish time (`dateTime`) so it renders as a `<time>` element. It sets no outer spacing: under the Article Author in cards, 12px (`spacing/150`) to its right in rows and the lead (set by the parent).

```js
const { ArticleTimestamp } = window.mng_web_design_system;
h(ArticleTimestamp, { time: '56 mins ago' })
h(ArticleTimestamp, { time: '3 days ago', dateTime: '2026-10-26T09:15:00-07:00' })
```

| Prop | Values | Default |
|---|---|---|
| `time` | text (or children) | `'56 mins ago'` |
| `dateTime` | ISO 8601 string; renders `<time dateTime>` | unset |
| `className`, other attributes | passed to the root `<span>` | |

The clock is the `access-time` icon font glyph (U+E900) at 11px, `aria-hidden`: the text alone carries the meaning. Icon and text are 4px apart (`spacing/050`), centered vertically.
