'use client';

interface TimelineIconProps {
  logo: string;
  alt: string;
}

export function TimelineIcon({ logo, alt }: TimelineIconProps) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-label={alt}
    />
  );
}
