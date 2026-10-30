export interface AdBlocksProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Name: unit and size, e.g. 'Top Leaderboard 970x250', 'Cube 2 RRail Mid 300x600', 'Mobile Adhesion 320x50'. All names: AdBlocks.names. Default 'Top Leaderboard 970x250'. */
  name?: string;
  /** Figma Device ('Desktop' | 'Mobile' | 'All'): documentation only; the size comes from the name. */
  device?: 'Desktop' | 'Mobile' | 'All';
  /** Mobile Adhesion only: fixed to the bottom of the viewport, centered. */
  fixed?: boolean;
  /** Mobile Adhesion close button. The placeholder hides itself unless the handler calls preventDefault(). */
  onClose?: (e: React.MouseEvent) => void;
  showClose?: boolean;
  closeLabel?: string;
  /** The real ad (fills the slot; the placeholder art isn't drawn). */
  children?: React.ReactNode;
}
export declare function AdBlocks(props: AdBlocksProps): React.ReactElement | null;
export declare namespace AdBlocks { const names: string[]; }
