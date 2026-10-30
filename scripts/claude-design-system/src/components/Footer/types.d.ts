export interface FooterLink { label: React.ReactNode; href?: string; onClick?: (e: React.MouseEvent) => void; id?: string; }
export interface FooterGroup { id?: string; title: React.ReactNode; links: Array<string | FooterLink>; }
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Device. Default: from the rendered width (>=1040 XL-Desktop, 800-1039 LG-TabletH, 640-799 MD-TabletV, 360-639 SM-Mobile, below 360 XS-Fold). */
  device?: 'XL-Desktop' | 'LG-TabletH' | 'MD-TabletV' | 'SM-Mobile' | 'XS-Fold';
  /** Publication name in "About ..." and "... Store". Default 'OC Register' (the Figma sample). */
  publication?: string;
  /** Link groups. Default: the Figma groups. The column layout places groups by id: subscribe, marketplace, about, advertising, contact, partners. */
  groups?: FooterGroup[];
  legalLinks?: Array<string | FooterLink>;
  subscribeLabel?: string;
  subscribeHref?: string;
  onSubscribe?: (e: React.MouseEvent) => void;
  /** Replaces the Fakeville Daily News placeholder logo. */
  logo?: React.ReactNode;
  siteName?: string;
  homeHref?: string;
}
export declare function Footer(props: FooterProps): React.ReactElement;
