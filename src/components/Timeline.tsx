'use client';

import dynamic from 'next/dynamic';

// Динамический импорт для избежания SSR проблем
const VerticalTimeline = dynamic(
  () => import('react-vertical-timeline-component').then((mod) => mod.VerticalTimeline),
  { ssr: false },
);

const VerticalTimelineElement = dynamic(
  () => import('react-vertical-timeline-component').then((mod) => mod.VerticalTimelineElement),
  { ssr: false },
);

export { VerticalTimeline, VerticalTimelineElement };
