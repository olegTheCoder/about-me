'use client';

import { useEffect, useState } from 'react';
import styles from './MatrixText.module.css';

interface MatrixTextProps {
  text: string;
  className?: string;
}

// Символы для эффекта Матрицы
const MATRIX_CHARS =
  'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';

export function MatrixText({ text, className }: MatrixTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      // Случайно меняем некоторые символы на случайные
      const chars = text.split('');
      const newChars = chars.map((char) => {
        // Пропускаем пробелы и дефисы
        if (char === ' ' || char === '-') return char;
        // С вероятностью 10% меняем символ на случайный
        if (Math.random() < 0.1) {
          return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        }
        return char;
      });
      setDisplayText(newChars.join(''));
    }, 100); // Обновляем каждые 100ms

    // Возвращаем оригинальный текст периодически
    const resetInterval = setInterval(() => {
      setDisplayText(text);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(resetInterval);
    };
  }, [text, isMounted]);

  // На сервере рендерим оригинальный текст без анимации
  if (!isMounted) {
    return (
      <div className={`${styles.matrixContainer} ${className || ''}`}>
        <span className={`${styles.matrixText} matrix-text-global`}>{text}</span>
      </div>
    );
  }

  return (
    <div className={`${styles.matrixContainer} ${className || ''}`}>
      <span className={`${styles.matrixText} matrix-text-global`}>{displayText}</span>
    </div>
  );
}
