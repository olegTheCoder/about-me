'use client';

import { useLocale } from '@/components/LocaleProvider';
import { HeroParallax } from '@/components/HeroParallax';
import { MatrixText } from '@/components/MatrixText';
import { Model3D } from '@/components/Model3D';
import { useTheme } from '@/components/ThemeProvider';
import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import {
  fadeIn,
  fadeInUp,
  footerFadeIn,
  sectionTitle,
  staggerCard,
  staggerCardItem,
  staggerContainer,
  staggerItem,
} from '@/lib/animations';
import {
  SiChartdotjs,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiTypescript,
  SiWebpack,
} from 'react-icons/si';
import styles from './page.module.css';

const ExperienceSection = dynamic(() => import('@/components/ExperienceSection'), {
  ssr: false,
  loading: () => (
    <section id="experience" className={styles.section} aria-busy="true">
      <div className={styles.container}>
        <div className={styles.sectionTitle} style={{ opacity: 0.6 }} />
        <div style={{ minHeight: 420 }} />
      </div>
    </section>
  ),
});

const CoursesSection = dynamic(() => import('@/components/CoursesSection'), {
  ssr: false,
  loading: () => (
    <section id="courses" className={styles.section} aria-busy="true">
      <div className={styles.container}>
        <div className={styles.sectionTitle} style={{ opacity: 0.6 }} />
        <div style={{ minHeight: 320 }} />
      </div>
    </section>
  ),
});

const SKILLS: { name: string; Icon: IconType }[] = [
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'React', Icon: SiReact },
  { name: 'Redux', Icon: SiRedux },
  { name: 'React-Query', Icon: Code2 },
  { name: 'Jotai', Icon: Code2 },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'REST API', Icon: Code2 },
  { name: 'ChartJS', Icon: SiChartdotjs },
  { name: 'CSS', Icon: SiCss3 },
  { name: 'HTML', Icon: SiHtml5 },
  { name: 'Jest', Icon: SiJest },
  { name: 'Playwright', Icon: Code2 },
  { name: 'Webpack', Icon: SiWebpack },
  { name: 'SCSS/SASS', Icon: SiSass },
  { name: 'Git', Icon: SiGit },
];

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [canLoadModel, setCanLoadModel] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const useIdle = typeof window.requestIdleCallback === 'function';
    const id = useIdle
      ? window.requestIdleCallback(() => setCanLoadModel(true), { timeout: 400 })
      : window.setTimeout(() => setCanLoadModel(true), 200);
    return () => (useIdle ? window.cancelIdleCallback!(id) : clearTimeout(id));
  }, [isMounted]);

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
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
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
            <div className={styles.navToggles}>
              <motion.button
                type="button"
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label={theme === 'light' ? t('aria.themeDark') : t('aria.themeLight')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </motion.button>
              <motion.button
                type="button"
                className={styles.langToggle}
                onClick={() => setLocale(locale === 'ru' ? 'en' : 'ru')}
                aria-label={t('aria.langSwitch')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={locale === 'ru' ? 'English' : 'Русский'}
              >
                {locale === 'ru' ? 'EN' : 'RU'}
              </motion.button>
            </div>
          </div>
          <motion.button
            type="button"
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? t('aria.menuClose') : t('aria.menuOpen')}
            aria-expanded={isMobileMenuOpen}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
        {isMounted && (
          <AnimatePresence mode="wait">
            {isMobileMenuOpen && (
              <motion.div
                key="mobile-menu"
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
                  <div className={styles.mobileNavToggles}>
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
                          <Moon size={20} /> {t('aria.themeDarkLabel')}
                        </>
                      ) : (
                        <>
                          <Sun size={20} /> {t('aria.themeLightLabel')}
                        </>
                      )}
                    </motion.button>
                    <motion.button
                      type="button"
                      className={styles.mobileLangToggle}
                      onClick={() => {
                        setLocale(locale === 'ru' ? 'en' : 'ru');
                        closeMobileMenu();
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navItems.length + 1) * 0.05 }}
                    >
                      {locale === 'ru' ? 'English' : 'Русский'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </header>

      <main className={styles.mainContent}>
        <section id="hero" ref={heroRef} className={styles.hero}>
          <HeroParallax sectionRef={heroRef}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, x: '24%', y: '-20%', scale: 1.15 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
            >
              {/* Первая колонка: 3D-модель (KTS-стиль входа) */}
              <motion.div
                className={styles.heroModelBlock}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              >
                <div className={styles.heroModel}>
                  {canLoadModel && (
                    <Model3D modelPath="/models/model.glb" className={styles.model3D} />
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className={styles.heroLabelWrap}
                >
                  <MatrixText text={t('hero.label')} className={styles.heroLabel} />
                </motion.div>
              </motion.div>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>
                  <motion.span
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {t('nameFirst')}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {t('nameLast')}
                  </motion.span>
                </h1>
                <motion.p
                  className={styles.heroTagline}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {t('hero.tagline')}
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
                    {t('hero.ctaContact')}
                  </motion.a>
                  <motion.a
                    href="#projects"
                    className={styles.ctaSecondary}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('hero.ctaProjects')}
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </HeroParallax>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <motion.h2 className={styles.sectionTitle} {...sectionTitle}>
              {t('about.title')}
            </motion.h2>
            <motion.div
              className={styles.aboutPolaroids}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerCard}
            >
              {[
                {
                  src: '/images/about-photo.png',
                  altKey: 'about.photoPortrait',
                  rotation: 'polaroidRot1',
                  position: 'polaroidPos1',
                  zIndex: 2,
                },
                {
                  src: '/images/about-vk.png',
                  altKey: 'about.photoVk',
                  rotation: 'polaroidRot2',
                  position: 'polaroidPos2',
                  zIndex: 4,
                },
                {
                  src: '/images/about-rustore-expedition.png',
                  altKey: 'about.photoExpedition',
                  rotation: 'polaroidRot3',
                  position: 'polaroidPos3',
                  zIndex: 1,
                },
                {
                  src: '/images/about-rustore-balloons.png',
                  altKey: 'about.photoBalloons',
                  rotation: 'polaroidRot4',
                  position: 'polaroidPos4',
                  zIndex: 3,
                },
              ].map((item) => (
                <motion.div
                  key={item.src}
                  className={`${styles.polaroidCard} ${styles[item.rotation]} ${styles[item.position]} ${item.zIndex === 4 ? styles.swayIdle : ''}`}
                  style={{ zIndex: item.zIndex }}
                  variants={staggerCardItem}
                >
                  <div className={styles.polaroidInner}>
                    <Image
                      src={item.src}
                      alt={t(item.altKey)}
                      width={280}
                      height={320}
                      sizes="(max-width: 768px) 45vw, 280px"
                      loading="lazy"
                      className={styles.polaroidImg}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <motion.h2 className={styles.sectionTitle} {...sectionTitle}>
              {t('skills.title')}
            </motion.h2>
            <motion.ul
              className={styles.skillsList}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
            >
              {SKILLS.map((skill) => (
                <motion.li
                  key={skill.name}
                  className={styles.skillItem}
                  variants={staggerItem}
                  whileHover={{ scale: 1.03 }}
                >
                  <skill.Icon className={styles.skillIcon} aria-hidden />
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <ExperienceSection
          title={t('experience.title')}
          jobs={[
            {
              company: 'VK',
              period: t('experience.job1.period'),
              desc: t('experience.job1.desc'),
              logo: '/logos/vk.png',
              url: 'https://www.rustore.ru/',
            },
            {
              company: 'red_mad_robot',
              period: t('experience.job2.period'),
              desc: t('experience.job2.desc'),
              logo: '/logos/red-mad-robot.png',
              url: 'https://redmadrobot.com/',
            },
            {
              company: t('experience.job3.company'),
              period: t('experience.job3.period'),
              desc: t('experience.job3.desc'),
              logo: '/logos/beeline.png',
              url: 'https://www.beeline.ru/',
            },
          ]}
        />

        <section id="projects" className={styles.section}>
          <div className={styles.container}>
            <motion.h2 className={styles.sectionTitle} {...sectionTitle}>
              {t('projects.title')}
            </motion.h2>
            <motion.ul
              className={styles.projectsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
            >
              {[
                {
                  title: t('projects.item1.title'),
                  desc: t('projects.item1.desc'),
                  logo: '/logos/vk.png',
                  logo2: '/logos/red-mad-robot.png',
                },
                {
                  title: t('projects.item2.title'),
                  desc: t('projects.item2.desc'),
                  logo: '/logos/vk.png',
                },
                {
                  title: t('projects.item3.title'),
                  desc: t('projects.item3.desc'),
                  logo: '/logos/vk.png',
                },
                {
                  title: t('projects.item4.title'),
                  desc: t('projects.item4.desc'),
                  logo: '/logos/vk.png',
                },
                {
                  title: t('projects.item5.title'),
                  desc: t('projects.item5.desc'),
                  logo: '/logos/beeline.png',
                },
                {
                  title: t('projects.item6.title'),
                  desc: t('projects.item6.desc'),
                  logo: '/logos/beeline.png',
                  logo2: '/logos/alfa-bank.png',
                },
                {
                  title: t('projects.item7.title'),
                  desc: t('projects.item7.desc'),
                  logo: '/logos/beeline.png',
                },
              ].map((project) => {
                const tasks = project.desc
                  .split('|')
                  .map((s) => s.trim())
                  .filter(Boolean);
                return (
                  <motion.li
                    key={project.title}
                    className={styles.projectCard}
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                  >
                    <div className={styles.projectLink}>
                      <div className={styles.projectLogoWrap}>
                        {'logo2' in project && project.logo2 && (
                          <span
                            className={styles.projectLogoSecond}
                            style={{ backgroundImage: `url(${project.logo2})` }}
                            aria-hidden
                          />
                        )}
                        <span
                          className={styles.projectLogo}
                          style={{ backgroundImage: `url(${project.logo})` }}
                          aria-hidden
                        />
                      </div>
                      <span className={styles.projectTitle}>{project.title}</span>
                      <ul className={styles.projectTasks}>
                        {tasks.map((task, j) => (
                          <li key={j} className={styles.projectTask}>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </section>

        <CoursesSection
          title={t('courses.title')}
          courses={[
            {
              role: t('courses.item1.role'),
              company: t('courses.item1.company'),
              period: t('courses.item1.period'),
              desc: t('courses.item1.desc'),
              logo: '/logos/school21.png',
              iconBg: '#1e293b',
            },
            {
              role: t('courses.item2.role'),
              company: t('courses.item2.company'),
              period: t('courses.item2.period'),
              desc: t('courses.item2.desc'),
              logo: '/logos/red-mad-robot.png',
              iconBg: '#fff',
            },
          ]}
        />

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <motion.div className={styles.contactBlock} {...fadeInUp}>
              <h2 className={styles.sectionTitle}>{t('contact.title')}</h2>
              <div className={styles.contactLinks}>
                <motion.a
                  href="https://t.me/olegthecoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  {...fadeIn}
                >
                  Telegram · @olegthecoder
                </motion.a>
                <motion.a
                  href="https://github.com/olegthecoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  {...fadeIn}
                >
                  GitHub · olegthecoder
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <motion.footer className={styles.footer} {...footerFadeIn}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </motion.footer>
    </>
  );
}
