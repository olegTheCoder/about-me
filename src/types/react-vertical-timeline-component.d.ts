declare module 'react-vertical-timeline-component' {
  import { ReactNode, CSSProperties } from 'react';

  export interface VerticalTimelineProps {
    children?: ReactNode;
    className?: string;
    lineColor?: string;
    animate?: boolean;
    layout?: '1-column' | '2-columns';
  }

  export interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    date?: string | ReactNode;
    dateClassName?: string;
    iconStyle?: CSSProperties;
    icon?: ReactNode;
    iconOnClick?: () => void;
    position?: 'left' | 'right';
    textClassName?: string;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
