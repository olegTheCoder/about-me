'use client';

import { MatrixText } from '@/components/MatrixText';
import { useTheme } from '@/components/ThemeProvider';
import { TimelineIcon } from '@/components/TimelineIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, GraduationCap, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { IconType } from 'react-icons';
import {
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './page.module.css';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-48px' },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: '-32px' },
  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
};

const SKILLS: { name: string; Icon: IconType }[] = [
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'React', Icon: SiReact },
  { name: 'Redux', Icon: SiRedux },
  { name: 'React-Query', Icon: Code2 },
  { name: 'Jotai', Icon: Code2 },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'REST API', Icon: Code2 },
  { name: 'GraphQL', Icon: SiGraphql },
  { name: 'Jest', Icon: SiJest },
  { name: 'Playwright', Icon: Code2 },
  { name: 'Webpack', Icon: SiWebpack },
  { name: 'SCSS / Sass', Icon: SiSass },
  { name: 'Git', Icon: SiGit },
];

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80; // Высота хедера
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    closeMobileMenu();
  };

  const navItems = [
    { href: '#about', label: 'Обо мне' },
    { href: '#experience', label: 'Опыт' },
    { href: '#projects', label: 'Проекты' },
    { href: '#education', label: 'Образование' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <motion.a
            href="#hero"
            className={styles.logo}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              closeMobileMenu();
            }}
          >
            {'<olegthecoder />'}
          </motion.a>
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            ))}
            <motion.button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>
          </div>
          <motion.button
            type="button"
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMobileMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
        <AnimatePresence mode="wait">
          {isMounted && isMobileMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: '500px' }}
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className={styles.mobileMenuContent}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={styles.mobileMenuItem}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.button
                  type="button"
                  className={styles.mobileThemeToggle}
                  onClick={() => {
                    toggleTheme();
                    closeMobileMenu();
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                >
                  {theme === 'light' ? (
                    <>
                      <Moon size={20} /> Тёмная тема
                    </>
                  ) : (
                    <>
                      <Sun size={20} /> Светлая тема
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className={styles.mainContent}>
        <section id="hero" className={styles.hero}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className={styles.heroTitle}>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Олег
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Грачев
              </motion.span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <MatrixText text="Frontend-разработчик" className={styles.heroLabel} />
            </motion.div>
            <motion.p
              className={styles.heroTagline}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Опыт работы в топовых it-компаних: RuStore, Билайн и red_mad_robot. Обладаю лучшими
              практиками веб-разработки в больших распределенных командах. Есть реализованные
              самостоятельные проекты.
            </motion.p>
            <motion.div
              className={styles.heroCta}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
            >
              <motion.a
                href="#contact"
                className={styles.ctaPrimary}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Связаться
              </motion.a>
              <motion.a
                href="#projects"
                className={styles.ctaSecondary}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Смотреть работы
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <motion.div className={styles.aboutGrid} {...fadeIn}>
              <motion.div
                className={styles.aboutImage}
                initial={{ opacity: 0, x: -32, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/images/about-photo.png"
                  alt="Олег Грачев"
                  width={320}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 320px"
                  loading="lazy"
                  className={styles.aboutPhoto}
                />
              </motion.div>
              <div className={styles.aboutText}>
                <h2 className={styles.sectionTitle}>Обо мне</h2>
                <p className={styles.aboutLead}>
                  Опыт работы — 5+ лет. Москва. Предпочитаемый способ связи — Telegram.
                </p>
                <p className={styles.aboutBody}>
                  Мне повезло работать в сильных айти-командах Билайна, red_mad_robot и RuStore.
                  Каждый проект имел большую значимость для пользователей, что помимо высокой
                  ответственности давало и личную гордость за реализованные сервисы. В короткий срок
                  я приобрёл лучшие практики веб-разработки, работая как в больших распределённых
                  командах, так и в одиночку.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <motion.h2 className={styles.sectionTitle} {...fadeIn}>
              Навыки
            </motion.h2>
            <motion.ul className={styles.skillsList} {...stagger}>
              {SKILLS.map((skill, i) => (
                <motion.li
                  key={skill.name}
                  className={styles.skillItem}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <skill.Icon className={styles.skillIcon} aria-hidden />
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <div className={styles.container}>
            <motion.h2 className={styles.sectionTitle} {...fadeIn}>
              Опыт
            </motion.h2>
            <VerticalTimeline lineColor="var(--timeline-line)" className={styles.verticalTimeline}>
              {[
                {
                  role: 'Frontend developer',
                  company: 'VK',
                  period: 'Сен 2023 — н.в.',
                  desc: 'Бизнес-юнит RuStore (магазин приложений). Нахожусь на проекте с момента его создания и реализую большие продуктовые/технические задачи. Помимо разработки в обязанности входит оценка и декомпозиция задач, написание unit-тестов и e2e-тестов, code-review. TypeScript, React, Redux, React-Query, Jotai, ChartJS, SCSS/SASS, Gitlab, Webpack, REST, Jest, Playwright.',
                  logo: '/logos/vk.png',
                  url: 'https://www.rustore.ru/',
                },
                {
                  role: 'Frontend developer',
                  company: 'red_mad_robot',
                  period: 'Окт 2022 — Сен 2023',
                  desc: 'Создание и развитие веб-сервисов на старте проекта Rustore. TypeScript, React, Redux, React-Query, Jotai, ChartJS, SCSS/SASS, Gitlab, Webpack, REST, Jest, Playwright.',
                  logo: '/logos/red-mad-robot.png',
                  url: 'https://redmadrobot.com/',
                },
                {
                  role: 'Frontend-разработчик',
                  company: 'Билайн',
                  period: 'Янв 2022 — Окт 2022',
                  desc: 'Работал в отделе маркетинговых исследований Growth Hacking. Основная роль — быстрые изменения интерфейсов и создание прототипов для A/B-тестирования. Помимо работы с основным сайтом, создавал welcome-коммуникацию (pop-up, квизы) для совместного проекта Билайна и Альфа-Банка. Дополнительно реализовал соло-проект для внутреннего пользования сотрудников: веб-система генерации UTM-меток по определённым правилам и сохранением в БД. JavaScript, TypeScript, React, Redux, SCSS/SASS, Styled-components, Material-UI, Ant Design, Gitlab, Webpack, Node.js, REST, JWT.',
                  logo: '/logos/beeline.png',
                  url: 'https://www.beeline.ru/',
                },
              ].map((job, index) => (
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
                  contentArrowStyle={{ borderRight: '7px solid var(--card-bg)' }}
                  date={job.period}
                  dateClassName={styles.timelineDate}
                  iconStyle={{
                    background: 'var(--card-bg)',
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className={styles.timelineRole}>
                      {job.role} · {job.company}
                    </h3>
                    <p className={styles.timelineDesc}>{job.desc}</p>
                  </motion.a>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <motion.h2 className={styles.sectionTitle} {...fadeIn}>
              Проекты
            </motion.h2>
            <motion.ul className={styles.projectsGrid} {...stagger}>
              {[
                {
                  title: 'RuStore',
                  desc: 'Магазин приложений (VK). Разработка с нуля: продукты и инфраструктура, тесты, code-review. TypeScript, React, Redux, React-Query, Jotai, ChartJS, Jest, Playwright.',
                  href: 'https://www.rustore.ru/',
                },
                {
                  title: 'Рост и A/B-тесты, билайн',
                  desc: 'Прототипы и быстрые изменения интерфейсов для Growth Hacking. Welcome-коммуникация для совместного проекта с Альфа-Банком. React, Redux, Material-UI, Ant Design.',
                  href: 'https://www.beeline.ru/',
                },
                {
                  title: 'UTM-генератор',
                  desc: 'Соло-проект для внутреннего использования: веб-система генерации UTM-меток по правилам с сохранением в БД. Node.js, React.',
                  href: '#',
                },
              ].map((project, i) => (
                <motion.li
                  key={project.title}
                  className={styles.projectCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  whileHover={{ y: -4 }}
                >
                  <a href={project.href} className={styles.projectLink}>
                    <span className={styles.projectTitle}>{project.title}</span>
                    <span className={styles.projectDesc}>{project.desc}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section id="education" className={styles.section}>
          <div className={styles.container}>
            <motion.h2 className={styles.sectionTitle} {...fadeIn}>
              Образование
            </motion.h2>
            <VerticalTimeline lineColor="var(--timeline-line)" className={styles.verticalTimeline}>
              {[
                {
                  role: 'Мировая экономика и международные финансы',
                  company: 'Академия труда и социальных отношений',
                  period: '2012',
                  desc: 'Экономист. Высшее образование.',
                },
              ].map((edu) => (
                <VerticalTimelineElement
                  key={edu.period}
                  className={styles.timelineElement}
                  contentStyle={{
                    background: 'var(--card-bg)',
                    color: 'var(--text-primary)',
                    boxShadow: 'var(--card-shadow)',
                    border: '1px solid var(--border)',
                  }}
                  contentArrowStyle={{ borderRight: '7px solid var(--card-bg)' }}
                  date={edu.period}
                  dateClassName={styles.timelineDate}
                  iconStyle={{
                    background: 'var(--accent)',
                    color: '#fff',
                  }}
                  icon={<GraduationCap size={20} />}
                >
                  <h3 className={styles.timelineRole}>
                    {edu.role} · {edu.company}
                  </h3>
                  <p className={styles.timelineDesc}>{edu.desc}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </section>

        <section id="courses" className={styles.section}>
          <div className={styles.container}>
            <motion.h2 className={styles.sectionTitle} {...fadeIn}>
              Повышение квалификации
            </motion.h2>
            <VerticalTimeline lineColor="var(--timeline-line)" className={styles.verticalTimeline}>
              {[
                {
                  role: 'Школа 21',
                  company: 'Сбер',
                  period: '2021',
                  desc: 'Образовательная программа по программированию.',
                },
              ].map((course) => (
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
                    background: 'var(--accent)',
                    color: '#fff',
                  }}
                  icon={<GraduationCap size={20} />}
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

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <motion.div className={styles.contactBlock} {...fadeIn}>
              <h2 className={styles.sectionTitle}>Контакты</h2>
              <div className={styles.contactLinks}>
                <motion.a
                  href="tel:+79067599334"
                  className={styles.contactLink}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  +7 (906) 759-93-34
                </motion.a>
                <motion.a
                  href="https://t.me/olegthecoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18 }}
                >
                  Telegram · @olegthecoder
                </motion.a>
                <motion.a
                  href="mailto:olegthecoder89@gmail.com"
                  className={styles.contactLink}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.26 }}
                >
                  olegthecoder89@gmail.com
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className={styles.container}>
          <p className={styles.footerText}>© {new Date().getFullYear()} Олег Грачев</p>
        </div>
      </motion.footer>
    </>
  );
}
