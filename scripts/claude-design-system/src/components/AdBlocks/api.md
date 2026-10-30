An ad slot placeholder: one production ad unit at one size. Consumer picks the unit and size for the slot and breakpoint (the slot map is in the spec), and passes the real ad as `children` in production.

```js
const { AdBlocks } = window.mng_web_design_system;
h(AdBlocks, { name: 'Top Leaderboard 970x250' })
h(AdBlocks, { name: 'Cube 2 RRail Mid 300x600' })
h(AdBlocks, { name: 'Mobile Adhesion 320x50', fixed: true })   // sticky at the bottom of the screen, with a close button
```

| Prop | Values | Default |
|---|---|---|
| `name` | a Figma Name (`AdBlocks.names`): `'Sponsorship 1 320x50'`, `'Top Leaderboard 970x250'` … `'Mobile Adhesion 300x50'`, `'PLACE HOLDER'` | `'Top Leaderboard 970x250'` |
| `fixed` | Mobile Adhesion: fixed to the bottom of the viewport, centered | `false` |
| `onClose`, `showClose`, `closeLabel` | Mobile Adhesion close button (hides the placeholder unless `preventDefault()`) | shown |
| `children` | the real ad; replaces the placeholder art | |
| `device` | Figma Device, documentation only | |

The box is exactly the unit's size and never scales (`max-width: 100%` only stops it overflowing a narrower column). The placeholder is `role="img"` with an "Ad placeholder: <name>" label.

**Which unit where:** full-width slots use 970x250 at 800px and up, 728x90 at 640–799px and 320x50 (360) or 320x100 (340) below; right-rail cubes are 300x600 / 300x1050 at 800px and up and 300x250 below; Mobile Adhesion is 728x90 at 640–799px and 320x50 below 640px. Readers with an ad-free subscription get no ad slots.
