'use client';

import Image from 'next/image';
import { useGlitch } from 'react-powerglitch';

type Props = {
  src: string;
  alt?: string;
};

export function PolaroidWithGlitch({ src, alt = '' }: Props) {
  const glitch = useGlitch({
    playMode: 'hover',
    createContainers: false,
    glitchTimeSpan: false,
    shake: { velocity: 12, amplitudeX: 0.35, amplitudeY: 0.35 },
    slice: {
      count: 5,
      velocity: 14,
      minHeight: 0.03,
      maxHeight: 0.25,
      hueRotate: true,
    },
    hideOverflow: true,
  });

  return (
    <div
      ref={glitch.ref}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 140px, 280px"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
