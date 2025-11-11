import cn from 'classnames';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Oleg Grachev — Frontend Developer',
  description: 'Personal site & resume',
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <head>
        <link
          rel="preload"
          href="/fonts/krasnodar-grotesk/KrasnodarGrotesk.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className={cn(inter.variable, montserrat.variable)}>{children}</body>
    </html>
  );
};

export default RootLayout;
