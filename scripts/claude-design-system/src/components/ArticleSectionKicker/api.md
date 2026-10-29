The section label above a headline in For You cards, rows and the featured story. Consumer supplies the section name as written (`section`); the uppercase comes from the style. It sets no outer spacing: the parent puts 8px (`spacing/100`) between it and the headline in cards and rows, 4px (`spacing/050`) in the lead.

```js
const { ArticleSectionKicker } = window.mng_web_design_system;
h(ArticleSectionKicker, { section: 'Crime and Public Safety' })
h(ArticleSectionKicker, null, 'Transportation')
```

| Prop | Values | Default |
|---|---|---|
| `section` | text (or children) | `'Crime and Public Safety'` |
| `className`, other attributes | passed to the root `<span>` | |

The root is a block-level `<span>` (`display: block`, `width: max-content`, `max-width: 100%`), so it hugs its text and stays on one line, ending in an ellipsis when the column is too narrow. Color is `color/theme/primary`, so it follows the page's theme.
