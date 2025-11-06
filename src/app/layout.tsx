import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oleg Grachev — Frontend Developer',
  description: 'Personal site & resume',
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
