The MNG Web Design System is MediaNews Group's design system for its news websites (90+ publications), built from what is live in production and corrected in Figma. Figma is the source of truth: the main library **MNG Web Design System** (`jFHYqhZbJjvWQmDI4myCsd`) and **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`). Everything here is generated from the exports in [kuscholdMNG/mng_web_ds](https://github.com/kuscholdMNG/mng_web_ds) (`{{REF}}`) by `scripts/claude-design-system/build.py`. Never type a value in by hand; change Figma, re-export, rebuild.

## Consuming this system

- **Namespace:** every component is on the global `window.{{NAMESPACE}}` (the bundle `components/bundle.js`, a classic script that needs React 18 and ReactDOM 18 on the page first). Example: `const { ButtonPrimary, BlocksCard, Icon } = window.{{NAMESPACE}};`
- **Load order on a canvas or page:** `tokens.css`, then `components/bundle.css`, then React 18, ReactDOM 18, then `components/bundle.js`.
- **Theme:** set `data-theme` on `<html>` (or any wrapper): `bold-coastal` (default), `measured-vibrant` or `modern-earthy`. Colors, the font roles and the eyebrow all switch from that one attribute.
- **CSS variables** keep the repo's `dist/` names: `--mng-` + the token path (`--mng-color-theme-primary`, `--mng-spacing-200`, `--mng-radius-lg`, `--mng-shadow-lg`, `--mng-font-size-16`, `--mng-editorial-titles-title-font-size`). Component tokens follow the same rule (`--mng-blocks-card-state-hover-root-border-color`). Code written against `dist/css/` works here unchanged.
- **Props mirror Figma.** Each Figma variant property is a prop with the Figma values, camel-cased: `breakpoint: 'Desktop' | 'Mobile'`, `icon: 'None' | 'Left' | 'Right'`, `state: 'Default' | 'Hover' | …`. `state` forces a state for documentation and mock-ups; leave it unset in real layouts so hover, pressed and keyboard focus happen on their own.
- **Images:** card components take `image` (a URL) and `imageAlt`. Without `image` they draw WordPress Elements' Article Image Placeholder.
- **Icons:** `h(Icon, { name: 'access-time', size: 13 })`. Names are the production class names in `tokens/icons/icons.json`.

{{COMPONENT_TABLE}}

## Themes

Every site loads one of three shared WordPress themes and can override colors in the Customizer (scoped to `#page`). Colors resolve theme → sub-theme → site override. This system carries the three themes; per-site themes come later (the type holds at most 8 themes).

| Theme | Example sites | Headline / body | Eyebrow |
|---|---|---|---|
| Bold Coastal (default) | ocregister.com, denverpost.com (own colors) | Noto Serif / Noto Sans | Noto Sans 20 / 400 |
| Measured Vibrant | chicagotribune.com, orlandosentinel.com (own colors) | Noto Serif / Noto Sans | Noto Sans 17 / 700 |
| Modern Earthy | canoncitydailyrecord.com (NEPA-PMP), mcall.com (own colors) | Noto Sans / Noto Serif | Noto Serif 21 / 400 |

- Type sizes, weights and spacing are the same on every theme; only the font families and the eyebrow change.
- `color/theme/subsite-custom` is left out of the color themes: Bold Coastal's value is `#0097a7`; Measured Vibrant and Modern Earthy have none (MISSING in the style guides). Sub-theme overrides (Denver Post `#000000`, The Press Democrat `#eeeeee`, St. Paul Pioneer Press `#ffffff`, The Baltimore Sun `#1c2551`, South Florida Sun Sentinel `#000000`) come with the per-site themes.
- Obituaries (Endless Tributes) look the same on every site: use the `mng-color-tributes-*` colors, whatever the theme.

## Color

- Text is `mng-color-gray-min` ("black"; 18.4:1 on white) unless a spec says otherwise. Use `mng-color-gray-black` only for focus rings and where a spec names it.
- Secondary text `mng-color-gray-100`; meta text (timestamps, captions) `mng-color-gray-200`, the lightest gray that passes 4.5:1 on white. `gray-300` and lighter are never small text.
- Borders and dividers: `mng-color-gray-500` (cards), `gray-300` (tooltip and modal edges), `gray-400` (masthead rules).
- `mng-color-theme-primary` is the brand color: Button Primary, links, kickers, active tabs, card hover. It passes 4.5:1 on white in all three themes (Bold Coastal 5.5:1, Measured Vibrant 6.9:1, Modern Earthy 5.2:1; lowest across all 96 sites 4.75:1, orlandosentinel.com). Text on a primary fill is `mng-color-gray-max`.
- `mng-color-theme-secondary` and `tertiary` are fills only, never text on white.
- Always check contrast on what ships: 4.5:1 for normal text, 3:1 for text 24px+ (or 18.66px+ bold), icons, borders and focus rings. Text on a color chip uses `gray-min` or `gray-max`, whichever passes; if neither, `gray-black`.
- Production colors that differ from the design are listed in `design-vs-production.md` (entry 5). Tokens always carry the design value, never production's.

## Type

- Two families: **Noto Sans** and **Noto Serif** (Google Fonts). The font roles `heading`, `body`, `small-headline` and `eyebrow` map to one of them per theme (table above); set editorial text with the `mng-editorial-*` styles (CSS classes of the same name, or the `--mng-editorial-<style>-font-*` variables), which use those roles.
- Editorial styles: `mng-editorial-titles-display` (article H1, 36), `mng-editorial-titles-title` (29), `mng-editorial-titles-title-media`, `mng-editorial-titles-card-secondary` (26), `mng-editorial-titles-card-tertiary` (20), `mng-editorial-titles-card-tertiary-row` (18), `mng-editorial-titles-card-tertiary-compact` (16), `mng-editorial-titles-card-quaternary` (19), `mng-editorial-titles-headline-list` (15), `mng-editorial-titles-related-headline`, `mng-editorial-titles-subtitle` (deck, 23), `mng-editorial-titles-section-header` (40), `mng-editorial-body-default` (16.5 / 27), `mng-editorial-body-excerpt` (15 / 21), `mng-editorial-body-excerpt-compact` (15 / 19), `mng-editorial-navigation-primary-label`, `mng-editorial-footer-copyright`.
- Sizes come only from `mng-font-size-*`; weights from `mng-font-weight-*` (400 Regular, 500 Medium, 600 SemiBold, 700 Bold). No Display fonts, no italic token.
- Excerpts are always 15px / 400; their line height is set by the card (21px default, 19px compact).

## Spacing, radius, shadow

- Spacing is on the 4/8 grid: `mng-spacing-050` 4, `100` 8, `150` 12, `200` 16, `250` 20, `300` 24, `400` 32, `500` 40. Production's 10px and 14px are drift, not tokens.
- Radius: `mng-radius-sm` (4px) on every button and control; `mng-radius-utility` (5px) on containers only (InLineMessage, modals, form fields, status badge); `mng-radius-lg` (8px) on cards.
- Shadows are black only: `mng-shadow-sm` sticky bars, `mng-shadow-md` cards, `mng-shadow-lg` anything floating (modals, menus, tooltips). Mastheads keep production's `shadow/masthead` (0 3px 3px 0 at 25%, only when scrolled), not exported yet.
- Focus rings: `outline: 2px solid var(--mng-color-gray-black); outline-offset: 1px`. The ring draws outside the element and never changes its size (a 40px button reads as 46px with the ring).

## Breakpoints

Two official sets for now; the goal is the Device set only.

- **MNG Device** (core; Figma screen widths; Reader Dashboard): `mng-breakpoint-fold` 340, `mobile` 360, `tablet` 768, `tablet-landscape` 1024, `desktop` 1280.
- **WordPress grid** (WordPress themes incl. Obituaries; legacy): `mng-breakpoint-wordpress-grid-xs` 320, `s` 640, `m` 800, `l` 1040 (the masthead switches to desktop here), `xl` 1280 (container width; 16 columns × 80px, 20px gutters).
- Components with a `Breakpoint` property use `Mobile` below 640px and `Desktop` from 640px up unless their guidance says otherwise.

## Icons

The production `icomoon` icon font (the same file on every MNG site), 171 icons in 6 categories, named by their production class. Render them with the `Icon` component. Icons keep their production names, always; brand-new icons are the only exception. The next font build's artwork (17 new icons, 2 redrawn) is in the **Icons Next Build** asset group and isn't in the font yet. Payment marks stay out of the icon font.

## Logos

124 publication logos (horizontal, black and white ink, transparent, tightly cropped) are in the **Logos** group; fake logos for mock-ups are in **Placeholder Logos**. Use a placeholder logo in prototypes unless the work is for a specific publication. Never draw or approximate a logo; a publication without artwork gets its name in plain type.

## Content

- Real headlines and bylines, as the sites print them: "Norte fire that destroyed homes in South Orange County is at 80% containment", "Ruby Gonzales". Never lorem ipsum.
- Kickers are the section name as written ("Crime and Public Safety"); the Article Section Kicker sets them in capitals.
- Timestamps are relative, like production card meta: "56 mins ago", "2 hours ago", "3 days ago", "1 week ago".

## Rules

- Design (Figma) is the source of truth. Never change a token to match production; production gaps go in `design-vs-production.md` ("the drift doc"), one entry per component.
- No off-token values in new work: round a production value to the nearest token or official breakpoint and log the production value in the drift doc.
- Accessibility as specced: real `button` and `a` elements, `role="tab"` / `aria-selected` on tabs, `role="dialog"` with a label on modals, `aria-hidden` on decorative icons, an `aria-label` on icon-only controls, visible focus rings, 4.5:1 text.
- Each component's guidance keeps its spec's known issues and design-vs-production notes. Read them before using it in a layout.
