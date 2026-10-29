The sign-in panel offered to logged-out readers ("Sign in to [site] with Apple / Google"). It has no overlay: the page stays usable, so the panel is a non-modal `role="dialog"` labelled by its title. Consumer supplies `device`, `options`, the `site` (or a full `title`), the Apple handler, the Google accounts (GOTcustom / AllOptions) and `onClose`.

```js
const { ModalsOffset } = window.mng_web_design_system;
// Phone: fixed to the bottom of the screen, 16px from each side
h(ModalsOffset, { device: 'SMMobile', options: 'OneTapCTA', site: 'denverpost.com', onApple: signInWithApple, onClose: dismiss })

// Desktop Float: placed by the consumer (e.g. position: fixed; top/right of your choosing)
h(ModalsOffset, { device: 'XLDesktop', options: 'AllOptions', accounts: googleAccounts, onAccount: pick,
  onApple: signInWithApple, onClose: dismiss, style: { position: 'fixed', top: 80, right: 24 } })

// Previews: FixedFooter in flow
h(ModalsOffset, { device: 'XSFold', options: 'GOTcustom', inline: true })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'XLDesktop'`, `'SMMobile'`, `'XSFold'` | `'XLDesktop'` |
| `location` | `'Float'`, `'FixedFooter'` | `'Float'` on XLDesktop, else `'FixedFooter'` |
| `options` | `'OneTapCTA'`, `'GOTcustom'`, `'AllOptions'` | `'OneTapCTA'` |
| `inline` | FixedFooter in flow at its Figma width | `false` |
| `site` / `title` | site name in the default title, or the whole title | `'fakevilledailynews.com'` |
| `accounts` | `[{ name, email, avatar, initials, image, selected }]` | the three Figma sample accounts |
| `moreAccountsLabel`, `onMoreAccounts` | last chooser row; `null` hides it | `'1 more account'` |
| `onAccount` | `(account, index, event)` | |
| `appleLabel`, `onApple` | Sign in with Apple button | `'Sign in with Apple'` |
| `onClose`, `closeLabel` | Button In-Line Close at the top right | `'Close'` |

The Google account chooser reproduces Google's own UI for reference (it isn't tokenized and may not be in use); in production Google renders it.
