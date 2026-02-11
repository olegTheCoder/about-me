'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/app/page.module.css';

const FLOATING_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
    alt: '',
    top: '12%',
    left: '8%',
    width: 140,
    height: 95,
    speed: 0.028,
  },
  {
    src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400',
    alt: '',
    top: '22%',
    right: '10%',
    left: undefined,
    width: 120,
    height: 90,
    speed: -0.022,
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
    alt: '',
    bottom: '25%',
    left: '5%',
    width: 130,
    height: 88,
    speed: 0.035,
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
    alt: '',
    bottom: '18%',
    right: '12%',
    width: 110,
    height: 75,
    speed: -0.03,
  },
  {
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    alt: '',
    top: '55%',
    left: '50%',
    width: 100,
    height: 70,
    speed: 0.018,
  },
];

export function CursorFloatingImages() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setCenter({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const dx = mouse.x - center.x;
  const dy = mouse.y - center.y;

  return (
    <div className={styles.cursorFloatLayer} aria-hidden>
      {FLOATING_IMAGES.map((img, i) => {
        const tx = dx * img.speed * 80;
        const ty = dy * img.speed * 80;
        const baseTransform =
          img.left === '50%'
            ? `translate(calc(-50% + ${tx}px), ${ty}px)`
            : `translate(${tx}px, ${ty}px)`;
        return (
          <div
            key={i}
            className={styles.cursorFloatItem}
            style={{
              ...(img.top && { top: img.top }),
              ...(img.bottom && { bottom: img.bottom }),
              ...(img.left && { left: img.left }),
              ...(img.right && { right: img.right }),
              transform: baseTransform,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="140px"
              className={styles.cursorFloatImg}
              loading="lazy"
              unoptimized
            />
          </div>
        );
      })}
    </div>
  );
}
