export interface GalleryIconBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma Size. Large (33px circle, 16px icon) on card and lead images and rows at 640px and up; Small (20px, 8.4px icon) on thumbnails up to about 120px wide. Default 'Small'. */
  size?: 'Small' | 'Large';
  /** Forced Figma State for documentation; leave unset in real layouts (:hover applies Hover). */
  state?: 'Default' | 'Hover';
  /** Accessible name (role img). Default 'Photo gallery'; null or '' makes the badge decorative (aria-hidden). */
  label?: string | null;
}
/** The photo-gallery badge for an image's bottom-right corner. The parent positions it (Large: 5px from the right and bottom edges; Small: 3.75px right, 5px bottom). */
export declare function GalleryIconBadge(props: GalleryIconBadgeProps): React.ReactElement;
