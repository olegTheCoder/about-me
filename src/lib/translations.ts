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
        desc: 'Бизнес-юнит RuStore (магазин приложений). Нахожусь на проекте с момента его создания и реализую большие продуктовые/технические задачи. Помимо разработки в обязанности входит оценка и декомпозиция задач, написание unit-тестов и e2e-тестов, code-review. TypeScript, React, Redux, React-Query, Jotai, ChartJS, SCSS/SASS, Gitlab, Webpack, REST, Jest, Playwright.',
      },
      job2: {
        period: 'Окт 2022 — Сен 2023',
        desc: 'Создание и развитие веб-сервисов на старте проекта Rustore. TypeScript, React, Redux, React-Query, Jotai, ChartJS, SCSS/SASS, Gitlab, Webpack, REST, Jest, Playwright.',
      },
      job3: {
        company: 'Билайн',
        period: 'Мар 2022 — Окт 2022',
        desc: 'Работал в отделе маркетинговых исследований Growth Hacking. Основная роль — быстрые изменения интерфейсов и создание прототипов для A/B-тестирования. Помимо работы с основным сайтом, создавал welcome-коммуникацию (pop-up, квизы) для совместного проекта Билайна и Альфа-Банка. Дополнительно реализовал соло-проект для внутреннего пользования сотрудников: веб-система генерации UTM-меток по определённым правилам и сохранением в БД. JavaScript, TypeScript, React, Redux, SCSS/SASS, Styled-components, Material-UI, Ant Design, Gitlab, Webpack, Node.js, REST, JWT.',
      },
    },
    projects: {
      title: 'Проекты',
      item1: {
        title: 'RuStore',
        desc: 'Магазин приложений (VK). Разработка с нуля: продукты и инфраструктура, тесты, code-review. TypeScript, React, Redux, React-Query, Jotai, ChartJS, Jest, Playwright.',
      },
      item2: {
        title: 'Рост и A/B-тесты, билайн',
        desc: 'Прототипы и быстрые изменения интерфейсов для Growth Hacking. Welcome-коммуникация для совместного проекта с Альфа-Банком. React, Redux, Material-UI, Ant Design.',
      },
      item3: {
        title: 'UTM-генератор',
        desc: 'Соло-проект для внутреннего использования: веб-система генерации UTM-меток по правилам с сохранением в БД. Node.js, React.',
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
        desc: 'RuStore business unit (app store). On the project from day one; implementing major product and technical initiatives. Besides development: task estimation and decomposition, unit and e2e testing, code review. TypeScript, React, Redux, React-Query, Jotai, ChartJS, SCSS/SASS, Gitlab, Webpack, REST, Jest, Playwright.',
      },
      job2: {
        role: 'Frontend developer',
        period: 'Oct 2022 — Sep 2023',
        desc: 'Building and scaling web services at the start of RuStore. TypeScript, React, Redux, React-Query, Jotai, ChartJS, SCSS/SASS, Gitlab, Webpack, REST, Jest, Playwright.',
      },
      job3: {
        role: 'Frontend developer',
        company: 'Beeline',
        period: 'Mar 2022 — Oct 2022',
        desc: 'Worked in the Growth Hacking marketing research unit. Main focus: rapid UI changes and prototypes for A/B testing. Besides the main site, built welcome flows (pop-ups, quizzes) for a joint Beeline and Alfa-Bank project. Also delivered a solo internal tool: a web app for generating UTM tags by rules with DB storage. JavaScript, TypeScript, React, Redux, SCSS/SASS, Styled-components, Material-UI, Ant Design, Gitlab, Webpack, Node.js, REST, JWT.',
      },
    },
    projects: {
      title: 'Projects',
      item1: {
        title: 'RuStore',
        desc: 'App store (VK). Development from scratch: product and infrastructure, tests, code review. TypeScript, React, Redux, React-Query, Jotai, ChartJS, Jest, Playwright.',
      },
      item2: {
        title: 'Growth & A/B tests, Beeline',
        desc: 'Prototypes and fast UI changes for Growth Hacking. Welcome flows for a joint project with Alfa-Bank. React, Redux, Material-UI, Ant Design.',
      },
      item3: {
        title: 'UTM generator',
        desc: 'Solo project for internal use: web app for generating UTM tags by rules with DB storage. Node.js, React.',
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
