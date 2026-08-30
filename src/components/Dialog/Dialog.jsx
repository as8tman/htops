import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Dialog.module.css';

export default function Dialog({
  open,
  onClose,
  title,
  children,
  actions,
  actionsLayout = 'vertical',
  closeIcon = false,
  className,
}) {
  useEffect(() => {
    if (!open) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <div
        className={[styles.dialog, className].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          {closeIcon && (
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="닫기"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
        {children && <div className={styles.body}>{children}</div>}
        {actions && (
          <div
            className={[
              styles.footer,
              actionsLayout === 'horizontal' ? styles.horizontal : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {actions}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
