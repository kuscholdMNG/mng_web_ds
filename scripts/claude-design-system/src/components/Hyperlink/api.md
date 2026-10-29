A plain in-text hyperlink, not a button: 16.5px brand-primary text over a 1px brand-primary bottom border, dashed at rest and solid on Hover and Pressed. InFocus draws a 2px brand-primary box with 4px corners around the dashed underline (part of the layout, so the link grows 2px; intentional, matches production). Consumer supplies `label` (or children) and `href`; other anchor attributes pass through.

```js
const { Hyperlink } = window.mng_web_design_system;
h('p', null, 'Read our ', h(Hyperlink, { href: '/terms' }, 'terms of service'), ' before you subscribe.')
h(Hyperlink, { label: 'Manage newsletters', href: url, target: '_blank' })
```

| Prop | Values | Default |
|---|---|---|
| `state` | `'Default'`, `'Hover'`, `'Pressed'`, `'InFocus'` (documentation only) | unset |
| `label` | text | `'...hyperlink text...'` |
| `href` | URL | `'#'` |
| other `<a>` attributes | `target`, `rel`, `onClick`… | |

The underline is a `border-bottom` (as Figma builds it), not `text-decoration`. The link hugs its text and is an `inline-flex` box, so a long link wraps inside its own box rather than across the paragraph's lines.
