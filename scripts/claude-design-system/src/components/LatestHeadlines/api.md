The homepage Zone 1 Latest Headlines rail (Editor's Picks): the "Latest Headlines" title, the newest headlines with their times, a sponsored item and Newsletter Signup, in one column. Pass your headlines in `items`; the rail fills its column. Pick `device` for the screen range: production switches at 640 and 800px.

```js
const { LatestHeadlines } = window.mng_web_design_system;
h(LatestHeadlines, {
  device: '(≥800px)',
  items: [
    { headline: 'Storm closes I-70', time: '12 mins ago', href: '/news/storm' },
    { headline: 'School board votes on budget', time: '1 hour ago', href: '/news/budget' }
  ],
  showSponsored: false
})
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'XS'` (639px and below: full width, at most 540px, centered), `'S'` (640–799px: full width), `'(≥800px)'` (the side column beside the Zone 1 lead; `'M'`, `'L'`, `'XL'` also work) | `'XS'` |
| `title`, `href` | section title; `href` makes it a link | `'Latest Headlines'` |
| `items` | `[{ headline, time, dateTime, href, target }]`, newest first | the 7 Figma samples |
| `showSponsored`, `sponsored` | the sponsored item and its props (`headline`, `href`, `sponsor`, `sponsorLogo`, `badgeLabel`) | `true`, the Figma sample |
| `showNewsletter`, `newsletter` | Newsletter Signup at the end (anonymous view), or your own node in its place | `true` |
| `headingLevel` | heading level of the item headlines | `3` |

Renders a `div`: the title (`h2`, Section Title / Eyebrow) and a `ul` with one `li` per item.
