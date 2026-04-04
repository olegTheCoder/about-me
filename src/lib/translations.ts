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
        'Опыт работы в топовых it-компаниях: RuStore, Билайн и red_mad_robot. Обладаю лучшими практиками веб-разработки в больших распределенных командах. Есть реализованные самостоятельные проекты. Активно использую ИИ в daily-разработке, что ускоряет решение задач без потери качества кода.',
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
        title: 'Админка',
        desc: 'Внутренний инструмент для операторов и модерации контента магазина приложений (RuStore).|Управление карточками приложений, заявками разработчиков, премодерация и обработка жалоб.|Разработка с нуля: сложные формы, таблицы, фильтры, интеграции с бэкендом.|Unit- и e2e-тесты, code-review, участие в проектировании API и процессов.',
      },
      item2: {
        title: 'Консоль',
        desc: 'Личный кабинет разработчиков и издателей приложений RuStore.|Публикация приложений, загрузка артефактов, документооборот, статистика и аналитика.|Разработка с нуля, проектирование сценариев и интерфейсов вместе с продуктом.|Тесты, code-review, работа в распределённой команде.',
      },
      item3: {
        title: 'Витрина',
        desc: 'Публичная витрина магазина приложений: каталог, карточки приложений, поиск и фильтры.|Высоконагруженные страницы, оптимизация производительности и скорости загрузки.|Разработка с нуля, кросс-функциональная работа с продуктом и дизайном.|Unit и e2e-тесты, доступность и адаптивная вёрстка.',
      },
      item4: {
        title: 'UI-Kit',
        desc: 'Общая библиотека компонентов и дизайн-система для стримов RuStore (Админка, Консоль, Витрина).|Документация, версионирование, поддержка тем и доступности (a11y).|Разработка и поддержка компонентов, интеграция во все фронтенд-проекты.|Code-review, согласование с дизайном, снижение дублирования кода.',
      },
      item5: {
        title: 'Growth Hacking и A/B-тесты',
        desc: 'Прототипы и быстрые изменения интерфейсов для Growth Hacking.|Кросс-функциональная работа с маркетингом и продуктом.|A/B-тесты и итерации по результатам.',
      },
      item6: {
        title: 'Конструктор сайтов',
        desc: 'Совместный проект Билайн и Альфа-Банк (onebusiness.ru): лендинги, интернет-магазины, корпоративные сайты.|Welcome-коммуникация: проектирование и разработка сценариев онбординга для новых пользователей.|Pop-up и квизы: настройка триггеров, контента и логики показа, интеграция с бэкендом и аналитикой.',
      },
      item7: {
        title: 'UTM-генератор',
        desc: 'Соло-проект для внутреннего использования в Билайне.|Веб-система генерации UTM-меток по настраиваемым правилам.|Сохранение шаблонов и истории в БД, поиск и фильтры.',
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
    contact: { title: 'Контакты', email: 'Email' },
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
        'Experience in top IT companies: RuStore, Beeline and red_mad_robot. Strong expertise in web development best practices in large distributed teams. Delivered independent projects. I actively use AI in daily development, which accelerates task delivery without compromising code quality.',
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
        title: 'Admin',
        desc: 'Internal tool for operators and content moderation of the app store (RuStore).|Managing app cards, developer submissions, pre-moderation and complaint handling.|Built from scratch: complex forms, tables, filters, backend integrations.|Unit and e2e tests, code review, contribution to API and process design.',
      },
      item2: {
        title: 'Console',
        desc: 'Developer and publisher portal for RuStore apps.|App publishing, artifact uploads, document flow, statistics and analytics.|Built from scratch, designing flows and UI together with product.|Testing, code review, working in a distributed team.',
      },
      item3: {
        title: 'Storefront',
        desc: 'Public app store front: catalog, app cards, search and filters.|High-traffic pages, performance and load-time optimization.|Built from scratch, cross-functional work with product and design.|Unit and e2e tests, accessibility and responsive layout.',
      },
      item4: {
        title: 'UI-Kit',
        desc: 'Shared component library and design system for RuStore streams (Admin, Console, Storefront).|Documentation, versioning, theming and accessibility (a11y).|Developing and maintaining components, integration across frontend projects.|Code review, design alignment, reducing code duplication.',
      },
      item5: {
        title: 'Growth & A/B tests',
        desc: 'Prototypes and rapid UI changes for Growth Hacking.|Cross-functional work with marketing and product.|A/B tests and iterations based on results.',
      },
      item6: {
        title: 'Website builder',
        desc: 'Joint Beeline and Alfa-Bank project (onebusiness.ru): landing pages, online stores, corporate sites.|Welcome communication: designing and building onboarding flows for new users.|Pop-ups and quizzes: trigger and content configuration, display logic, backend and analytics integration.',
      },
      item7: {
        title: 'UTM generator',
        desc: 'Solo internal tool at Beeline.|Web app for generating UTM tags with configurable rules.|Template and history storage in DB, search and filters.',
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
    contact: { title: 'Contact', email: 'Email' },
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
