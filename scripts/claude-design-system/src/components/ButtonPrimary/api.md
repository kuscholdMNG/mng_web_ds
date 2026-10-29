The main call to action, at most one per view. Consumer supplies `label` (or children), `onClick` or `href`, and the layout's `breakpoint`.

```js
const { ButtonPrimary } = window.mng_web_design_system;
h(ButtonPrimary, { label: 'Subscribe', onClick: go })
h(ButtonPrimary, { label: 'Read the guide', icon: 'Right', iconName: 'new-tab', href: url, target: '_blank' })
h(ButtonPrimary, { label: 'Continue', breakpoint: 'Mobile' })   // below 640px: fills the container
```

| Prop | Values | Default |
|---|---|---|
| `breakpoint` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `icon` | `'None'`, `'Left'`, `'Right'` | `'None'` |
| `iconName` | an `Icon` name | `'new-tab'` |
| `state` | `'Default'`, `'Hover'`, `'Pressed'`, `'InFocus'` (documentation only) | unset |
| `label` | text | `'Primary Button'` |
| `href`, `target` | renders a link | |
| `onClick`, `disabled`, `type` | button attributes | |

The root keeps the Figma variant's 8px side margin (`spacing/100`). The label is capitalized by style (`text-transform: capitalize`, from the Figma text case).
