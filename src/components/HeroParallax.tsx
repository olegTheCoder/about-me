'use client';

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';
import type { RefObject } from 'react';
import styles from './HeroParallax.module.css';

type Props = {
  sectionRef: RefObject<HTMLElement | null>;
  children: ReactNode;
};

export function HeroParallax({ sectionRef, children }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [sectionRef, mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  /* Фон: сильное смещение от мыши (60–100 px) — хорошо заметно */
  const layer1X = useTransform(mouseX, [-0.5, 0.5], [-70, 70]);
  const layer1Y = useTransform(mouseY, [-0.5, 0.5], [-50, 50]);
  const layer2X = useTransform(mouseX, [-0.5, 0.5], [90, -90]);
  const layer2Y = useTransform(mouseY, [-0.5, 0.5], [40, -40]);
  const layer3X = useTransform(mouseX, [-0.5, 0.5], [-50, 50]);
  const layer3Y = useTransform(mouseY, [-0.5, 0.5], [-60, 60]);

  /* Контент: лёгкое смещение в обратную сторону — ощущение глубины */
  const contentX = useTransform(mouseX, [-0.5, 0.5], [12, -12]);
  const contentY = useTransform(mouseY, [-0.5, 0.5], [8, -8]);

  const scrollLayer1Y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scrollLayer2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scrollLayer3Y = useTransform(scrollYProgress, [0, 0.8], [0, -60]);
  const opacityBg = useTransform(scrollYProgress, [0.15, 0.5], [1, 0.3]);

  const y1 = useTransform([layer1Y, scrollLayer1Y], ([my, sy]) => (my as number) + (sy as number));
  const y2 = useTransform([layer2Y, scrollLayer2Y], ([my, sy]) => (my as number) + (sy as number));
  const y3 = useTransform([layer3Y, scrollLayer3Y], ([my, sy]) => (my as number) + (sy as number));

  return (
    <>
      <div className={styles.wrap} aria-hidden>
        <motion.div className={styles.layer1} style={{ x: layer1X, y: y1, opacity: opacityBg }} />
        <motion.div className={styles.layer2} style={{ x: layer2X, y: y2, opacity: opacityBg }} />
        <motion.div className={styles.layer3} style={{ x: layer3X, y: y3 }} />
      </div>
      <motion.div className={styles.contentWrap} style={{ x: contentX, y: contentY }}>
        {children}
      </motion.div>
    </>
  );
}
