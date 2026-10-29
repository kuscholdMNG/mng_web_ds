export interface Zone1SlideshowSlide {
  /** Photo URL; without it the Article Image Placeholder shows. */
  image?: string;
  imageAlt?: string;
  caption?: React.ReactNode;
  /** Photo credit, shown when `showCredit` is on. */
  credit?: React.ReactNode;
}
export interface Zone1SlideshowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Breakpoint: frame width, image-area height and placeholder size. Desktop 356×200, Tablet 358×201, Mobile 340×191. Default 'Desktop'. */
  breakpoint?: 'Desktop' | 'Tablet' | 'Mobile';
  /** Controls size (production's 800px breakpoint): 'Large' at 800px and up (40×60 arrows, 30px icons, 13px text, 8/16 spacing),
   *  'Small' below 800px (35×53, 26px, 11px, 4/12). Default: Large for Desktop, Small for Tablet and Mobile.
   *  Use Tablet + 'Large' from 800 to 1023px, Desktop + 'Small' from 640 to 799px. */
  controls?: 'Large' | 'Small';
  /** Fill the column (width 100%) with a 16:9 image area, instead of the breakpoint's fixed width. Default false. */
  fill?: boolean;
  /** Figma Show Credit. Default false. */
  showCredit?: boolean;
  /** Credit text (single-slide mode). Default 'AP Photo/Gregory Bull'. */
  credit?: React.ReactNode;
  /** Figma Slide Count text (single-slide mode). Default '1 of 29'. With `slides`, it is computed ("2 of 3"). */
  slideCount?: React.ReactNode;
  /** Figma Caption text (single-slide mode). Default: the Figma sample caption. */
  caption?: React.ReactNode;
  /** Photo URL (single-slide mode); falls back to the Article Image Placeholder. */
  image?: string;
  imageAlt?: string;
  /** All slides: the component pages through them (looping) with the arrows or a drag / swipe. */
  slides?: Zone1SlideshowSlide[];
  /** Current slide (controlled, with `slides`). */
  index?: number;
  /** Initial slide (uncontrolled). Default 0. */
  defaultIndex?: number;
  /** New slide index after Previous / Next / swipe (with `slides`). */
  onChange?: (index: number, e: React.SyntheticEvent) => void;
  /** Previous / Next pressed (always called; use in single-slide mode to page your own data). */
  onPrevious?: (e: React.SyntheticEvent) => void;
  onNext?: (e: React.SyntheticEvent) => void;
  /** Forced Slideshow Arrow state for documentation; leave unset in real layouts. */
  arrowState?: 'Default' | 'Focus';
}
export declare function Zone1Slideshow(props: Zone1SlideshowProps): React.ReactElement;
