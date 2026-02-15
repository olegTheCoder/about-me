export type Locale = 'ru' | 'en';

export const translations = {
  ru: {
    name: 'Олег Грачев',
    nameFirst: 'Олег',
    nameLast: 'Грачев',
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      projects: 'Проекты',
      education: 'Образование',
      contact: 'Контакты',
    },
    aria: {
      themeDark: 'Включить тёмную тему',
      themeLight: 'Включить светлую тему',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
      langSwitch: 'Переключить на английский',
      themeDarkLabel: 'Тёмная тема',
      themeLightLabel: 'Светлая тема',
    },
    hero: {
      label: 'Фронтенд-разработчик',
      tagline:
        'Опыт работы в топовых it-компаниях: RuStore, Билайн и red_mad_robot. Обладаю лучшими практиками веб-разработки в больших распределенных командах. Есть реализованные самостоятельные проекты.',
      ctaContact: 'Связаться',
      ctaProjects: 'Смотреть работы',
    },
    about: {
      title: 'Обо мне',
      photoPortrait: 'Олег Грачев',
      photoVk: 'VK, место встречи',
      photoExpedition: 'RuStore, экспедиция',
      photoBalloons: 'RuStore, праздник',
    },
    skills: { title: 'Навыки' },
    experience: {
      title: 'Опыт',
      job1: {
        period: 'Сен 2023 — н.в.',
        desc: 'Фронтенд в бизнес-юните RuStore. Участвую в продукте с самого старта: крупные фичи, оценка и декомпозиция задач, unit и e2e-тесты, code-review. Работа в распределённой команде по гибким процессам.',
      },
      job2: {
        period: 'Окт 2022 — Сен 2023',
        desc: 'Фронтенд на этапе запуска RuStore: проектирование и разработка веб-сервисов, участие в выборе стека и процессов. Работа в стартап-режиме в составе команды red_mad_robot.',
      },
      job3: {
        company: 'Билайн',
        period: 'Мар 2022 — Окт 2022',
        desc: 'Фронтенд в отделе Growth Hacking: быстрые изменения интерфейсов, прототипы для A/B-тестов, кросс-функциональные задачи с маркетингом. Опыт соло-разработки внутренних инструментов.',
      },
    },
    projects: {
      title: 'Проекты',
      item1: {
        title: 'RuStore',
        desc: 'Магазин приложений (VK). Разработка с нуля: продукты и инфраструктура, unit и e2e-тесты, code-review. TypeScript, React, Redux, React-Query, Jotai, ChartJS, Jest, Playwright.',
      },
      item2: {
        title: 'Рост и A/B-тесты, Билайн',
        desc: 'Прототипы и быстрые изменения интерфейсов для Growth Hacking. Welcome-коммуникация (pop-up, квизы) для совместного проекта Билайн и Альфа-Банк. React, Redux, Material-UI, Ant Design.',
      },
      item3: {
        title: 'UTM-генератор',
        desc: 'Соло-проект для внутреннего использования в Билайне: веб-система генерации UTM-меток по правилам с сохранением в БД. Node.js, React.',
      },
    },
    education: {
      title: 'Образование',
      item1: {
        role: 'Мировая экономика и международные финансы',
        company: 'Академия труда и социальных отношений',
        period: '2012',
        desc: 'Экономист. Высшее образование.',
      },
    },
    courses: {
      title: 'Повышение квалификации',
      item1: {
        role: 'Школа 21',
        company: 'Сбер',
        period: '2021',
        desc: 'Образовательная программа по программированию.',
      },
      item2: {
        role: 'Робопрактика',
        company: 'red_mad_robot',
        period: '2022',
        desc: 'Практика для опытных разработчиков.',
      },
    },
    contact: { title: 'Контакты' },
    footer: { copyright: 'Олег Грачев' },
  },
  en: {
    name: 'OLEG GRACHEV',
    nameFirst: 'OLEG',
    nameLast: 'GRACHEV',
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    aria: {
      themeDark: 'Switch to dark theme',
      themeLight: 'Switch to light theme',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      langSwitch: 'Switch to Russian',
      themeDarkLabel: 'Dark theme',
      themeLightLabel: 'Light theme',
    },
    hero: {
      label: 'Frontend developer',
      tagline:
        'Experience in top IT companies: RuStore, Beeline and red_mad_robot. Strong expertise in web development best practices in large distributed teams. Delivered independent projects.',
      ctaContact: 'Contact',
      ctaProjects: 'View work',
    },
    about: {
      title: 'About',
      photoPortrait: 'Oleg Grachev',
      photoVk: 'VK, meeting place',
      photoExpedition: 'RuStore, expedition',
      photoBalloons: 'RuStore, celebration',
    },
    skills: { title: 'Skills' },
    experience: {
      title: 'Experience',
      job1: {
        role: 'Frontend developer',
        period: 'Sep 2023 — present',
        desc: 'Frontend in RuStore business unit. On the product from day one: major features, task estimation and decomposition, unit and e2e testing, code review. Working in a distributed team with agile processes.',
      },
      job2: {
        role: 'Frontend developer',
        period: 'Oct 2022 — Sep 2023',
        desc: 'Frontend at RuStore launch: designing and building web services, contributing to stack and process decisions. Startup-style work as part of the red_mad_robot team.',
      },
      job3: {
        role: 'Frontend developer',
        company: 'Beeline',
        period: 'Mar 2022 — Oct 2022',
        desc: 'Frontend in the Growth Hacking unit: rapid UI changes, prototypes for A/B tests, cross-functional work with marketing. Experience building internal tools as sole developer.',
      },
    },
    projects: {
      title: 'Projects',
      item1: {
        title: 'RuStore',
        desc: 'App store (VK). Development from scratch: product and infrastructure, unit and e2e tests, code review. TypeScript, React, Redux, React-Query, Jotai, ChartJS, Jest, Playwright.',
      },
      item2: {
        title: 'Growth & A/B tests, Beeline',
        desc: 'Prototypes and fast UI changes for Growth Hacking. Welcome flows (pop-ups, quizzes) for a joint Beeline and Alfa-Bank project. React, Redux, Material-UI, Ant Design.',
      },
      item3: {
        title: 'UTM generator',
        desc: 'Solo internal tool at Beeline: web app for generating UTM tags by rules with DB storage. Node.js, React.',
      },
    },
    education: {
      title: 'Education',
      item1: {
        role: 'World economy and international finance',
        company: 'Academy of Labour and Social Relations',
        period: '2012',
        desc: 'Economist. Higher education.',
      },
    },
    courses: {
      title: 'Professional development',
      item1: {
        role: 'School 21',
        company: 'Sber',
        period: '2021',
        desc: 'Programming education program.',
      },
      item2: {
        role: 'Robopraktika',
        company: 'red_mad_robot',
        period: '2022',
        desc: 'Practice program for experienced developers.',
      },
    },
    contact: { title: 'Contact' },
    footer: { copyright: 'OLEG GRACHEV' },
  },
} as const;

function getNested(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === 'string' ? current : undefined;
}

export function getT(locale: Locale) {
  const dict = translations[locale];
  return (key: string): string => {
    const value = getNested(dict as Record<string, unknown>, key);
    return value ?? key;
  };
}
