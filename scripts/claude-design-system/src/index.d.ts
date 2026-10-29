/* MNG Web Design System — component types (documentation; props mirror the Figma variant properties). */
import type * as React from 'react';

/** Figma variant values are passed as-is, e.g. state: 'Hover'. Leave `state` unset in real layouts. */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Production icon name from tokens/icons/icons.json, e.g. 'close', 'access-time', 'new-tab'. */
  name: string;
  /** Font size in px or a CSS length. Default 16. */
  size?: number | string;
  /** CSS color; use a token, e.g. 'var(--mng-color-theme-primary)'. Default: inherits. */
  color?: string;
  /** Accessible name; only for an icon that carries meaning with no visible text. */
  label?: string;
}
export declare function Icon(props: IconProps): React.ReactElement;
