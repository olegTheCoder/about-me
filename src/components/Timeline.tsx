'use client';

import dynamic from 'next/dynamic';

// Динамический импорт: возвращаем объект с default, чтобы Next/dynamic корректно разрешал модуль
const VerticalTimeline = dynamic(
  () =>
    import('react-vertical-timeline-component').then((mod) => ({
      default: mod.VerticalTimeline,
    })),
  { ssr: false },
);

const VerticalTimelineElement = dynamic(
  () =>
    import('react-vertical-timeline-component').then((mod) => ({
      default: mod.VerticalTimelineElement,
    })),
  { ssr: false },
);

export { VerticalTimeline, VerticalTimelineElement };
