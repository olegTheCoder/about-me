'use client';

import { ktsSectionTitle } from '@/lib/animations';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from '@/components/Timeline';
import { TimelineIcon } from '@/components/TimelineIcon';
import styles from '@/app/page.module.css';
import 'react-vertical-timeline-component/style.min.css';

type CourseItem = {
  role: string;
  company: string;
  period: string;
  desc: string;
  logo: string;
  iconBg: string;
};

type CoursesSectionProps = {
  title: string;
  courses: CourseItem[];
};

function CoursesSection({ title, courses }: CoursesSectionProps) {
  return (
    <section id="courses" className={styles.section}>
      <div className={styles.container}>
        <motion.h2 className={styles.sectionTitle} {...ktsSectionTitle}>
          {title}
        </motion.h2>
        <VerticalTimeline lineColor="var(--timeline-line)" className={styles.verticalTimeline}>
          {courses.map((course) => (
            <VerticalTimelineElement
              key={course.period}
              className={styles.timelineElement}
              contentStyle={{
                background: 'var(--card-bg)',
                color: 'var(--text-primary)',
                boxShadow: 'var(--card-shadow)',
                border: '1px solid var(--border)',
              }}
              contentArrowStyle={{ borderRight: '7px solid var(--card-bg)' }}
              date={course.period}
              dateClassName={styles.timelineDate}
              iconStyle={{
                background: course.iconBg,
                border: '2px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
              }}
              icon={<TimelineIcon logo={course.logo} alt={course.company} />}
            >
              <h3 className={styles.timelineRole}>
                {course.role} · {course.company}
              </h3>
              <p className={styles.timelineDesc}>{course.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default CoursesSection;
export type { CourseItem };
