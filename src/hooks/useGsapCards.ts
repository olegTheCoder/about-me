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
            y: 60,
            scale: 0.9,
            rotateX: 12,
            transformPerspective: 800,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
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
            scale: 0,
            rotation: -15,
            duration: 0.6,
            stagger: 0.03,
            ease: 'elastic.out(1, 0.55)',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
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
              x: dir * 60,
              y: 20,
              rotation: dir * 5,
              scale: 0.95,
              duration: 0.8,
              delay: i * 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
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
