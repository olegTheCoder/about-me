/**
 * Варианты анимаций в стиле KTS.tech:
 * появление секций при скролле, каскад элементов, раскрытие заголовков.
 */

const easeOutExpo = [0.19, 1, 0.22, 1] as const;
const easeOutQuart = [0.25, 0.46, 0.45, 0.94] as const;

/** Появление элемента снизу при скролле (секции, блоки) */
export const ktsFadeInUp = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-56px' },
  transition: { duration: 0.6, ease: easeOutExpo },
};

/** Раскрытие заголовка секции (чуть больший сдвиг + плавность) */
export const ktsSectionTitle = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-48px' },
  transition: { duration: 0.55, ease: easeOutQuart },
};

/** Контейнер для каскадной анимации (использовать initial="hidden" whileInView="visible" variants={ktsStaggerContainer}) */
export const ktsStaggerContainer = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
  hidden: {},
};

/** Варианты элемента в каскаде (variants={ktsStaggerItem}) */
export const ktsStaggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

/** Пропсы для списка с каскадом: spread на motion.ul */
export const ktsStaggerListProps = {
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true, margin: '-40px' },
  variants: {
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
    hidden: {},
  },
};

/** Варианты для polaroid-карточек / сеток с каскадом */
export const ktsStaggerCard = {
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
  hidden: {},
};

export const ktsStaggerCardItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

/** Ссылка/кнопка в футере или контактах — лёгкое появление */
export const ktsFadeIn = {
  initial: { opacity: 0, x: -10 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, delay: 0.2 },
};

/** Футер — плавное появление */
export const ktsFooter = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

/** KTS-стиль: появление справа-сверху с масштабом (как на kts.tech) */
export const ktsEntrance = {
  initial: { opacity: 0, x: '30%', y: '-30%', scale: 1.4 },
  whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
};

/** Лёгкое покачивание (rotate -6deg … 6deg), для карточек/декора */
export const ktsSway = {
  initial: { rotate: -6 },
  whileInView: { rotate: 6 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 4, repeat: Infinity, repeatType: 'reverse' as const, ease: 'easeInOut' },
};
