The centered pop-up modal used across the footprint (Reader Dashboard, alerts, forms). Consumer supplies the `title`, `subtitle`, `body`, the CTA labels and handlers, `onClose`, and the `device` for the current breakpoint. The card is a `role="dialog"` with `aria-modal="true"`, labelled by its title and described by its subtitle.

```js
const { ModalsCenter } = window.mng_web_design_system;
// Real use: fixed over the viewport, below a 64px masthead
open && h(ModalsCenter, {
  device: isPhone ? 'Mobile' : 'Desktop', offsetTop: 64,
  title: 'Verify your email', subtitle: 'We sent a code to you@example.com.',
  body: 'Enter the code to finish signing in.',
  topLinkLabel: null, primaryLabel: 'Continue', bottomLinkLabel: 'Resend code',
  onPrimary: submit, onBottomLink: resend, onClose: () => setOpen(false)
})

// Previews and design canvases: render the whole Figma screen in flow
h(ModalsCenter, { device: 'TabletV', inline: true })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'Desktop'`, `'TabletH'`, `'TabletV'`, `'Mobile'`, `'FOLD'`, `'MobileScroll'` | `'Desktop'` |
| `inline` | render in flow at the Device's Figma size (1280×960, 1024×768, 768×1024, 360×800, 340×882, 360×960) | `false` (fixed) |
| `open` | `false` renders nothing | `true` |
| `offsetTop` | fixed mode: space above the overlay for the masthead | `0` |
| `title`, `subtitle` | text; `subtitle: null` hides it | `'Header Title'`, `'Sub-Title Text'` |
| `showIcon`, `iconName` | header icon | `true`, `'notification'` |
| `body` | Body Container text; `null` hides it | `'Body Section (As Needed)'` |
| `children` | extra Body Container content (e.g. a form field) | |
| `message` | InLineMessage between the body and the CTAs | |
| `topLinkLabel`, `primaryLabel`, `bottomLinkLabel` | default CTA stack; `null` hides one | `'CTA Hyperlink'`, `'CTA Button'`, `'CTA Hyperlink'` |
| `onTopLink`, `onPrimary`, `onBottomLink`, `…Href` | CTA handlers or links | |
| `actions` | replaces the CTA stack | |
| `onClose`, `closeLabel` | close button, overlay click, Esc | `'Close'` |

In fixed mode (no `inline`) focus moves to the dialog when it opens, Tab stays inside it, Esc calls `onClose`, and focus returns to where it was when the modal unmounts. With `inline` the same markup renders without the focus handling, so documentation pages stay usable.
