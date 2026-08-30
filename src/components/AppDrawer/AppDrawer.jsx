import { useEffect, useRef, useState } from 'react';
import styles from './AppDrawer.module.css';

const ANIM_DURATION = 300;

export default function AppDrawer({
  open,
  onClose,
  title = '전체 메뉴',
  header,
  children,
  className,
}) {
  const [render, setRender] = useState(false);
  const [shown, setShown] = useState(false);
  const renderRef = useRef(false);
  const closeTimer = useRef(null);
  const openRaf = useRef(null);

  useEffect(() => {
    clearTimeout(closeTimer.current);
    cancelAnimationFrame(openRaf.current);

    if (open) {
      openRaf.current = requestAnimationFrame(() => {
        setRender(true);
        renderRef.current = true;
        requestAnimationFrame(() => setShown(true));
      });
    } else if (renderRef.current) {
      openRaf.current = requestAnimationFrame(() => setShown(false));
      closeTimer.current = setTimeout(() => {
        setRender(false);
        renderRef.current = false;
      }, ANIM_DURATION);
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!render) return undefined;

    function onKeyDown(e) {
      if (e.key === 'Escape') onClose?.();
    }

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [render, onClose]);

  useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      cancelAnimationFrame(openRaf.current);
    };
  }, []);

  if (!render) return null;

  const rootClasses = [styles.root, shown ? styles.open : styles.close]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClasses}>
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      <div
        className={[styles.panel, className].filter(Boolean).join(' ')}
        role="dialog"
        aria-label={title}
        aria-modal="true"
      >
        <div className={styles.header}>
          {header ?? (
            <>
              <span className={styles.title}>{title}</span>
              <button
                type="button"
                className={styles.close}
                onClick={onClose}
                aria-label="메뉴 닫기"
              >
                <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                  <path
                    d="M18 6 6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
