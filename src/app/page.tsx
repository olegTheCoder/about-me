'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './page.module.css';

export const HomePage = () => {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 600], [0, -60]);
  const yFast = useTransform(scrollY, [0, 600], [0, -180]);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <motion.h1 style={{ y: ySlow }} className={styles.title}>
          Привет, я Олег — Frontend Developer
        </motion.h1>
        <motion.p style={{ y: yFast }} className={styles.subtitle}>
          Короткое описание моих навыков и опыта
        </motion.p>
      </section>
      <section className={styles.section}>
        <h2>Обо мне</h2>
        <p>Здесь будет краткое описание моих навыков и опыта</p>
      </section>
    </main>
  );
};

export default HomePage;
