The Show More / Load More control below a block or feed. Consumer supplies the `label` and `onClick` (load the next items) or `href`. It fills its column.

```js
const { ShowMoreAffordance } = window.mng_web_design_system;
h(ShowMoreAffordance, { label: 'Load More', onClick: loadNext })
h(ShowMoreAffordance, { label: 'Show More Photos', href: '/photos/' })
```

| Prop | Values | Default |
|---|---|---|
| `label` | text (shown uppercase) | `'Load More'` |
| `state` | `'Default'`, `'Hover'`, `'Focus'` (documentation only; production states) | unset |
| `href`, `target` | renders a link | |
| `onClick`, `type`, `aria-controls`, … | button attributes | |

The whole 97px-tall affordance is one `button` (or `a`). The notch rises about 25px above the rule: leave that space free above it (don't clip it with `overflow: hidden`). The rule and notch gray follows the page's `data-theme`.
