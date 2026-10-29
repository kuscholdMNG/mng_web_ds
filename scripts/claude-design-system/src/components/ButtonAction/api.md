A small icon + label utility action (the documented example is "Copy Link"). No box at rest; a 1px `color/gray/min` box on Hover, Pressed and InFocus. Consumer supplies `label`, `iconName` and `onClick` (or `href`).

```js
const { ButtonAction } = window.mng_web_design_system;
h(ButtonAction, { label: 'Copy Link', onClick: copy })
h(ButtonAction, { label: 'Share', iconName: 'share-alt', onClick: share })   // another action: swap the icon and label
```

| Prop | Values | Default |
|---|---|---|
| `state` | `'Default'`, `'Hover'`, `'Pressed'`, `'InFocus'` (documentation only) | unset |
| `iconName` | an `Icon` name | `'content_copy'` |
| `label` | text | `'Copy Link'` |
| `href`, `target` | renders a link | |
| `onClick`, `disabled`, `type` | button attributes | |

One size at every breakpoint: 32px tall, hugging icon + label (12px bold). The icon is decorative (`aria-hidden`); the label is the accessible name.
