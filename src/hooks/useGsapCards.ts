'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type CardAnimation = 'project' | 'skill' | 'timeline';

export function useGsapCards<T extends HTMLElement = HTMLDivElement>(animation: CardAnimation) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || !container.children.length) return;

    const targets = Array.from(container.children);

    const ctx = gsap.context(() => {
      gsap.set(targets, { transition: 'none' });

      switch (animation) {
        case 'project': {
          gsap.from(targets, {
            opacity: 0,
            y: 40,
            scale: 0.95,
            rotateX: 6,
            transformPerspective: 800,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 88%',
              once: true,
            },
            onComplete() {
              gsap.set(targets, { clearProps: 'all' });
            },
          });
          break;
        }

        case 'skill': {
          gsap.from(targets, {
            opacity: 0,
            scale: 0.5,
            rotation: -8,
            duration: 0.7,
            stagger: 0.04,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: container,
              start: 'top 88%',
              once: true,
            },
            onComplete() {
              gsap.set(targets, { clearProps: 'all' });
            },
          });
          break;
        }

        case 'timeline': {
          targets.forEach((card, i) => {
            const dir = i % 2 === 0 ? -1 : 1;
            gsap.from(card, {
              opacity: 0,
              x: dir * 40,
              y: 15,
              rotation: dir * 3,
              scale: 0.97,
              duration: 0.9,
              delay: i * 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                once: true,
              },
              onComplete() {
                gsap.set(card, { clearProps: 'all' });
              },
            });
          });
          break;
        }
      }
    }, container);

    return () => ctx.revert();
  }, [animation]);

  return ref;
}
