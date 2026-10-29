The featured (lead) story at the top of the Blocks feed (For You tab). Only the headline is a link. Consumer supplies the article's `href`, `section`, `headline`, `excerpt`, `author`, `time` (and `dateTime`), either an `image` with `imageAlt` or, for a photo gallery, `gallery: 'Slideshow'` with the `slideshow` props, and the layout's `device`: two columns when the lead is about 700px wide or more, which in the For You feed (no side column) means `'Tablet'`/`'Desktop'` at 640px and up and `'Mobile'` below.

```js
const { BlocksLeadArticleCard } = window.mng_web_design_system;
h(BlocksLeadArticleCard, { device: 'Desktop', href: url, section: 'Crime and Public Safety', headline: title,
  excerpt: dek, author: 'Ruby Gonzales', time: '56 mins ago', image: src, imageAlt: alt })
h(BlocksLeadArticleCard, { device: 'Mobile', gallery: 'Slideshow', href: url, headline: title,
  slideshow: { slideCount: '1 of 29', caption: captionText } })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'Mobile'`, `'Tablet'`, `'Desktop'` | `'Mobile'` |
| `gallery` | `'Image'`, `'Slideshow'` | `'Image'` |
| `state` | `'Default'`, `'Hover'` (documentation only; `'Focus'` shows the link outline) | unset |
| `section`, `headline`, `excerpt` | text | the Figma sample text |
| `author`, `time`, `dateTime` | text; ISO time | `'Ruby Gonzales'`, `'56 mins ago'` |
| `image`, `imageAlt` | URL (cover); alt text | placeholder |
| `slideshow` | props for `Zone1Slideshow` (`breakpoint` follows `device`) | |
| `href`, `target` | makes the headline a link | |
| `headingLevel` | 1–6 | `2` |

Layout: Desktop is 706px (text 295 | image 391 or slideshow 356, 20px gap); Tablet is two 358px columns 32px apart (the 391px image overflows its column, as in Figma); Mobile fills its container: headline, image, excerpt, byline (or headline, excerpt, byline, slideshow), 8px apart, then a 1px `color/gray/500` rule. Nested components: `ArticleSectionKicker`, `ArticleAuthor`, `ArticleTimestamp`, `Zone1Slideshow` and the runtime `ArticleImage`.
