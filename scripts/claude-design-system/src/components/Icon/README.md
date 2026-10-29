# Icon

One glyph from MNG's production icon font (`icomoon`, the same file on every MNG site), named by its production class without `icon-`. Source: `tokens/icons/icons.json` and `tokens/icons/icomoon.woff2`.

## Use

```js
const { Icon } = window.mng_web_design_system;
h(Icon, { name: 'access-time', size: 13 })              // decorative: aria-hidden
h(Icon, { name: 'close', size: 16, label: 'Close' })    // meaningful on its own: role="img" + aria-label
```

| Prop | Type | Default | |
|---|---|---|---|
| `name` | string | required | Production name, e.g. `close`, `arrow-right`, `access-time`, `new-tab`, `hamburger`. `Icon.names` lists all 171; `Icon.categories` groups them like the Figma Icon Categories page. |
| `size` | number or CSS length | `16` | Font size; the glyph is drawn on a 1em square. |
| `color` | CSS color | inherits | Use a token: `var(--mng-color-gray-min)`, `var(--mng-color-theme-primary)`. |
| `label` | string | none | Only for an icon that carries meaning with no visible text. |

- Icons are 16px on Button Primary, Secondary, Tertiary and Button Action; 12px on Button Modal Close and Button In-Line Close (Buttons page findings, 2026-10-02).
- Icon color follows text color unless a spec names a token. Icons that carry meaning need 3:1 against their background.
- Inside a labelled control an icon is decorative (`aria-hidden`); an icon-only control needs an `aria-label` on the control.
- Names never change to IcoMoon's names: production names are kept, always (Karl, 2026-10-22). Search IcoMoon by `icomoonName` in `icons.json`.

## Known issues (from `tokens/icons/README.md`)

- 3 production classes show the wrong glyph (the right glyph is in the font): `grid2` → U+E932, `windows8` → U+E987, `book3` → U+E993. This component draws the design glyph.
- 2 icons have no production class yet: `content_copy` (U+E921) and `ios_share` (U+E93A).
- The next font build (17 new icons and new `notification` / `notification2` artwork) is not in production. Its SVG artwork is in the **Icons Next Build** asset group; those names don't render through `Icon` until the font ships.
- Production-only classes with no Figma entry (`icon-google-plus`, `icon-mng-podcast1`, `icon-users4`) are left out. Differences in production: `design-vs-production.md` entry 1.
