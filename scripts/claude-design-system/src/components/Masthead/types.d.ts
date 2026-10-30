export type MastheadDevice = 'XL-Desktop' | 'LG-TabletH' | 'MD-TabletV' | 'SM-Mobile' | 'XS-Fold';
export interface MastheadLink { label: React.ReactNode; href?: string; onClick?: (e: React.MouseEvent) => void; id?: string; }
export interface MastheadUser { name?: string; initials?: string; imageSrc?: string; }
export interface MastheadProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Page. Only 'Home' is built so far (others render as Home and warn). Default 'Home'. */
  page?: 'Home' | 'SectionFront' | 'Article' | 'Obituaries' | 'Dashboard';
  /** Figma Device. Default: from the rendered width (>=1040 XL-Desktop, 800-1039 LG-TabletH, 640-799 MD-TabletV, 360-639 SM-Mobile, below 360 XS-Fold). */
  device?: MastheadDevice;
  /** Figma State, forced (documentation). Leave unset: adFree and scrolling decide. */
  state?: 'Default' | 'AdFree' | 'Scrolled' | 'AdFree-Scrolled';
  /** Subscriber (ad-free): the avatar replaces Subscribe / Log In and no ads show. Default false. */
  adFree?: boolean;
  /** Show the Sponsorship 1 and Top Leaderboard placeholders when not adFree. Default true. */
  ads?: boolean;
  /** Replace an ad placeholder: called with the Ad Blocks name ("Top Leaderboard 970x250"). */
  renderAd?: (name: string) => React.ReactNode;
  /** The condensed bar sticks to the top once the reader scrolls. Default true. */
  sticky?: boolean;
  /** Scroll container when it isn't the page (IntersectionObserver root). */
  scrollRoot?: Element | null;
  /** Pixels of scrolling before the bar appears. Default 450 at 1040px and up, 1 below (production). */
  scrollThreshold?: number;
  navItems?: Array<string | MastheadLink>;
  navLabel?: string;
  trending?: Array<string | MastheadLink>;
  trendingLabel?: string;
  date?: string;
  temperature?: string;
  eEditionLabel?: string;
  eEditionHref?: string;
  sectionsLabel?: string;
  onMenuClick?: (e: React.MouseEvent) => void;
  menuOpen?: boolean;
  menuId?: string;
  onSearchClick?: (e: React.MouseEvent) => void;
  onSubscribe?: (e: React.MouseEvent) => void;
  onLogIn?: (e: React.MouseEvent) => void;
  subscribeHref?: string;
  logInHref?: string;
  onAccountClick?: (e: React.MouseEvent) => void;
  user?: MastheadUser;
  /** Replaces the Fakeville Daily News placeholder logo. */
  logo?: React.ReactNode;
  siteName?: string;
  homeHref?: string;
}
export declare function Masthead(props: MastheadProps): React.ReactElement;
