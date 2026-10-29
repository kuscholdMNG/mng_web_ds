export interface TooltipProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Type. Tooltip = short hover/focus label (role="tooltip"); Toggletip = click-to-open explanation. Default 'Tooltip'. */
  type?: 'Tooltip' | 'Toggletip';
  /** Figma Placement: Top = above the trigger (caret down), Bottom = below (caret up). Default 'Top'. */
  placement?: 'Top' | 'Bottom';
  /** Figma "Label" (Type=Tooltip). Plain text only, never links. Default 'About this feed'. */
  label?: string;
  /** Figma "Text" (Type=Toggletip). Children work too. Default 'Placeholder text with more information about this feature.' */
  text?: React.ReactNode;
  /** Figma "Show Close" (Type=Toggletip): Button In-Line Close at the top right. Default true. */
  showClose?: boolean;
  /** Accessible name of the close button. Default 'Close'. */
  closeLabel?: string;
  /** Called when the toggletip's close button is pressed. */
  onClose?: (e: React.MouseEvent) => void;
  /** One trigger element (e.g. an icon-only button). When given, the popup is anchored to it and opens/closes per the spec. */
  trigger?: React.ReactElement;
  /** Controlled open state (with `trigger`). */
  open?: boolean;
  /** Initial open state (with `trigger`, uncontrolled). */
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Flip to the other Placement when the popup doesn't fit in the viewport. Default true. */
  flip?: boolean;
  /** Popup id (used for aria-describedby / aria-controls). Generated when omitted. */
  id?: string;
}
export declare function Tooltip(props: TooltipProps): React.ReactElement;
