The author name in card and row footers and in the lead's byline. Consumer supplies the name as published (`author`). It sets no outer spacing: in cards the Article Timestamp sits directly under it; in rows and the lead the two sit side by side, 12px (`spacing/150`) apart, which the parent sets.

```js
const { ArticleAuthor } = window.mng_web_design_system;
h(ArticleAuthor, { author: 'Ruby Gonzales' })
```

| Prop | Values | Default |
|---|---|---|
| `author` | text (or children) | `'Ruby Gonzales'` |
| `className`, other attributes | passed to the root `<span>` | |

The root is a block-level `<span>` that hugs its text and stays on one line (ellipsis when too narrow). It is plain text, not a link, so it can sit inside a card that is one link.
