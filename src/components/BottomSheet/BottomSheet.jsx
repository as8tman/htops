import { useEffect } from 'react';
import styles from './BottomSheet.module.css';

export default function BottomSheet({
  open = false,
  onClose,
  title,
  children,
  closeIcon = true,
  className,
  ...rest
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) onClose?.();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={[styles.sheet, className].filter(Boolean).join(' ')} role="dialog"
        aria-modal="true" onClick={(e) => e.stopPropagation()} {...rest}>
        <div className={styles.grabber} aria-hidden="true" />
        {title && (
          <div className={styles.header}>
            <p className={styles.title}>{title}</p>
            {closeIcon && (
              <button type="button" className={styles.close} aria-label="닫기" onClick={onClose}>
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
