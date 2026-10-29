export interface ModalsOffsetAccount {
  name: string;
  email: string;
  /** 'unknown' (white circle + user icon), 'monogram' (initials), 'image' (photo). Inferred when omitted. */
  avatar?: 'unknown' | 'monogram' | 'image';
  initials?: string;
  image?: string;
  /** Highlighted row (Google's last-used account). */
  selected?: boolean;
}
export interface ModalsOffsetProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device. XLDesktop 546px; SMMobile 328px (360 screen); XSFold 308px (340 screen). Default 'XLDesktop'. */
  device?: 'XLDesktop' | 'SMMobile' | 'XSFold';
  /** Figma Location. Float (XLDesktop) or FixedFooter (SMMobile, XSFold). Default follows the device. */
  location?: 'Float' | 'FixedFooter';
  /** Figma Options. OneTapCTA = Sign in with Apple; GOTcustom = Google account chooser; AllOptions = both. Default 'OneTapCTA'. */
  options?: 'OneTapCTA' | 'GOTcustom' | 'AllOptions';
  /** Render FixedFooter in flow (previews, canvases) instead of fixed to the bottom of the viewport. */
  inline?: boolean;
  open?: boolean;
  /** Site name used in the default titles. Default 'fakevilledailynews.com'. */
  site?: string;
  /** Title text (Noto Sans Bold 20); labels the dialog. Defaults per Options from the Figma variants. */
  title?: React.ReactNode;
  accounts?: ModalsOffsetAccount[];
  /** Last chooser row; null hides it. Default '1 more account'. */
  moreAccountsLabel?: string | null;
  onAccount?: (account: ModalsOffsetAccount, index: number, e: React.MouseEvent) => void;
  onMoreAccounts?: (e: React.MouseEvent) => void;
  /** Sign in with Apple button label and handler. Default 'Sign in with Apple'. */
  appleLabel?: string;
  onApple?: (e: React.MouseEvent) => void;
  onClose?: (e: React.MouseEvent) => void;
  /** Accessible name of the close button. Default 'Close'. */
  closeLabel?: string;
}
export declare function ModalsOffset(props: ModalsOffsetProps): React.ReactElement | null;
