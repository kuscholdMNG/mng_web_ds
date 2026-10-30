One headline in the homepage Zone 1 Latest Headlines list. Usually you use `LatestHeadlines`, which lists these for you; use the item alone to build a custom list. It fills its column.

```js
const { LatestHeadlinesListItem } = window.mng_web_design_system;
h('ul', null,
  h('li', null, h(LatestHeadlinesListItem, { type: 'First', headline: 'Storm closes I-70', time: '12 mins ago', href: '/news/storm' })),
  h('li', null, h(LatestHeadlinesListItem, { type: 'Standard', headline: 'School board votes on budget', time: '1 hour ago' })))
```

| Prop | Values | Default |
|---|---|---|
| `type` | `'First'` (no rule), `'Standard'` (rule above), `'Sponsored'` (rule above, badge, sponsor byline and logo) | `'First'` |
| `headline` | text or nodes | the Figma sample |
| `time`, `dateTime` | relative time shown after the headline (First, Standard); ISO time makes it a `<time>` | `'56 mins ago'` / `'57 mins ago'` |
| `href`, `target` | the headline becomes the link | |
| `headingLevel` | 1–6 | `3` |
| `sponsor`, `sponsorLogo`, `sponsorLogoAlt`, `badgeLabel` | Sponsored only: sponsor name, logo URL (60×12), its alt text, badge text | `'Xcel Energy'`, empty box, `''`, `'Sponsored content'` |

Renders an `article` with an `h3` headline; First and Standard put the time inline right after it, like production. The 12px between items comes from the list (`LatestHeadlines`), not the item.
