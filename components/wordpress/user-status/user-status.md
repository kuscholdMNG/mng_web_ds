---
name: UserStatus
slug: user-status
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "UserStatus"
figma_node: "456:5728"
component_key: 4c1b4132e858b8a7bef12375fa03f44cb6177947
variants: 4
tokens: user-status.tokens.json
skeleton: user-status.html
exported: 2026-10-30
---

# UserStatus

> The account area of the masthead. status = none (logged out), nonSub, subscriber; Device = Desktop / mobile. Nested in AccountMenu; it decides buttons vs avatar in every Masthead variant.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Menus and Parts**
- Component set: [`UserStatus` · 456:5728](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5728) · key `4c1b4132e858b8a7bef12375fa03f44cb6177947`
- Documentation frame: [User Status](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5671) · overview: [previews/user-status--documentation.png](previews/user-status--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Device | Desktop | Desktop, mobile |
| status | none | none, nonSub, subscriber |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Desktop / none` | 239×32 | [456:5729](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5729) | 24 | ![](previews/user-status--desktop-none.png) |
| `Desktop / nonSub` | 171×40 | [456:5734](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5734) | 1 | ![](previews/user-status--desktop-nonsub.png) |
| `Desktop / subscriber` | 30×32 | [456:5738](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5738) | 188 | ![](previews/user-status--desktop-subscriber.png) |
| `mobile / none` | 30×32 | [456:5740](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5740) | 61 | ![](previews/user-status--mobile-none.png) |

## Anatomy

Default variant `Desktop / none` (hidden layers marked):

- **Device=Desktop, status=none** `COMPONENT`: 239×32, horizontal, gap 15, padding 0/0/0/0, hug×fixed
  - **Button Primary** `INSTANCE`: 126×40, vertical, gap 8, padding 0/8/0/8, hug×hug, instance of Button Primary (Icon=None, State=Default, Breakpoint=Desktop)
  - **Button Primary** `INSTANCE`: 98×40, vertical, gap 8, padding 0/8/0/8, hug×hug, instance of Button Primary (Icon=None, State=Default, Breakpoint=Desktop)

## Component tokens

From `user-status.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `user-status.base.button-primary.height` | 40px |
| `user-status.base.root.gap` | 15px |
| `user-status.base.root.height` | 32px |
| `user-status.base.userpic.height` | 30px |
| `user-status.base.userpic.width` | 30px |
| `user-status.status-none.button-primary.width` | 98px |
| `user-status.status-nonsub.button-primary.width` | 126px |
| `user-status.device-mobile.userpic.icon-color` | `{color.gray.max}` |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- Logged out on Desktop: Subscribe (Button Primary) and Log In; on mobile: the account icon.
- Logged in: the avatar (UserPic).

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **274**.

Inside components: Masthead ×84, ObitMastHead ×41, AccountMenu ×21.
Placed on pages: Menus and Parts ×98, Homepage ×4, Article Page ×2, Section Front ×1.
23 instances are nested inside other instances.

**Built from:** Button Primary ×3, UserPic ×3

## Production

Production masthead account area.

## Known issues

1. Raw value: 15px gap.
2. **Values not bound to a token** (literal in the component tokens): `base` root gap = 15px.

## Files

- `user-status.tokens.json`: component tokens (DTCG 2025.10).
- `user-status.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-10-30 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
