Two popups in one component. **Type=Tooltip** is a short label for an icon-only control, shown on hover (mouse only) or keyboard focus. **Type=Toggletip** is an explanation that an info button opens on click or tap. Consumer supplies the trigger element and the `label` (Tooltip) or `text` (Toggletip).

```js
const { Tooltip, Icon } = window.mng_web_design_system;
const info = h('button', { type: 'button', 'aria-label': 'About this feed' }, h(Icon, { name: 'info' }));

// Toggletip: the trigger gets aria-expanded + aria-controls; click toggles; Esc, the close button
// or a click outside closes it (Esc and the close button return focus to the trigger).
h(Tooltip, { type: 'Toggletip', placement: 'Bottom', text: 'Stories picked from what you read.', trigger: info })

// Tooltip: the trigger gets aria-describedby while it shows; hides on mouse-out, blur or Esc.
h(Tooltip, { label: 'Share', trigger: h('button', { 'aria-label': 'Share' }, h(Icon, { name: 'share' })) })

// Popup only (no trigger): the consumer positions it, e.g. in documentation.
h(Tooltip, { type: 'Toggletip', placement: 'Top' })
```

| Prop | Values | Default |
|---|---|---|
| `type` | `'Tooltip'`, `'Toggletip'` | `'Tooltip'` |
| `placement` | `'Top'`, `'Bottom'` | `'Top'` |
| `label` | text (Type=Tooltip) | `'About this feed'` |
| `text` | text (Type=Toggletip); children work too | `'Placeholder text with more information about this feature.'` |
| `showClose` | boolean (Type=Toggletip) | `true` |
| `closeLabel`, `onClose` | close button name and callback | `'Close'` |
| `trigger` | one element; anchors the popup and wires the behavior | none (popup only) |
| `open` / `defaultOpen` / `onOpenChange` | controlled or initial open state (with `trigger`) | closed |
| `flip` | flip Placement when the popup doesn't fit in the viewport | `true` |
| `id` | popup id | generated |

With a trigger the popup is centered on it with 8px (`spacing/100`) between the trigger and the caret tip. The trigger is cloned: keep it a real `button` with its own accessible name.
