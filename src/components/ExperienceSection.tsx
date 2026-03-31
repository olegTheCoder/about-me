'use client';

import { sectionTitle } from '@/lib/animations';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from '@/components/Timeline';
import { TimelineIcon } from '@/components/TimelineIcon';
import { useGsapCards } from '@/hooks/useGsapCards';
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
  const timelineRef = useGsapCards<HTMLDivElement>('timeline');

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <motion.h2 className={styles.sectionTitle} {...sectionTitle}>
          {title}
        </motion.h2>
        <div ref={timelineRef}>
          <VerticalTimeline lineColor="var(--timeline-line)" className={styles.verticalTimeline}>
            {jobs.map((job) => (
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
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.timelineLink}
                >
                  <h3 className={styles.timelineRole}>{job.company}</h3>
                  <p className={styles.timelineDesc}>{job.desc}</p>
                </a>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
export type { ExperienceJob };
