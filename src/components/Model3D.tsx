'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Model3D.module.css';

interface Model3DProps {
  modelPath: string;
  className?: string;
}

// Типы для model-viewer web component
interface ModelViewerAttributes extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
  'auto-rotate'?: boolean;
  'camera-controls'?: boolean;
  'interaction-policy'?: string;
  'interaction-prompt'?: string;
  'ar-scale'?: string;
  'ar-modes'?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<ModelViewerAttributes, HTMLElement>;
    }
  }
}

export function Model3D({ modelPath, className }: Model3DProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isCheckingFile, setIsCheckingFile] = useState(true);
  const modelViewerRef = useRef<HTMLElement>(null);

  // Проверяем существование файла перед загрузкой
  useEffect(() => {
    if (typeof window === 'undefined') return;

    fetch(modelPath, { method: 'HEAD' })
      .then((response) => {
        if (!response.ok) {
          setHasError(true);
        }
        setIsCheckingFile(false);
      })
      .catch(() => {
        setHasError(true);
        setIsCheckingFile(false);
      });
  }, [modelPath]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isLoaded || hasError) return; // Уже загружен или ошибка
    if (isCheckingFile) return; // Ждем проверки файла

    // Динамически импортируем model-viewer
    import('@google/model-viewer')
      .then(() => {
        // Ждем регистрации custom element
        const checkInterval = setInterval(() => {
          if (customElements.get('model-viewer')) {
            setIsLoaded(true);
            clearInterval(checkInterval);
          }
        }, 50);

        // Таймаут на случай ошибки
        setTimeout(() => {
          clearInterval(checkInterval);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to load model-viewer:', error);
        setHasError(true);
      });
  }, [isLoaded, hasError, isCheckingFile]);

  // Обработка ошибки загрузки модели от model-viewer
  useEffect(() => {
    if (!isLoaded || hasError) return;

    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const handleError = (event: Event) => {
      console.error('Model loading error:', event);
      setHasError(true);
    };

    const handleLoad = () => {
      setHasError(false);
    };

    // Слушаем события загрузки и ошибки модели
    modelViewer.addEventListener('error', handleError);
    modelViewer.addEventListener('load', handleLoad);

    // Дополнительная проверка через 2 секунды
    const checkErrorTimeout = setTimeout(() => {
      const mv = modelViewer as any;
      if (mv && !mv.loaded && mv.src === modelPath) {
        // Модель не загрузилась, проверяем еще раз
        fetch(modelPath, { method: 'HEAD' })
          .then((response) => {
            if (!response.ok) {
              setHasError(true);
            }
          })
          .catch(() => {
            setHasError(true);
          });
      }
    }, 2000);

    return () => {
      modelViewer.removeEventListener('error', handleError);
      modelViewer.removeEventListener('load', handleLoad);
      clearTimeout(checkErrorTimeout);
    };
  }, [isLoaded, hasError, modelPath]);

  if (hasError) {
    return (
      <div className={`${styles.errorWrap} ${className ?? ''}`}>
        <div className={styles.errorBox}>
          <p className={styles.errorText}>
            Модель не найдена. Добавьте файл модели в /public/models/model.glb
          </p>
        </div>
      </div>
    );
  }

  if (isCheckingFile || !isLoaded) {
    return (
      <div className={`${styles.skeletonWrap} ${className ?? ''}`}>
        <div className={styles.skeleton} aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <model-viewer
        ref={modelViewerRef}
        src={modelPath}
        alt="3D Model"
        auto-rotate
        camera-controls
        interaction-policy="allow-when-focused"
        interaction-prompt="none"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}
        ar-scale="auto"
        ar-modes="webxr scene-viewer quick-look"
      />
    </div>
  );
}
