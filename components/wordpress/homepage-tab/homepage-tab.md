---
name: Homepage Tab
slug: homepage-tab
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Homepage Tab"
figma_node: "3629:44949"
component_key: 555019e430769d437d2dc590677f75803092cc5e
variants: 4
tokens: homepage-tab.tokens.json
skeleton: homepage-tab.html
exported: 2026-10-28
---

# Homepage Tab

> One homepage tab (For You feature: Editor's Picks / For You). State = Default, Hover, Active, Focus; Label text property.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Menus and Parts**
- Component set: [`Homepage Tab` · 3629:44949](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44949) · key `555019e430769d437d2dc590677f75803092cc5e`
- Documentation frame: [Homepage Tabs Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44928) · overview: [previews/homepage-tab--documentation.png](previews/homepage-tab--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| State | Default | Default, Hover, Focus, Active |

| Other property | Type | Default |
|---|---|---|
| Label | text | Editor's Picks |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Default` | 123×42 | [3629:44932](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44932) | 3 | ![](previews/homepage-tab--default.png) |
| `Hover` | 123×42 | [3629:44936](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44936) | 0 | ![](previews/homepage-tab--hover.png) |
| `Active` | 123×42 | [3629:44940](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44940) | 3 | ![](previews/homepage-tab--active.png) |
| `Focus` | 123×42 | [3629:44944](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44944) | 0 | ![](previews/homepage-tab--focus.png) |

## Anatomy

Default variant `Default` (hidden layers marked):

- **State=Default** `COMPONENT`: 123×42, vertical, gap 0, padding 0/0/0/0, hug×hug
  - **Label Container** `FRAME`: 123×40, horizontal, gap 0, padding 12/16/12/16, hug×hug
    - **Label** `TEXT`: 91×16, hug×hug, "Editor's Picks", Noto Sans SemiBold 12px
  - **Underline** `RECTANGLE`: 123×2, fill×fixed

## Component tokens

From `homepage-tab.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `homepage-tab.state-focus.focus-ring.border-color` | `{color.gray.black}` |
| `homepage-tab.state-focus.focus-ring.border-style` | solid |
| `homepage-tab.state-focus.focus-ring.border-width` | 2px |
| `homepage-tab.state-focus.label-container.label.color` | `{color.gray.black}` |
| `homepage-tab.base.label-container.padding-bottom` | `{spacing.150}` |
| `homepage-tab.base.label-container.padding-left` | `{spacing.200}` |
| `homepage-tab.base.label-container.padding-right` | `{spacing.200}` |
| `homepage-tab.base.label-container.padding-top` | `{spacing.150}` |
| `homepage-tab.base.label-container.label.font-family` | `{font.family.noto-sans}` |
| `homepage-tab.base.label-container.label.font-size` | `{font.size.12}` |
| `homepage-tab.base.label-container.label.font-weight` | `{font.weight.semibold}` |
| `homepage-tab.base.underline.height` | 2px |
| `homepage-tab.state-default.label-container.label.color` | `{color.gray.200}` |
| `homepage-tab.state-hover.label-container.label.color` | `{color.gray.min}` |
| `homepage-tab.state-active.label-container.label.color` | `{color.gray.black}` |
| `homepage-tab.state-active.underline.background` | `{color.theme.primary}` |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Text:** Noto Sans SemiBold 12 (`font/size/12`, `font/style/semibold`), line height auto, letter spacing 0, uppercase.
- **Colors:** Default `color/gray/200`; Hover `color/gray/min`; Active `color/gray/black` with a 2px `color/theme/primary` underline; Focus a 2px `color/gray/black` ring set 3px inside the tab.
- **Padding:** 12px (`spacing/150`) top and bottom, 16px (`spacing/200`) left and right, then a 2px underline (transparent unless Active) that overlaps the bar's 1px rule.
- **Accessibility:** a button with `role=tab`, `aria-selected` and `aria-controls`; keyboard focus shows the Focus state.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **6**.


**Built from:** no nested components.

## Production

Production World Cup tabs (`ul.sr-nav-tabs > button.tab-btn`, staging.dailylocal.com/world-cup/); differences are design-vs-production entry 12.

## Known issues

None open.

## Files

- `homepage-tab.tokens.json`: component tokens (DTCG 2025.10).
- `homepage-tab.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-10-28 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
