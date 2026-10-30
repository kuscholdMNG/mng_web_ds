---
name: UserPic
slug: user-pic
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "UserPic"
figma_node: "456:5674"
component_key: b0a98e06e6e220ea1c7d4a247494ff5525fe0dd7
variants: 6
tokens: user-pic.tokens.json
skeleton: user-pic.html
exported: 2026-10-30
---

# UserPic

> The circular avatar button in the masthead. Size = Small / Medium / Large; Status = Default / Active (menu open).

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Menus and Parts**
- Component set: [`UserPic` · 456:5674](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5674) · key `b0a98e06e6e220ea1c7d4a247494ff5525fe0dd7`

## Properties

| Property | Default | Options |
|---|---|---|
| Size | Small | Small, Large, Medium |
| Status | Default | Default, Active |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Small / Default` | 30×30 | [456:5675](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5675) | 252 | ![](previews/user-pic--small-default.png) |
| `Small / Active` | 30×30 | [712:6222](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=712-6222) | 0 | ![](previews/user-pic--small-active.png) |
| `Large / Default` | 64×64 | [712:6226](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=712-6226) | 0 | ![](previews/user-pic--large-default.png) |
| `Large / Active` | 64×64 | [712:6295](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=712-6295) | 0 | ![](previews/user-pic--large-active.png) |
| `Medium / Default` | 40×40 | [456:5678](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5678) | 0 | ![](previews/user-pic--medium-default.png) |
| `Medium / Active` | 40×40 | [712:6292](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=712-6292) | 1 | ![](previews/user-pic--medium-active.png) |

## Anatomy

Default variant `Small / Default` (hidden layers marked):

- **Size=Small, Status=Default** `COMPONENT`: 30×30, horizontal, gap 8, padding 0/0/0/0, fixed×fixed
  - **UserImage** `INSTANCE`: 30×30, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of UserImage (Size=small, Graphic=social)
  - **AlertLevel** `INSTANCE`: 8×8, fixed×fixed, absolute, instance of AlertLevel (Level=low, Size=Small)
  - **AlertLevel** `INSTANCE`: 8×8, fixed×fixed, absolute, instance of AlertLevel (Level=none, Size=Small)

## Component tokens

From `user-pic.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `user-pic.size-small.alertlevel.height` | 8px |
| `user-pic.size-small.alertlevel.width` | 8px |
| `user-pic.size-small.root.height` | 30px |
| `user-pic.size-small.root.width` | 30px |
| `user-pic.size-small.userimage.height` | 30px |
| `user-pic.size-small.userimage.width` | 30px |
| `user-pic.size-large.alertlevel.height` | 16px |
| `user-pic.size-large.alertlevel.width` | 16px |
| `user-pic.size-large.root.height` | 64px |
| `user-pic.size-large.root.width` | 64px |
| `user-pic.size-large.userimage.height` | 64px |
| `user-pic.size-large.userimage.width` | 64px |
| `user-pic.size-medium.alertlevel.height` | 8px |
| `user-pic.size-medium.alertlevel.width` | 8px |
| `user-pic.size-medium.root.height` | 40px |
| `user-pic.size-medium.root.width` | 40px |
| `user-pic.size-medium.userimage.height` | 40px |
| `user-pic.size-medium.userimage.width` | 40px |
| `user-pic.base.alertlevel.icon-color` | `{color.feedback.low-success}` |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- UserImage inside.
- Use the reader's name in the button's accessible label.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **253**.

Inside components: UserStatus ×3.
Placed on pages: Menus and Parts ×1.
249 instances are nested inside other instances.

**Built from:** AlertLevel ×12, UserImage ×6

## Production

Production logged-in avatar.

## Known issues

None open.

## Files

- `user-pic.tokens.json`: component tokens (DTCG 2025.10).
- `user-pic.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x.

*Generated 2026-10-30 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
