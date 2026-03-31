'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CARD_ORIGINS = [
  { x: -420, y: 280, rotation: -30 },
  { x: 420, y: -260, rotation: 28 },
  { x: -380, y: -300, rotation: -22 },
  { x: 400, y: 260, rotation: 24 },
];

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

    const ctx = gsap.context(() => {
      gsap.set(cards, {
        opacity: 0,
        scale: 0.3,
        ...CARD_ORIGINS.reduce(
          (acc, origin, i) => {
            if (cards[i]) {
              gsap.set(cards[i], {
                x: origin.x,
                y: origin.y,
                rotation: origin.rotation,
              });
            }
            return acc;
          },
          {} as Record<string, unknown>,
        ),
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 15%',
          end: `+=${cards.length * 15}%`,
          pin: true,
          scrub: 0,
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

      gsap.set(cards, {
        opacity: 1,
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        overwrite: true,
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => ctx.revert();
  }, []);

  return { sectionRef, cardsRef };
}
