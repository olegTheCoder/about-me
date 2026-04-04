'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function getCardOrigins(): { x: number; y: number; rotation: number }[] {
  if (typeof window === 'undefined') {
    return [
      { x: -420, y: 280, rotation: -30 },
      { x: 420, y: -260, rotation: 28 },
      { x: -380, y: -300, rotation: -22 },
      { x: 400, y: 260, rotation: 24 },
    ];
  }

  const w = window.innerWidth;

  if (w <= 480) {
    return [
      { x: -120, y: 80, rotation: -18 },
      { x: 120, y: -70, rotation: 16 },
      { x: -100, y: -90, rotation: -12 },
      { x: 110, y: 70, rotation: 14 },
    ];
  }

  if (w <= 768) {
    return [
      { x: -200, y: 140, rotation: -22 },
      { x: 200, y: -130, rotation: 20 },
      { x: -180, y: -150, rotation: -16 },
      { x: 190, y: 130, rotation: 18 },
    ];
  }

  if (w <= 1200) {
    return [
      { x: -320, y: 210, rotation: -26 },
      { x: 320, y: -195, rotation: 24 },
      { x: -290, y: -225, rotation: -20 },
      { x: 300, y: 195, rotation: 21 },
    ];
  }

  return [
    { x: -420, y: 280, rotation: -30 },
    { x: 420, y: -260, rotation: 28 },
    { x: -380, y: -300, rotation: -22 },
    { x: 400, y: 260, rotation: 24 },
  ];
}

export function useGsapPinnedPolaroids() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = cardsRef.current;
    if (!section || !container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    let finalized = false;
    const origins = getCardOrigins();

    const ctx = gsap.context(() => {
      origins.forEach((origin, i) => {
        if (cards[i]) {
          gsap.set(cards[i], {
            opacity: 0,
            scale: 0.3,
            x: origin.x,
            y: origin.y,
            rotation: origin.rotation,
          });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 5%',
          end: `+=${cards.length * 15}%`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          onLeave: () => finalize(),
          onUpdate: (self) => {
            if (self.progress >= 0.98 && !finalized) finalize();
          },
        },
      });

      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1,
            ease: 'none',
          },
          i * 0.2,
        );
      });

      tl.to({}, { duration: 0.05 });
    }, section);

    function finalize() {
      if (finalized) return;
      finalized = true;

      const st = ScrollTrigger.getAll().find((s) => s.trigger === section);
      if (st) st.kill();

      gsap.set(cards, { opacity: 1, x: 0, y: 0, rotation: 0, scale: 1 });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => ctx.revert();
  }, []);

  return { sectionRef, cardsRef };
}
