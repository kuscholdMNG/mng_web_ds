The locked-feature panel that invites a non-subscriber to subscribe (InLineMessage, Priority=Medium, Location=DashSubsNonSub, PanelType=Alert), used by the For You tab. Consumer supplies the copy, the button handler or link, and the `device` for the breakpoint.

```js
const { InLineMessageDashSubsNonSub } = window.mng_web_design_system;
h(InLineMessageDashSubsNonSub, {
  title: 'Your personalized feed is waiting',
  description: 'Subscribe to unlock a feed tailored to what you actually read — local news, sports, tech, and more.',
  buttonLabel: 'Subscribe Now', buttonHref: '/subscribe', headingLevel: 2
})
h(InLineMessageDashSubsNonSub, { device: 'Mobile' })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'Desktop'`, `'Mobile'`, `'FOLD'` | `'Desktop'` |
| `title` | text | `'Subscribe to the news.'` |
| `description` | text; children work too | `'Get access to the news and other exclusive features.'` |
| `buttonLabel` | Button Primary label | `'Subscribe Now'` |
| `onButtonClick`, `buttonHref` | button handler or link | |
| `headingLevel` | `2`–`6` renders the title as a heading | paragraph |

Width is the Figma panel width (546 / 328 / 308px) with `max-width: 100%`. The close button is hidden in this Location, so there is none.
