'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getT, type Locale } from '@/lib/translations';

const STORAGE_KEY = 'about-me-locale';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'ru';
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored === 'ru' || stored === 'en') return stored;
  return 'ru';
}

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
} | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ru');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialLocale();
    setLocaleState(initial);
    document.documentElement.lang = initial;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, mounted]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  const t = useMemo(() => getT(locale), [locale]);
  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
