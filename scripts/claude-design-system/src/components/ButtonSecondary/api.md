Use when actions are equal, or next to a single `ButtonPrimary`. White fill, 1px brand-primary border, brand-primary label. Consumer supplies `label` (or children), `onClick` or `href`, and the layout's `breakpoint`.

```js
const { ButtonSecondary } = window.mng_web_design_system;
h(ButtonSecondary, { label: 'Cancel', onClick: close })
h(ButtonSecondary, { label: 'Read the guide', icon: 'Right', iconName: 'new-tab', href: url, target: '_blank' })
h(ButtonSecondary, { label: 'Continue', breakpoint: 'Mobile' })   // below 640px: fills the container
```

| Prop | Values | Default |
|---|---|---|
| `breakpoint` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `icon` | `'None'`, `'Left'`, `'Right'` | `'None'` |
| `iconName` | an `Icon` name | `'new-tab'` |
| `state` | `'Default'`, `'Hover'`, `'Pressed'`, `'InFocus'` (documentation only) | unset |
| `label` | text | `'Secondary Button'` |
| `href`, `target` | renders a link | |
| `onClick`, `disabled`, `type` | button attributes | |

The root keeps the Figma variant's 8px side margin (`spacing/100`). Buttons in a row or stack keep a 16px gap on Desktop, 8px stacked on Mobile (the consumer's layout sets it). The label is capitalized by style (`text-transform: capitalize`, from the Figma text case).
