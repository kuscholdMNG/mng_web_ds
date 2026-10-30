The site header, Page = Home (the other pages come later). Place it as the **first child of the page's scrolling wrapper** (for example `body` or the page column): it renders the top-of-page masthead in the flow, followed by the condensed 64px bar, which sticks to the top once the reader scrolls (production's headroom behavior). The device follows the rendered width; the consumer supplies whether the reader is a subscriber (`adFree`), and handlers for the menu, account, search, Subscribe and Log In.

```js
const { Masthead } = window.mng_web_design_system;
h(Masthead, { onMenuClick: openSections, onSearchClick: openSearch })               // anonymous: ads, Subscribe / Log In
h(Masthead, { adFree: true, user: { name: 'Gina Moreno' }, onAccountClick: open })  // subscriber: no ads, avatar
h(Masthead, { state: 'Scrolled', device: 'XL-Desktop' })                             // documentation: one Figma variant
```

| Prop | Values | Default |
|---|---|---|
| `adFree` | subscriber (AdFree / AdFree-Scrolled) | `false` |
| `device` | `'XL-Desktop'`, `'LG-TabletH'`, `'MD-TabletV'`, `'SM-Mobile'`, `'XS-Fold'` | from the width |
| `state` | `'Default'`, `'AdFree'`, `'Scrolled'`, `'AdFree-Scrolled'` (documentation: renders that variant only, no sticking) | unset |
| `sticky` | the condensed bar appears on scroll | `true` |
| `scrollThreshold` | px of scroll before the bar appears | `450` at 1040px and up, `1` below |
| `scrollRoot` | scroll container element, when it isn't the page | viewport |
| `ads`, `renderAd(name)` | show or replace the Sponsorship 1 / Top Leaderboard placeholders | `true` |
| `navItems`, `trending` | strings or `{ label, href, onClick }` | the Figma sample |
| `date`, `temperature`, `eEditionLabel`, `eEditionHref` | weather bug text (1040px and up) | the Figma sample |
| `user` | `{ name, initials, imageSrc }`: the subscriber's avatar | initials of "Reader" |
| `onMenuClick`, `menuOpen`, `menuId` | the All Sections / hamburger button (`aria-expanded`, `aria-controls`) | |
| `onSearchClick`, `onSubscribe`, `onLogIn`, `subscribeHref`, `logInHref`, `onAccountClick` | actions | |
| `logo`, `siteName`, `homeHref` | replace the Fakeville Daily News placeholder | placeholder |

Renders `header` (top of the page, with the Top Nav as `nav aria-label="Main"`) and the sticky bar after it. While the bar is hidden it has `visibility: hidden` and `aria-hidden`, so keyboard and screen-reader users meet one set of controls at a time.
