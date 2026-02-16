'use client';

import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import type { RefObject } from 'react';
import styles from './HeroParallax.module.css';

type Props = {
  sectionRef: RefObject<HTMLElement | null>;
  children: ReactNode;
};

function randomInRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function HeroParallax({ sectionRef, children }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  /* Начальные позиции недалеко от центра */
  const [layer1Position, setLayer1Position] = useState({ left: 35, top: 40 });
  const [layer1Target, setLayer1Target] = useState<{ left: number; top: number } | null>(null);
  const [isLayer1Flying, setIsLayer1Flying] = useState(false);
  const [layer2Position, setLayer2Position] = useState({ left: 65, top: 35 });
  const [layer2Target, setLayer2Target] = useState<{ left: number; top: number } | null>(null);
  const [isLayer2Flying, setIsLayer2Flying] = useState(false);
  const [layer3Position, setLayer3Position] = useState({ left: 40, top: 65 });
  const [layer3Target, setLayer3Target] = useState<{ left: number; top: number } | null>(null);
  const [isLayer3Flying, setIsLayer3Flying] = useState(false);
  const [layer4Position, setLayer4Position] = useState({ left: 60, top: 60 });
  const [layer4Target, setLayer4Target] = useState<{ left: number; top: number } | null>(null);
  const [isLayer4Flying, setIsLayer4Flying] = useState(false);
  const [layer5Position, setLayer5Position] = useState({ left: 30, top: 50 });
  const [layer5Target, setLayer5Target] = useState<{ left: number; top: number } | null>(null);
  const [isLayer5Flying, setIsLayer5Flying] = useState(false);
  const [layer6Position, setLayer6Position] = useState({ left: 70, top: 55 });
  const [layer6Target, setLayer6Target] = useState<{ left: number; top: number } | null>(null);
  const [isLayer6Flying, setIsLayer6Flying] = useState(false);

  /* Состояния для деформации и деления/слияния */
  const [layer1Deform, setLayer1Deform] = useState({ scaleX: 1, scaleY: 1, rotate: 0, skew: 0 });
  const [layer1DeformTarget, setLayer1DeformTarget] = useState<{
    scaleX: number;
    scaleY: number;
    rotate: number;
    skew: number;
  } | null>(null);
  const [layer2Deform, setLayer2Deform] = useState({ scaleX: 1, scaleY: 1, rotate: 0, skew: 0 });
  const [layer2DeformTarget, setLayer2DeformTarget] = useState<{
    scaleX: number;
    scaleY: number;
    rotate: number;
    skew: number;
  } | null>(null);
  const [layer3Deform, setLayer3Deform] = useState({ scaleX: 1, scaleY: 1, rotate: 0, skew: 0 });
  const [layer3DeformTarget, setLayer3DeformTarget] = useState<{
    scaleX: number;
    scaleY: number;
    rotate: number;
    skew: number;
  } | null>(null);
  const [layer4Deform, setLayer4Deform] = useState({ scaleX: 1, scaleY: 1, rotate: 0, skew: 0 });
  const [layer4DeformTarget, setLayer4DeformTarget] = useState<{
    scaleX: number;
    scaleY: number;
    rotate: number;
    skew: number;
  } | null>(null);
  const [layer5Deform, setLayer5Deform] = useState({ scaleX: 1, scaleY: 1, rotate: 0, skew: 0 });
  const [layer5DeformTarget, setLayer5DeformTarget] = useState<{
    scaleX: number;
    scaleY: number;
    rotate: number;
    skew: number;
  } | null>(null);
  const [layer6Deform, setLayer6Deform] = useState({ scaleX: 1, scaleY: 1, rotate: 0, skew: 0 });
  const [layer6DeformTarget, setLayer6DeformTarget] = useState<{
    scaleX: number;
    scaleY: number;
    rotate: number;
    skew: number;
  } | null>(null);

  /* Состояния для деления/слияния (opacity и scale для эффекта) */
  const [layer1Split, setLayer1Split] = useState({ opacity: 1, scale: 1 });
  const [layer1SplitTarget, setLayer1SplitTarget] = useState<{
    opacity: number;
    scale: number;
  } | null>(null);
  const [layer2Split, setLayer2Split] = useState({ opacity: 1, scale: 1 });
  const [layer2SplitTarget, setLayer2SplitTarget] = useState<{
    opacity: number;
    scale: number;
  } | null>(null);
  const [layer3Split, setLayer3Split] = useState({ opacity: 1, scale: 1 });
  const [layer3SplitTarget, setLayer3SplitTarget] = useState<{
    opacity: number;
    scale: number;
  } | null>(null);
  const [layer4Split, setLayer4Split] = useState({ opacity: 1, scale: 1 });
  const [layer4SplitTarget, setLayer4SplitTarget] = useState<{
    opacity: number;
    scale: number;
  } | null>(null);
  const [layer5Split, setLayer5Split] = useState({ opacity: 1, scale: 1 });
  const [layer5SplitTarget, setLayer5SplitTarget] = useState<{
    opacity: number;
    scale: number;
  } | null>(null);
  const [layer6Split, setLayer6Split] = useState({ opacity: 1, scale: 1 });
  const [layer6SplitTarget, setLayer6SplitTarget] = useState<{
    opacity: number;
    scale: number;
  } | null>(null);

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
  const layer1Y = useTransform(mouseY, [-0.5, 0.5], [-50, 50]);
  const layer2Y = useTransform(mouseY, [-0.5, 0.5], [40, -40]);
  const layer3Y = useTransform(mouseY, [-0.5, 0.5], [-60, 60]);
  const layer5Y = useTransform(mouseY, [-0.5, 0.5], [-55, 55]);
  const layer6Y = useTransform(mouseY, [-0.5, 0.5], [45, -45]);

  /* Контент: лёгкое смещение в обратную сторону — ощущение глубины */
  const contentX = useTransform(mouseX, [-0.5, 0.5], [12, -12]);
  const contentY = useTransform(mouseY, [-0.5, 0.5], [8, -8]);

  const scrollLayer1Y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scrollLayer2Y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scrollLayer3Y = useTransform(scrollYProgress, [0, 0.8], [0, -60]);
  const scrollLayer5Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scrollLayer6Y = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacityBg = useTransform(scrollYProgress, [0.15, 0.5], [1, 0.3]);

  const x1 = useTransform(mouseX, [-0.5, 0.5], [-70, 70]);
  const x2 = useTransform(mouseX, [-0.5, 0.5], [90, -90]);
  const x3 = useTransform(mouseX, [-0.5, 0.5], [-50, 50]);
  const x5 = useTransform(mouseX, [-0.5, 0.5], [-60, 60]);
  const x6 = useTransform(mouseX, [-0.5, 0.5], [80, -80]);

  const y1 = useTransform([layer1Y, scrollLayer1Y], ([my, sy]) => (my as number) + (sy as number));
  const y2 = useTransform([layer2Y, scrollLayer2Y], ([my, sy]) => (my as number) + (sy as number));
  const y3 = useTransform([layer3Y, scrollLayer3Y], ([my, sy]) => (my as number) + (sy as number));
  const y5 = useTransform([layer5Y, scrollLayer5Y], ([my, sy]) => (my as number) + (sy as number));
  const y6 = useTransform([layer6Y, scrollLayer6Y], ([my, sy]) => (my as number) + (sy as number));

  /* Комбинированная opacity для layer1 и layer2 с эффектом деления */
  const layer1Opacity = useMotionValue(1);
  const layer2Opacity = useMotionValue(1);

  useEffect(() => {
    const splitOpacity1 = layer1SplitTarget?.opacity ?? layer1Split.opacity;
    layer1Opacity.set(splitOpacity1);
  }, [layer1SplitTarget, layer1Split.opacity, layer1Opacity]);

  useEffect(() => {
    const splitOpacity2 = layer2SplitTarget?.opacity ?? layer2Split.opacity;
    layer2Opacity.set(splitOpacity2);
  }, [layer2SplitTarget, layer2Split.opacity, layer2Opacity]);

  const finalLayer1Opacity = useTransform(
    [opacityBg, layer1Opacity],
    ([bg, split]) => (bg as number) * (split as number),
  );
  const finalLayer2Opacity = useTransform(
    [opacityBg, layer2Opacity],
    ([bg, split]) => (bg as number) * (split as number),
  );

  const handleLayer1AnimationComplete = useCallback(() => {
    if (layer1Target) {
      setLayer1Position(layer1Target);
      setLayer1Target(null);
    }
    setIsLayer1Flying(false);
  }, [layer1Target]);

  const handleLayer2AnimationComplete = useCallback(() => {
    if (layer2Target) {
      setLayer2Position(layer2Target);
      setLayer2Target(null);
    }
    setIsLayer2Flying(false);
  }, [layer2Target]);

  const handleLayer3AnimationComplete = useCallback(() => {
    if (layer3Target) {
      setLayer3Position(layer3Target);
      setLayer3Target(null);
    }
    setIsLayer3Flying(false);
  }, [layer3Target]);

  const handleLayer4AnimationComplete = useCallback(() => {
    if (layer4Target) {
      setLayer4Position(layer4Target);
      setLayer4Target(null);
    }
    setIsLayer4Flying(false);
  }, [layer4Target]);

  const handleLayer5AnimationComplete = useCallback(() => {
    if (layer5Target) {
      setLayer5Position(layer5Target);
      setLayer5Target(null);
    }
    setIsLayer5Flying(false);
  }, [layer5Target]);

  const handleLayer6AnimationComplete = useCallback(() => {
    if (layer6Target) {
      setLayer6Position(layer6Target);
      setLayer6Target(null);
    }
    setIsLayer6Flying(false);
  }, [layer6Target]);

  /* Автоматическое плавное движение из стороны в сторону */
  useEffect(() => {
    /* Функция для запуска движения layer1 */
    const moveLayer1 = () => {
      if (!isLayer1Flying) {
        /* Плавное движение из стороны в сторону */
        const currentLeft = layer1Position.left;
        const newLeft = currentLeft < 50 ? randomInRange(60, 90) : randomInRange(10, 40);
        const newTop = randomInRange(20, 80);
        const newTarget = {
          left: newLeft,
          top: newTop,
        };
        setLayer1Target(newTarget);
        setIsLayer1Flying(true);

        /* Деформация */
        if (Math.random() > 0.3) {
          setLayer1DeformTarget({
            scaleX: randomInRange(0.6, 1.8),
            scaleY: randomInRange(0.6, 1.8),
            rotate: randomInRange(-45, 45),
            skew: randomInRange(-15, 15),
          });
        }

        /* Деление/слияние */
        if (Math.random() > 0.5) {
          const splitType = Math.random();
          if (splitType > 0.6) {
            /* Деление - уменьшение и затем восстановление */
            setLayer1SplitTarget({ opacity: 0.4, scale: 0.5 });
            setTimeout(() => {
              setLayer1SplitTarget({ opacity: 1, scale: 1 });
            }, 2500);
          } else {
            /* Растяжение */
            setLayer1SplitTarget({ opacity: 1, scale: randomInRange(1.2, 1.8) });
            setTimeout(() => {
              setLayer1SplitTarget({ opacity: 1, scale: 1 });
            }, 3000);
          }
        }
      }
    };

    /* Функция для запуска движения layer2 */
    const moveLayer2 = () => {
      if (!isLayer2Flying) {
        const currentLeft = layer2Position.left;
        const newLeft = currentLeft < 50 ? randomInRange(60, 90) : randomInRange(10, 40);
        const newTop = randomInRange(20, 80);
        const newTarget = {
          left: newLeft,
          top: newTop,
        };
        setLayer2Target(newTarget);
        setIsLayer2Flying(true);

        if (Math.random() > 0.3) {
          setLayer2DeformTarget({
            scaleX: randomInRange(0.7, 1.6),
            scaleY: randomInRange(0.7, 1.6),
            rotate: randomInRange(-40, 40),
            skew: randomInRange(-12, 12),
          });
        }

        if (Math.random() > 0.5) {
          const splitType = Math.random();
          if (splitType > 0.6) {
            setLayer2SplitTarget({ opacity: 0.5, scale: 0.6 });
            setTimeout(() => {
              setLayer2SplitTarget({ opacity: 1, scale: 1 });
            }, 2500);
          } else {
            setLayer2SplitTarget({ opacity: 1, scale: randomInRange(1.1, 1.6) });
            setTimeout(() => {
              setLayer2SplitTarget({ opacity: 1, scale: 1 });
            }, 3000);
          }
        }
      }
    };

    /* Функция для запуска движения layer3 */
    const moveLayer3 = () => {
      if (!isLayer3Flying) {
        const currentLeft = layer3Position.left;
        const newLeft = currentLeft < 50 ? randomInRange(60, 90) : randomInRange(10, 40);
        const newTop = randomInRange(20, 80);
        const newTarget = {
          left: newLeft,
          top: newTop,
        };
        setLayer3Target(newTarget);
        setIsLayer3Flying(true);

        if (Math.random() > 0.3) {
          setLayer3DeformTarget({
            scaleX: randomInRange(0.65, 1.7),
            scaleY: randomInRange(0.65, 1.7),
            rotate: randomInRange(-35, 35),
            skew: randomInRange(-10, 10),
          });
        }

        if (Math.random() > 0.5) {
          const splitType = Math.random();
          if (splitType > 0.65) {
            setLayer3SplitTarget({ opacity: 0.45, scale: 0.55 });
            setTimeout(() => {
              setLayer3SplitTarget({ opacity: 1, scale: 1 });
            }, 2500);
          } else {
            setLayer3SplitTarget({ opacity: 1, scale: randomInRange(1.15, 1.7) });
            setTimeout(() => {
              setLayer3SplitTarget({ opacity: 1, scale: 1 });
            }, 3000);
          }
        }
      }
    };

    /* Функция для запуска движения layer4 */
    const moveLayer4 = () => {
      if (!isLayer4Flying) {
        const currentLeft = layer4Position.left;
        const newLeft = currentLeft < 50 ? randomInRange(60, 90) : randomInRange(10, 40);
        const newTop = randomInRange(20, 80);
        const newTarget = {
          left: newLeft,
          top: newTop,
        };
        setLayer4Target(newTarget);
        setIsLayer4Flying(true);

        if (Math.random() > 0.3) {
          setLayer4DeformTarget({
            scaleX: randomInRange(0.7, 1.5),
            scaleY: randomInRange(0.7, 1.5),
            rotate: randomInRange(-30, 30),
            skew: randomInRange(-8, 8),
          });
        }

        if (Math.random() > 0.5) {
          const splitType = Math.random();
          if (splitType > 0.7) {
            setLayer4SplitTarget({ opacity: 0.5, scale: 0.65 });
            setTimeout(() => {
              setLayer4SplitTarget({ opacity: 1, scale: 1 });
            }, 2500);
          } else {
            setLayer4SplitTarget({ opacity: 1, scale: randomInRange(1.2, 1.5) });
            setTimeout(() => {
              setLayer4SplitTarget({ opacity: 1, scale: 1 });
            }, 3000);
          }
        }
      }
    };

    /* Функция для запуска движения layer5 */
    const moveLayer5 = () => {
      if (!isLayer5Flying) {
        const currentLeft = layer5Position.left;
        const newLeft = currentLeft < 50 ? randomInRange(60, 90) : randomInRange(10, 40);
        const newTop = randomInRange(20, 80);
        const newTarget = {
          left: newLeft,
          top: newTop,
        };
        setLayer5Target(newTarget);
        setIsLayer5Flying(true);

        if (Math.random() > 0.3) {
          setLayer5DeformTarget({
            scaleX: randomInRange(0.65, 1.7),
            scaleY: randomInRange(0.65, 1.7),
            rotate: randomInRange(-35, 35),
            skew: randomInRange(-10, 10),
          });
        }

        if (Math.random() > 0.5) {
          const splitType = Math.random();
          if (splitType > 0.65) {
            setLayer5SplitTarget({ opacity: 0.45, scale: 0.55 });
            setTimeout(() => {
              setLayer5SplitTarget({ opacity: 1, scale: 1 });
            }, 2500);
          } else {
            setLayer5SplitTarget({ opacity: 1, scale: randomInRange(1.15, 1.7) });
            setTimeout(() => {
              setLayer5SplitTarget({ opacity: 1, scale: 1 });
            }, 3000);
          }
        }
      }
    };

    /* Функция для запуска движения layer6 */
    const moveLayer6 = () => {
      if (!isLayer6Flying) {
        const currentLeft = layer6Position.left;
        const newLeft = currentLeft < 50 ? randomInRange(60, 90) : randomInRange(10, 40);
        const newTop = randomInRange(20, 80);
        const newTarget = {
          left: newLeft,
          top: newTop,
        };
        setLayer6Target(newTarget);
        setIsLayer6Flying(true);

        if (Math.random() > 0.3) {
          setLayer6DeformTarget({
            scaleX: randomInRange(0.7, 1.6),
            scaleY: randomInRange(0.7, 1.6),
            rotate: randomInRange(-40, 40),
            skew: randomInRange(-12, 12),
          });
        }

        if (Math.random() > 0.5) {
          const splitType = Math.random();
          if (splitType > 0.6) {
            setLayer6SplitTarget({ opacity: 0.5, scale: 0.6 });
            setTimeout(() => {
              setLayer6SplitTarget({ opacity: 1, scale: 1 });
            }, 2500);
          } else {
            setLayer6SplitTarget({ opacity: 1, scale: randomInRange(1.1, 1.6) });
            setTimeout(() => {
              setLayer6SplitTarget({ opacity: 1, scale: 1 });
            }, 3000);
          }
        }
      }
    };

    /* Запускаем движение сразу */
    moveLayer1();
    moveLayer2();
    moveLayer3();
    moveLayer4();
    moveLayer5();
    moveLayer6();

    /* Устанавливаем интервалы для повторения */
    const interval1 = setInterval(moveLayer1, 3000);
    const interval2 = setInterval(moveLayer2, 3000);
    const interval3 = setInterval(moveLayer3, 3000);
    const interval4 = setInterval(moveLayer4, 3000);
    const interval5 = setInterval(moveLayer5, 3000);
    const interval6 = setInterval(moveLayer6, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
      clearInterval(interval5);
      clearInterval(interval6);
    };
  }, [
    isLayer1Flying,
    isLayer2Flying,
    isLayer3Flying,
    isLayer4Flying,
    isLayer5Flying,
    isLayer6Flying,
    layer1Position,
    layer2Position,
    layer3Position,
    layer4Position,
    layer5Position,
    layer6Position,
    setLayer1Target,
    setLayer2Target,
    setLayer3Target,
    setLayer4Target,
    setLayer5Target,
    setLayer6Target,
    setIsLayer1Flying,
    setIsLayer2Flying,
    setIsLayer3Flying,
    setIsLayer4Flying,
    setIsLayer5Flying,
    setIsLayer6Flying,
    setLayer1DeformTarget,
    setLayer2DeformTarget,
    setLayer3DeformTarget,
    setLayer4DeformTarget,
    setLayer5DeformTarget,
    setLayer6DeformTarget,
    setLayer1SplitTarget,
    setLayer2SplitTarget,
    setLayer3SplitTarget,
    setLayer4SplitTarget,
    setLayer5SplitTarget,
    setLayer6SplitTarget,
  ]);

  const layer1DisplayTarget = layer1Target ?? layer1Position;
  const layer2DisplayTarget = layer2Target ?? layer2Position;
  const layer3DisplayTarget = layer3Target ?? layer3Position;
  const layer4DisplayTarget = layer4Target ?? layer4Position;
  const layer5DisplayTarget = layer5Target ?? layer5Position;
  const layer6DisplayTarget = layer6Target ?? layer6Position;

  return (
    <>
      <motion.div
        className={styles.layerWrapper}
        style={{
          pointerEvents: 'auto',
        }}
        initial={{ left: `${layer1Position.left}%`, top: `${layer1Position.top}%` }}
        animate={{
          left: `${layer1DisplayTarget.left}%`,
          top: `${layer1DisplayTarget.top}%`,
          transition: layer1Target ? { duration: 8, ease: 'linear' } : { duration: 0 },
        }}
        onAnimationComplete={layer1Target ? handleLayer1AnimationComplete : undefined}
        aria-hidden
      >
        <motion.div
          className={styles.layer1}
          style={{
            x: x1,
            y: y1,
            opacity: finalLayer1Opacity,
            scaleX: layer1DeformTarget?.scaleX ?? layer1Deform.scaleX,
            scaleY: layer1DeformTarget?.scaleY ?? layer1Deform.scaleY,
            rotate: layer1DeformTarget?.rotate ?? layer1Deform.rotate,
            skew: layer1DeformTarget?.skew ?? layer1Deform.skew,
            scale: layer1SplitTarget?.scale ?? layer1Split.scale,
          }}
          animate={{
            scaleX: layer1DeformTarget?.scaleX ?? layer1Deform.scaleX,
            scaleY: layer1DeformTarget?.scaleY ?? layer1Deform.scaleY,
            rotate: layer1DeformTarget?.rotate ?? layer1Deform.rotate,
            skew: layer1DeformTarget?.skew ?? layer1Deform.skew,
            scale: layer1SplitTarget?.scale ?? layer1Split.scale,
            transition:
              layer1DeformTarget || layer1SplitTarget
                ? { duration: 4, ease: [0.4, 0, 0.2, 1] }
                : { duration: 0 },
          }}
          onAnimationComplete={() => {
            if (layer1DeformTarget) {
              setLayer1Deform(layer1DeformTarget);
              setLayer1DeformTarget(null);
            }
            if (layer1SplitTarget) {
              setLayer1Split(layer1SplitTarget);
              setLayer1SplitTarget(null);
            }
          }}
        />
      </motion.div>
      <motion.div
        className={styles.layerWrapper}
        style={{
          pointerEvents: 'auto',
        }}
        initial={{ left: `${layer2Position.left}%`, top: `${layer2Position.top}%` }}
        animate={{
          left: `${layer2DisplayTarget.left}%`,
          top: `${layer2DisplayTarget.top}%`,
          transition: layer2Target ? { duration: 8, ease: 'linear' } : { duration: 0 },
        }}
        onAnimationComplete={layer2Target ? handleLayer2AnimationComplete : undefined}
        aria-hidden
      >
        <motion.div
          className={styles.layer2}
          style={{
            x: x2,
            y: y2,
            opacity: finalLayer2Opacity,
            scaleX: layer2DeformTarget?.scaleX ?? layer2Deform.scaleX,
            scaleY: layer2DeformTarget?.scaleY ?? layer2Deform.scaleY,
            rotate: layer2DeformTarget?.rotate ?? layer2Deform.rotate,
            skew: layer2DeformTarget?.skew ?? layer2Deform.skew,
            scale: layer2SplitTarget?.scale ?? layer2Split.scale,
          }}
          animate={{
            scaleX: layer2DeformTarget?.scaleX ?? layer2Deform.scaleX,
            scaleY: layer2DeformTarget?.scaleY ?? layer2Deform.scaleY,
            rotate: layer2DeformTarget?.rotate ?? layer2Deform.rotate,
            skew: layer2DeformTarget?.skew ?? layer2Deform.skew,
            scale: layer2SplitTarget?.scale ?? layer2Split.scale,
            transition:
              layer2DeformTarget || layer2SplitTarget
                ? { duration: 4, ease: [0.4, 0, 0.2, 1] }
                : { duration: 0 },
          }}
          onAnimationComplete={() => {
            if (layer2DeformTarget) {
              setLayer2Deform(layer2DeformTarget);
              setLayer2DeformTarget(null);
            }
            if (layer2SplitTarget) {
              setLayer2Split(layer2SplitTarget);
              setLayer2SplitTarget(null);
            }
          }}
        />
      </motion.div>
      <motion.div
        className={styles.layerWrapper}
        style={{
          pointerEvents: 'auto',
        }}
        initial={{ left: `${layer3Position.left}%`, top: `${layer3Position.top}%` }}
        animate={{
          left: `${layer3DisplayTarget.left}%`,
          top: `${layer3DisplayTarget.top}%`,
          transition: layer3Target ? { duration: 8, ease: 'linear' } : { duration: 0 },
        }}
        onAnimationComplete={layer3Target ? handleLayer3AnimationComplete : undefined}
        aria-hidden
      >
        <motion.div
          className={styles.layer3}
          style={{
            x: x3,
            y: y3,
            scaleX: layer3DeformTarget?.scaleX ?? layer3Deform.scaleX,
            scaleY: layer3DeformTarget?.scaleY ?? layer3Deform.scaleY,
            rotate: layer3DeformTarget?.rotate ?? layer3Deform.rotate,
            skew: layer3DeformTarget?.skew ?? layer3Deform.skew,
            scale: layer3SplitTarget?.scale ?? layer3Split.scale,
          }}
          animate={{
            scaleX: layer3DeformTarget?.scaleX ?? layer3Deform.scaleX,
            scaleY: layer3DeformTarget?.scaleY ?? layer3Deform.scaleY,
            rotate: layer3DeformTarget?.rotate ?? layer3Deform.rotate,
            skew: layer3DeformTarget?.skew ?? layer3Deform.skew,
            scale: layer3SplitTarget?.scale ?? layer3Split.scale,
            opacity: layer3SplitTarget?.opacity ?? layer3Split.opacity,
            transition:
              layer3DeformTarget || layer3SplitTarget
                ? { duration: 4, ease: [0.4, 0, 0.2, 1] }
                : { duration: 0 },
          }}
          onAnimationComplete={() => {
            if (layer3DeformTarget) {
              setLayer3Deform(layer3DeformTarget);
              setLayer3DeformTarget(null);
            }
            if (layer3SplitTarget) {
              setLayer3Split(layer3SplitTarget);
              setLayer3SplitTarget(null);
            }
          }}
        />
      </motion.div>
      <motion.div
        className={styles.layerWrapper}
        style={{
          pointerEvents: 'auto',
        }}
        initial={{ left: `${layer4Position.left}%`, top: `${layer4Position.top}%` }}
        animate={{
          left: `${layer4DisplayTarget.left}%`,
          top: `${layer4DisplayTarget.top}%`,
          transition: layer4Target ? { duration: 8, ease: 'linear' } : { duration: 0 },
        }}
        onAnimationComplete={layer4Target ? handleLayer4AnimationComplete : undefined}
        aria-hidden
      >
        <motion.div
          className={styles.layer4}
          style={{
            scaleX: layer4DeformTarget?.scaleX ?? layer4Deform.scaleX,
            scaleY: layer4DeformTarget?.scaleY ?? layer4Deform.scaleY,
            rotate: layer4DeformTarget?.rotate ?? layer4Deform.rotate,
            skew: layer4DeformTarget?.skew ?? layer4Deform.skew,
            scale: layer4SplitTarget?.scale ?? layer4Split.scale,
          }}
          animate={{
            scaleX: layer4DeformTarget?.scaleX ?? layer4Deform.scaleX,
            scaleY: layer4DeformTarget?.scaleY ?? layer4Deform.scaleY,
            rotate: layer4DeformTarget?.rotate ?? layer4Deform.rotate,
            skew: layer4DeformTarget?.skew ?? layer4Deform.skew,
            scale: layer4SplitTarget?.scale ?? layer4Split.scale,
            opacity: layer4SplitTarget?.opacity ?? layer4Split.opacity,
            transition:
              layer4DeformTarget || layer4SplitTarget
                ? { duration: 4, ease: [0.4, 0, 0.2, 1] }
                : { duration: 0 },
          }}
          onAnimationComplete={() => {
            if (layer4DeformTarget) {
              setLayer4Deform(layer4DeformTarget);
              setLayer4DeformTarget(null);
            }
            if (layer4SplitTarget) {
              setLayer4Split(layer4SplitTarget);
              setLayer4SplitTarget(null);
            }
          }}
        />
      </motion.div>
      <motion.div
        className={styles.layerWrapper}
        style={{
          pointerEvents: 'auto',
        }}
        initial={{ left: `${layer5Position.left}%`, top: `${layer5Position.top}%` }}
        animate={{
          left: `${layer5DisplayTarget.left}%`,
          top: `${layer5DisplayTarget.top}%`,
          transition: layer5Target ? { duration: 8, ease: 'linear' } : { duration: 0 },
        }}
        onAnimationComplete={layer5Target ? handleLayer5AnimationComplete : undefined}
        aria-hidden
      >
        <motion.div
          className={styles.layer5}
          style={{
            x: x5,
            y: y5,
            scaleX: layer5DeformTarget?.scaleX ?? layer5Deform.scaleX,
            scaleY: layer5DeformTarget?.scaleY ?? layer5Deform.scaleY,
            rotate: layer5DeformTarget?.rotate ?? layer5Deform.rotate,
            skew: layer5DeformTarget?.skew ?? layer5Deform.skew,
            scale: layer5SplitTarget?.scale ?? layer5Split.scale,
          }}
          animate={{
            scaleX: layer5DeformTarget?.scaleX ?? layer5Deform.scaleX,
            scaleY: layer5DeformTarget?.scaleY ?? layer5Deform.scaleY,
            rotate: layer5DeformTarget?.rotate ?? layer5Deform.rotate,
            skew: layer5DeformTarget?.skew ?? layer5Deform.skew,
            scale: layer5SplitTarget?.scale ?? layer5Split.scale,
            opacity: layer5SplitTarget?.opacity ?? layer5Split.opacity,
            transition:
              layer5DeformTarget || layer5SplitTarget
                ? { duration: 4, ease: [0.4, 0, 0.2, 1] }
                : { duration: 0 },
          }}
          onAnimationComplete={() => {
            if (layer5DeformTarget) {
              setLayer5Deform(layer5DeformTarget);
              setLayer5DeformTarget(null);
            }
            if (layer5SplitTarget) {
              setLayer5Split(layer5SplitTarget);
              setLayer5SplitTarget(null);
            }
          }}
        />
      </motion.div>
      <motion.div
        className={styles.layerWrapper}
        style={{
          pointerEvents: 'auto',
        }}
        initial={{ left: `${layer6Position.left}%`, top: `${layer6Position.top}%` }}
        animate={{
          left: `${layer6DisplayTarget.left}%`,
          top: `${layer6DisplayTarget.top}%`,
          transition: layer6Target ? { duration: 8, ease: 'linear' } : { duration: 0 },
        }}
        onAnimationComplete={layer6Target ? handleLayer6AnimationComplete : undefined}
        aria-hidden
      >
        <motion.div
          className={styles.layer6}
          style={{
            x: x6,
            y: y6,
            scaleX: layer6DeformTarget?.scaleX ?? layer6Deform.scaleX,
            scaleY: layer6DeformTarget?.scaleY ?? layer6Deform.scaleY,
            rotate: layer6DeformTarget?.rotate ?? layer6Deform.rotate,
            skew: layer6DeformTarget?.skew ?? layer6Deform.skew,
            scale: layer6SplitTarget?.scale ?? layer6Split.scale,
          }}
          animate={{
            scaleX: layer6DeformTarget?.scaleX ?? layer6Deform.scaleX,
            scaleY: layer6DeformTarget?.scaleY ?? layer6Deform.scaleY,
            rotate: layer6DeformTarget?.rotate ?? layer6Deform.rotate,
            skew: layer6DeformTarget?.skew ?? layer6Deform.skew,
            scale: layer6SplitTarget?.scale ?? layer6Split.scale,
            opacity: layer6SplitTarget?.opacity ?? layer6Split.opacity,
            transition:
              layer6DeformTarget || layer6SplitTarget
                ? { duration: 4, ease: [0.4, 0, 0.2, 1] }
                : { duration: 0 },
          }}
          onAnimationComplete={() => {
            if (layer6DeformTarget) {
              setLayer6Deform(layer6DeformTarget);
              setLayer6DeformTarget(null);
            }
            if (layer6SplitTarget) {
              setLayer6Split(layer6SplitTarget);
              setLayer6SplitTarget(null);
            }
          }}
        />
      </motion.div>
      <motion.div className={styles.contentWrap} style={{ x: contentX, y: contentY }}>
        {children}
      </motion.div>
    </>
  );
}
