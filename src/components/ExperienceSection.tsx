'use client';

import { ktsSectionTitle } from '@/lib/animations';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from '@/components/Timeline';
import { TimelineIcon } from '@/components/TimelineIcon';
import styles from '@/app/page.module.css';
import 'react-vertical-timeline-component/style.min.css';

type ExperienceJob = {
  company: string;
  period: string;
  desc: string;
  logo: string;
  url: string;
};

type ExperienceSectionProps = {
  title: string;
  jobs: ExperienceJob[];
};

function ExperienceSection({ title, jobs }: ExperienceSectionProps) {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <motion.h2 className={styles.sectionTitle} {...ktsSectionTitle}>
          {title}
        </motion.h2>
        <VerticalTimeline lineColor="var(--timeline-line)" className={styles.verticalTimeline}>
          {jobs.map((job, index) => (
            <VerticalTimelineElement
              key={job.period}
              className={styles.timelineElement}
              contentStyle={{
                background: 'var(--card-bg)',
                color: 'var(--text-primary)',
                boxShadow: 'var(--card-shadow)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
              }}
              date={job.period}
              dateClassName={styles.timelineDate}
              iconStyle={{
                background: '#fff',
                border: '2px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
              }}
              icon={<TimelineIcon logo={job.logo} alt={`${job.company} logo`} />}
            >
              <motion.a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.timelineLink}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.55,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <h3 className={styles.timelineRole}>{job.company}</h3>
                <p className={styles.timelineDesc}>{job.desc}</p>
              </motion.a>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default ExperienceSection;
export type { ExperienceJob };
