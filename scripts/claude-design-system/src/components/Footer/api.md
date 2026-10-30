The production site footer. The device follows the rendered width; the consumer supplies the publication name (or full link groups) and the Subscribe Now action.

```js
const { Footer } = window.mng_web_design_system;
h(Footer, { publication: 'Denver Post', subscribeHref: '/subscribe' })
h(Footer, { device: 'SM-Mobile' })   // documentation: force one Figma variant
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'XL-Desktop'`, `'LG-TabletH'`, `'MD-TabletV'`, `'SM-Mobile'`, `'XS-Fold'` | from the width |
| `publication` | name in "About …" and "… Store" | `'OC Register'` |
| `groups` | `[{ id, title, links }]`; ids `subscribe`, `marketplace`, `about`, `advertising`, `contact`, `partners` keep the Figma column layout | the Figma groups |
| `legalLinks` | strings or `{ label, href }` | the Figma legal links |
| `subscribeLabel`, `subscribeHref`, `onSubscribe` | Subscribe Now (`ButtonPrimary`) | |
| `logo`, `siteName`, `homeHref` | replace the Fakeville Daily News placeholder | placeholder |

Renders a `footer` landmark. Each group is a heading and a list. Below 640px the headings are buttons (`aria-expanded`, `aria-controls`) that open their list.
