'use client';

import styles from './page.module.css';

export const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.block}>
          <h1 className={styles.display}>Krasnodar Grotesk — Заголовок для проверки</h1>
          <p className={styles.sans}>
            Bezier Sans — абзацный текст для проверки кириллицы: Съешь же ещё этих мягких
            французских булок да выпей чаю. The quick brown fox jumps over the lazy dog.
          </p>
        </section>
        <section className={styles.block}>
          <h2 className={styles.display}>Krasnodar Grotesk — Второй заголовок</h2>
          <p className={styles.sans}>
            Bezier Sans — числовые и спецсимволы: 1234567890 !@#$%^&*()_+ — тест межбуквенных
            расстояний, высоты строки и рендеринга в различных размерах.
          </p>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
