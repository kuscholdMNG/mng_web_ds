The close (X) button of in-line panels, alerts and toggletips (InLineMessage, ModalsOffset, Tooltip Toggletip). Consumer supplies `onClick` and, when "Close" is not specific enough, a `label`. It renders a `<button>` (the 40px hit area); the icon is decorative and the `label` is its accessible name.

```js
const { ButtonInLineClose } = window.mng_web_design_system;
h(ButtonInLineClose, { onClick: dismiss })
h(ButtonInLineClose, { label: 'Dismiss message', onClick: dismiss })
```

| Prop | Values | Default |
|---|---|---|
| `state` | `'Default'`, `'Hover'`, `'Pressed'`, `'InFocus'` (documentation only) | unset |
| `label` | accessible name (`aria-label`) | `'Close'` |
| `onClick`, `type`, `disabled`, other button attributes | passed to the `<button>` | `type: 'button'` |

40×40 hit area at every width (no Breakpoint). At rest only the 12px icon shows; Hover/Pressed draw the 28px white box. Align the hit area to the panel padding at the top right.
