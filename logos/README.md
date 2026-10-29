# Newspaper logos

> **Started 2026-10-08.** Transparent SVG logos for production and Claude Design. Built by `scripts/logos-export/build-logos.py` from Marketing's logo artwork on Drive ("Completed Market Logos", owner Kristen Althoff). First pass: one horizontal logo per publication, in black and in white, plus the Figma placeholder logos.

Open `preview.html` to browse everything (serve the repo folder first, for example `python3 -m http.server`, then go to `http://localhost:8000/logos/preview.html`).

## What's here

```
logos/
├── README.md                 ← this file
├── logos.json                ← manifest: every logo, its files, size, source and site data
├── preview.html              ← visual check of every logo on light and dark
├── publications/<slug>/
│   ├── <slug>--horizontal--black.svg
│   └── <slug>--horizontal--white.svg
└── placeholder/<slug>/       ← fake logos for mock-ups (Fakeville Daily News, Newspaper Town Times / News)
    └── <slug>--<layout>--<black|white>.svg     layout: horizontal, stacked, stacked-tall, lettermark
```

- **124 publications.** 83 of the 97 publications in `tokens/colors/mng-colors-sites.csv` have a logo (`in_color_tokens: true` in the manifest). The other 41 are sub-market weeklies that only exist in the PageSuite set (Alameda Journal, Almaden Resident, Berkeley Voice and so on); they're kept because they came free with the source.
- **14 color-token publications have no logo yet.** See "Missing" below.
- **3 placeholder brands × 4 layouts × 2 colors** (24 files), from the main Figma file's "FAKE NEWSPAPER LOGOS" set (`jFHYqhZbJjvWQmDI4myCsd`, node `3051:2728`). Use these in mock-ups and templates instead of real mastheads.
- **Figma component** (2026-10-29): the `Logo` component set (`389:385`) in Newspaper Logos, Favicons, User Pics (`oXaN4tEoa4GsH4x7kWpAFZ`, page `339:2`): Publication × Layout (Horizontal, Stacked, Lettermark) × Color (Light, Dark, Color), 909 variants for the 97 color-token markets and the 3 placeholder brands. Its horizontal Light / Dark variants come from these SVGs; its stacked, lettermark and brand-color variants come straight from the `LogosMaster.ai` files and are **in Figma only** for now (Karl: they come to the repo once more of the missing artwork arrives). Slots without artwork show Fakeville Daily News (Color in `#ff00ff`), marked "PLACEHOLDER" in the variant description. The 41 publications without color tokens aren't in Figma.

## How the files are built

- **Vector, not traced.** Every SVG comes from the Illustrator (.ai) artwork, not from the PNGs. The PageSuite channel folder on Drive is all PNG, so its vector source (`Master Logos/<Publication>/<ABBR>_PageSuite.ai`, artboard 2, "Top Navigation", VAR × 64) is used instead.
- **Source order:** PageSuite .ai (artboard 2) first. If a publication has none, its `LogosMaster.ai` "Main Logo, Black" artboard (artboard 3; artboard 4 for The Baltimore Sun). Monterey Herald only has an EmailOps file. `scripts/logos-export/sources.json` lists the source for each publication.
- **Transparent.** Only the .ai "Art" layer is used. The "Paste Board Elements" layer (the black or white box behind the logo) and any full-artboard rectangle are dropped. The SVGs have no background.
- **Tight crop.** The viewBox is cropped to the visible ink, with no padding. Any clear space has to come from the component that places the logo.
- **One ink color.** Every path uses `fill="currentColor"` and the root `<svg>` sets `color="#000000"` (black file) or `color="#FFFFFF"` (white file). In an `<img>` the file shows in that color. Inlined, CSS can recolor it: `.masthead svg { color: var(--color-theme-primary); }`.
- **Inline-safe.** Clip-path ids are prefixed with the slug, so several logos can be inlined on one page.
- **Accessible.** Each SVG has `role="img"`, an `aria-label` and a `<title>` with the publication name.
- **Checked.** Every logo was rendered and compared pixel-by-pixel with the original artboard (mean overlap 97.5%; the remaining difference is anti-aliasing on hairline serifs).

## Naming

- `<slug>` is the publication name from the color tokens, lowercased with hyphens (`the-denver-post`, `orange-county-register`, `canon-city-daily-record`). For publications outside the color tokens it's the Drive folder name.
- `--<layout>--<color>`: layout is `horizontal` for now; color is `black` (dark ink, for light backgrounds) or `white` (light ink, for dark backgrounds).
- Drive's file abbreviations aren't used because they collide: `CR_` is both Cambrian Resident and Campbell Reporter, `TCR_` both The Central Record and Tri County Record.

## Missing (no artwork on Drive yet)

Daily Herald (its LogosMaster.ai has empty artboards), Silicon Valley, Colorado Daily, Lamar Ledger, The Willits News, BoCoPreps, Brush News-Tribune, Buffzone, South Platte Sentinel, The Burlington Record, Excelsior California, Sonoma County Gazette, Sonoma Magazine, GrowthSpotter.

## What's in the Drive source (for later passes)

| Folder | Contents |
| :-- | :-- |
| Master Logos | 127 publication folders, 353 .ai files. Each has a `LogosMaster.ai` plus channel files (`PageSuite`, `EmailOps`, `App`, `PaidMedia_Jotform`). Canon City Daily Record also has single-artboard "Logos For Market Use" files. |
| PageSuite | 274 PNGs in 14 clusters: `AppLogo_1024x1024`, `Favicon_16x16`, `Top_Navigation_White_VARx64`. |
| App | 585 SVGs for 39 publications: iOS / Android main logo (black on light, white on dark) at several heights, lettermark (light / dark), lock screen, widget, home screen. |
| Email Ops | 80 JPGs, `MainLogo_600xVAR`, plus app-store buttons. |
| Paid Media | Jotform logos (5 PNG, 5 SVG). |
| Paywall | 1 PNG. |

**`LogosMaster.ai` artboards** (the same order in 119 files):

| Artboard | Layout | Color |
| :-- | :-- | :-- |
| 1 | Print masthead (very wide, 1,400–4,400 pt) | Full color, rich black `#231F20` |
| 2 | Favicon, 32 × 32 | Brand color tile |
| 3 / 4 / 5 | Main logo (horizontal) / Stacked / Lettermark | Black |
| 6 / 7 / 8 | Main logo / Stacked / Lettermark | White |
| 9 / 10 / 11 | Main logo / Stacked / Lettermark | Brand color (in 50 files) |

Exceptions: Pioneer Press (14 artboards, extra horizontal sets), The Trentonian (12), Campbell Reporter (10), The Baltimore Sun (9, two mastheads). Some publications leave the Stacked or Lettermark artboard empty, and the "stacked" artboard isn't always a two-line lockup (Ukiah Daily Journal's main logo is already two lines).

## Variants to add next

1. **Stacked and Lettermark** (LogosMaster artboards 4–5 and 7–8) for narrow headers, social cards and square slots.
2. **Brand color** for the ~50 publications that have it (artboards 9–11). Examples: Chicago Tribune `#005696`, Boston Herald `#005E9D`, Daily Camera `#339946`, Greeley Tribune black + `#7293A2`, Lowell Sun yellow / red / black. Check these against `color/theme/primary` per site before they're used.
3. **Favicon and app icon** (artboard 2, PageSuite `AppLogo_1024x1024`). These need PNG / ICO outputs as well as SVG.
4. **Print masthead** (artboard 1), for e-edition and archive use. Low priority.
5. **Usage rules** that the files don't carry: clear space, minimum size (logos with hairline serifs, such as The Saratogian, Daily Breeze and The Times Herald, need testing at small sizes), and header logo heights per breakpoint, measured on the standard review sites and turned into tokens.

See `MNG-Web-Design-System-Status.md` for the open decisions.

## Rebuilding

1. Download "Completed Market Logos" from Drive (https://drive.google.com/drive/folders/1luw8jc2lUoAHwbbOCokgacO_nzDLm7Vi). The Drive connector can't read it (it's owned by Marketing), so use Drive's Download in the browser and unzip it.
2. Add or change rows in `scripts/logos-export/sources.json` for new publications (a publication with no row is still picked up if it has a `_PageSuite.ai` file).
3. Run `python3 scripts/logos-export/build-logos.py --source "<path to Completed Market Logos>"`. It needs `pdftocairo` (poppler) and the Python packages `pymupdf`, `cairosvg` and `Pillow`.
4. Placeholders: rerun `scripts/logos-export/extract-placeholders.js` in Figma only if the FAKE NEWSPAPER LOGOS frames change, and save the result as `figma-placeholders.json`.
