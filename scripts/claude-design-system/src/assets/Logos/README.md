# Logos

Newspaper logos from `logos/` (built by `scripts/logos-export/build-logos.py` from Marketing's Illustrator artwork): one horizontal logo per publication, 124 publications, each as `<slug>--horizontal--black.svg` (dark ink, for light backgrounds) and `<slug>--horizontal--white.svg` (light ink, for dark backgrounds).

- Single ink. Each file sets its ink on the root `<svg>` (`#000000` or `#FFFFFF`) and draws with `currentColor`; in an `<img>` it shows in that ink. To recolor (for example `color/theme/primary`), inline the SVG and set CSS `color`.
- Transparent and tightly cropped to the ink: the placing component supplies clear space. Usage rules (clear space, minimum size, header heights per breakpoint) aren't defined yet.
- 83 of the 97 color-token publications have a logo. No artwork yet for: Daily Herald, Silicon Valley, Colorado Daily, Lamar Ledger, The Willits News, BoCoPreps, Brush News-Tribune, Buffzone, South Platte Sentinel, The Burlington Record, Excelsior California, Sonoma County Gazette, Sonoma Magazine, GrowthSpotter. Set those names in plain type; never draw a logo.
- Each SVG has `role="img"`, an `aria-label` and a `<title>` with the publication name.
- Open question: mainlinemedianews.com is "Main Line Media News" in the color tokens, but its artwork reads "Main Line Times & Suburban".
