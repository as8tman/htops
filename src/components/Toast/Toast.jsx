import styles from './Toast.module.css';

const ICONS = {
  success: (
    <path
      d="M4 10.5l4 4 8-9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  error: (
    <path
      d="M5 5l10 10M15 5L5 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  warning: (
    <path
      d="M10 3l8.5 14.5H1.5L10 3z M10 8.5v4M10 15.2v.1"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Toast({
  children,
  variant = 'warning',
  icon = true,
  actionLabel,
  onAction,
  className,
  ...rest
}) {
  return (
    <div className={[styles.toast, className].filter(Boolean).join(' ')} role="status" {...rest}>
      {icon && (
        <svg
          className={[styles.icon, styles[variant]].filter(Boolean).join(' ')}
          viewBox="0 0 20 20"
          fill="none"
        >
          {ICONS[variant] ?? ICONS.warning}
        </svg>
      )}
      <p className={styles.message}>{children}</p>
      {actionLabel && (
        <button type="button" className={styles.action} onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
