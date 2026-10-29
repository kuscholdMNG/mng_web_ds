Section header for homepage blocks and the For You feed. Consumer supplies the `title`, the section link (`href`), and for the For You feed header the subhead and the info button's toggletip wiring (`onInfoClick`, `infoExpanded`, `infoControls`). Title family, size and weight follow the page theme's eyebrow tokens.

```js
const { SectionTitleEyebrow } = window.mng_web_design_system;
h(SectionTitleEyebrow, { title: 'Latest Headlines', href: '/news/' })
h(SectionTitleEyebrow, { style: 'Bold', title: 'Sports', href: '/sports/' })
h(SectionTitleEyebrow, { title: 'While You Were Away', chevron: false, showSubhead: true,
  onInfoClick: toggle, infoExpanded: open, infoControls: 'feed-tip' })
```

| Prop | Values | Default |
|---|---|---|
| `style` | `'Underline'`, `'Bold'` (Figma Style; not the CSS attribute, see `rootStyle`) | `'Underline'` |
| `chevron` | boolean | `true` |
| `showSubhead` | boolean | `false` |
| `subhead` | text | `'Based on what you read.'` |
| `showInfo` | boolean (shown with the subhead) | `true` |
| `title` | text (shown uppercase) | `'Latest Headlines'` |
| `href` | section link around title + chevron | |
| `headingLevel` | `'h2'`… | `'h2'` |
| `onInfoClick`, `infoExpanded`, `infoControls`, `infoLabel` | info button (toggletip) | label `'About this feed'` |
| `rootStyle` | inline style for the root | |

No outer padding or margins: the block that uses the title sets the space around it. The info button opens the Tooltip (Type=Toggletip, Placement=Bottom), which the consumer renders.
