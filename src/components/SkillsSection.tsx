'use client';

import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import styles from './SkillsSection.module.css';

export type SkillItem = {
  name: string;
  Icon: IconType;
  url?: string;
};

type Props = {
  skills: SkillItem[];
  title: string;
};

function getCols(): number {
  if (typeof window === 'undefined') return 5;
  const w = window.innerWidth;
  if (w < 480) return 2;
  if (w < 640) return 3;
  if (w < 1024) return 4;
  return 5;
}

export function SkillsSection({ skills, title }: Props) {
  const [cols, setCols] = useState(5);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    setCols(getCols());
    const onResize = () => setCols(getCols());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        cardRefs.current.forEach((card) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (mx - cx) / 16;
          const dy = (my - cy) / 16;
          card.style.setProperty('--parallax-ry', `${dx}deg`);
          card.style.setProperty('--parallax-rx', `${-dy}deg`);
        });
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(rafRef.current);
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.setProperty('--parallax-ry', '0deg');
        card.style.setProperty('--parallax-rx', '0deg');
      });
    };

    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);
    return () => {
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleClick = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getVariants = useCallback(
    (index: number) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      const delay = row * 0.06 + col * 0.04;

      let x = 0;
      let rotate = 0;
      let scaleFrom = 0.85;

      if (cols >= 4) {
        if (col === 0) {
          x = -60;
          rotate = -4;
        } else if (col === cols - 1) {
          x = 60;
          rotate = 4;
        } else {
          scaleFrom = 0.85;
        }
      } else if (cols === 3) {
        if (col === 0) {
          x = -40;
          rotate = -3;
        } else if (col === 2) {
          x = 40;
          rotate = 3;
        } else {
          scaleFrom = 0.9;
        }
      } else {
        scaleFrom = 0.9;
      }

      return {
        hidden: { opacity: 0, x, y: 30, rotate, scale: scaleFrom },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
        },
      };
    },
    [cols],
  );

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.02 },
    },
  };

  return (
    <section ref={sectionRef} id="skills" className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h2>
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerVariants}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className={`${styles.card} ${skill.url ? styles.clickable : ''}`}
              variants={getVariants(i)}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={{
                transform:
                  'perspective(600px) rotateY(var(--parallax-ry, 0deg)) rotateX(var(--parallax-rx, 0deg))',
              }}
              onClick={() => handleClick(skill.url)}
              tabIndex={skill.url ? 0 : -1}
              role={skill.url ? 'button' : undefined}
              onKeyDown={(e) => {
                if (skill.url && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleClick(skill.url);
                }
              }}
            >
              <skill.Icon className={styles.icon} aria-hidden />
              <span className={styles.label}>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
